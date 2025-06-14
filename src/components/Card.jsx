import ecomData from '../utils/ecomApi'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react'; 
// import { addToCart } from '../utils/cart';

function Card() {
// const [cartItems, setCartItems] = useState([]);
// const updateQuantity = (id, quantity) => {
//     // if (quantity < 1) return; // Prevent quantity less than 1
    
//     const newData = ecomData.topCollection.filter((item) => item.id === id)
//     setCartItems(newData)

//     addToCart(newData[0])
//     console.log(newData[0])
    
//     // setCartItems((prevItems) =>
//     //   prevItems.map((item) =>
//     //     item.id === id ? { ...item, quantity } : item
//     //   )
//     // );

      
//   };
  
    console.log(ecomData, 'ecomData');
    // console.log(cartItems)
    // const navigate = useNavigate()

    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        autoplaySpeed: 30000,
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

            ecomData.topCollection.map((data, index) => {
                
                return (
                    <div key={index} className=''>
                      <Link to={`/single/${data.id}`}>
                        <div>
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
                                <p className='text-[#777777] text-[16px]'>{data.item}</p>
                                {/* <p onClick={()=>navigate(`/single/${data.id}`)}><h6 className='text-[#777777] text-[16px]'>{data.name}</h6></p> */}
                                <h4 className='text-[18px] font-medium'>{data.price}</h4>
                            </div>
                          </div>
                      </Link>
                        
                      {/* <button className="bg-red-500 text-white font-semibold rounded px-6 py-2 hover:bg-red-600 transition" onClick={navigate(`/cart`)}>
                      ADD TO CART
                    </button> */}
                    {/* <button className="bg-red-500 text-white font-semibold rounded px-6 py-2 hover:bg-red-600 transition" onClick={() => updateQuantity(data.id, data.quantity)}>
                      ADD TO CART
                    </button> */}
                        
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
