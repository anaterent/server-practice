

function Saved({ savedRecipes, transportSelectedRecipe }) {

    return (
        <div className="saved">
            <h1>Your Saved Recipes</h1>
            <div className="content">
                {savedRecipes.length === 0 ? (
                    <p className="loading">No recipes found...</p>
                ) : (
                    savedRecipes.map((recipe, i) => (
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


export default Saved;
