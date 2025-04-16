import React from 'react'
import CardData from '../utils/cardData'
import Slider from 'react-slick';

function Card() {
    console.log(CardData, 'CardData');

    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
  return (
    <div>
        <div className=' w-[90%] m-auto justify-center items-center max-w-[1400px]'>
            <Slider {...settings}>
            {

            CardData.map((data, index) => {
                
                return (
                    <div className=''>
                        <div>
                            <img src={data.img1} className='w-[95%]'/>
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
            </Slider>
        
        </div>
      
    </div>
  )
}

export default Card;
