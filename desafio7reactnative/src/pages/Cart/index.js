import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  ItemRemoveIcon,
  IncreaseDecrease,
  IncreaseDecreaseButton,
  IncreaseDecreaseButtonInput,
  IncreaseDecreaseSubtotal,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Cart extends Component {
  state = {
    amount: 1,
  }

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
                    <ItemDescriptionText>Uma descrição grande de um tênis bonito</ItemDescriptionText>
                    <ItemPrice>R$50,00</ItemPrice>
                  </ItemDescription>

                  <ItemRemoveIcon
                    name="remove-circle-outline"
                    size={20}
                    color="#333"
                  />
                </ItemHorizontal>

                <IncreaseDecrease>
                  <IncreaseDecreaseButton onPress={() => decrement()}>
                    <MdRemoveCircleOutline icon="add" size={20} color="#7159c1" />
                  </IncreaseDecreaseButton>
                  <IncreaseDecreaseButtonInput
                    disabled
                    value={"1"}
                  // editable={this.state.TextInputDisableHolder}
                  />
                  <IncreaseDecreaseButton onPress={() => increment()}>
                    <MdAddCircleOutline icon="add" size={20} color="#7159c1" />
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
