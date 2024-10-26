import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookForm from '../Components/BookForm'
import BookList from '../Components/BookList'
import BookDetails from '../Components/BookDetails'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/Add' element={<BookForm />} />
        <Route path='/Edit/:id' element={<BookForm />} />
        <Route path='/Bookdetails/:id' element={<BookDetails />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
