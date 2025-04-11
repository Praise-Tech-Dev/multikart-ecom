import React from 'react'

export default function Catalogue() {
  return (
    <div className='lg:flex md:flex mt-10 lg:mt-17 md:w-[90%] lg:w-[90%]  m-auto gap-0 md:gap-5 lg:gap-7'>
      <div className='h-[15vh] lg:h-[35vh] w-[90%] md:w-[50%] my-10 relative m-auto'>
        <img src='./collection/men_coll.jpg' className='w-full '/>
        <div className='uppercase absolute top-[25%] right-[20%] text-center '>
            <h4 className='text-orange-600 text-[16px] lg:text-[18px] font-medium'>10% off</h4>
            <h2 className='text-2xl lg:text-5xl text-[#222222] font-medium'>men</h2>
        </div>
      </div>
      <div  className='h-[15vh] lg:h-[35vh] w-[90%] md:w-[50%] lg:w-[50%] relative m-auto'>
        <img src='./collection/women_coll.jpg' className='w-full '/>
        <div className='uppercase absolute top-[25%] right-[20%] text-center'>
            <h4 className='text-orange-600 text-[16px] lg:text-[18px] font-medium'>10% off</h4>
            <h2 className='text-2xl lg:text-5xl text-[#222222] font-medium'>women</h2>
        </div>
      </div>
    </div>
  )
}
