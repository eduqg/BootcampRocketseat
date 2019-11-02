import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { Container, ImageBar, HeaderCart, HeaderLogo } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.png';
// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  handleNavigateCart = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  handleNavigateHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <HeaderLogo onPress={this.handleNavigateHome}>
          <ImageBar source={logo} style={{ resizeMode: 'contain' }} />
        </HeaderLogo>
        <HeaderCart onPress={this.handleNavigateCart}>
          <Icon name="add-shopping-cart" size={30} color="#fff" />
        </HeaderCart>
      </Container>
    );
  }
}

