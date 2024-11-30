import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import banner from '../../../public/images/banner.png';

const Banner = () => {
  return (
    <div className="bg-gray-300  xl:px-28 px-4">
      <div className=" py-8 md:py-16 flex flex-col md:flex-row-reverse justify-between items-center gap-10 lg:gap-20">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Discover Collections
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 robototext">
            Explore and shop unique collections from a wide variety of brands and best deals on backpacks and travel bags on Flipkart to find something both stylish and affordable
          </p>
          <button className="bg-black hover:bg-blue-600 text-white px-8 py-3 rounded-md shadow-lg transition duration-300 flex items-center gap-3 mx-auto md:mx-0 robototext">
            Shop Now <FaShoppingBag />
          </button>
        </div>

        {/* Banner Image */}
        <div className="md:w-1/2">
          <img 
            src={banner} 
            alt="Collections Banner" 
            className="rounded-xl shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
