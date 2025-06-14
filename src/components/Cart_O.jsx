import React, { useEffect, useState } from "react";
import { addToCart, getCart } from "../utils/cart";
import Header from "./Header";
import Footer from "./Footer";
import Subsrcibe from "./Subsrcibe";

 

const Cart_O = () => {
  const [cartItems, setCartItems] = useState([]);

  // Update quantity for an item

 
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity less than 1
    
    const newData = cartItems.map((item)=> item.id===id ? {...item, quantity}: item)
    setCartItems(newData)

    addToCart(newData)
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );

      
  };

  

  // Remove item from cart
  const removeItem = (id) => {
    const newData = cartItems.filter((item) => item.id !== id);

    setCartItems(newData) 
    addToCart(newData)
    // setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // const deleteData =cartItems.map((item)=> item.id === id ? {...item, quantity}: item)
  // removeItem(deleteData)
  
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
    <div>
      <Header/>
      
      <div className='h-[10vh] bg-gray-100 flex flex-row   justify-between  py-[30px] px-5 md:px-10 lg:px-60  text-[16px]'>
            <div>
                <h1 className='font-bold text-black uppercase  '> Cart </h1>
            </div>
            <div className='font-bold text-black uppercase flex gap-2 '>
                <div>Home </div>/
                <div >Cart</div>
            </div>
            
      </div>
      <div style={{ maxWidth: "1100px", margin: "auto",  fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "3rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ccc" }}>
            <th style={{ padding: "12px", textAlign: "left" }}>IMAGE</th>
            <th style={{ padding: "12px", textAlign: "left" }}>PRODUCT NAME</th>
            <th style={{ padding: "12px", textAlign: "right" }}>PRICE</th>
            <th style={{ padding: "12px", textAlign: "right" }}>QUANTITY</th>
            <th style={{ padding: "12px", textAlign: "center" }}>ACTION</th>
            <th style={{ padding: "12px", textAlign: "right" }}>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "1rem" }}>
                Your cart is empty
              </td>
            </tr>
          ) : (
            cartItems.map(({ id, img1, item, price, quantity }) => (
              <tr key={id} className="border-b-[1px] border-[#eee] "
              //  style={{ borderBottom: "1px solid #eee" }}
               >
                <td style={{ padding: "12px"}}>
                  <img src={img1} alt={item} style={{ height: "60px" }} />
                </td>
                <td style={{ padding: "12px" }}>{item}</td>
                <td style={{ padding: "12px", textAlign: "right" }}>{price}</td>
                <td style={{ padding: "12px", textAlign: "right" }}>
                  <input
                    type="number"
                    min="0"
                    value={quantity}
                    style={{ width: "50px", textAlign: "center" }}
                    onChange={(e) => updateQuantity(id, parseInt(e.target.value) || 1)}
                  />
                </td>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  <button
                    onClick={() => removeItem(id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#c00",
                      fontSize: "18px",
                      cursor: "pointer",
                      lineHeight: "1",
                    }}
                    aria-label={`Remove ${item}`}
                  >
                    &times;
                  </button>
                </td>
                <td style={{ padding: "12px", textAlign: "right", color: "#c00" }}>
                  ${itemTotal(price, quantity)}
                </td>
              </tr>
            ))
          )}
          
        </tbody>

        {cartItems.length > 0 && (
          <tfoot>
            <tr style={{ borderTop: "2px solid #ccc" }}>
              <td colSpan="5" style={{ padding: "12px", textAlign: "right", fontWeight: "bold" }}>
                Grand Total:
              </td>
              <td style={{ padding: "12px", textAlign: "right", fontWeight: "bold", color: "#c00" }}>
                ${grandTotal}
              </td>
            </tr>
            
          </tfoot>
        )}
      </table>
      <div className="flex items-center justify-between gap-10 px-20 mt-10 uppercase mb-15">
                <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2 mr-2">continue shopping</button>
                <button className="uppercase text-white bg-[#ff4c3b] px-3 py-2 mr-2">checkout</button>
      </div>
      
    </div>
    <Subsrcibe/>
    <Footer/>
    </div>
    
  );
};

export default Cart_O;