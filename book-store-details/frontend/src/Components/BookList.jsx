import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function BookList() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState([])
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/product/books`)
      setBookData(res.data)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/product/books/${id}`)
      toast.success("Book has been Deleted.")
      getData()
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }
  return (
    <div className='mt-8'>
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <NavLink to="/Add">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 mb-10">
          Add new Book
        </button>
      </NavLink>
      <div className="grid w-[80%] m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
         bookData.length > 0 ? bookData.map((book, i) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300" key={book._id}>
              <NavLink to={`/BookDetails/${book._id}`}>
                <div className="w-full h-48 md:h-64 lg:h-72 overflow-hidden">
                  <img src={book.Image} alt={book.Title} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-lg md:text-xl font-semibold mt-4 text-gray-800">{book.Title}</h2>
                <h4 className="text-md md:text-lg text-gray-600 mt-2">Author: {book.Author}</h4>
                <p className="text-lg font-medium text-gray-900 mt-2">Price: ${book.Price}</p>
                <p className="text-sm md:text-base text-gray-700 mt-4 line-clamp-3">{book.Description}</p>
              </NavLink>
              <div className="flex justify-center mt-4 gap-10">
                <NavLink to={`/Edit/${book._id}`}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300" >
                    Edit
                  </button>
                </NavLink>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300" onClick={() => deleteBook(book._id)}>
                  Delete
                </button>
              </div>
              <ToastContainer />
            </div>
          )) : <h1>There are no Books.</h1>
        }
      </div>
    </div>
  )
}