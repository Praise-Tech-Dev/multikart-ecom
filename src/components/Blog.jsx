import React from 'react'
import OurSpecialCard from './OurSpecialCard'

export default function Blog() {
  return (
    <div>
        <div className='text-center py-[25px]'>
            <h4 className="text-[#ff4c3b] text-[16px] md:text-[16px] lg:text-[18px] pt-[15px] md:pt-[15px] lg:pt-[35px]">Our Collections</h4>
            <h2 className="uppercase text-[22px] md:text-[28px] lg:text-[32px] font-medium">special products</h2>
            <div className='pb-0.5 my-2 w-15 bg-[#ff4c3b] m-auto'></div>
            
        </div>
        <OurSpecialCard/>
    </div>
  )
}
