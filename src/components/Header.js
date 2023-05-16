import React from 'react'
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="bg-white py-3.5 px-4">
          <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-60"  src={logo} alt="" />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
    </header>
  )
}

export default Header