import React from 'react'
import { Link } from 'react-router-dom';

function CopyrightFooter() {
  return (
    <footer className="bg-black text-white py-4">
  <div className="container mx-auto text-center">
    <p className="text-sm">© 2023 &nbsp;
    <span className="underline">
    <Link to="https://www.instagram.com/thepavankumar/" target="_blank" rel="noopener noreferrer">
    Pavan Kumar
    </Link>
    </span> &nbsp;
    All rights reserved.</p>
  </div>
</footer>
  )
}

export default CopyrightFooter