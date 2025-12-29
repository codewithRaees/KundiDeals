
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useOutletContext } from "react-router";

const ProductsContainer = () => {
  
  const {cart, setCart , productData, loading, handleCartItem, itemAddedMessage,addedProductId} = useOutletContext()
   
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {Array(10)
            .fill("")
            .map((_, i) => (
              <Shimmer key={i} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            
            {productData.map((product) => (
             
          
            <ProductCard
              key={product.id}
                image={product.images[0]}
                tags = {product.tags?.[1]}
              title={product.title}
              price={product.price}
              category={product.category}
              rating={product.rating}
                count={product.stock}
                productInfo={product}
                cart={cart}
                setCart={setCart}
                handleCartItem={handleCartItem}
                itemAddedMessage={itemAddedMessage}
                addedProductId={addedProductId}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductsContainer;
