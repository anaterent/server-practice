
import React, { useState } from 'react';

function Filter({ requiredIngredients }) {
    const [input, setInput] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            setIngredients([...ingredients, input]);
            // onAddIngredient(input);
            setInput('');
        }
    };

    const handleDelete = (indexToDelete) => {
        // _ is used here instead of a specific element to filter out. 2nd parameter is teh index.
        setIngredients(ingredients.filter((_, index) => index !== indexToDelete));
    };

    const handleFinalSubmit = (d) => {
        d.preventDefault();
        // no need to check if there is input
        requiredIngredients(ingredients)
    }

    return (
        <div className="filter">
            <div className="filter-bubbles">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="bubble">
                        {ingredient} <button className="tick" onClick={() => handleDelete(index)}>✓</button>
                    </div>
                ))}
            </div>
            <div className="formNButton">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Include ingredient..."
                    />
                </form>
                <button onClick={handleFinalSubmit}>Find Recipe</button>
            </div>

        </div>
    );
}

export default Filter;