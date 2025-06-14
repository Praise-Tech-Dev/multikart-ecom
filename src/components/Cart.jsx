import React from 'react'
import { useEffect, useState } from "react";
import { addToCart, getCart } from "../utils/cart";
import Header from './Header'
import Footer from './Footer'
import FooterBottom from './FooterBottom'
import Subsrcibe from './Subsrcibe'


export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

     // Remove item from cart
    const removeItem = (id) => {
        const newData = cartItems.filter((item) => item.id !== id);
    
        setCartItems(newData) 
        addToCart(newData)
        // setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      };
      // Calculate total price per item
        const itemTotal = (price, quantity) => (price * quantity).toFixed(2);
      
        // Calculate grand total
        const grandTotal = cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ).toFixed(2);
      
      
          const getCartItems = () => {
            setCartItems(getCart())
              console.log(getCart());
              
          } 
        useEffect(()=>{
          getCartItems()
        }, [])
  return (
    <div className='h-[70vh] py-20'>
      <Header/>
        <div className='h-[10vh] bg-gray-100 flex flex-row   justify-between  py-[30px] px-5 md:px-10 lg:px-40  text-[16px]'>
            <div>
                <h1 className='font-bold text-black uppercase  '> Cart </h1>
            </div>
            <div className='font-bold text-black uppercase flex gap-2 '>
                <div>Home </div>/
                <div >Cart</div>
            </div>
            <div>
            {/* <img src={logo} alt="" /> */}
            </div>
        </div>
        <table className='py-[30px] px-5 md:px-10 lg:px-30 w-[80%] m-auto mt-15'>
            <thead className="border-gray-200 border-b-1  ">
                <tr className="flex items-center justify-between gap-10 px-15 uppercase  text-sm pb-3 ">
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>thrice</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    <th>Total</th>
                </tr>

            </thead>
            <tbody className='text-sm font-light'>
                {cartItems.length === 0 ? (
                    <tr>
                        <td colSpan="6" className='p-[1rem]'></td>
                        Your cart is empty
                    </tr>
                ):(
                    cartItems.map(({id, img1, item, price, quantity }) => (
                        <tr key={id} className='border-b-[1px] flex items-center gap-50 px-5 pb-3 text-sm font-extralight '>
                            <th className='w-[60px]'>
                                <img src={img1} alt={item} className='w-full'/>
                            </th>
                            <th className='p-3 '>{item}</th>
                            <th className='p-3 text-right'>{price}</th>
                            <th className='p-3 text-right'>{quantity}</th>
                        </tr>
                        
                    )
                    )
                )}
            </tbody>
            <div className="flex items-center justify-between gap-10 px-20 mt-10 uppercase">
                <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2 mr-2">continue shopping</button>
                <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2 mr-2">checkout</button>
            </div>
        </table>
        
        <Subsrcibe/>
        <Footer/>
    </div>
  )
}
