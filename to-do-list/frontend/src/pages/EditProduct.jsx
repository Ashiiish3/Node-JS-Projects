import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EditProduct() {
  const { id } = useParams()
  const formObj = {
    image: "",
    title: "",
    category: "",
    price: "",
    description: ""
  }
  const [editForm, setEditForm] = useState(formObj)
  const {image, title, category, price, description} = editForm
  const getDataFromId = async () => {
    try {
      const res = await axios.get(`http://localhost:3535/products/${id}`)
      setEditForm(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const inputChange = (e) => {
    setEditForm({...editForm, [e.target.name]: e.target.value})
  }
  const EditFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3535/products/${id}`, editForm)
      alert("Your Data has been Edited.")
      setEditForm(formObj)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataFromId()
  }, [])
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className='text-3xl mb-5 font-semibold'>Edit Product</h1>
      <form className="space-y-4" onSubmit={(e)=>EditFormSubmit(e)}>
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <select
          name="category"
          value={category}
          onChange={(e)=>inputChange(e)}
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
          value={price}
          onChange={(e)=>inputChange(e)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e)=>inputChange(e)}
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