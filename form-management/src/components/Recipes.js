import React, {Component} from 'react'
import styled from 'styled-components'

const RecipeDiv = styled.div`
padding-top: 1rem;

`

class Recipes extends Component {
/*  constructor( props ) {
    super( props );
    this.state = {
      data: props.data
    }
  }*/

render() {
  console.log(this.props.data)
 return (
    <RecipeDiv>
      <h2>
        {this.props.data.name}
      </h2>
      <h3>Course: {this.props.data.course}</h3>
      <h3>Technique: {this.props.data.technique}</h3>
      <p>Ingredients: {this.props.data.ingredients.map(e => <li>{e}</li>)}</p>
    </RecipeDiv>
  );
}  };

export default Recipes;
