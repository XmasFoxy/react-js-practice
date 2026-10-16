import mainBoard from '../../assets/sale-up-to.jpg';
import dealBoard from '../../assets/top-deal.png';
import simpleBoard from '../../assets/real-simple.png';
import weeksBoard from '../../assets/big-sale.png';
import './salesNet.css';
import { Link } from 'react-router';

export function SalesNet () {
    return (
        <section className='sales'>
            <Link to='/groceries' className='sales__main_board sales__scale'>
                <img src={mainBoard} alt='a card of 50% sale of vegetables' />
            </Link>

            <div className='sales__external_box'>
                <div className='sales__internal_box'>
                    <Link to='/groceries' className='sales__board sales__scale'>
                        <img src={dealBoard} alt='a card of 15% sale of organic food' />
                    </Link>

                    <Link to='/groceries' className='sales__board sales__scale'>
                        <img src={simpleBoard} alt='a card of 15% sale of specific groceries' />
                    </Link>
                </div>

                <Link to='/groceries' className='sales__weeks_board sales__scale'>
                    <img src={weeksBoard} alt='a card-button to go to the shopping page' />
                </Link>
            </div>
        </section>
    )
}