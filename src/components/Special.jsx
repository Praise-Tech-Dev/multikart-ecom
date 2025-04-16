import React from 'react'
import SpecialData from '../utils/specialData'

export default function Special() {
    console.log(SpecialData, 'SpecialData');

    
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] max-w-[1400px] m-auto '>
        
        {
            SpecialData.map((data, index) => {
                
                return (
                    <div className=''>
                        
                        <div>
                            <img src={data.img1} className='w-[90%]'/>
                        </div>
                        <div className='text-left py-3'>
                            <div className=''>
                                <div className='text-amber-400'>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star'></i>
                                </div>
                            </div>
                            <h6 className='text-[#777777] text-[16px]'>{data.name}</h6>
                            <h4 className='text-[18px] font-medium'>{data.price}</h4>
                        </div>
                    </div>
                )
            })    
        }
        </div>
      
    </div>
  )
}
