import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null,
    isAuth: null
}

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        userLogIn: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuth = action.payload.isAuth
        },
        userLogOut: (state, action) => {
            state.user = null
            state.token = null
            state.isAuth = null
        }
    }
})

export const { userLogIn, userLogOut } = authSlice.actions
export default authSlice.reducer