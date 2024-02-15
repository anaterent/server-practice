import express from "express"
const app = express()
import axios from "axios";

import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import cors from 'cors';

const port = 5000

const apiKey = process.env.SPOONACULAR_API_KEY;
const numberOfResults = 4;

app.use(express.static("public"));
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies


// note: recipes/random return an array of 'recipes'; recipes/complexSearch returns arary of 'results'
app.get("/api", async (req, res) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=${numberOfResults}&apiKey=${apiKey}`, { 'Content-Type': 'application/json' });
        // const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=pistachio&number=10&apiKey=${apiKey}`, { 'Content-Type': 'application/json' });
        const result = response.data.recipes;
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error.message);
        console.log(apiKey)
    }

})

app.post('/search', async (req, res) => {
    try {
        const searchTerm = req.body.searchTerm;
        console.log('Search Term:', searchTerm);

        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=${numberOfResults}&apiKey=${apiKey}`, { 'Content-Type': 'application/json' });
        const result = response.data.results; // Assuming the Spoonacular API returns an array of results
        res.json(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Server error');
    }
});

app.post('/filter', async (req, res) => {
    try {
        const requiredIngredients = req.body.ingredients;
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${requiredIngredients}&apiKey=${apiKey}`, { 'Content-Type': 'application/json' });
        const result = response.data.results; // Assuming the Spoonacular API returns an array of results
        res.json(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Server error');
    }
});

app.post('/recipe', async (req, res) => {
    try {
        const recipeId = req.body.selectedRecipe.id;
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`, { 'Content-Type': 'application/json' });
        const result = response.data;
        res.json(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Server error');
    }
});



app.listen(port, () => {
    console.log("Server started on port 5000")
})