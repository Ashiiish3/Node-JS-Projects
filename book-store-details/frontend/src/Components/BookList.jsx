import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookDetails from './BookDetails'

export default function BookList() {
  const [bookData, setBookData] = useState([])
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/product/books`)
      setBookData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="grid bg-red-300 w-[80%] m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {
        bookData.map((book, i) => <BookDetails key={i} book={book} />)
      }
    </div>
  )
}