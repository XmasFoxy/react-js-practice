import mainBoard from '../../assets/sale-up-to.jpg';
import dealBoard from '../../assets/top-deal.png';
import simpleBoard from '../../assets/real-simple.png';
import weeksBoard from '../../assets/big-sale.png';
import './salesNet.css';

export function SalesNet () {
    return (
        <section className='sales'>
            <div className='sales__main_board sales__scale'>
                <img src={mainBoard} alt='a card of 50% sale of vegetables' />
            </div>

            <div className='sales__external_box'>
                <div className='sales__internal_box'>
                    <div className='sales__board sales__scale'>
                        <img src={dealBoard} alt='a card of 15% sale of organic food' />
                    </div>

                    <div className='sales__board sales__scale'>
                        <img src={simpleBoard} alt='a card of 15% sale of specific groceries' />
                    </div>
                </div>

                <div className='sales__weeks_board sales__scale'>
                    <img src={weeksBoard} alt='a card-button to go to the shopping page' />
                </div>
            </div>
        </section>
    )
}