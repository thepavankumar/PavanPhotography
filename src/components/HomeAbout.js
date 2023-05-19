import React from 'react'

import {  Link } from "react-router-dom";
 
function HomeAbout() {
  return (
    <div className="w-full text-center py-5 px-5  md:py-25 md:px-25">
        <h1  className="text-black text-2xl font-bold sm:text-base md:text-xl">Pavan Photography - Best Photography Bangalore </h1>
        <p className="mt-4 mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl md:text-xl"> 
        Welcome to Pavan's Photography! I am a dedicated and experienced photographer specializing in weddings, portraits, landscapes, and events. With a keen eye for detail and a passion for capturing meaningful moments, I aim to create authentic and timeless photographs that tell a story. I value the connections I make with my clients and strive to exceed expectations by creating a comfortable and enjoyable environment. I would be honored to be a part of your special moments and capture your unique story through my lens. Contact me today to discuss your photography needs and let's create something extraordinary together.
        </p>
        <Link to="/contact" class="px-4 py-3 mt-4 text-xl text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Contact</Link>
    </div>
  )
}

export default HomeAbout