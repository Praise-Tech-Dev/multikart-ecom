import React from 'react'
import ourSpecialData from '../utils/ourSpecialData';

export default function OurSpecialCard() {
    console.log(ourSpecialData, 'OurSpecialData');
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] m-auto gap-5 md:gap-6 lg:gap-8'>
        
        {
            ourSpecialData.map((data, index) => {
                
                return (
                    <div className=''>
                        
                        <div>
                            <img src={data.img} className='w-full'/>
                        </div>
                        <div className='text-center py-3'>
                            
                            <h6 className='text-[#ff4c3b] text-[13px]'>{data.date}</h6>
                            <h4 className='uppercase text-[14px] md:text-[15px] lg:text-[16px] font-medium'>{data.desc}</h4>
                            <div className='pb-0.5 my-2 w-15 bg-[#ff4c3b] m-auto'></div>
                            <h6 className='text-[#777777] text-[14px]'>{data.author}</h6>
                        </div>
                    </div>
                )
            })    
        }
        </div>
      
    </div>
  )
}
