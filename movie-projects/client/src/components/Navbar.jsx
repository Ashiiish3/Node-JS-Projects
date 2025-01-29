import React from 'react'
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import userProfile from '../assets/Images/userProfile.png'

export default function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center py-4 shadow-md'>
        <div className='flex items-center gap-5'>
          <Link to={'/'}>
            <h1 className='text-2xl font-bold'>Filmy<span className='text-[#ACFC03]'>World</span></h1>
          </Link>
          <Link to={'/movielist'}>
          <h4 className='text-lg'>Movies</h4>
          </Link>
          <button className='text-lg cursor-pointer'>
            <Link to={'/createMovie'}>
              <FiPlus />
            </Link>
          </button>
        </div>
        <div className='flex gap-3 items-center'>
          <div className="rounded-full">
            <img
              src={userProfile}
              alt="user"
              className="rounded-full cursor-pointer"
              width="30"
              height="30"
            />
          </div>
          <div className='flex gap-3'>
            <Link to={'/signin'}>
              <button className='bg-[#ACFC03] hover:bg-[#adfc03e1] text-black px-3 py-1 rounded-sm cursor-pointer font-semibold'>
                Log in
              </button>
            </Link>
            <Link to={'/register'}>
              <button className='bg-[#ACFC03] hover:bg-[#adfc03e1] text-black px-3 py-1 rounded-sm cursor-pointer font-semibold'>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}