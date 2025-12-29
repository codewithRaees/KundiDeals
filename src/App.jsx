import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useEffect, useState } from 'react'


function App() {
  const [cart, setCart] = useState([])
  const [productData, setProductData] = useState([]);
   const [productCategories, setProductCategories] = useState([])
  const [loading, setLoading] = useState(true);
  const [addedProductId, setAddedProductId] = useState(null);
  const [itemAddedMessage, setItemAddedMessage] = useState("Added to cart!");
  const handleCartItem = (product) => {
    const isExist = cart.some(p => p.id === product.id);

    if (isExist) {
      setItemAddedMessage("Item already in cart!");
      
    } else {
      setItemAddedMessage("Added to cart!");
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }

    setAddedProductId(product.id);

    setTimeout(() => {
      setAddedProductId(null);
      setItemAddedMessage("Added to cart!");
    }, 2000);
  }
   useEffect(() => {
    
    async function requestData() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const data = await response.json();
        setProductData(data.products);
        
        const responseCategory = await fetch("https://dummyjson.com/products/categories");
        const categoryData = await responseCategory.json();
        
        const categoriesWithImage = await Promise.all(
          categoryData.map(async (category) => {
            const response = await fetch(`https://dummyjson.com/products/category/${category.name}`);
            const categoryData = await response.json();
                         
            return {
              name: category,
              image: categoryData.products?.[0]?.thumbnail
            };
          })
        )
        setProductCategories(categoriesWithImage);
         
      }
      catch {
        console.log("Data Fetching Error");
      } finally {
        setLoading(false);
      }
    }
     requestData();
     
  }, []);
  return (
    <>
      
        <Header cart={cart} setCart={setCart} cartCount={cart?.length}/>
      <Outlet  context={{ cart, setCart , productData, setProductData, loading, setLoading , productCategories, handleCartItem, itemAddedMessage, addedProductId}}/>
        <Footer />
      
    </>
  )
}

export default App
