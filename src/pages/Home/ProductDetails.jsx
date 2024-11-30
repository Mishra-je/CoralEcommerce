import React from "react";
import { FaUser,FaStar } from "react-icons/fa";

const ProductDetails = ({ details = {} }) => {
  const { description = "", highlights = [], details: productDetails = "", reviews = [] } = details;
//   console.log("Produ",productDetails)

  return (
    <div>
   
      <h2 className=" text-3xl text-center my-4 roboto-bold   ">Full Details</h2>
      {/* <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 "> */}
      <p>{productDetails}</p>
<h2 className="md:text-xl text-lg font-semibold my-2">Highlights</h2>
<ul className="text-sm font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
  {highlights.map((highlight, index) => (
    <li
      key={index}
      className="my-2 hover:bg-gray-200 bg-gray-100 text-black robotomedium  text-xl  py-4 px-4 rounded-xl"
    >
      .{highlight}
    </li>
  ))}
</ul>

      {/* </div> */}
     

    <h2 className="md:text-xl text-lg  font-semibold my-2 ">Description</h2>
    <div className="bg-yellow-200 mb-4 px-4 py-4 font-normal rounded-tr-xl rounded-bl-3xl hover:bg-red-400 hover:text-white  ">
      <p>{description}</p>
    </div>
    <div className="mt-8 mb-8">
  <h2 className="text-lg font-bold text-gray-900">Customer Reviews</h2>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {reviews.map((review, index) => (
      <div
        key={index}
        className="p-4 rounded-xl bg-gray-300 flex flex-col justify-between"
      >
        <div className="flex items-center justify-start space-x-4">
          {/* User Icon and Star Ratings */}
          <FaUser className="text-4xl text-gray-600" />
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill(0)
              .map((_, starIndex) => (
                <FaStar
                  key={starIndex}
                  className={
                    starIndex < review.rating ? 'text-yellow-400' : 'text-gray-300'
                  }
                />
              ))}
          </div>
        </div>
        {/* Review Comment */}
        <p className="mt-3 text-sm text-gray-700">{review.comment}</p>
      </div>
    ))}
  </div>
</div>

     
   

    </div>
  );
};

export default ProductDetails;
