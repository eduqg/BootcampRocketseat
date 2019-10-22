import React, { Component } from 'react';

export default class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Array deve ser criado novamente, não pode adicionar elementos
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  };

  handleDelete = (tech) => {
    // filter = recebe cada um dos itens do array e retorno apenas as tecnologias
    // onde o t é diferente da tecnologia que recebeu, ou seja, retorna array sem uma tech
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {
            this.state.techs.map(tech =>
              <li key={tech}>
                {tech}
                <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
              </li>)
          }
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
