import { useLocation } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaHeart, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
const ProductDetail = () => {
   const [wish, setWish] = useState(false); // wishlist toggle
  const { state } = useLocation();
  const product = state?.productDetail;
    console.log(product)
  if (!product) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-red-600">
        Product not found. <Link to="/" className="text-purple-600 underline">Go Back</Link>
      </div>
    );
  }

  return (
      <div className="main-wrapper m-auto  max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-20">
           <div className="left-wrapper rounded-2xl">
  <div className="image-wrapper  relative rounded-2xl flex justify-center items-center">
    {/* Discount Badge */}
    {product.discountPercentage && (
      <div className="discount absolute bg-purple-600 w-14 h-14 rounded-full text-white flex justify-center items-center top-5 right-3 md:right-8">
        <span className="font-semibold text-sm">{product.discountPercentage ? "Sale" : ""}</span>
      </div>
    )}

    {/* Product Image */}
    <img
      src={product.images[0]}
      alt={product.title}
      className="object-contain w-full max-w-md h-60 md:h-96 rounded-2xl"
    />
  </div>
</div>

          <div className="right-wrapper w-full md:w-96 flex  flex-col justify-center">
              <div className="product-name text-2xl font-semibold mb-3">{product.title}</div>
              <div className="product-name   mb-2"><span className="font-semibold">Brand:</span> {product.brand}</div>
              <div className="product-price relative flex justify-start gap-2 items-center ">
                 
                  
                  <span className="font-semibold text-xl">${(product.price - (product.price * product.discountPercentage/100)).toFixed(2)}</span>
                   <span className="line-through  opacity-70">${product.price}</span>
    <span class="bg-purple-600 rounded-full px-2 py-1 text-xs font-semibold  text-white">{product.discountPercentage }% OFF</span>

              </div>
              {/* Product Rating */}
              <div className="rating-stock mt-2 flex gap-5 ">
                  <div className="rating flex justify-center items-center gap-1 w-16  bg-purple-600 rounded-full px-2 py-1 text-xs font-semibold  text-white ">
                  <span className="">{product.rating} </span>
                  <span>{<FaStar  className="text-white"/>}</span>
                  </div>
                  <div className="rating    ">
                  <span className="font-semibold">Stock: </span>
                  <span>{product.stock}</span>
                 
              </div>
</div>
        <div className="product-description">{product.description}</div>

        <div className="flex items-center gap-3 mt-4">

      {/* Add to Cart Button */}
      <button className="flex hover:scale-105 items-center gap-2 border border-purple-600  text-sm font-semibold px-4 py-2 rounded-full bg-purple-600 text-white transition-all">
        <FaShoppingCart size={16} />
        Add to Cart
      </button>

      {/* Wishlist Button (toggle) */}
      <button
        onClick={() => setWish(!wish)}
        className={`flex hover:scale-105 items-center justify-center border text-sm font-semibold rounded-full 
          p-2 transition-all
          ${wish 
            ? "text-purple-600  border-purple-600" 
            : "border-purple-600 text-purple-600  "
          }
        `}
      >
        {wish ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
      </button>

      {/* More Info */}
      <button className="border border-purple-600 hover:scale-105 bg-purple-600 text-sm font-semibold px-4 py-2 rounded-full  text-white transition-all cursor-pointer">
        More Info
      </button>

    </div>
          </div>
    </div>
  );
};

export default ProductDetail;
