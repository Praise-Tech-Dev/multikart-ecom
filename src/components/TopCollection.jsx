import React from 'react'
import Card from './Card'
import Slider from "react-slick";

export default function TopCollection() {
  
  

  return (
    <div id='shop'>
      
        <div className='text-center pt-13'>
          <h4 className='capitalize text-orange-600'>Special offer</h4>
          <h2 className='text-3xl text-[#222222] uppercase font-medium'>Top collection</h2>
          <div className='pb-0.5 my-2 w-15 bg-orange-600 m-auto'></div>
          <p className='text-wrap text-[14px] text-[#777777] w-[90%] md:w-[45%] lg:w-[35%] m-auto pb-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <Card/>
        </div>
      
    </div>
    
  )
}


