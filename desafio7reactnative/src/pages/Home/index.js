import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

class Home extends Component {
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
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;
    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amountArray } = this.props;
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

                <ProfileButton onPress={() => this.handleAddProduct(item)}>
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
