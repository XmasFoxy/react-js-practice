import shoppingCart from '../../assets/shopping-cart.svg';
import accountIcon from '../../assets/user.svg';
import './header.css';

export function Header () {
    return (
        <header className='header'>
            <h1 className='header__heading'>SUPER SHOP</h1>

            <div className='header__icons_container'>
                <div className='header__cart header__block'>
                    <img src={shoppingCart} />
                </div>

                <div className='header__account header__block'>
                    <img src={accountIcon} />
                </div>
            </div>
        </header>
)}