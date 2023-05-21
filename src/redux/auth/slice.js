import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registration, logIn, logOut, refreshUser, updateUser } from './operations';

const extraActions = [registration, logIn, logOut, refreshUser, updateUser];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
    user: {
        id: null,
        name: null,
        email: null,
        avatar: null,
        birthday: null,
        phone: null,
        city: null,
        favoriteNotices: [],
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        return builder
            .addCase(registration.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, state => {
                state.user = {
                    name: null,
                    email: null,
                    avatar: null,
                    birthday: null,
                    phone: null,
                    city: null,
                    id: null,
                    favoriteNotices: [],
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
            .addMatcher(isAnyOf(...getActions('pending')), state => {
                state.isLoading = true;
            })
            .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;
