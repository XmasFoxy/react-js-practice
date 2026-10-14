import { useNavigate } from "react-router";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileApp } from "../../components/MobileApp/MobileApp";
import { NavigationCard } from "../../components/NavigationCard/NavigationCard";
import { SalesNet } from "../../components/SalesNet/SalesNet";
import './mainPage.css';


export function MainPage () {

    return (
        <div className='main_page'>
            <Header />
            <main className='main_page__content'>
                <SalesNet />
                <MobileApp />
                <NavigationCard />
            </main>
            <Footer />
        </div>
    )
}