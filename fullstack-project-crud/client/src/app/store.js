import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import { userAPI } from "../features/AllAPI/UserApi";
import { notesAPI } from "../features/AllAPI/NoteApi";

export const store = configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer,
        [notesAPI.reducerPath]: notesAPI.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware, notesAPI.middleware)
})