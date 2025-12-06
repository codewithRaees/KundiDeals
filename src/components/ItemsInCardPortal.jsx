import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const ItemsInCardPortal = ({cart}) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    console.log(cart)
  return (
    createPortal(<div
      className="absolute bg-white shadow-lg rounded-lg p-4 w-64 z-50"
      style={{ top: position.top + 40, left: position.left }} // adjust position below cart
    >
      <h2 className="font-bold mb-2">Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>{item.name} x {item.quantity}</span>
          <div className="flex gap-2">
            <button
              
              className="bg-green-500 text-white px-2 rounded"
            >
              +
            </button>
            <button
             
              className="bg-red-500 text-white px-2 rounded"
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>,document.getElementById('item-in-cart'))
  )
}

export default ItemsInCardPortal