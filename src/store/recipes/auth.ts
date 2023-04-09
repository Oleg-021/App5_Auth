import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        email: "",
        isAuthenticated: false
    },
    reducers: {

    }
})