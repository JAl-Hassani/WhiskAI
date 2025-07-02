import { useState } from 'react'
import './Main.css'
import Recipe from './Recipe'

function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    function handleAddIngredient(formData) {
        const ingredient = formData.get("ingredient")
        if (!ingredient.trim()) return
        setIngredients(prev => [...prev, ingredient])
    }

    function handleGetRecipe(e) {
        e.preventDefault()
        setRecipeShown(true)
    }

    return (
        <main>
            <form className="add-ingredient" action={handleAddIngredient}>
                <input
                    type="text"
                    className='add-ingredient-input'
                    placeholder="e.g. Parmesan"
                    aria-label="Add ingredient"
                    name='ingredient'
                />
                <button className='add-ingredient-button'>+ Add Ingredient</button>
            </form>

            {ingredients.length > 0 && <section>
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
            </section>}

            <Recipe showRecipe={recipeShown} />
        </main>
    )
}

export default Main