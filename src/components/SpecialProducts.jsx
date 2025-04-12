import React from 'react'
import Special from './Special'

export default function SpecialProducts() {
  return (
    <div>
        <div className='text-center py-[25px]'>
            <h4 className="text-[#ff4c3b] text-[16px] md:text-[16px] lg:text-[18px] pt-[15px] md:pt-[15px] lg:pt-[35px]">Exclusive Products</h4>
            <h2 className="uppercase text-[22px] md:text-[28px] lg:text-[32px] font-medium">special products</h2>
            <div className='pb-0.5 my-2 w-15 bg-orange-600 m-auto'></div>
            <ul className='uppercase flex justify-center text-[18px] tracking-[1.5px]'>
                <li className='px-[5px] md:px-[25px] lg:px-[25px]'>new arrival</li>
                <li className='px-[5px] md:px-[25px] lg:px-[25px]'>featured</li>
                <li className='px-[5px] md:px-[25px] lg:px-[25px]'>special</li>
            </ul>
        </div>
        <Special/>
    </div>
  )
}
