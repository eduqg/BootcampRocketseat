import React from 'react';

import Card from '../Card';

import {FaPlus} from 'react-icons/fa';

import { Container } from './styles';

export default function List({data, index: listIndex}) {
  return (
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
          />
        ))}
      </ul>

    </Container>
  );
}
