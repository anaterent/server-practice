
import axios from 'axios';



import Content from "../components/Content";
import Search from "../components/Search";
import Filter from "../components/Filter";
import DetailedView from '../components/DetailedView';

function Home({ recipes, setRecipes, savedRecipe, savedRecipes, transportSelectedRecipe, selectedRecipe, setSelectedRecipe }) {


    const handleSearch = async (searchTerm) => {
        try {
            const response = await axios.post('/search', { searchTerm });
            console.log('fetched');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleRequiredIngredients = async (ingredients) => {
        try {
            const response = await axios.post('/filter', { ingredients });
            setRecipes(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Search onSearch={handleSearch} />
            <Filter requiredIngredients={handleRequiredIngredients} />
            <Content recipes={recipes} transportSelectedRecipe={transportSelectedRecipe} />
            {selectedRecipe && <DetailedView recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} savedRecipe={savedRecipe} savedRecipes={savedRecipes} />}
        </div>


    );
}

export default Home;