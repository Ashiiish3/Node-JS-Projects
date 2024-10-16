import React, { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const getData = async () => {
        try{
            let response = await axios.get(`http://localhost:3535`)
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getData()
    }, [])
  return (
    <div>
      sdf
    </div>
  )
}