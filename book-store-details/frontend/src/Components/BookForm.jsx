import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BookForm() {
  const {id} = useParams()
  console.log(id)
  const updateData = () => {
    console.log("updated")
  }
  const postData = async ({formData}) => {
    console.log("postData")
    try {
      const res = await axios.post(`http://localhost:4000/product/books`, formData)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  
  const FormObj = {
    image: "",
    title: "",
    author: "",
    price: "",
    description: ""
  }
  const bookValidationSchema = Yup.object({
    image: Yup.string().required("Image is Required."),
    title: Yup.string().required("Title is Required."),
    author: Yup.string().required("Author is Required."),
    price: Yup.number().required("Price is Required."),
    description: Yup.string()
  })
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: FormObj,
    validationSchema: bookValidationSchema,
    onSubmit: id ? updateData : postData
  })
  // (formData, aciton) => {
  //   console.log("form submitted.")
  //   console.log(formData)
  //   console.log(aciton)
  //   aciton.resetForm()
  // }
  const { image, title, author, price, description } = values;
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mb-16">
      <h1 className='text-3xl mb-5 font-semibold'>Add Product</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input type='text' placeholder='Author Name' name='author' value={author} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" >Add Product</button>
      </form>
    </div>
  )
}