import React, { useState } from 'react'

export default function MovieForm() {
  return (
    <div className="h-[85vh] flex justify-center items-center bg-gray-800">
      <div className="w-[450px] bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-white mb-4">Create New Movie Note</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Title</label>
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Select Category</label>
            <select className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]">
              <option>Select Category</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Sci-Fi</option>
              <option>Romance</option>
              <option>Thriller</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Director Name</label>
            <input
              type="text"
              placeholder="Director Name"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Release Year</label>
            <input
              type="number"
              placeholder="Release Year"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Description</label>
            <textarea
              placeholder="Description"
              rows="3"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ACFC03] text-black font-semibold py-2 mt-4 rounded-md hover:bg-[#adfc03e1] transition cursor-pointer"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}