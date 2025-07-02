import { useState } from 'react'
import './Main.css'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipe } from '../ai'

function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)
    const [recipe, setRecipe] = useState(null)

    function handleAddIngredient(formData) {
        const ingredient = formData.get("ingredient")
        if (!ingredient.trim()) return
        setIngredients(prev => [...prev, ingredient])
    }

    function handleGetRecipe(e) {
        e.preventDefault()
        setRecipe(getRecipe(ingredients))
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

            <Ingredients ingredients={ingredients} handleGetRecipe={handleGetRecipe} />

            <Recipe recipe={recipe} showRecipe={recipeShown} />
        </main>
    )
}

export default Main