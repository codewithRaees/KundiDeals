import React from 'react'

const CategoryCard = ({ image, name }) => {
  
  return (
      <>
         <button
    //   onClick={onClick}
      className="group relative    text-center min-w-[260px] w-[260px] bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
      aria-label={`Open category Electronics`}
          >
               <div className="h-full bg-purple-100  flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={image}
          loading="lazy"
        //   onError={handleImgError}
          className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
        />
        </div>
        
              <div className="absolute top-0    inset-0   
                  opacity-90 
                  transition-opacity duration-300">
        <div className="flex  text-white items-center h-10  bg-black/40 justify-center  ">
          <span className=" font-semibold  line-clamp-2">
            {name.name}
                      </span>
                     
                  </div>
                 
      </div>
              </button>
          
      </>
  )
}

export default CategoryCard