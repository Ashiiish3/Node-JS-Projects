import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SingleProduct({ ele, getData }) {
    const HandleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3535/products/${id}`);
            getData()
            alert("Your Product has been deleted.");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={ele.image} alt="" className="h-full object-cover" />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4">
                {ele.title}
            </h1>
            <h4 className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                Category: {ele.category}
            </h4>
            <h4 className="text-sm sm:text-base md:text-lg">
                Price: {ele.price}$
            </h4>
            <div className="p-4 flex justify-center gap-5">
                <NavLink to={`/Edit/${ele.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Edit
                    </button>
                </NavLink>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    onClick={() => HandleDelete(ele.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}