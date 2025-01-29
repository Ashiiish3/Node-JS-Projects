import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../Pages/Register'
import SignIn from '../Pages/SignIn'
import MovieForm from '../Pages/MovieForm'
import MovieList from '../Pages/MovieList'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/signin'} element={<SignIn />} />
      <Route path={'/createMovie'} element={<MovieForm />} />
      <Route path={'/movielist'} element={<MovieList />} />
      <Route path={'*'} element={<h1>Page not found.</h1>} />
    </Routes>
  )
}