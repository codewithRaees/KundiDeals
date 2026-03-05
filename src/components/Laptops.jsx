
import {useOutletContext } from "react-router";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Laptops = () => {
  
    const [laptopsProduct, setLaptopsProduct] = useState([])
      const [loading, setLoading] = useState(true);

  const { cart, setCart, handleCartItem, itemAddedMessage,addedProductId} = useOutletContext()
    const fetchLaptops = async () => {
        try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products/category/laptops?limit=20");
      const data = await res.json();
      setLaptopsProduct(data.products);
    } catch (err) {
      console.error("Error fetching laptops:", err);
    } finally {
      setLoading(false);
    }
    }
    useEffect(() => {
        fetchLaptops()
    },[])
    // const laptopsProduct = productData.filter((product) => product.category === "laptops")
  return (
 <main className="min-h-screen bg-(--color-primary) flex justify-center items-center p-6">
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
          
            {laptopsProduct.map((product) => (
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
    </main>  )
}

export default Laptops