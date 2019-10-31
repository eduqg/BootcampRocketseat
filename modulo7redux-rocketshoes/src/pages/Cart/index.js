import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment({ id, amount }) {
    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      <ProductTable>
        {/* Cabeçalho da tabela */}
        <thead>
          <tr>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                {/* Div para poder incluir display flex. td não permite */}
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

// Para obter um estado em connect() declaro o mapStateToProps
// // Ela pega informações do nosso estado e mapeia para o nosso componente
// const mapStateToProps = state => ({
//   cart: state.cart.map(product => ({
//     ...product,
//     // Para não fazer uma operação no reducer ou no render, realizar no próprio mapState
//     // Se colocasse no render, iria refazer a operação a cada vez que o render fosse chamado
//     subtotal: formatPrice(product.price * product.amount),
//   })),
//   // Reduce serve para pegar um array e reduzir a um valor (total como parametro)
//   // Itera como o map os produtos
//   total: formatPrice(
//     state.cart.reduce((total, product) => {
//       return total + product.price * product.amount;
//       // total inicia com valor zero
//     }, 0)
//   ),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Cart);
