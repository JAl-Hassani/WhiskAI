import { useState } from 'react'
import './Main.css'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipe } from '../ai'

function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function handleAddIngredient(formData) {
        const ingredient = formData.get("ingredient")
        if (!ingredient.trim()) return
        setIngredients(prev => [...prev, ingredient])
    }

    async function handleGetRecipe(e) {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const generatedRecipe = await getRecipe(ingredients)
            setRecipe(generatedRecipe)
        } catch (err) {
            setError("Sorry, something went wrong. Please try again later!")
        } finally {
            setLoading(false)
        }
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

            {loading && (
                <div className="loading-spinner">
                    Loading...
                </div>
            )}

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {!loading && !error && recipe && <Recipe recipe={recipe} />}
        </main>
    )
}

export default Main