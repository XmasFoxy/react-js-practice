import './cartPage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CartContent } from '../../components/CartContent/CartContent';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';



export function CartPage () {
    const user = useSelector((state) => state.account.user);

    if (!user) {
        return <Navigate to='/auth' state={{ from: '/cart' }} replace />;
    }

    return (
        <div className='cart'>
            <Header />
            
            <div className='cart__content'>
                <CartContent />
            </div>

            <Footer />
        </div>
    )
}