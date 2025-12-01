import React from 'react'

const CategoryCard = ({image , name}) => {
  return (
      <>
         <button
    //   onClick={onClick}
      className="group relative w-full max-w-xs bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
      aria-label={`Open category Electronics`}
          >
               <div className="h-44 bg-purple-100 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
        //   onError={handleImgError}
          className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
        />
              </div>
              <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {name}
                      </h3>
                      <div className="ml-2 shrink-0">
            <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-red-600 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              View
            </span>
          </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
          {`Explore ${name} products`.toLowerCase()}
        </p>
      </div>
              </button>
          
      </>
  )
}

export default CategoryCard