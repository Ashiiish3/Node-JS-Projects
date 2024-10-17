import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditProduct() {
  const { id } = useParams()
  const getDataFromId = async () => {
    try {
      const res = await axios.get(`http://localhost:3535/products/${id}`)
      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getDataFromId()
  }, [])
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className='text-3xl mb-5 font-semibold'>Edit Product</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <select
          name="category"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="">Select Your Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="text"
          placeholder="Price"
          name="price"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Edit Product"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        />
      </form>
    </div>
  )
}