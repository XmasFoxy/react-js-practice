import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js';
import accountReducer from './accountSlice.js';
import { groceriesApi } from './groceriesApi.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        account: accountReducer,
        [groceriesApi.reducerPath]: groceriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(groceriesApi.middleware),
});