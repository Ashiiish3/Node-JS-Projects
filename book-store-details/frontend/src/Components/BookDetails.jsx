import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export default function BookDetails() {
    const { id } = useParams()
    const [bookDetail, setBookDetail] = useState({})
    const getBookwithId = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/product/books/${id}`)
            setBookDetail(res.data)
        } catch (error) {
            toast.error("Something went wrong.")
        }
    }
    useEffect(() => {
        getBookwithId()
    }, [])
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300 w-[25%] my-10 m-auto">
            <div className="w-full h-48 md:h-64 lg:h-72 overflow-hidden">
                <img src={bookDetail.Image} alt={bookDetail.Title} className="w-full h-full object-contain" />
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-4 text-gray-800">{bookDetail.Title}</h2>
            <h4 className="text-md md:text-lg text-gray-600 mt-2">Author: {bookDetail.Author}</h4>
            <p className="text-lg font-medium text-gray-900 mt-2">Price: ${bookDetail.Price}</p>
            <p className="text-sm md:text-base text-gray-700 mt-4 line-clamp-3">{bookDetail.Description}</p>
        </div>
    )
}