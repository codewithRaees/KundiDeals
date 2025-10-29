const ProductCard = ({ image, title, price, category, rating, count }) => {
  return (
    <div className="card w-64 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
      
      
      <div className="bg-red-50 flex justify-center items-center h-52 relative group">
        <img
          src={image}
          alt={title}
          className="object-contain h-44 group-hover:scale-105 transition-transform duration-300"
        />

      
      </div>

      <div className="p-4 flex flex-col justify-between h-44">
        
        <div>
          <h2 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{title}</h2>
          <p className="text-xs text-gray-500 mb-2 capitalize">{category}</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-red-600">${price}</span>
          <div className="text-xs text-gray-600">
            ⭐ {rating} | 🛒 {count}
          </div>
        </div>

        <button className="bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 active:scale-95 transition-all duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
