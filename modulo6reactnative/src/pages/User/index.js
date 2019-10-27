import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Title,
  Info,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('user').name,
    };
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: false,
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await this.setState({ loading: true });
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  renderRow = ({ item }) => {
    return (
      <Starred>
        <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
        <Info>
          <Title>{item.name}</Title>
          <Author>{item.owner.name}</Author>
        </Info>
      </Starred>
    )
  }

  render() {
    const { navigation } = this.props;
    const { stars, loading } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>


        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={this.renderRow}
        />
        {loading && <ActivityIndicator size="large" color="#7159c1" />}

      </Container>
    );
  }
}
