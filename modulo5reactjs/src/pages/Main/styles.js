import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    ${props =>
    props.redBox ? 'border: 1px solid red;' : 'border: 1px solid #eee;'}
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  padding-left: 23px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

// display: flex;
// justify-content: center;
// align-items: center; = essas tres propriedades garantem que conteudo do botao fique no centro

// & + li = Aplica estilização em todos os li's, menos no primeiro do conjunto
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;

export const ErrorBox = styled.div`
  flex: 1;
  background-color: #ff6666;
  border: 1px solid #ff0000;
  color: white;
  width: 100%;
  border-radius: 4px;
  padding: 4px 4px 4px 16px;
  font-weight: bold;
  margin-top: 16px;
`;
