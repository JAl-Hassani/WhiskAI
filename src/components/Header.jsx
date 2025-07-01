import whiskAILogo from '/public/whisk.png'
import './Header.css'

function Header() {
    return (
        <header className='logo-header'>
            <img className='logo-img' src={whiskAILogo} alt="WhiskAI Logo" />
            <h1>WhiskAI</h1>
        </header>
    )
}

export default Header