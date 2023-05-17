import React, { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [MenuVisible, setMenuVisible] = useState(true);
  const toggleDiv = () => {
    setMenuVisible(!MenuVisible);
  };
  return (
    <header className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="-m-1.5 p-1.5">
          <img className="w-60" src={logo} alt="" />
        </div>
        <div className="space-y-2 pointer visibe md:hidden" onClick={toggleDiv}>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
        </div>
        {MenuVisible &&
        <div className="w-full  md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        }
      </div>
    </header>
  );
}

export default Header;
