import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Não posso fazer estilos encadeados no react-native
export const Container = styled.SafeAreaView`
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
  min-height: 200;
  width: 100%;
  max-height: 95%;
  background-color: #fff;
  border-radius: 5;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
  padding-top: 10;
`;

// Image
export const Item = styled.View`
  flex-direction: column;
`;
export const ItemHorizontal = styled.View`
  flex-direction: row;
`;


export const ItemImage = styled.Image`
  height: 80;
  width: 80;
`;
export const ItemDescription = styled.View`
  padding-left: 10;
  padding-top: 10;
`;
export const ItemDescriptionText = styled.Text.attrs({
  numberOfLines: 2,
})`
  max-width: 150;
`;
export const ItemPrice = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

export const ItemRemoveIcon = styled(Icon)`
  margin-top: 30;
  color: #7159c1;
  padding-left: 10;
`;

export const TextTotal = styled.Text`
  margin-top: 16;
  text-align: center;
  color: #333;
  text-transform: uppercase;
`;

export const TextTotalPrice = styled.Text`
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: 24;
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
  justify-content: center;
`;

export const TextAdd = styled.Text`
  font-weight: bold;
  font-size: 12;
  text-transform: uppercase;
  color: #fff;
  padding-top: 2;
`;

// Remove and add buttons
export const IncreaseDecrease = styled.View``;
export const IncreaseDecreaseButton = styled.TouchableOpacity``;
export const IncreaseDecreaseButtonInput = styled.TextInput`
  border: 1px solid black;
  width: 30;
  text-align: center;
`;
export const IncreaseDecreaseSubtotal = styled.Text``;
export const MdRemoveCircleOutline = styled(Icon)``;
export const MdAddCircleOutline = styled(Icon)``;
