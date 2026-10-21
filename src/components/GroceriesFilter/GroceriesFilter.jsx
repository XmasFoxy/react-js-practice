import { useState } from 'react';
import { useGetGroceriesQuery } from '../../store/groceriesApi.js';
import { GroceriesList } from '../GroseriesList/GroceriesList.jsx';
import './groceriesFilter.css';

export function GroceriesFilter() {
    const { data, error, isLoading } = useGetGroceriesQuery();
    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All the categories');
    const [selectedPrice, setSelectedPrice] = useState('Default');

    const categories = [
        'All the categories',
        'Fruits',
        'Vegetables',
        'Beverages',
        'Meat',
        'Pet supplies',
        'Dairy',
        'Cooking essentials',
        'Seafood',
        'Condiments',
        'Desserts',
        'Health supplements',
        'Grains',
        'Household essentials'
    ];

    let filteredGroceries = [...(data || [])];

    if (searchValue) {
        filteredGroceries = filteredGroceries.filter((grocery) =>
            grocery.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    if (selectedCategory !== 'All the categories') {
        filteredGroceries = filteredGroceries.filter((grocery) =>
            grocery.categoryLabel.toLowerCase() === selectedCategory.toLowerCase()
        );
    }

    if (selectedPrice === 'Price ↑') {
        filteredGroceries.sort((firstGrocery, secondGrocery) =>
            firstGrocery.price - secondGrocery.price
        );
    }

    if (selectedPrice === 'Price ↓') {
        filteredGroceries.sort((firstGrocery, secondGrocery) =>
            secondGrocery.price - firstGrocery.price
        );
    }

    function resetFilters() {
        setSearchValue('');
        setSelectedCategory('All the categories');
        setSelectedPrice('Default');
    }

    return (
        <>
            <div className='filter'>
                <h1 className='filter__heading'>Groceries List</h1>

                <div className='filter__interactive'>
                    <input
                        className='filter__input'
                        type='text'
                        name='searchGrocery'
                        placeholder='Enter the item...'
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />

                    <select
                        className='filter__category filter__select'
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        {categories.map((category) => <option key={category}>{category}</option>)}
                    </select>

                    <select
                        className='filter__price filter__select'
                        value={selectedPrice}
                        onChange={(event) => setSelectedPrice(event.target.value)}
                    >
                        <option>Default</option>
                        <option>Price ↑</option>
                        <option>Price ↓</option>
                    </select>

                    <button className='filter__button' type='button' onClick={resetFilters}>
                        Reset the filters
                    </button>
                </div>
            </div>

            <GroceriesList
                groceries={filteredGroceries}
                error={error}
                isLoading={isLoading}
            />
        </>
    );
}