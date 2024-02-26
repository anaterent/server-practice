// import React, { useState } from 'react';



function Content({ recipes, transportSelectedRecipe }) {


    return (
        <div className="content">
            <div className="content-container">
                {recipes.length === 0 ? (
                    <p className="loading">No recipes found...</p>
                ) : (
                    recipes.map((recipe, i) => (
                        <div key={i} className="content-box" onClick={() => transportSelectedRecipe(recipe)}>
                            <h2>{recipe.title}</h2>
                            {/* <p>{recipe.readyInMinutes} minutes</p> */}
                            <img src={recipe.image} alt="recipe img"></img>
                        </div>
                    ))
                )}

            </div>



        </div>
    )
}

export default Content;