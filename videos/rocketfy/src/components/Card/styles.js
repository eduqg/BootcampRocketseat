import styled, {css} from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid red; */
  cursor: grab;

  
`;

export const Content = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192,208,230,0.8);
  border-top: 20px solid rgba(230,236,245,0.4);
  padding: 15px;
  margin: 15px;

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0,0,0,0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    header, p, img {
      opacity: 0;
    }

   
  `}

  > header {
    position: absolute;
    top: -8px;
    left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 230px;


    button {
      background: transparent;
    }
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }


  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  /* o css é utilizado quando quero passar multiplas informações de css baseadas em uma condição */
  /* Se tiver uma propriedade isDragging, renderizo os atributos */
  
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;