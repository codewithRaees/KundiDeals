import { useLocation } from "react-router";

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state?.productDetail;
  console.log(product);
  if (!product) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-red-600">
        Product not found.{" "}
        <Link to="/" className="text-purple-600 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Discount Badge */}
      {product.discountPercentage && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {product.discountPercentage}% OFF
        </div>
      )}
      {/* LEFT SIDE IMAGE */}
      <div className="bg-purple-100 rounded-2xl shadow-lg flex justify-center items-center p-6">
        <img
          src={product.images[1]}
          alt={product.name}
          className="object-contain h-[350px] w-full rounded-xl"
        />
      </div>

      {/* RIGHT SIDE DETAILS */}
      <div className="flex flex-col justify-between">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
          {product.title}
        </h1>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-2 flex gap-5 capitalize">
          <div>
            {" "}
            Category :{" "}
            <span className="font-medium text-purple-600">
              {product.category}
            </span>
          </div>
          Brand :{" "}
          <span className="font-medium text-purple-600">{product.brand}</span>
        </p>

        {/* Price */}
        <p className="text-4xl font-bold text-purple-600 mb-3">
          ${product.price}
        </p>

        {/* Rating & Count */}
        <div className="flex items-center gap-6 text-gray-600 text-sm mb-6">
          <span>⭐ Rating: {product.rating}</span>
          <span>🛒 Stock: {product.stock}</span>
        </div>

        {/* Tags */}
        {product.tags && (
          <div className="mb-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Tags:</h3>
            <div className="flex gap-2 flex-wrap">
              {product.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ADD TO CART BUTTON */}
        <button className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-purple-700 active:scale-95 transition-all duration-200 shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
