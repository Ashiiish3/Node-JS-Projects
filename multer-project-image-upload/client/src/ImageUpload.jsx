import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function ImageUpload() {
  const [image, setImage] = useState(null)
  const [showImages, setShowImages] = useState([])

  const UploadImage = async () => {
    try {
      const res = await axios.post("http://localhost:2525/photo/upload", { file: image }, { headers: { "content-type": "multipart/form-data" } })
      getImages()
    } catch (error) {
      console.log(error)
    }
  }
  const getImages = async () => {
    try {
      const res = await axios.get("http://localhost:2525/photo/getImage")
      setShowImages(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getImages()
  }, [])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        {/* File Input */}
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="block w-full max-w-xs text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Upload Button */}
        <button
          onClick={UploadImage}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Upload Image
        </button>
      </div>
      <hr className="my-8 border-gray-300" />
      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[65%] p-6 m-auto gap-6 border border-gray-500 rounded-lg shadow-md">
        {showImages.map((ele, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-52 h-64"
          >
            <img
              src={`http://localhost:2525/${ele.filename}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}