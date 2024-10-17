import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'
import AddProduct from '../Components/AddProduct'

export default function Home() {
  const [productData, setProductData] = useState([])
  const getData = async () => {
    try {
      let response = await axios.get(`http://localhost:3535/products`)
      setProductData(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <AddProduct getData={getData} />
      <div className='w-[80%] m-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {productData.map((ele, ind) => <SingleProduct key={ind} ele={ele} getData={getData} />)}
      </div>
    </div>
  )
}