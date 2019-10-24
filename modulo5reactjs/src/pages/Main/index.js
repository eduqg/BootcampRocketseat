import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, ErrorBox } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    redBox: false,
    errorAdvice: '',
  };

  // Carregar os dados do localstorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localstorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { newRepo, repositories } = this.state;

      this.setState({ loading: true });

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      const foundDuplicate = repositories.find(item => {
        return item.name === response.data.full_name;
      });

      if (foundDuplicate) {
        throw new Error('Repositório duplicado');
      }

      if (data.name === '') {
        throw new Error('Insira o nome do repositório');
      }

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
      this.setState({ redBox: false, errorAdvice: '' });
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        error.message = 'Repositório não encontrado.';
      }
      this.setState({
        redBox: true,
        loading: false,
        errorAdvice: error.message,
      });
    }
  };

  render() {
    const { newRepo, loading, repositories, redBox, errorAdvice } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        {errorAdvice !== '' && <ErrorBox>{errorAdvice}</ErrorBox>}
        <Form onSubmit={this.handleSubmit} redBox={redBox}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
                <FaPlus color="#fff" size={14} />
              )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}/issues?state=all`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
