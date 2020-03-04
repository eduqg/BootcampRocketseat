import React, {useState} from 'react';
import produce from 'immer';

import {loadLists} from '../../services/api';

import BoardContext from './context'

import List from '../List';

import { Container } from './styles';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      // removo item que está sendo arrastado na lista
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  function moveEmpty(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      // removo item que está sendo arrastado na lista
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.push(dragged);
    }))
  }

  function remove(listIndex, index) {
    setLists(produce(lists, draft => {
      draft[listIndex].cards.splice(index, 1);
    }))
  }

  function create(listIndex, data) {
    setLists(produce(lists, draft => {
      draft[listIndex].cards.push(data);
    }))
  }
  
  
  return (
    <BoardContext.Provider value={{lists, move, moveEmpty, remove, create}}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  );
}
