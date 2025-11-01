import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const CategoryContainer = () => {
    const [productCategories , setProductCategories] = useState([])
    useEffect(() => { 
        try {
            async function requestCategory() {
                const response = await fetch("https://dummyjson.com/products/categories");
        const data = await response.json();
        
                const categoriesWithImage = await Promise.all(
                     data.map(async (category) => {
                         const response = await fetch(`https://dummyjson.com/products/category/${category.slug}`);
                         const data = await response.json();
                         
                         return {
                             ...category, 
                             image: data.products?.[0]?.thumbnail 
                          };
                     })
                )
                setProductCategories(categoriesWithImage);
            }
             requestCategory()
        } catch(error) {
            console.log("Categories Data fetching error", error)
        }
       
    }, [] )
   
console.log(productCategories)
  return (
      <section className="py-8 px-4">
         
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <p className="text-sm text-gray-500 hidden sm:block">
            Tap a category to filter products
          </p>
        </header>
 <div className="grid grid-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {productCategories.map((cat) => (<CategoryCard
                      key={cat.id}
                      name={cat.name}
                      image={cat.image}
                  />
                  ))}
                  </div>
      </div>
          </section>
  )
}

export default CategoryContainer