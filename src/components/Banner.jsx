import React from 'react'
import Slider from 'react-slick'

function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
      <div id='hero' className='relative items-center p-3 lg:p-60 md:p-5 b max-w-xm h-[50vh] md:h-[60vh] lg:h-[75vh]'>
        <div className='absolute top-[40%] text-center'>
            <p className='text-[16px] md:text-[16px] lg:text-[18px] text-[#777777] tracking-[5.4px] '>Welcome To Fashion</p>
            <h1 className='uppercase md:text-[36px] lg:text-6xl font-medium md:mb-4 lg:mb-7'>Men fashion</h1>
            <button className='text-white bg-[#ff4c3b] lg:py-3 md:py-2 px-5 uppercase'>Shop now</button>
        </div> 
      </div>
      <div id='hero_w' className='relative items-center p-3 lg:p-60 md:p-5 b max-w-xm h-[50vh] md:h-[60vh] lg:h-[75vh]'>
        <div className='absolute top-[40%] text-center'>
            <p className='text-[16px] md:text-[16px] lg:text-[18px] text-[#777777] tracking-[5.4px] '>Welcome To Fashion</p>
            <h1 className='uppercase md:text-[36px] lg:text-6xl font-medium md:mb-4 lg:mb-7'>women fashion</h1>
            <button className='text-white bg-[#ff4c3b] lg:py-3 md:py-2 px-5 uppercase'>Shop now</button>
        </div> 
      </div>  
    </Slider>
    </div>
    
    
  );
}

export default Banner;
