import React, { useContext} from 'react';
import {useDrop} from 'react-dnd';
import BoardContext from '../Board/context';

import Card from '../Card';

import {FaPlus} from 'react-icons/fa';

import { Container,AddCard } from './styles';

export default function List({data, index: listIndex}) {
  const {moveEmpty} = useContext(BoardContext);

  const [, dropEmpty] = useDrop({
    accept: 'CARD',

    drop(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
     
      if(draggedListIndex === targetListIndex) {
        return;
      }
      
      moveEmpty(draggedListIndex, targetListIndex, draggedIndex, data.cards.length);
 
    }
  });


  return (
    <Container  ref={dropEmpty}  done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <FaPlus size={24} color="#fff" />
          </button>
        )}
 
      </header>

      <ul>
        {data.cards.length ? data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
            cardId={card.id}
          />
        )): (
          <AddCard>
            <h2>Arraste um card para adicionar</h2>  
          </AddCard>
        )}
      </ul>
    </Container>
  );
}
