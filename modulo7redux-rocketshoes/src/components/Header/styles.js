import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  /* Quero alinhar icone totalmente a esquerda e outro a direita */
  display: flex;
  /* faz alinhamento */
  justify-content: space-between;
  /*  se um item for maior que outro, alinho ao centro */
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  /* transition + hover faz efeito*/
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
