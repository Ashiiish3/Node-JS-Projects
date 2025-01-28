import React from 'react'
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center py-4 shadow-md'>
        <div className='flex items-center gap-5'>
          <h1 className='text-2xl font-bold'>Filmy<span className='text-[#ACFC03]'>World</span></h1>
          <h4 className='text-lg'>Movies</h4>
          <button className='text-lg'>
            <FiPlus />
          </button>
        </div>
        <div className='flex gap-3 items-center'>
          <div className="rounded-circle">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_IULLOXJT80cLu-eRqkRGrHY23yLEx4p0w&s"
              alt="user"
              className="mix-blend-multiply rounded-circle bg-red-500"
              width="30"
              height="30"
            />
          </div>
          <div className='flex gap-3'>
            <Link>
              <button className='bg-[#ACFC03] hover:bg-[#adfc03e1] text-black px-3 py-1 rounded-sm cursor-pointer font-semibold'>
                Log in
              </button>
            </Link>
            <Link>
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