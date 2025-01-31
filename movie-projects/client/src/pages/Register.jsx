import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="h-[85vh] flex justify-center items-center bg-gray-800">
      <div className="w-[400px] bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-white mb-4">Register</h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Your Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-300">Enter Your Password</label>
            <input
              type="password"
              placeholder="********"
              className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#adfc03bb]"
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