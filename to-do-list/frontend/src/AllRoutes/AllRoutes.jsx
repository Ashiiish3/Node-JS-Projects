import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}
