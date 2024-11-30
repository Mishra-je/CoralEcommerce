import React from 'react';
import collectionimage from '../../../public/images/collection-bg.png';
import zara from '../../../public/images/zara-logo.png';

const Collection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${collectionimage})` }}
      className="bg-cover bg-center bg-no-repeat xl:px-28 px-4 py-20 my-20"
    >
      <div className="h-auto flex flex-col md:flex-row justify-between items-center">
    
        <div className="md:w-1/2 h-[300px] hidden md:block  md:h-[500px]"></div>

        
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
      
          <img 
            src={zara} 
            alt="Zara Logo" 
            className="w-32 md:w-48 lg:w-56 mb-4" 
          />

     
          <p className="text-sm md:text-lg text-white capitalize my-4 px-4 md:px-0 md:w-2/3 leading-6 md:leading-[32px] text-center md:text-left">
            Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.
          </p>
          <button className='bg-white hover:bg-yellow-400 text-black px-8 py-3 rounded-md shadow-lg transition duration-300 flex items-center gap-3 mx-auto md:mx-0 robototext'>See Collections</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
