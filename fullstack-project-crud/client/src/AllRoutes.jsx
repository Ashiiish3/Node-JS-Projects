import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Homepage } from "./pages/Homepage";
import { SignUp } from "./pages/Signup";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";

export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/sign-in" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/create" element={<CreateNote />}></Route>
        </Routes>
    );
};