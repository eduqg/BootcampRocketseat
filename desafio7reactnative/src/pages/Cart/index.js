import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

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
function Cart({ cart, removeFromCart }) {
  // const [amount, setAmount] = useState(1);

  // handleFinish = () => {
  //   console.tron.log('Finalizar Compra');
  // };

  // decrement = () => {
  //   console.tron.log('-');
  // };

  // increment = () => {
  //   console.tron.log('+');
  // };

  // remove = () => {
  //   console.tron.log('X');
  // };

  return (
    <Container>
      <Card>
        <List
          data={cart}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Item>
              <ItemHorizontal>
                <ItemImage source={{ uri: item.image }} />
                <ItemDescription>
                  <ItemDescriptionText>{item.description}</ItemDescriptionText>
                  <ItemPrice>R${item.price.toFixed(2)}</ItemPrice>
                </ItemDescription>
                <ItemButton onPress={() => removeFromCart(item.id)}>
                  <ItemButtonIcon name="close" size={20} color="#333" />
                </ItemButton>
              </ItemHorizontal>

              <IncreaseDecrease>
                <IncreaseDecreaseButton onPress={() => { }}>
                  <IncreaseDecreaseIcon
                    name="add-circle-outline"
                    size={20}
                    color="#333"
                  />
                </IncreaseDecreaseButton>
                <IncreaseDecreaseButtonInput
                  editable={false}
                  selectTextOnFocus={false}
                  value={`${item.amount}`}
                />
                <IncreaseDecreaseButton onPress={() => { }}>
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
        <ProfileButton onPress={() => { }}>
          <TextAdd>Finalizar Compra</TextAdd>
        </ProfileButton>
      </Card>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
