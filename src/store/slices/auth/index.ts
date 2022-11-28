import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from "../../../models/IUser";

const initialState: AuthState  = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    }
})

export const { setAuth, setError, setIsLoading, setUser } = authSlice.actions;

export default authSlice.reducer;