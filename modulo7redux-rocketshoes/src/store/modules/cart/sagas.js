// Asterisco é uma funcionalidade do JS chamado generator.
// Seria como um async para a função.
// O babel por exemplo, converte ao utilizar o async para o generator.
// yield é o await do generator

// O novo fluxo adicionara mais uma etapa para o fluxo com redux:
// Será disparada uma action, o redux-saga neste arquivo ouve e depois que fizer suas resquisições
// chama o reducer de carrinho adiciona produto.

// call é responsável por chamar métodos assincronos que retornam promises
// put dispara action do redux
// takeLatest/takeEvery
import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmount } from './actions';

// Função com responsabilidade de acessar a api e buscar informações detalhadas
// A action ADD_REQUEST é ouvida apenas pelo saga
// Recebe action com dados enviados, no caso id
function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`)

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

// all = cadastro de listeners, para quando uma ação é disparada
// take latest = se usuário clicar uma vez, deve esperar adicionar para então adicionar outro
// cancela anterior
// takeEvery = pega todas as requisições
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
