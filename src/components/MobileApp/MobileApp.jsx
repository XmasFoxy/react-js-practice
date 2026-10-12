import appStore from '../../assets/app-store.svg';
import googlePlay from '../../assets/google-play.svg';
import appImg from '../../assets/mobile-screens.png';
import './mobileApp.css';

export function MobileApp () {

    const description = 'Download the Resource app today and experience the comfort of ordering your favorite food from wherever you are';

    return (
        <section className='mobileApp'>
            <div className='mobileApp__content'>
                <h3 className='mobileApp__heading'>Download our app to start ordering</h3>

                <p>{description}</p>

                <div className='mobileApp__interactive'>
                    <button className='mobileApp__button'>
                        <div className='mobileApp__logo'>
                            <img src={appStore} alt=''/>
                        </div>

                        <div className='mobileApp__button_text'>
                            <p>Available on the</p>

                            <h4>App Store</h4>
                        </div>
                    </button>

                    <button className='mobileApp__button'>
                        <div className='mobileApp__logo'>
                            <img src={googlePlay} alt=''/>
                        </div>

                        <div className='mobileApp__button_text'>
                            <p>Available on the</p>

                            <h4>Google Play</h4>
                        </div>
                    </button>
                </div>
            </div>

            <div className='mobileApp__img'>
                <img src={appImg} alt='a picture of two phones with out application' />
            </div>
        </section>
    )
}