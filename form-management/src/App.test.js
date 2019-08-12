import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Recipes from './components/Recipes';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})