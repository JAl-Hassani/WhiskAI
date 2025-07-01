import { useState } from 'react'
import './Main.css'

function Main() {
    const [ingredient, setIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        if (!ingredient.trim()) return
        setIngredients(prev => [...prev, ingredient])
        setIngredient("")
    }

    return (
        <main>
            <form className="add-ingredient" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='add-ingredient-input'
                    placeholder="e.g. Parmesan" 
                    aria-label="Add ingredient"
                    name='ingredient'
                    value={ingredient}
                    onChange={e => setIngredient(e.target.value)}
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