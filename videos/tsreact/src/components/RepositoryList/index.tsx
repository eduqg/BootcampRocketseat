import React, { Component } from 'react';

interface Repository {
  id: number,
  name: string
}

interface Props {
  repositories: Repository[]
}

// newRepository é opcional com ?. Não é necessário que tenha um valor.
interface State {
  newRepository?: string
}

export default class RepositoryList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { newRepository: '' };
  }

  componentDidMount() {
    console.log('DidMount');
  }

  render() {
    const { repositories } = this.props;
    const { newRepository } = this.state;

    return (
      <ul>
        {repositories.map((repository) => <li>{repository.name}</li>)}
      </ul>
    );
  }
}
