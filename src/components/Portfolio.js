import React from "react";


import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpg";
import image4 from "../assets/gallery/image4.jpg";
import image5 from "../assets/gallery/image5.jpg";
import image6 from "../assets/gallery/image6.jpg";
import image7 from "../assets/gallery/image7.jpg";
import image8 from "../assets/gallery/image8.jpg";
import image9 from "../assets/gallery/image9.jpg";
import image10 from "../assets/gallery/image10.jpg";
import image11 from "../assets/gallery/image11.jpg";
import image12 from "../assets/gallery/image12.jpg";
import image13 from "../assets/gallery/image13.jpg";
import image14 from "../assets/gallery/image14.jpg";

function Portfolio() {
  return (
    <div className="container mx-auto px-4">
       <div className="w-full text-center my-15 py-5 px-5 md:my-100  md:py-25 md:px-25">
        <p className="mt-4 mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl md:text-xl"> 
        Capturing moments, revealing emotions, and painting stories with light is my passion as a photographer. With a keen eye for detail and a deep appreciation for aesthetics, I strive to create stunning visual narratives that leave a lasting impression.
        </p>
      </div>
      {/* gallery here  */}
       
      <div className="gallery">
        <div className="mb-4">
          <img
            src={image2}
            alt="Image 2"
            className="w-full h-auto portfolio-img"
          />
        </div>
        <div className="mb-4">
          <img
            src={image3}
            alt="Image 3"
            className="w-full h-auto portfolio-img"
          />
        </div>
        <div className="mb-4">
          <img
            src={image4}
            alt="Image 4"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image5}
            alt="Image 5"
            className="w-full h-auto portfolio-img"
          />
        </div>

        

        <div className="mb-4">
          <img
            src={image7}
            alt="Image 7"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image8}
            alt="Image 8"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image9}
            alt="Image 9"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image10}
            alt="Image 10"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image11}
            alt="Image 11"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image12}
            alt="Image 12"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image13}
            alt="Image 13"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image14}
            alt="Image 14"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image1}
            alt="Image 6"
            className="w-full h-auto portfolio-img"
          />
        </div>

        <div className="mb-4">
          <img
            src={image6}
            alt="Image 6"
            className="w-full h-auto portfolio-img"
          />
        </div>
     
    </div>
    </div>
  );
}

export default Portfolio;
