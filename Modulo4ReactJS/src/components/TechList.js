import React, { Component } from 'react';

import TechItem from './TechItem';

export default class TechList extends Component {
  // Caso houvesse propriedade tech, valor default pode ser atribuido dessa forma em classes
  // static defaultProps = {
  //   tech: 'Oculto'
  // };
  // static propTypes = {

  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');
    if (techs) {
      // Caso atualize página, continuam as techs
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  // posso colocar _ no lugar dos argumentos se não for usar. prevProps
  componentDidUpdate(_, prevState) {
    // this.props ou this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {
    // As vezes é necessário para remover um event listener (como mouse over)
  }

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
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            )
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
