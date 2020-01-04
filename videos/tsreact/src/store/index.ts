import { createStore, Store } from 'redux';
import { RepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  repositories: RepositoriesState
}

// Passo como parametro o ApplicationState para store
const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
