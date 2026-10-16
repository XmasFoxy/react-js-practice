import { useNavigate } from 'react-router';
import './navigationCard.css';


export function NavigationCard () {
    const desription = 'With its inviting atmosphere and delicious grocery options, the Super Shop Resource is a popular destination for food lovers and those seeking a warm and inviting space to enjoy their favorite beverage.'
    const navigate = useNavigate();

    return (
        <section className='navigationCard'>
            <div className='navigationCard__content'>   
                <h2 className='navigationCard__heading'>Start shopping with us!</h2>

                <p className='navigationCard__description'>{desription}</p>
            </div>
            
            <button 
            className='navigationCard__button'
            onClick={() => {
                navigate('/groceries');
                window.scrollTo(0, 0);
            }}
            >Groceries</button>
        </section>
    )
}