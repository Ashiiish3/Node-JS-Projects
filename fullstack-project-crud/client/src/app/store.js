import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import { userAPI } from "../features/AllAPI/UserApi";

export const store = configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer
    },
    middleware: (preMiddlewares) => preMiddlewares().concat(userAPI.middleware),
    authReducer
})