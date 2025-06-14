import React from 'react'
import ecomData from '../utils/ecomApi'
import Slider from 'react-slick'

export default function OurSpecialCard() {
  console.log(ecomData, 'ecomData');

    var settings = {
        
        infinite: true,
        autoplay:true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div id='blog'>
        <div className='w-[90%] m-auto max-w-[1400px]'>
            <Slider {...settings}>
            {
            ecomData.ourSpecialCollection.map((data, index) => {
                
                return (
                    <div className='' key={index}>
                        
                        <div>
                            <img src={data.img} className='w-[95%]'/>
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
            </Slider>    
        
        </div>
      
    </div>
  )
}
