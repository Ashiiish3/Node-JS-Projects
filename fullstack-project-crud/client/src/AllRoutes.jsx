import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Login";
import SignUp from "./pages/Singup";
import Homepage from "./pages/Homepage";
import Notespage from "./pages/Notespage"
const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/notes" element={<Notespage />}></Route>
        </Routes>
    );
};

export default Allroutes;