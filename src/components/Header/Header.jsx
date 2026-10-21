import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import shoppingCart from '../../assets/shopping-cart.svg';
import accountIcon from '../../assets/user.svg';
import './header.css';

export function Header () {
    const user = useSelector((state) => state.account.user);

    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header__heading'>SUPER SHOP</h1>
            </Link>

            <div className='header__icons_container'>
                <Link
                    to={user ? '/cart' : '/auth'}
                    state={!user ? { from: '/cart' } : undefined}
                    className='header__cart header__block'
                >
                    <img src={shoppingCart} alt='Cart' />
                </Link>

                <Link
                    to={user ? '/account' : '/auth'}
                    state={!user ? { from: '/account' } : undefined}
                    className="header__account header__block"
                >
                    <img src={accountIcon} alt="Account" />
                </Link>
            </div>
        </header>
)}