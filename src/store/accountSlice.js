import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        user: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        clearUser: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        },
        setAuthError: (state, action) => {
            state.user = null;
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setUser, clearUser, setAuthError } = accountSlice.actions;

export default accountSlice.reducer;