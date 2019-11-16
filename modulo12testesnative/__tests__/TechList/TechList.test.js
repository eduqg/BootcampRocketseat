import React from 'react';

import TechList from '~/components/TechList';

import { render, fireEvent } from '@testing-library/react-native';

describe('TechList', () => {
  it('should be able to add new tech', () => {
    const { getByText, getByTestId } = render(<TechList />);

    // Para disparar teste em onChangeText, não onChange.
    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');

    // Não é click, mas sim press no react native.
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('Node.js')).toBeTruthy();

    // toHaveProp = da biblioteca jest-native
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
})