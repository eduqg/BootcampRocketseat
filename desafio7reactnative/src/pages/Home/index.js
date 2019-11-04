import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
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

function Home({ navigation, addToCartRequest }) {
  const [products, setProducts] = useState([]);
  // Use selector retorna o estado inteiro, selecionamos um
  const amountArray = useSelector(state =>
    state.cart.reduce((amountState, product) => {
      amountState[product.id] = product.amount;
      return amountState;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setProducts(response.data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    addToCartRequest(id);
    navigation.navigate('Cart');
  }

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

              <ProfileButton onPress={() => handleAddProduct(item.id)}>
                <ButtonNumber>
                  <ButtonNumberText>
                    {amountArray[item.id] || 0}
                  </ButtonNumberText>
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

const mapStateToProps = state => ({
  amountArray: state.cart.reduce((amountArray, product) => {
    amountArray[product.id] = product.amount;
    return amountArray;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
