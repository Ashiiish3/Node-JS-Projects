import React, { useEffect, useState } from 'react'
import './App.css';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import axios from 'axios'
import AllRoutes from './AllRoutes/AllRoutes';
import { useNavigate } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <AllRoutes />
      {/* <BookList bookData={bookData} setBookData={setBookData} getData={getData} /> */}
    </div>
  );
}

export default App;