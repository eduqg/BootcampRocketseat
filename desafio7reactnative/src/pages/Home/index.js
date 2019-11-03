import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
// import { View, Text, Image } from 'react-native';

import {
  ProfileButton,
  Container,
  Card,
  ButtonNumber,
  ButtonNumberText,
  ButtonNumberIcon,
  TextAdd,
  Item,
  ItemImage,
  ItemDescription,
  ItemPrice,
  List,
} from './styles';

export default class Main extends Component {
  // Somente deve ser validado o que for usado dentro desta classe
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const products = await api.get('products');
    if (products) {
      this.setState({ products: products.data });
    }
    console.tron.log('Home products', products.data);
  }

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <List
          data={products}
          keyExtractor={item => `${item.id}`}
          horizontal
          renderItem={({ item }) => (
            <Card>
              <Item>
                <ItemImage source={{ uri: item.image }} alt={item.title} />
                <ItemDescription>{item.title} tenis bonito</ItemDescription>
                <ItemPrice>{item.price}</ItemPrice>

                <ProfileButton onPress={this.handleNavigate}>
                  <ButtonNumber>
                    <ButtonNumberText>3</ButtonNumberText>
                    <ButtonNumberIcon
                      name="add-shopping-cart"
                      size={20}
                      color="#fff"
                    />
                  </ButtonNumber>

                  <TextAdd>Adicionar</TextAdd>
                </ProfileButton>
              </Item>
            </Card>
          )}
        />
      </Container>
    );
  }
}
