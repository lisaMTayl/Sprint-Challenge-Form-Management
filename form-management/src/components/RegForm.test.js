import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each"
import RegForm from './RegForm';

describe('<FormikRegForm />', () => {
  it('renders without crashing', () => {
    render(<RegForm/>)
  })

});