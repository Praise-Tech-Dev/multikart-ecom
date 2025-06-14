import React from 'react'
import ServiceData from '../utils/serviceData'

export default function Service() {
    console.log(ServiceData, 'ServiceData') 

  return (
    <div className='border-y-1 border-[#d6d3d3] w-[90%] m-auto py-5 md:py-[30px] lg:py-[35px] md:flex lg:flex justify-center' id='features'>

        {
            ServiceData.map((data, index)=>{
                return (
                    <div className='text-center md:text-left py-2 md:px-2 md:flex lg:flex ' key={index}>
                        <div className='py-3 md:px-3 '>
                            <i className={`${data.icon} text-[#ff4c3b] text-4xl`}></i>
                        </div>
                        <div>
                            <h4 className='uppercase font-medium text-[16px]'>{data.text}</h4>
                            <p className="capitalize text-sm text-[#777777]">{data.text2}</p>
                        </div>
                    </div>
                )
            })
        }
      
      
      
    </div>
  )
}
