import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  opacity: ${props => props.done ? 0.6 : 1};

  /* 
  0 0 320px é a união de: 
  
  flex-grow = determina a habilidade de um componente esticar mais que o necessário.
    0 =  permanece do mesmo tamanho
    1 = estica para ocupar todo o espaço possível
    2 = vezes mais espaço que os irmãos dele
  
  flex-shrink = determina a habilidade de reduzir o elemento.
    0 = permanece do mesmo tamanho

  flex-basis = tamanho base do elemento. O 320px será na horizontal pois tem flex-direction row por padrão
  */
  flex: 0 0 320px;

  /* $ + = Para referenciar elemento que precede. Quero estilizar toda div que antes dele tenha uma div */
  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);

  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    padding-bottom: 32px;


    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 19px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }

    ul {
      margin-top: 30px;

    }


  }
`;
