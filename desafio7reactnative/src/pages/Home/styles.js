import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Não posso fazer estilos encadeados no react-native
export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #333;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

// White Card
export const Card = styled.View`
  height: 310;
  width: 200;
  background-color: #fff;
  border-radius: 5;
  padding-right: 10;
  padding-left: 10;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10;
  padding-top: 10;
  margin-right: 10;
`;

// Image
export const Item = styled.View`
  flex-direction: column;
`;
export const ItemImage = styled.Image`
  height: 180;
  width: 180;
`;
export const ItemDescription = styled.Text.attrs({
  numberOfLines: 2,
})``;
export const ItemPrice = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

// Button
export const ProfileButton = styled(RectButton)`
  flex-direction: row;
  margin-top: 10px;
  border-radius: 4px;
  background: #7159c1;
  height: 36px;
  display: flex;
  align-items: center;
`;
export const ButtonNumber = styled.Text`
  color: #fff;
  background-color: #49397d;
  padding-left: 4;
  padding-right: 4;
  padding-top: 4;
  padding-bottom: 4;
  border-radius: 4;
  flex-direction: row;
  align-items: center;
`;
export const ButtonNumberText = styled.Text``;
export const ButtonNumberIcon = styled(Icon)``;

export const TextAdd = styled.Text`
  margin-left: 30;
  font-weight: bold;
  font-size: 12;
  text-transform: uppercase;
  color: #fff;
  padding-top: 2;
`;
