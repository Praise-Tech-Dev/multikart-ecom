import React from 'react'
import img from '/card/13.jpg'

export default function Goods() {
  return (
    <div className='mt-70'>
       
    <div className="flex gap-10 p-8">
      {/* Sidebar */}
      
  
      {/* Main Product Detail */}
      <section className="w-3/5 flex flex-col gap-6">
        <img
          src={img}
          alt="Belted Dress"
          className="w-full max-w-xs mx-auto"
        />
        <div className="text-center">
          <h2 className="font-semibold text-lg mb-2">BELTED DRESS</h2>
          <p className="text-sm line-through text-gray-500">$185</p>
          <p className="text-red-600 font-bold mb-1">40% Off</p>
          <p className="text-xl font-bold text-gray-900 mb-4">$111</p>
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-gray-700 cursor-pointer border-2 border-gray-900"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer border-2 border-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-black cursor-pointer border-2 border-gray-900"></div>
          </div>
  
          <div className="flex justify-center gap-6 mb-4 text-gray-600 text-sm">
            <div>
              <p>Select Size</p>
              <div className="flex gap-3 pt-1">
                <div className="cursor-pointer border border-gray-300 px-3 py-1 rounded text-center">S</div>
                <div className="cursor-pointer border border-gray-300 px-3 py-1 rounded text-center">M</div>
                <div className="cursor-pointer border border-gray-300 px-3 py-1 rounded text-center">L</div>
              </div>
            </div>
            <div>
              <p>Size Chart</p>
            </div>
          </div>
  
          <div className="flex justify-center gap-9 text-sm text-gray-800 mb-6">
            <div>
              <p>Quantity</p>
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-12 border border-gray-300 rounded px-2 py-1 mt-1 text-center"
              />
            </div>
          </div>
  
          <div className="flex justify-center gap-5">
            <button className="bg-red-500 text-white font-semibold rounded px-6 py-2 hover:bg-red-600 transition">
              ADD TO CART
            </button>
            <button className="border border-red-500 text-red-500 font-semibold rounded px-6 py-2 hover:bg-red-50 transition">
              WISHLIST
            </button>
          </div>
  
          <div className="mt-6 text-left text-gray-700 text-sm max-w-xl mx-auto">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <p>
              A belted dress with a comfortable cut and stylish design, perfect for casual and semi-formal
              occasions.
            </p>
          </div>
        </div>
      </section>
    </div>
 
  
  

    
    </div>
  )
}



