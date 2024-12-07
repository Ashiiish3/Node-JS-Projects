import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function ImageUpload() {
  const [image, setImage] = useState(null)
  const [showImages, setShowImages] = useState([])

  const UploadImage = async () => {
    console.log(image)
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
  useEffect(()=>{
    getImages()
  },[])
  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button onClick={UploadImage}>Upload Image</button>
      <hr />
      {
        showImages.map((ele, i)=>(
          <div key={i}>
            <img src={`http://localhost:2525/${ele.filename}`} alt="" width={200} />
          </div>
        ))
      }
    </div>
  )
}