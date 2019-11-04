import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import api from '../../../services/api';
// import history from '../../../services/history';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  // Verificação de estoque
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    ToastAndroid.showWithGravityAndOffset(
      'Quantidade fora de estoque.',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return;
  }
  if (productExists) {
    // Para produtos repetidos
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      price: response.data.price,
    };
    // Dispara ação
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    ToastAndroid.showWithGravityAndOffset(
      'Quantidade fora de estoque.',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

// all = cadastro de listeners, para quando uma ação é disparada
// take latest = se usuário clicar uma vez, deve esperar adicionar para então adicionar outro
// cancela anterior
// takeEvery = pega todas as requisições
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
