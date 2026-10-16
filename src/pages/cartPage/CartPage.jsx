import './cartPage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CartContent } from '../../components/CartContent/CartContent';



export function CartPage () {


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