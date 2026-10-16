import './groceriesFilter.css';

export function GroceriesFilter () {
    const categories = [
        'All the categories',
        'Fruits', 
        'Vegetables', 
        'Bevagrages', 
        'Meat', 
        'Pet supplies', 
        'Dairy', 
        'Cat food', 
        'Cooking essentials',
        'Dog food',
        'Seafood',
        'Condiments',
        'Desserts',
        'Coffee',
        'Health supplements',
        'Grains',
        'Household essentials'
    ];


    return (
        <div className='filter'>
            <h1 className='filter__heading'>Groceries List</h1>

            <div className='filter__interactive'>
                <input 
                className='filter__input' 
                type='text' 
                name='searchGrocery' 
                placeholder='Enter the item...'
                />

                <select className='filter__category filter__select'>
                    {categories.map((category) => <option key={categories.indexOf(category)}>{ category }</option>)}
                </select>

                <select className='filter__price filter__select'>
                    <option>Default</option>
                    <option>Price ↑</option>
                    <option>Price ↓</option>
                </select>

                <button className='filter__button'>Reset the filters</button>
            </div>
        </div>
    )
}