import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Cria html 'fake'
import { render, fireEvent, cleanup } from '@testing-library/react';

import { addTech } from '~/store/modules/techs/actions';
import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'ReactJS']
    }));

    const { getByText, getByTestId } = render(<TechList />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
  });

  // Preciso testar se action foi disparada
  it('should be able to add new tech', () => {
    const { getByTestId, getByLabelText } = render(<TechList />);

    // Função do jest que posso monitorar
    const dispatch = jest.fn();

    // Toda vez que o useDispatch for chamado, vou alterar o retorno
    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), {
      target: { value: 'Node.js' }
    });
    fireEvent.submit(getByTestId('tech-form'));

    console.log(dispatch.mock.calls);

    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
  });


  /*
  // Sempre que usar api externa, devo criar mock
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to add new tech', () => {
    // getByTestId = <ul data-testis="tech-list"></ul>
    const { getByText, getByTestId, debug, getByLabelText } = render(<TechList />);

    // debug();

    // <label htmlFor="tech">Tech</label>
    // <input id="tech" />
    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });

    fireEvent.submit(getByTestId('tech-form'));

    // debug();

    // Espero que tenha surgido um elementro nodejs na aplicação
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });

  it('should store techs in storage', () => {
    let { getByText, getByTestId, getByLabelText } = render(<TechList />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    cleanup();

    ({ getByTestId, getByLabelText, getByText } = render(<TechList />));

    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']));
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  });
  */
});