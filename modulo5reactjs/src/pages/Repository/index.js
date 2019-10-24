import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';

import { Loading, Owner, IssueList, FilterIssue } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string
      })
    }).isRequired
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    status: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;

    const { state, page } = queryString.parse(this.props.location.search);
    console.log('Pagina', page);
    if (state !== undefined) {
      await this.setState({ status: state });
    }

    if (page !== undefined) {
      await this.setState({ page });
    }

    const repoName = decodeURIComponent(match.params.repository);
    // api.github.com/repos/rocketseat/unform
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: this.state.status,
          per_page: 5,
          page: this.state.page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleFilterIssue = async (status) => {
    await this.setState({ status });

    console.log('status no filter issue: ', this.state.status);
  };

  handleNextPage = async () => {
    const { page } = this.state;
    const newPageNumber = parseInt(page, 10) + 1;

    const repoName = decodeURIComponent(this.props.match.params.repository);
    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: this.state.status,
        per_page: 5,
        page: newPageNumber,
      },
    });
    this.setState({ issues: issues.data, page: newPageNumber });
  };

  handlePrevPage = async () => {
    const { page } = this.state;
    const newPageNumber = parseInt(page, 10) - 1;

    const repoName = decodeURIComponent(this.props.match.params.repository);
    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: this.state.status,
        per_page: 5,
        page: newPageNumber,
      },
    });
    this.setState({ issues: issues.data, page: newPageNumber });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos respositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  <span>{issue.state}</span>

                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <span>Page: {page}</span>
        <FilterIssue onClick={this.handlePrevPage} disabled={page <= 1}>
          Página Anterior
        </FilterIssue>
        <FilterIssue onClick={this.handleNextPage} disabled={issues.length < 1}>Próxima página</FilterIssue>
      </Container>
    );
  }
}
