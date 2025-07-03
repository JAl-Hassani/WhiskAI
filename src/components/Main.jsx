import { useState } from 'react'
import './Main.css'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipe } from '../ai'

function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    function handleAddIngredient(formData) {
        const ingredient = formData.get("ingredient")
        if (!ingredient.trim()) return
        setIngredients(prev => [...prev, ingredient])
    }

    async function handleGetRecipe(e) {
        e.preventDefault()
        const generatedRecipe = await getRecipe(ingredients)
        setRecipe(generatedRecipe)
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

            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}

export default Main