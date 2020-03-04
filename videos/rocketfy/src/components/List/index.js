import React, {useRef, useContext, useState, useEffect} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import BoardContext from '../Board/context';

import Card from '../Card';

import {FaPlus} from 'react-icons/fa';

import { Container } from './styles';

export default function List({data, index: listIndex}) {
  const {moveEmpty} = useContext(BoardContext);


  useEffect(() => {
    // console.log(data)
  }, []); // eslint-disable-line

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
    // ref={dropEmpty} 
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <FaPlus size={24} color="#fff" />
          </button>
        )}
 
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
            cardId={card.id}
          />
        ))}
      </ul>

    </Container>
  );
}
