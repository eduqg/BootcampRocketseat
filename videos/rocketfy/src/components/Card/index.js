import React, {useRef, useContext, useState} from 'react';
import {useDrag, useDrop} from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Content, Label } from './styles';

import {FaMinusCircle} from 'react-icons/fa';

// Problemas com a abordagem de acordo com o Diego: 
// 1) drag e drop apenas funciona se colocar em cima de card
// 2) Caso não tenha nenhum item, não é possível colocar novos cards
export default function Card({data, index, listIndex, cardId}) {
  const ref = useRef();
  const {move, remove} = useContext(BoardContext);
  const [isClicking, setIsClicking] = useState(false);

  // pego as props e pego a referencia que deve ser colocada na div que quero para o efeito
  const [, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex, cardId},
    // monitor tem todas as variáveis desse itme
    collect: monitor => {
      setIsClicking(false);
      return;}
  });

  const [, dropRef] = useDrop({
    // accespt = é possível arrastar cards em elementos card
    accept: 'CARD',
    // função chamada quando passo card em cima do outro
    // monitor dá distancias na tela por exemplo

    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      cardId === item.cardId ? setIsClicking(true) : setIsClicking(false)

      // Arraste na mesma lista, segunda condição = se id do dragged é igual ao do target
      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }
      
      // posição, altura, largura e distancias do top, left, right e bottom
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = targetSize.height / 2;

      // distancia que arrasto do topo da tela
      const draggedOfset = monitor.getClientOffset();
      const draggedTop = draggedOfset.y - targetSize.top;

      // se o item que arrasto está antes do item alvo e a sua posição for menor que o centro do item
      if(draggedIndex < targetIndex && draggedTop < targetCenter ) {
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter ) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      // Evita bug de alteração de local do card
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  // junta dois refs em um
  dragRef(dropRef(ref));

  // function handleOpenModal() {
  //   setShowModal(!showModal);
  // }

  function handleRemove(){
    remove(listIndex, index)
  }

  return (
    <>
    <Container ref={ref} >
      <Content isDragging={isClicking}>
        <header>
          {data.labels.length ? data.labels.map(label => <Label key={label} color={label} />) : (<span></span>)}
          <button type="button" onClick={() => handleRemove()}>
            <FaMinusCircle size={15} color="#aaa"  />
          </button>
          
        </header>
        <p>{data.content}</p>
        {data.user && <img src={data.user} alt={`user-${data.id}`} />}
       
      </Content>
    </Container>
    {/* {showModal && (
      <div>
        <button type="button" onClick={() => setShowModal(false)}>
          Remover
        </button>
      </div>
    )} */}
    </>
  );
}
