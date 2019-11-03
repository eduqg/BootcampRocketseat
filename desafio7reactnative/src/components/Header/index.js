import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ImageBar,
  HeaderCart,
  HeaderLogo,
  NumberCart,
} from './styles';

import logo from '../../assets/logo.png';
// eslint-disable-next-line react/prefer-stateless-function
function Header({ navigation, cartSize }) {
  const handleNavigateCart = () => {
    navigation.navigate('Cart');
  };

  const handleNavigateHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <HeaderLogo onPress={handleNavigateHome}>
        <ImageBar source={logo} style={{ resizeMode: 'contain' }} />
      </HeaderLogo>
      <HeaderCart onPress={handleNavigateCart}>
        <>
          <NumberCart>{cartSize}</NumberCart>
          <Icon name="add-shopping-cart" size={30} color="#fff" />
        </>
      </HeaderCart>
    </Container>
  );
}

// Pego do meu reducer cart
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
