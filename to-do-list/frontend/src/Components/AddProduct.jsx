import axios from 'axios'
import React, { useState } from 'react'

export default function AddProduct({getData}) {
    const formObj = {
        image: "",
        title:"",
        category: "",
        price: "",
        description: ""
    }
    const [formData, setFormData] = useState(formObj)
    const {image, title, category, price, description} = formData

    const submitForm = async (e) => {
        e.preventDefault()
        try {
           await axios.post(`http://localhost:3535/products`, formData)
           getData()
           alert("Data has been Added.")
           setFormData(formObj)
        } catch (error) {
            console.log(error)
        }
    }
    const inputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h1 className='text-3xl mb-5 font-semibold'>Add Product</h1>
            <form className="space-y-4" onSubmit={(e)=>submitForm(e)}>
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
                    value="Add Product"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                />
            </form>
        </div>
    )
}
