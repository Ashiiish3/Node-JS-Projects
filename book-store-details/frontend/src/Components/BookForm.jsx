import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookForm() {
  const navigate = useNavigate();
  const { id } = useParams()
  console.log(id)
  const postData = async (values, action) => {
    try {
      const res = await axios.post(`http://localhost:4000/product/books`, values)
      console.log(res)
      toast.success("Data has been Added.");
      action.resetForm()
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }
  const updateBook = async (values, action) => {
    try {
      const res = await axios.put(`http://localhost:4000/product/books/${id}`, values)
      console.log(res)
      toast.success("Book has been updated.")
      action.resetForm()
    } catch (error) {
      toast.error("Something went wrong.")
      console.log("Something went wrong.")
    }
  }
  const FormObj = {
    Image: "",
    Title: "",
    Author: "",
    Price: "",
    Description: ""
  }
  const bookValidationSchema = Yup.object({
    Image: Yup.string().required("Image is Required."),
    Title: Yup.string().required("Title is Required."),
    Author: Yup.string().required("Author is Required."),
    Price: Yup.number().required("Price is Required."),
    Description: Yup.string()
  })
  const { values, handleSubmit, handleChange, setValues, errors } = useFormik({
    initialValues: FormObj,
    validationSchema: bookValidationSchema,
    onSubmit: id ? updateBook : postData
  })
  useEffect(() => {
    if (id) {
      const getBookWithId = async () => {
        try {
          const res = await axios.get(`http://localhost:4000/product/books/${id}`)
          setValues(res.data)
        } catch (error) {
          toast.error("Something went wrong.")
          console.log("Something went wrong.")
        }
      }
      getBookWithId()
    }
  }, [id])
  const { Image, Title, Author, Price, Description } = values;
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mb-16">
      <h1 className='text-3xl mb-5 font-semibold'>{id ? "Update Product" : "Add Product"}</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          name="Image"
          value={Image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Title"
          name="Title"
          value={Title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input type='text' placeholder='Author Name' name='Author' value={Author} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" />
        <input
          type="text"
          placeholder="Price"
          name="Price"
          value={Price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          name="Description"
          value={Description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" type='submit'>{id ? "Update Book" : "Add Book"}</button>
      </form>
      <ToastContainer />
    </div>
  )
}