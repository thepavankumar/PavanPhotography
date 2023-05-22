import React, { useState , useEffect} from "react";
import logo from "../assets/logo.png";


import {  NavLink , Link } from "react-router-dom";

function Header() {
  const [MenuVisible, setMenuVisible] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuVisible(false);
      } else {
        setMenuVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDiv = () => {
    setMenuVisible(!MenuVisible);
  };

  const hideMenu = () => {
    if (window.innerWidth < 768) {
      setMenuVisible(!MenuVisible);
    }
    window.scrollTo(0, 0);
  }

  
  return (
    <header className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="-m-1.5 p-1.5">
        <Link to="/" className='text-zinc-950'> <img className="w-60" src={logo} alt="" /></Link>
        </div>
        <div className="space-y-2 pointer visibe md:hidden" onClick={toggleDiv}>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
        </div>
        {MenuVisible &&
        <div className="w-full  md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="py-2 md:py-0 lg:py-0">
               <NavLink to="/" className='text-zinc-950'  onClick={hideMenu}>Home</NavLink>
            </li>
            <li  className="py-2 md:py-0 lg:py-0">
               <NavLink to="/about" onClick={hideMenu}>About</NavLink>
            </li>
            
            <li  className="py-2 md:py-0 lg:py-0">
               <NavLink to="/portfolio"  onClick={hideMenu}>Portfolio</NavLink>
            </li>
            <li  className="py-2 md:py-0 lg:py-0">
               <NavLink to="/contact"  onClick={hideMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>
        }
      </div>
    </header>
  );
}

export default Header;
