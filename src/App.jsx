import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useCallback, useEffect, useState } from 'react'


function App() {
  const [cart, setCart] = useState([])
  const [wishList , setWishList] = useState([])
  const [productData, setProductData] = useState([]);
   const [productCategories, setProductCategories] = useState([])
  // const [loading, setLoading] = useState(false);
  const [addedProductId, setAddedProductId] = useState(null);
  const [itemAddedMessage, setItemAddedMessage] = useState("Added to cart!");
  const [searchQuery, setSearchQuery] = useState('')
  const [hasmore , setHasmore] = useState(true)
  const [skip , setSkip] = useState(0)
  const [isInitialLoading, setIsInitialLoading] = useState(false)
const [isFetchingMore, setIsFetchingMore] = useState(false)
  const limit = 20
   
  
  const handleWishListItem = (product) => {
    const isExist = wishList.some(p => p.id === product.id)
    if (isExist) {
      setItemAddedMessage("Item already in wishlist!");
     
    } else {
      setItemAddedMessage("Added to wishlist!");
      setWishList(prev => [...prev, { ...product, quantity: 1 }]);
      
    }
    setAddedProductId(product.id);

    setTimeout(() => {
      setAddedProductId(null);
      setItemAddedMessage("Added to wishlist!");
    }, 2000);
  }
   const fetchProducts = useCallback(async()=>{
  if(!hasmore) return
if (skip === 0) {
  setIsInitialLoading(true)
} else {
  setIsFetchingMore(true)
}
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      setProductData(prev => {
        const existingId = new Set(prev.map(p => p.id))
        const newProducts = data.products.filter((p)=> !existingId.has(p.id))          
       return  [...prev, ...newProducts]
      })
      const nextSkip = skip + limit
       
      if(nextSkip >= data.total ){
        setHasmore(false)
      }
      setSkip(nextSkip)
     
    } catch (err) {
        console.log("Fetch err " ,err)
    }finally{
      setIsInitialLoading(false);
      setIsFetchingMore(false)
    }

 }, [isInitialLoading, hasmore, skip]) 
  useEffect(() => {
    const handleScroll = () => {
      const scrolltop = window.scrollY
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight
    console.log(scrolltop, windowHeight, fullHeight)
    if (scrolltop + windowHeight >= fullHeight - 150 && !isFetchingMore && hasmore) {
      fetchProducts()
    }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [fetchProducts, isFetchingMore, hasmore])
  const fetchCategories = async () => {
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

  const handleCartItem = (product) => {
    const isExist = cart.some(p => p.id === product.id);
    setAddedProductId(product.id);
    if (isExist) {
      setItemAddedMessage("Item already in cart!");
      
    } else {
      setItemAddedMessage("Added to cart!");
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }

    

    setTimeout(() => {
      setAddedProductId(null);
      setItemAddedMessage("Added to cart!");
    }, 2000);
  }
   useEffect(() => {
    
    fetchCategories()
     fetchProducts()
     
  }, []);
  return (
    <>
      
        <Header cart={cart} setCart={setCart} cartCount={cart?.length} wishListCount={wishList?.length}  wishList={wishList} setWishList={setWishList}/>
      <Outlet  context={{isFetchingMore,isInitialLoading,searchQuery , setSearchQuery , cart, setCart, wishList,setWishList, productData, setProductData , productCategories, handleCartItem,handleWishListItem, itemAddedMessage, addedProductId}}/>
        <Footer />
      
    </>
  )
}

export default App
