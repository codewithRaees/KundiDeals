import React, { useRef, useState } from 'react'

const ProductImageMagnifier = ({image , zoom = 3}) => {
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
  return (
      <div>
          {/* Original Image */}
          <div className="relative w-[300px] h-[300px] overflow-hidden border rounded-xl"
              onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
          >
             <img ref={imageRef}  src={image} alt="product"
                  className="w-full h-full object-cover" />
               {/* Lens Effect */}
        {showZoom && (
          <div
            className="absolute w-24 h-24 border-2 border-white rounded-full bg-white/20 pointer-events-none"
            style={{
              top: `${position.y}%`,
              left: `${position.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        )}
          </div>
          {/* Zoomed Image */}
          <div className="w-[300px] h-[300px] border  absolute bottom-full">
          <div
            className="w-full h-full bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: `${zoom * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          ></div>
        </div>
   </div>
  )
}

export default ProductImageMagnifier