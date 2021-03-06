import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  // Use selector retorna o estado inteiro, selecionamos um
  const amount = useSelector(state =>
    state.cart.reduce((amountState, product) => {
      amountState[product.id] = product.amount;
      return amountState;
    }, {})
  );

  const dispath = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      // Para cada produto, formatar preço, adicionando novo campo
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  // Não é necessário usar useCallback nessa função pois ela não depende de
  // uma variável do componente (variaveis do estado ou dos argumentos/propriedades)
  // obs: addToCart é uma função que nunca vai mudar
  function handleAddProduct(id) {
    // Preciso despachar uma ação para ser executada pelo reducer
    // Não posso navegar para outra página nesse método, nem se colocar await
    // Navegação terá que ser pode dentro do saga
    dispath(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

// Na home é necessário um item saber quantos dele já estão dentro do carrinho
// const mapStateToProps = state => ({
//   amount:
// });

// Converte actions para serem utilizadas no meu componente atual
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

// // Primeiro mapState depois map Dispatch
// export default connect(
//   null,
//   mapDispatchToProps
// )(Home);
