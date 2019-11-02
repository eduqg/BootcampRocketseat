import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
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

import logo from '../../assets/logo.png';

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

  render() {
    const items = [
      {
        id: 1,
        title: 'Um tenis bonito',
        price: 'R$50,00',
        image: 'url da img',
      },
      {
        id: 2,
        title: 'Um tenis bonit2',
        price: 'R$50,00',
        image: 'url da img',
      },
      {
        id: 3,
        title: 'Um tenis bonito3',
        price: 'R$50,00',
        image: 'url da img',
      },
    ];
    return (
      <Container>
        <Card>
          <List
            data={items}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({ item }) => (
              <Item>
                <ItemImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                  }}
                  alt={item.title}
                />
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
            )}
          />
        </Card>
      </Container>
    );
  }
}
