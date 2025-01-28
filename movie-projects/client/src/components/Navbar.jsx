import React from 'react'
import { FiPlus } from "react-icons/fi";

export default function Navbar() {
  return (
    <div>
      <div className='flex justify-between item-center bg-red-100 w-[80%] m-auto'>
        <div>
          <h1>Filmy<span>world</span></h1>
          <h4>Movies</h4>
          <button>
            <FiPlus />
          </button>
        </div>
        <div>
          <button>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}