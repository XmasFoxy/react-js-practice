import { MainPage } from "./pages/mainPage/mainPage";
import { AuthPage } from './pages/authPage/AuthPage';
import { Routes, Route } from "react-router";

export function App () {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={<AuthPage />} />
        </Routes>
    )
};