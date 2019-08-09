import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import RegForm from './RegForm';

describe('<RegForm />', () => {
  it('renders without crashing', () => {
    render(<RegForm/>)
  })
});