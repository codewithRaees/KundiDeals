import { createPortal } from 'react-dom'

const ItemsInCardPortal = ({cart ,setCart, cartPosition,onMouseLeave , onMouseOver}) => {
 
  const handleIncreaseItem = (itemId) => {

    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    return updatedCart
  }
  const handleDecreaseItem = (itemId) => {

    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    }).filter((cartItem)=> cartItem.quantity > 0)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    return updatedCart
  }
 
  return (
    createPortal(<div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
      className="absolute bg-purple-100 shadow-lg rounded-lg p-4 w-auto z-50 transition-all ease-in-out duration-1000 "
      style={{ top: cartPosition.top + 25, left: Math.min(
      Math.max(cartPosition.left, 10),
      window.innerWidth - 550 - 10
    ),  }} 
    >
      <h2 className="font-bold mb-2">Cart Items</h2>
     <table className="w-full text-sm border-collapse">
  <thead>
    <tr className="border-b ">
      <th className="p-2 text-left">S.No</th>
      <th className="p-2 text-left">Image</th>
      <th className="p-2 text-left">Name</th>
      <th className="p-2 text-center">Quantity</th>
      <th className="p-2 text-right">Price</th>
      <th className="p-2 text-right">Total</th>
      <th className="p-2 text-center">Actions</th>
    </tr>
  </thead>

  <tbody>
    {cart.map((item, index) => (
      <tr key={item.id} className="border-b">
       
        <td className="p-2">{index + 1}</td>

       
        <td className="p-2">
          <img
            src={item.images[0]} 
            alt={item.title}
            className="h-10 w-10 object-contain rounded"
          />
        </td>

       
        <td className="p-2 text-xs truncate max-w-25 whitespace-normal wrap-break-word">{item.title}</td>

       
        <td className="p-2 text-center">{item.quantity}</td>

        <td className="p-2 text-right">${item.price}</td>

      
        <td className="p-2 text-right">${(item.price * item.quantity).toFixed(2)}</td>

        <td className="p-2 text-center ">
          <button onClick={() => handleIncreaseItem(item.id)} className="bg-green-500 text-white px-2 py-1 mr-2 rounded text-xs">
            +
          </button>
          <button onClick={() => handleDecreaseItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded text-xs">
            -
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>,document.getElementById('item-in-cart'))
  )
}

export default ItemsInCardPortal