import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// Não posso fazer estilos encadeados no react-native
export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
