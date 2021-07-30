import React, { useState } from 'react';
import MyCard from './components/Cards';
import GetRecipes from './components/GetRecipe';

const App = () => {
  return (
    <div className="App">
      Recipes
      <GetRecipes />
    </div>
  );
}

export default App;