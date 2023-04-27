import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className='NavBar'>
            <h1>La LLama Loca</h1>

                <nav>
                    <ul>
                        <li className='listaItems'>Procesadores</li>
                        <li className='listaItems'>Placas de video</li>
                        <li className='listaItems'>Motherboards</li>
                        <li className='listaItems'>Fuentes</li>
                    </ul>
                </nav>
            
                <CartWidget/>
        </header>
    )
}

export default NavBar
