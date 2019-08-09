import React from 'react'


const Recipes = ({ data }) => {
    return (
      <div>
        {data.name} {data.course} {data.technique}
      </div>
    );
  };

export default Recipes;
