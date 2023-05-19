import React from 'react'
import {  Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
  <div className="container mx-auto py-8 px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Navigation Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Navigation</h3>
        <ul className="space-y-2">
          <li>
          <Link to="/" className="text-gray-400 hover:text-white">
              Home
          </Link>
          </li>
          <li>
          <Link to="/about" className="text-gray-400 hover:text-white">
              About
              </Link>
          </li>
          <li>
          <Link to="/portfolio"  className="text-gray-400 hover:text-white">
              Portfolio
              </Link>
          </li>
          <li>
          <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact
              </Link>
          </li>
        </ul>
      </div>
      {/* Contact Information Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p className="text-gray-400"><strong>Email:</strong> pavan.kumar23@outlook.com</p>
        <p className="text-gray-400"><strong>Phone:</strong> 8495843258</p>
      </div>
      {/* Social Media Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Social Media</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer