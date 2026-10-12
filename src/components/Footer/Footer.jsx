import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import './footer.css';

export function Footer () {

    return (
        <footer className='footer'>
            <h3 className='footer__heading'>Get in touch with us:</h3>

            <div className='footer__buttons'>
                <button className='footer__button'>
                    <img src={twitterIcon} alt=''/>
                </button>

                <button className='footer__button'>
                    <img src={instagramIcon} alt=''/>
                </button>

                <button className='footer__button'>
                    <img src={facebookIcon} alt=''/>
                </button>
            </div>
        </footer>
    )
}