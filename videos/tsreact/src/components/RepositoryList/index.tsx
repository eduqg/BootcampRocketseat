import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoryActions from '../../store/ducks/repositories/actions';
import { ApplicationState } from '../../store';

// Mapeia informações que vem do mapStateToProps
interface StateProps {
  repositories: Repository[]
}

// Mapeio funcoes que vem do map dispatch to props do redux
interface DispatchProps {
  loadRequest(): void
}

// Mapeia qualquer outra propriedade que vem do componente pai
interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    // Ao realizar loadRequest, não sabemos o tipo do retorno, por isso criar a interface de DispatchProps
    loadRequest();
  }

  render() {
    const { repositories } = this.props;


    return (
      <ul>
        {repositories.map((repository) => repository.name)}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
