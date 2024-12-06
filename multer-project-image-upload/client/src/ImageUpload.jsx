import React, { useState } from 'react'
import axios from "axios"

export default function ImageUpload() {
  const [image, setImage] = useState(null)
  const UploadImage = async () => {
    console.log(image)
    try {
      const res = await axios.post("http://localhost:2525/photo/upload", { file: image }, { headers: { "content-type": "multipart/form-data" } })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button onClick={UploadImage}>Upload Image</button>
    </div>
  )
}