import React from 'react'

export default function BookDetails({ book }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-48 md:h-64 lg:h-72 overflow-hidden">
        <img src={book.Image} alt={book.Title} className="w-full h-full object-contain" />
      </div>
      <h2 className="text-lg md:text-xl font-semibold mt-4 text-gray-800">{book.Title}</h2>
      <h4 className="text-md md:text-lg text-gray-600 mt-2">Author: {book.Author}</h4>
      <p className="text-lg font-medium text-gray-900 mt-2">Price: ${book.Price}</p>
      <p className="text-sm md:text-base text-gray-700 mt-4 line-clamp-3">{book.Description}</p>
      <div className="flex justify-center mt-4 gap-10">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
          Edit
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300">
          Delete
        </button>
      </div>
    </div>
  )
}