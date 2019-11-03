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

// Item Row
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
export const ItemButton = styled.TouchableOpacity`
  margin-top: 30;
  position: absolute;
  right: 5;
`;
export const ItemButtonIcon = styled(Icon)`
  color: #7159c1;
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

// Amount Row
export const IncreaseDecrease = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 10;
  border-radius: 4px;
`;
export const IncreaseDecreaseButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const IncreaseDecreaseIcon = styled(Icon)`
  color: #7159c1;
  margin-left: 7;
`;
export const IncreaseDecreaseButtonInput = styled.TextInput`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3;
  width: 30;
  text-align: center;
  height: 40;
  padding: 0;
  margin-top: 5;
  margin-left: 10;
  margin-right: 5;
  color: rgba(0, 0, 0, 0.5);
`;
export const IncreaseDecreaseSubtotal = styled.Text`
  color: #333;
  font-weight: bold;
  align-self: center;
  position: absolute;
  right: 10;
`;

// Button Finalizar Compra
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
