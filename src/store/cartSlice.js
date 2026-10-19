import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',

    initialState: [],

    reducers: {
        addItem: (state, action) => {
            const itemInCart = state.find((item) => item.id === action.payload.id);

            if (itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseItem: (state, action) => {
            const itemInCart = state.find((item) => item.id === action.payload);

            if (itemInCart && itemInCart.quantity > 1) {
                itemInCart.quantity -= 1;
            }
        },
        removeItem: (state, action) =>
            state.filter((item) => item.id !== action.payload),
    },
});

export const { addItem, decreaseItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;