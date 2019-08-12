import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each"
import Recipes from './Recipes';
import 'jest-dom/extend-expect';
// TypeError: Cannot read property 'name' of undefined
//
// 20 |     <RecipeDiv>
//   21 |       <h2>
//   > 22 |         {this.props.data.name}
//   |                          ^
//   23 |       </h2>
//   24 |       <h3>Course: {this.props.data.course}</h3>
//   25 |       <h3>Technique: {this.props.data.technique}</h3>
//
//
describe('<Recipes />', () => {

  it('renders without crashing', () => {
    render(<Recipes />)
  });

  it('passes food', () => {
    const fakeData = {
      name: 'brisket',
      course: 'entree',
      technique: 'crock pot',
      ingredients: ['beef', 'potatoes']
    };
    const displayTest = render(<Recipes recipes={fakeData} />)
    displayTest.getByText(/brisket/i);
  });

});
