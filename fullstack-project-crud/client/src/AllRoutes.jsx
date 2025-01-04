import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Homepage } from "./pages/Homepage";
import { SignUp } from "./pages/Signup";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import UpdateNote from "./pages/UpdateNote";
import NoteDetails from "./pages/NoteDetails";
import { PrivateRoutes } from "./components/PrivateRoutes";

export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/sign-in" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/notes" element={
                <PrivateRoutes>
                    <Notes />
                </PrivateRoutes>
            }></Route>
            <Route path="/create" element={<CreateNote />}></Route>
            <Route path="/updateNote/:noteId" element={<UpdateNote />}></Route>
            <Route path="/noteDetails/:noteId" element={<NoteDetails />}></Route>
            <Route path="*" element={<h1>Page Not found.</h1>}></Route>
        </Routes>
    );
};