import { useState } from 'react'
import './Main.css'

function Main() {
    const [ingredients, setIngredients] = useState([])

    function handleSubmit(formData) {
        const ingredient = formData.get("ingredient")
        if (!ingredient.trim()) return
        setIngredients(prev => [...prev, ingredient])
    }

    return (
        <main>
            <form className="add-ingredient" action={handleSubmit}>
                <input
                    type="text"
                    className='add-ingredient-input'
                    placeholder="e.g. Parmesan" 
                    aria-label="Add ingredient"
                    name='ingredient'
                />
                <button className='add-ingredient-button'>+ Add Ingredient</button>
            </form>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </main>
    )
}

export default Main