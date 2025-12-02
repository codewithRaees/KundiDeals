import { useState } from "react";
import ProductImageMagnifier from "./ProductImageMagnifier";
import { Link, useOutletContext } from "react-router";
import { FaHeart,FaShoppingBag , FaShoppingCart, FaRegHeart } from "react-icons/fa";
import ProductDetail from "./ProductDetail";
const ProductCard = ({ productInfo, cart,  setCart}) => {
  const [detailButton, setDetailButton] = useState(false)
const [addToWishList , setAddToWishList] = useState(false)
  const { images = [], title, price, category, rating, count, tags = [] } = productInfo
  const image = images?.[0];
const tag= tags?.[1];
 
  const handleCartItem = () => {
    const isProductExist = cart?.some(product => product.id === productInfo.id);
    if (isProductExist) {
      const updatedCart = cart.map(product => {
        if (product.id === productInfo.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return
    } 
    
    setCart(prevCart => [...(prevCart || []), { ...productInfo, quantity: 1 }]);
    localStorage.setItem("cart", JSON.stringify([...cart, productInfo]));
  }
  return (
    <div className="card w-64 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl block md:overflow-hidden"
      onMouseOver={() => setDetailButton(true)}
      onMouseLeave={()=> setDetailButton(false)}
    >
     
      
      <div className="  bg-purple-100 flex justify-center items-center h-52 relative group">
        <img
          src={image}
          alt={title}
          className="object-contain h-44 group-hover:scale-105 transition-transform duration-300"
        />
       <div className="wishlist absolute top-3 right-3">
           {/* Wishlist Button (toggle) */}
      <button
        onClick={() => setAddToWishList(!addToWishList)}
        className={`flex hover:scale-125 items-center justify-center text-sm font-semibold 
          p-2 transition-all
          ${addToWishList 
            ? "text-purple-600  border-purple-600 scale-125" 
            : "border-purple-600 text-purple-600  "
          }
        `}
      >
        {addToWishList ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
      </button>

</div>
      
      </div>
 
      <div className="p-4 flex flex-col justify-between h-44">
        
        <div >
          <h2 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{title}</h2>
          
          <div className=" relative flex justify-between items-center  detail">
            <p className="text-xs text-gray-500 mb-2 capitalize">{category}</p>
            <span className={`absolute right-2  bg-purple-600 text-white py-1  px-2 rounded-lg text-sm font-medium hover:bg-purple-700 active:scale-100  transition-all duration-200 cursor-pointer ${detailButton ? "transition-all duration-300" : "hidden"}`}><Link to={`/product/${tag?.replace(/\s+/, "-").toLowerCase()}`} state ={{productInfo} }>Details</Link></span></div>
        </div>
        

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-purple-600">${price}</span>
          <div className="text-xs text-gray-600">
            ⭐ {rating} | 🛒 {count}
          </div>
        </div>

        <div className="buttons flex  justify-around">
           <button onClick={()=> setCart(handleCartItem)} className="bg-purple-600 text-white py-2 rounded-lg text-sm px-5 font-medium hover:bg-purple-700 flex items-center gap-2 active:scale-95 transition-all duration-200">
          Cart <FaShoppingCart size={18}/>
        </button>
         <button  className="bg-purple-600 px-5 text-white  rounded-lg text-sm font-medium hover:bg-purple-700 active:scale-95 transition-all duration-200 flex items-center gap-2">
         Beg <FaShoppingBag size={18}/>
        </button>
       </div>
      </div>
    </div>
  );
};

export default ProductCard;
