import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
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
    page: 1,
    refreshing: false,
  }

  async componentDidMount() {
    this.setState({ loading: true }, this.getData);
  }

  getData = async (isFresh) => {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const { stars } = this.state;
    const user = navigation.getParam('user');

    let response = [];
    let newStars = [];
    if (isFresh === true) {
      response = await api.get(`/users/${user.login}/starred`, {
        params: {
          page: 1,
          per_page: 7,
        },
      });
      newStars = [...response.data];
      this.setState({ page: 1 });
    } else {
      response = await api.get(`/users/${user.login}/starred`, {
        params: {
          page: this.state.page,
          per_page: 7,
        },
      });
      newStars = [...stars, ...response.data];
    }

    this.setState({
      stars: newStars,
      loading: false,
      refreshing: false,
    });
  };

  handleWebView = async (repository) => {
    const { navigation } = this.props;
    await navigation.navigate('Repository', { repository });
  }

  handleLoadMore = () => {
    console.log("Esta no load more")
    this.setState({ page: this.state.page + 1, loading: false }, this.getData);
  };

  renderFooter = () => {
    return this.state.loading ? (
      <ActivityIndicator size="large" color="#7159c1" />
    ) : null
  }

  onEndReached = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.handleLoadMore();
      this.onEndReachedCalledDuringMomentum = true;
    }
  };

  refreshList = () => {
    this.setState({ refreshing: true }, () => this.getData(true));
    console.log('Tá fresh');
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;

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
          renderItem={({ item }) =>
            (<TouchableOpacity onPress={() => this.handleWebView(item)}>
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.name}</Author>
                </Info>
              </Starred>
            </TouchableOpacity>)
          }
          onEndReachedThreshold={0.01}
          onEndReached={this.onEndReached}
          ListFooterComponent={this.renderFooter}
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false;
          }}
          onRefresh={() => this.refreshList()} // Função dispara quando o usuário arrasta a lista pra baixo
          refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
        />
      </Container>
    );
  }
}
