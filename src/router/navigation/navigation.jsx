
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'

export function Navigation() {
    return (
        <>
            <div className="navigation">
                <div className='logo-container'>
                    <h1>Codemaster </h1>
                </div>
                <div>
                    <input type="text" name="" id="" placeholder='Pesquisar' />
                </div>
                <div className="nav-links-container">
                    <a href="" className="nav-link">Shop</a>
                    <a href="" className="nav-link">Login</a>
                 
                    <CartIcon/>
                </div>
            </div>

        </>

    )
}