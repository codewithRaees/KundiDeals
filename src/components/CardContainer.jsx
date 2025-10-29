import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const CardContainer = () => {
  const [productData, setProdcutData] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    try {
      async function requestData() {
     const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
        setProdcutData(data)
        
      } 
       requestData()
    } catch {
      console.log("Data Fetching Error")
    } finally {
      setLoading(false)
    }
   
  },[])
  

  productData.map((product) => {
    console.log(product)
  }
  )

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      {
        loading ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">{
          Array(10).fill("").map((_,  i) => <Shimmer key={i}/>
        )
        }</div>) :
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            rating={product.rating.rate}
            count={product.rating.count}
          />
        ))}
      </div>
      }
     
    </main>
    
  )
}

export default CardContainer