import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import BookForm from '../Components/BookForm'
import BookList from '../Components/BookList'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/Add' element={<BookForm />} />
        <Route path='/Edit/:id' element={<BookForm />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
