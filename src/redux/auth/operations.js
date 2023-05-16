import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petprojectonrendercom.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:4000/api'; // For testing api locally

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk('auth/registration', async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/auth/signup', credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/auth/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/auth/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/auth/current');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
