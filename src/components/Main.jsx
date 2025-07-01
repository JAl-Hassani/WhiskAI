import './Main.css'

function Main() {
    return (
        <main>
            <form className="add-ingredient">
                <input
                    type="text"
                    className='add-ingredient-input'
                    placeholder="e.g. Parmesan" 
                    aria-label="Add ingredient"
                />
                <button className='add-ingredient-button'>+ Add Ingredient</button>
            </form>
        </main>
    )
}

export default Main