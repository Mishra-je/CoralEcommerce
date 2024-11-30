import React from 'react'
import brand1 from '../../../public/images/company/brand1.png'
import brand2 from '../../../public/images/company/brand2.png'
import brand3 from '../../../public/images/company/brand3.png'
import brand4 from '../../../public/images/company/brand4.png'
import brand5 from '../../../public/images/company/brand5.png'
import image1 from '../../../public/images/category/image1.png'
import image2 from '../../../public/images/category/image2.png'
import image3 from '../../../public/images/category/image3.png'
import image4 from '../../../public/images/category/image4.png'
import image5 from '../../../public/images/category/image5.png'
import { Link } from 'react-router-dom'

const Catagory = () => {
  return (
    <div className="py-8 px-4">
    <div className="flex flex-wrap justify-center md:justify-between gap-4">
      <img 
        className="h-16 md:h-20 lg:h-22 object-contain" 
        src={brand1} 
        alt="Brand 1" 
      />
      <img 
        className="h-16 md:h-20 lg:h-22 object-contain" 
        src={brand2} 
        alt="Brand 2" 
      />
      {/* <img 
        className="h-16 md:h-20 lg:h-24 object-contain" 
        src={brand3} 
        alt="Brand 3" 
      /> */}
      <img 
        className="h-16 md:h-20 lg:h-22 object-contain" 
        src={brand4} 
        alt="Brand 4" 
      />
      <img 
        className="h-16 md:h-20 lg:h-22 object-contain" 
        src={brand5} 
        alt="Brand 5" 
      />
    </div>
    <div className='mt-8 flex flex-col md:flex-row items-center gap-4 '>
        <p className=' font-semibold uppercase text-center md:w-[40%]  roboto-bold   md:-rotate-90 text-4xl md:text-2xl xl:text-4xl   '>Explore new and popular styles</p>
        <div>
            <Link to='/'><img src={image1} alt='' className='w-full hover:scale-105 transition-all duration-200 ' ></img></Link>
        </div>
        <div className=' md:w-1/2' >
        <div className='grid grid-cols-2 gap-2 '>
        <Link to='/'><img src={image2} alt='' className='w-full hover:scale-105 transition-all duration-200 ' ></img></Link>
        <Link to='/'><img src={image3} alt='' className='w-full hover:scale-105 transition-all duration-200 ' ></img></Link>
        <Link to='/'><img src={image4} alt='' className='w-full hover:scale-105 transition-all duration-200 ' ></img></Link>
        <Link to='/'><img src={image5} alt='' className='w-full hover:scale-105 transition-all duration-200 ' ></img></Link>
        </div>
        
        </div>
    </div>
  </div>
  
  )
}

export default Catagory