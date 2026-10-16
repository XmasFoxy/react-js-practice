import { MainPage } from "./pages/mainPage/mainPage";
import { AuthPage } from './pages/authPage/AuthPage';
import { Routes, Route } from "react-router";
import { GroceriesPage } from "./pages/groceriesPage/GroceriesPage";
import { CartPage } from "./pages/cartPage/CartPage";

export function App () {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/groceries' element={<GroceriesPage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    )
};