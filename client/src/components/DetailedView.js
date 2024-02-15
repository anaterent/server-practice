import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as fasFaBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farFaBookmark } from '@fortawesome/free-regular-svg-icons';


function DetailedView({ recipe, onClose, savedRecipe, savedRecipes }) {
    // Prevents the modal from closing when clicking inside the modal
    const modalContentClick = (e) => {
        e.stopPropagation();
    };

    const isSaved = savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id);
    const handleSave = (recipe) => {
        savedRecipe(recipe)
    }
    


    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={modalContentClick}>
                <div className="modal-top-row">
                    <div className="modal-image">
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                    <div className="modal-header">
                        <h2>{recipe.title}</h2>

                        <FontAwesomeIcon className='saved-link' icon={isSaved ? fasFaBookmark : farFaBookmark} onClick={() => handleSave(recipe)} />

                    </div>
                </div>

                <div className="modal-info">
                    {/* <p dangerouslySetInnerHTML={{ __html: recipe.summary }} /> */}
                    <p>Ingredients:</p>
                    <div className='modal-info-lower'>
                        {recipe.extendedIngredients.map((ingredient, index) => (
                            <p key={index}>{ingredient.name}</p>
                        ))}
                    </div>

                    {/* More info here */}
                </div>
            </div>
        </div>
    );
}
export default DetailedView;  