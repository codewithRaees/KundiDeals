import { useState } from "react";
import { Link, useOutletContext } from "react-router";
import { FaEye, FaHeart , FaShoppingCart, FaRegHeart } from "react-icons/fa";
import ItemAddedToCartPortal from "./ItemAddedToCartPortal";
const ProductCard = ({ productInfo, handleCartItem , itemAddedMessage , addedProductId}) => {
  const [detailButton, setDetailButton] = useState(false)
  
  const { wishList, handleWishListItem } = useOutletContext()
  const { images = [], title, price,discountPercentage, tags = [] } = productInfo
  const image = images?.[0];
const tag= tags?.[1];
  const isInWishList = wishList.some(item => item.id === productInfo.id);

  return (
    <div className="card w-64 bg-white border border-(--color-muted) shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl block md:overflow-hidden"
      onMouseOver={() => setDetailButton(true)}
      onMouseLeave={()=> setDetailButton(false)}
    >
     
      
      <div className="  bg-(--color-muted) flex justify-center items-center h-72 relative group">
        <img
          src={image}
          alt={title}
          className="object-contain h-48 group-hover:scale-120 transition-transform duration-300"
        />
        <span className={`absolute right-2 top-3 bg-(--color-muted)  py-1   px-2 rounded-lg text-sm font-medium hover:text-(--text-primary) active:scale-100  transition-all duration-200 cursor-pointer ${detailButton ? "transition-all duration-300" : "hidden"}`}><Link to={`/product/${tag?.replace(/\s+/, "-").toLowerCase()}`} state ={{ productDetail: productInfo } }> <FaEye size={26}/></Link></span>
      
      </div>
 
      <div className="py-2 px-4 flex flex-col justify-between ">
        
        <div >
          <h2 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 truncate">{title}</h2>
          
       
        </div>
        

        <div className="flex items-center justify-left gap-2 ">
          <span className="text-lg font-bold text-(--text-secondary)">${(price - (price * discountPercentage/100)).toFixed(2)}</span>
                   <span className="line-through  opacity-70 text-(--text-secondary)">${price}</span>  </div>

        <div className="relative flex items-center justify-center gap-2">
  {addedProductId === productInfo.id && (
    <ItemAddedToCartPortal message={itemAddedMessage} />
  )}

  {/* Add to Cart */}
  <button
    onClick={() => handleCartItem(productInfo)}
    className="flex items-center gap-2 rounded-md  bg-(--bg-secondary) px-5 py-2 text-sm font-semibold text-white 
               hover:bg-(--bg-primary) focus:outline-none  
               active:scale-95 transition-all duration-200"
  >
    <FaShoppingCart size={16} className=""/>
    <span>Add to Cart</span>
  </button>

  {/* Wishlist */}
  <button
    onClick={() => handleWishListItem(productInfo)}
    className="flex items-center justify-center h-10 w-10 rounded-md
               text-(--text-secondary) hover:bg-purple-100
               active:scale-95 transition-all duration-200"
  >
    {isInWishList ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
  </button>
</div>

       
      </div>
    </div>
  );
};

export default ProductCard;
