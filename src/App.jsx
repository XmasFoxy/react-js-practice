import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainPage } from "./pages/mainPage/mainPage";
import { AuthPage } from './pages/authPage/AuthPage';
import { Routes, Route } from "react-router";
import { GroceriesPage } from "./pages/groceriesPage/GroceriesPage";
import { CartPage } from "./pages/cartPage/CartPage";
import { AccountPage } from './pages/accountPage/AccountPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config.js';
import { getAccountDetails } from './utils/auth/getAccountDetails.js';
import { setAuthError, setUser } from './store/accountSlice.js';

export function App () {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.account);

    useEffect(() => {
        function handleUserChange(user) {
            if (user) {
                dispatch(setUser(getAccountDetails(user)));
            } else {
                dispatch(setUser(null));
            }
        }

        function handleAuthError(authError) {
            dispatch(setAuthError(authError.message));
        }

        const unsubscribe = onAuthStateChanged(auth, handleUserChange, handleAuthError);

        return unsubscribe;
    }, [dispatch]);

    if (isLoading) {
        return <div className='loader'><h1>Loading...</h1></div>;
    }

    if (error) {
        return <div className='loader'><p>Could not check your sign-in status: {error}</p></div>;
    }

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/groceries' element={<GroceriesPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/account' element={<AccountPage />} />
        </Routes>
    )
};