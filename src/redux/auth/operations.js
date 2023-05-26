import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://petprojectonrendercom.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:4000/api'; // For testing api locally

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk('auth/registration', async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/auth/register', credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) {
        const { response } = error;
        if (response.status === 400 || response.status === 409) {
            toast.error(response.data.message);
            return thunkAPI.rejectWithValue(response.data.message);
        } else {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/auth/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) {
        const { response } = error;
        if (response.status === 400 || response.status === 401 || response.status === 409) {
            toast.error(response.data.message);
            return thunkAPI.rejectWithValue(response.data.message);
        } else {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/auth/logout');
        clearAuthHeader();
    } catch (error) {
        const { response } = error;
        if (response.status === 401) {
            toast.error(response.data.message);
            return thunkAPI.rejectWithValue(response.data.message);
        } else {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
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
        const { response } = error;
        if (response.status === 401) {
            toast.error(response.data.message);
            return thunkAPI.rejectWithValue(response.data.message);
        } else {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
});

export const updateUser = createAsyncThunk('auth/update', async (data, thunkAPI) => {
    try {
        const res = await axios.patch('/auth/update', data);

        return res.data;
    } catch (error) {
        const { response } = error;
        if (response.status === 401 || response.status === 404 || response.status === 500) {
            toast.error(response.data.message);
            return thunkAPI.rejectWithValue(response.data.message);
        } else {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
});
