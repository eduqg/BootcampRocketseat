import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';

// const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer);

export default store;
