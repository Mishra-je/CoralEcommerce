import React, { useEffect } from "react";
import { client } from "../../components/export.js";
import { FaStar } from "react-icons/fa"
import { FcBusinessman } from "react-icons/fc";
const Client = () => {
  return (
    <div
      className='bg-gray-100'   >
      <section
        id="textimonials"
        className=" lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-10  gap-20  "
      >
        <div className=" flex flex-col justify-center items-start gap-4 text-black " >
        <div className="flex flex-row items-center gap-1 md:text-2xl">

        <h1 data-aos="zoom-in" className=" text-black robotomedium " >OUR CLIENTS</h1>
        <FcBusinessman className="text-2xl" />
        </div>
        <h3  data-aos="zoom-in" className=" text-Black  robotomedium text-[40px] font-semibold leading-10   " >What our clients saying about us</h3>
       
        </div>
        <div id="client-box" className= " grid lg:grid-cols-3 grid-cols-1 justify-center items-center w-full gap-8 " >
          {
            client.map((item,index) => {
              return(
                <div data-aos="zoom-in" data-aos-delay="200" key={index} className=" bg-white dark:bg-gray-900 hover:bg-blue-600 hover:text-white cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full " >
                  <div className=" flex justify-start items-center w-full gap-4" >
                    <img src={item.image} className=" w-[70px] transform hover:scale-110 transition-transform duration-300  " alt=""  />
                    <div className=" flex flex-col justify-center items-start gap-1" >
                      <h1 className=" text-xl text-black font-semibold dark:text-white  " >{item.name}</h1>
                      <h1 className=" text-slate-600 dark:text-white " >{item.text}</h1>
                     
                    </div>
                  </div>
                  <p className=" text-md text-justify text-slate-600 dark:text-white " >{item.feedback}</p>
                  <div className=" flex justify-start items-start gap-2 w-full " >
                    <FaStar className=" size-4 text-yellow-400  " />
                    <FaStar className=" size-4 text-yellow-400  " />
                    <FaStar className=" size-4 text-yellow-400  " />
                    <FaStar className=" size-4 text-yellow-400  " />
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
};

export default Client;
