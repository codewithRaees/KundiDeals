
import CategoryCard from './CategoryCard'
import { useOutletContext } from 'react-router'

const CategoryContainer = () => {
  const { productCategories } = useOutletContext()
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
          {productCategories.map((cat, index) => (
            
            <CategoryCard
          
                      key={index}
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