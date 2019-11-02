import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ProfileButton, ProfileButtonText } from './styles';

export default class Main extends Component {
  // Somente deve ser validado o que for usado dentro desta classe
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Cart');
  };

  static navigationOptions = {
    title: 'Home',
  };


  render() {
    return (
      <View>
        <Text>Home</Text>
        <ProfileButton onPress={this.handleNavigate}>
          <ProfileButtonText>Ver Carrinho</ProfileButtonText>
        </ProfileButton>
      </View>
    );
  }
}
