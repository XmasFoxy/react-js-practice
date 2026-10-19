import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addItem, decreaseItem, removeItem } from '../../store/cartSlice.js';
import './cartContent.css';

export function CartContent() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let itemCount = 0;
    let cartTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        itemCount = itemCount + cart[i].quantity;
        cartTotal = cartTotal + cart[i].price * cart[i].quantity;
    }

    if (cart.length === 0) {
        return (
            <div className='cart_content'>
                <h1 className='cart_content__heading'>No items yet</h1>

                <button
                    className='cart_content__button'
                    type='button'
                    onClick={() => navigate('/groceries')}
                > Go to groceries </button>
            </div>
        );
    }

    return (
        <div className='cart_content'>
            <h1 className='cart_content__heading'>Items in the cart: {itemCount}</h1>

            {cart.map((item) => (
                <div className='cart_content__card' key={item.id}>
                    <div className='cart_content__img'>
                        <img src={item.image} alt={item.description} />
                    </div>

                    <div className='cart_content__block'>
                        <h3 className='cart_content__title'>{item.title}</h3>
                        <p className='cart_content__text'>Price: ${item.price.toFixed(2)}</p>

                        <div className='cart_content__interactive'>
                            <button
                                className='cart_content__round'
                                type='button'
                                disabled={item.quantity <= 1}
                                onClick={() => dispatch(decreaseItem(item.id))}
                            > - </button>

                            <p className='cart_content__text'>{item.quantity}</p>

                            <button
                                className='cart_content__round'
                                type='button'
                                onClick={() => dispatch(addItem(item))}
                            > + </button>
                        </div>

                        <p className='cart_content__text'>
                            Total: ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        <button
                            className='cart_content__buttons'
                            type='button'
                            onClick={() => dispatch(removeItem(item.id))}
                        > Remove item </button>
                    </div>
                </div>
            ))}

            <div className='cart_content__sum'>
                <h2 className='cart_content__total'>Total: ${cartTotal.toFixed(2)}</h2>
            </div>
        </div>
    );
}