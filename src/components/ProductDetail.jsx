import { Link, useLocation, useNavigate, useOutletContext } from "react-router";
import { FaStar } from "react-icons/fa";
import { FaHeart,FaArrowLeft, FaShoppingCart, FaRegHeart } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import ItemAddedToCartPortal from "./ItemAddedToCartPortal";
const ProductDetail = ({  zoom = 3}) => {
  const [wish, setWish] = useState(false); // wishlist toggle
  const { handleCartItem, itemAddedMessage,addedProductId } = useOutletContext()
  const navigate = useNavigate()
  const {state } = useLocation();
  const { productDetail  } = state
  const [product, setProduct] = useState(null)
   const [showZoom, setShowZoom] = useState(false)
      const [position , setPosition] = useState({x:0 , y:0})
      const imageRef = useRef(null)
      const handleMouseMove = (e) => {
          
          const { left, top, width, height } = imageRef.current.getBoundingClientRect()
          console.log(left, top, width, height)
          console.log(position)
          const x = ((e.clientX - left) / width) * 100
          const y = ((e.clientY - top) / height) * 100
          setPosition({ x, y })
       }
  
  useEffect(() => {
     if(productDetail){
       setProduct(productDetail)
     }
   },[productDetail])
 
    
  if (!product) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-red-600">
        Product not found. <Link to="/" className="text-purple-600 underline">Go Back</Link>
      </div>
    );
  }
 const handleBack=()=>{
  if(window.history.length > 1){
    navigate(-1)
  } else {
    navigate("/")
  }
 }
  return (
    <>
      <div className=" relative  ">
  
  {/* Go Back button inside main wrapper */}
  <div 
    className="go-back z-10  absolute top-5 left-5  border-2 border-purple-600 text-purple-600 px-2 md:px-4 py-1 md:py-2 rounded-full shadow-md cursor-pointer hover:text-white hover:bg-purple-700 transition-all flex items-center gap-1 md:gap-2"
    onClick={handleBack}
  >
    <FaArrowLeft />
    Go Back
  </div>

 

      <div className="relative  flex items-center justify-center flex-col md:flex-row p-6">
     
           <div className="left-wrapper rounded-2xl">
  <div className="image-wrapper  relative rounded-2xl flex justify-center items-center">
    {/* Discount Badge */}
    {product.discountPercentage && (
      <div className="discount absolute bg-purple-600 w-14 h-14 rounded-full text-white flex justify-center items-center top-5 right-0  md:right-8">
        <span className="font-semibold text-sm">{product.discountPercentage ? "Sale" : ""}</span>
      </div>
    )}

    {/* Product Image */}
              <img
                onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
                ref={imageRef}
      src={product.images[0]}
      alt={product.title}
      className="object-contain w-full max-w-md h-60 md:h-96 rounded-2xl"
              />
              {/* Lens Effect */}
        {showZoom && (
          <div
            className="absolute  w-24 h-24 border-2 border-white rounded-full bg-white/20 pointer-events-none"
            style={{
              top: `${position.y}%`,
              left: `${position.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        )}
            </div>
             {/* Zoomed Image */}
          {showZoom && (<div className=" top-3 pointer-events-none  z-10 absolute   md:w-[450px] md:h-[450px]   overflow-hidden">
          <div
            className="w-full h-full bg-no-repeat"
            style={{
              backgroundImage: `url(${product.images[0]})`,
              backgroundSize: `${zoom * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          ></div>
        </div>)}
</div>

          <div className="right-wrapper items-start w-full md:w-96 flex  flex-col justify-center">
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

        <div className="flex relative items-center gap-3 mt-4">
               {/* Item Added Portal */}
  {addedProductId === productDetail.id && (
    <ItemAddedToCartPortal message={itemAddedMessage} />
  )}
      {/* Add to Cart Button */}
      <button onClick={()=> handleCartItem(productDetail)} className="flex hover:scale-105 items-center gap-2 border border-purple-600  text-sm font-semibold px-4 py-2 rounded-full bg-purple-600 text-white transition-all">
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
        
</div>



    </>
    
  );
};

export default ProductDetail;
