import { useState } from 'react';
import { useGetGroceriesQuery } from '../../store/groceriesApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addItem } from '../../store/cartSlice.js';
import './groceriesList.css';

export function GroceriesList() {
    const { data, error, isLoading } = useGetGroceriesQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.account.user);
    const [addedProductId, setAddedProductId] = useState(null);
    let groceries = [];

    if (data) {
        groceries = data;
    }

    function handleAddToCart(grocery) {
        if (!user) {
            navigate('/auth');
        } else {
            dispatch(addItem(grocery));
            setAddedProductId(grocery.id);
        }
    }

    if (isLoading) {
        return <p className='list__message'>Loading groceries...</p>;
    }

    if (error) {
        return <p className='list__message list__message--error'>Could not load groceries. Please try again later.</p>
    }

    return (
        <div className='list'>
            <p className='list__count'>Found: {groceries.length}</p>

            <div className='list__groceries'>
                {groceries.map((grocery) => (
                    <div className='list__grocery' key={grocery.id}>
                        <div className='list__img'>
                            <img src={grocery.image} alt={grocery.description} />
                        </div>

                        <h3 className='list__heading'>{grocery.title}</h3>

                        <div className='list__description'>
                            <p>{grocery.categoryLabel}</p>

                            <p>${grocery.price}</p>
                        </div>

                        <button
                            className={`list__button ${addedProductId === grocery.id ? 'list__button--added' : ''}`}
                            type='button'
                            onClick={() => handleAddToCart(grocery)}
                        >
                            {addedProductId === grocery.id ? 'Added!' : 'Add to cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}