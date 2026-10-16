import { GroceriesFilter } from "../../components/GroceriesFilter/GroceriesFilter";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import './groceriesPage.css';
import { GroceriesList } from "../../components/GroseriesList/GroceriesList";

export function GroceriesPage () {


    return (
        <div className='groceries_page'>
            <Header />

            <main className='groceries_page__main'>
                <GroceriesFilter />
                
                <GroceriesList />
            </main>

            <Footer />
        </div>
    )
}