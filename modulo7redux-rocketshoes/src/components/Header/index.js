import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import rocketshoes from '../../assets/images/rocketshoes.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={rocketshoes} alt="rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

// Toda vez que usar o connect em um componente e o estado mudar,
// ele também renderiza novamente o componente com novas informações
// state.cart = no rootReducer defini cart
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
