import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    // Para cada produto, formatar preço, adicionando novo campo
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    // Preciso despachar uma ação para ser executada pelo reducer
    const { addToCart } = this.props;
    addToCart(product);
  };

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

// Converte actions para serem utilizadas no meu componente atual
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

// Primeiro mapState depois map Dispatch
export default connect(
  null,
  mapDispatchToProps
)(Home);
