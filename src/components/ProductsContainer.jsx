
import { useOutletContext } from "react-router";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import BottomLoader from "./BottomLoader";
import SearchBox from "./SearchBox";


const ProductsContainer = () => {
  
  const {isFetchingMore,isInitialLoading,searchQuery, cart, setCart,  productData, handleCartItem, itemAddedMessage,addedProductId} = useOutletContext()
   const filteredProduct = productData.filter((product) => 
        product.title?.toLowerCase().includes(searchQuery?.toLowerCase())
    )
    
    
  return (
    <>
      {/* <div className=" bg-(--color-primary) pt-3 pr-14 flex justify-end"><SearchBox/></div> */}
    
<main className="min-h-screen bg-(--color-primary) px-6 pt-6 pb-6">
      {isInitialLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {Array(10)
            .fill("")
            .map((_, i) => (
              <Shimmer key={i} />
            ))}
        </div>
      ) : (
        
          <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          
            {filteredProduct.map((product) => (
             
          
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
            {isFetchingMore && (
  <div className="w-full flex justify-center mt-6">
    <BottomLoader />
  </div>
)}
          
          </>
      )}
    </main>
    </>
  );
};

export default ProductsContainer;
