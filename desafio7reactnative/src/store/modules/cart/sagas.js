import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
// import history from '../../../services/history';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  // Dispara ação
  yield put(addToCartSuccess(response.data));
}

// Quando ADD_REQUEST for disparado, irá chamar addToCart
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  // takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
