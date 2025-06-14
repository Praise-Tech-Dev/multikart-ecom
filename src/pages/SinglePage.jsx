import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ecomData from "../utils/ecomApi";
import { useParams } from "react-router-dom";
import Subsrcibe from "../components/Subsrcibe";
import FooterBottom from "../components/FooterBottom";
import { addToCart } from "../utils/cart";

export default function SinglePage() {
  const [data, setData] = useState(null);
  const url_params = useParams();
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (id, quantity) => {
    // if (quantity < 1) return; // Prevent quantity less than 1
    
    const newData = ecomData.topCollection.filter((item) => item.id === id)
    newData[0]["requestedQuantity"] = quantity
    setCartItems(newData)

    addToCart(newData[0])
    console.log(newData[0])
    
    // setCartItems((prevItems) =>
    //   prevItems.map((item) =>
    //     item.id === id ? { ...item, quantity } : item
    //   )
    // );

      
  };

  console.log(cartItems) 

  useEffect(() => {
    const getProductById = () => {
      const product = ecomData.topCollection.find(
        (item) => String(item.id) === String(url_params.id)
      );
      setData(product || null);
    };
    getProductById();
  }, [url_params.id]);

  if (!data) {
    return (
      <div>
        <Header />
        <div className="p-10 text-center">Loading...</div>
        <Footer />
        <FooterBottom />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>
        <div className="flex gap-3 p-3">
          <aside className="w-1/5 text-sm text-gray-600">
                  <div className='border-1 border-gray-200 p-4'>
                    <h2 className="mb-6 font-semibold">BRAND</h2>
                    <ul className="space-y-3">
                      <li className="cursor-pointer hover:text-gray-900">Clothing</li>
                      <li className="cursor-pointer hover:text-gray-900">Bags</li>
                      <li className="cursor-pointer hover:text-gray-900">Footwear</li>
                      <li className="cursor-pointer hover:text-gray-900">Watches</li>
                      <li className="cursor-pointer hover:text-gray-900">Accessories</li>
                    </ul>
                  </div>
                  <div className="mt-8 space-y-4 text-xs text-gray-400 border-1 border-gray-200 p-4">
                    <div className="flex items-center gap-2">
                      < i  alt="Free Shipping" className="text-2xl pi pi-truck text-[#ff4c3b]" ></i>
                      <div>
                        <p className="font-semibold text-gray-600">Free Shipping</p>
                        <p>Free Shipping World</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <i alt="24x7 Service" className="text-2xl pi pi-clock  text-[#ff4c3b]"></i> 
                      <div>
                        <p className="font-semibold text-gray-600">24 X 7 Service</p>
                        <p>Get the Service for 24 x 7</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <i alt="Festival Offer" className="pi pi-megaphone text-2xl text-[#ff4c3b]" ></i>
                      <div>
                        <p className="font-semibold text-gray-600">Festival Offer</p>
                        <p>Special Festival</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <i alt="Online Payment" className="pi pi-credit-card text-2xl text-[#ff4c3b]" />
                      <div>
                        <p className="font-semibold text-gray-600">Online Payment</p>
                        <p>Secure Payment</p>
                      </div>
                    </div>
                  </div>
                </aside>
          <div>
            <div className="h-[67vh]">
              <img src={data.img1} className="h-full" alt={data.name} />
            </div>
            <div className="flex gap-5 p-3">
              <div className="h-[20vh]">
                <img src={data.img1} className="h-full" alt={data.name} />
              </div>
              <div className="h-[20vh]">
                <img src={data.img2} className="h-full" alt={data.name} />
              </div>
              <div className="h-[20vh]">
                <img src={data.img3} className="h-full" alt={data.name} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="uppercase text-[25px] font-medium">{data.item}</h2>
            <div className="flex">
              <del>{data.discount}</del>
              <p className="text-[#ff4c3b] px-2">{data.off} Off</p>
            </div>
            <h2>{data.price}</h2>
            <div className="flex items-center space-x-3 py-4">
              <div className="w-6 h-6 rounded-full bg-gray-700 cursor-pointer border-2 border-gray-900"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer border-2 border-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-black cursor-pointer border-2 border-gray-900"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Select Size</div>
                <div className="text-sm font-medium">Size Chart</div>
              </div>
              <div className="p-3">
                {Array.isArray(data.size)
                  ? data.size.join(" ")
                  : data.size}
              </div>
            </div>
            <div >
              <p>Quantity</p>
              <div className="border-1 border-gray-200 w-25 text-center">{data.quantity}</div>
            </div>
            <div className="py-3">
              <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2 mr-2" onClick={() => updateQuantity(data.id, 1)}>add to cart</button>
              <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2">buy now</button>
            </div>
            <div className="py-3">
              <h4>Product Details</h4>
              <p className="w-[30vw] text-sm">{data.productDetails}</p>
            </div>
          </div>
          
        </div>
        <div className="p-5 text-sm">
          <h2 className="uppercase">description</h2>
          <p>{data.desc}</p>
        </div>
        
      </div>

      <Subsrcibe />
      <Footer />
      <FooterBottom />
    </div>
  );
}
