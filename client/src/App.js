import React, { useEffect, useState } from 'react';
import './App.sass';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Footer from './components/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        console.log('fetched');
        setRecipes(response.data); // response.data is the array of recipes
      })
      .catch(error => console.error(error));
  }, []);

  const handleSelectRecipe = async (selectedRecipe) => {
    try {
      const response = await axios.post('/recipe', { selectedRecipe });
      // setRecipes(response.data);
      const selectedRecipeInfo = response.data;
      console.log(selectedRecipeInfo)
      setSelectedRecipe(selectedRecipeInfo);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function handleSavedRecipe(newRecipe) {
    setSavedRecipes((prevRecipes) => {
      if (prevRecipes.some(recipe => recipe.id === newRecipe.id)) {
        // Recipe is already saved, so we should remove it
        return prevRecipes.filter(recipe => recipe.id !== newRecipe.id);
      } else {
        // Recipe is not saved, so we add it
        return [...prevRecipes, newRecipe];
      }
    });
  }

  return (
    <Router>

      <div className='outer-container'>
        <Header />

        <div className='routes-container'>
          <Routes >
            <Route path="/" element={<Home recipes={recipes} setRecipes={setRecipes} savedRecipe={handleSavedRecipe} savedRecipes={savedRecipes} transportSelectedRecipe={handleSelectRecipe} selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} />} />
            <Route path='/saved' element={<Saved savedRecipes={savedRecipes} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
