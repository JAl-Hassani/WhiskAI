function Ingredients({ ingredients, handleGetRecipe }) {
    return (
        ingredients.length > 0 && <section>
            <h2>Ingredients on hand:</h2>
            <ul className='ingredients-list'>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
            {ingredients.length > 3 &&
                <div className='get-recipe-container'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={handleGetRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}

export default Ingredients