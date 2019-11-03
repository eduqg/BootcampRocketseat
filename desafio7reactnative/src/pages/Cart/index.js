import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  Card,
  Item,
  ItemHorizontal,
  ItemImage,
  ItemPrice,
  ItemDescription,
  ItemDescriptionText,
  ProfileButton,
  TextAdd,
  TextTotal,
  TextTotalPrice,
  List,
  ItemButton,
  ItemButtonIcon,
  IncreaseDecrease,
  IncreaseDecreaseButton,
  IncreaseDecreaseButtonInput,
  IncreaseDecreaseSubtotal,
  IncreaseDecreaseIcon,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Cart extends Component {
  state = {
    amount: 2,
  };

  handleFinish = () => {
    console.log('Hello');
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

    function decrement() {
      console.log('Decrement');
    }

    function increment() {
      console.log('Decrement');
    }

    function remove() {
      console.log('Decrement');
    }

    const { amount } = this.state;

    return (
      <Container>
        <Card>
          <List
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Item>
                <ItemHorizontal>
                  <ItemImage
                    source={{
                      uri:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                    }}
                  />
                  <ItemDescription>
                    <ItemDescriptionText>
                      Uma descrição grande de um tênis bonito
                    </ItemDescriptionText>
                    <ItemPrice>R$50,00</ItemPrice>
                  </ItemDescription>
                  <ItemButton onPress={() => remove()}>
                    <ItemButtonIcon name="close" size={20} color="#333" />
                  </ItemButton>
                </ItemHorizontal>

                <IncreaseDecrease>
                  <IncreaseDecreaseButton onPress={() => decrement()}>
                    <IncreaseDecreaseIcon
                      name="add-circle-outline"
                      size={20}
                      color="#333"
                    />
                  </IncreaseDecreaseButton>
                  <IncreaseDecreaseButtonInput
                    editable={false}
                    selectTextOnFocus={false}
                    value={`${amount}`}
                  />
                  <IncreaseDecreaseButton onPress={() => increment()}>
                    <IncreaseDecreaseIcon
                      name="remove-circle-outline"
                      size={20}
                      color="#333"
                    />
                  </IncreaseDecreaseButton>
                  <IncreaseDecreaseSubtotal>R$100,00</IncreaseDecreaseSubtotal>
                </IncreaseDecrease>
              </Item>
            )}
          />

          <TextTotal>Total</TextTotal>
          <TextTotalPrice>R$1000,00</TextTotalPrice>
          <ProfileButton onPress={this.handleFinish}>
            <TextAdd>Finalizar Compra</TextAdd>
          </ProfileButton>

        </Card>
      </Container>
    )
  }
}
