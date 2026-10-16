import { Link, useNavigate } from 'react-router';
import shoppingCart from '../../assets/shopping-cart.svg';
import accountIcon from '../../assets/user.svg';
import './header.css';

export function Header () {
    const navigate = useNavigate();

    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header__heading'>SUPER SHOP</h1>
            </Link>

            <div className='header__icons_container'>
                <Link to='/cart' className='header__cart header__block'>
                    <img src={shoppingCart} />
                </Link>

                <Link to="/auth" className="header__account header__block">
                    <img src={accountIcon} alt="Аккаунт" />
                </Link>
            </div>
        </header>
)}