import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const postRegisterInfo = (e) => {
    e.preventDefault()
    try {
      // const res = axios.post("http://localhost:4000/auth/register", {name, email, password})
      // console.log(res)
      toast.success("OTP has been sent to your email. Please check your gmail.", { theme: "dark",autoClose: 3000 })
    } catch (error) {
      console.log(error)
      toast.error("Failed to send OTP and try again.", { theme: "dark", autoClose: 3000 })
    }
  }

  return (
    <div className="h-[85vh] flex justify-center items-center bg-gray-800">
      <div className="w-[400px] bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-white mb-4">Register</h1>
        <form className="space-y-4" onSubmit={(e) => postRegisterInfo(e)}>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Your Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Your Password</label>
            <input
              type="password"
              placeholder="********"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ACFC03] text-black font-semibold py-2 mt-4 rounded-md hover:bg-[#adfc03e1] transition cursor-pointer"
          >
            Register
          </button>
          <p className='text-center text-[15px] text-gray-400'>Already have an account? <Link to={'/signin'} className='text-[#ACFC03] font-semibold underline'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}