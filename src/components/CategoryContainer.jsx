
import CategoryCard from './CategoryCard'
import { useOutletContext } from 'react-router'
import {motion, useAnimation} from 'framer-motion'
import SearchBox from './SearchBox'

const CategoryContainer = () => {
  const { productCategories } = useOutletContext()
   const controls = useAnimation()
   
  return (
      <section className="py-8 px-4">
         
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Browse Categories</h2>
           <SearchBox/>
        </header>
        <div className="overflow-hidden py-2">
          <motion.div
            className="flex gap-4"
            animate={{ x: ['100%', '-100%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration:15,
              ease: 'linear'
            }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={()=>controls.start()}
          >
          {productCategories.map((cat, index) => (
            
            <CategoryCard
          
                      key={index}
                      name={cat.name}
                      image={cat.image}
                  />
          ))}
            </motion.div>
                  </div>
      </div>
          </section>
  )
}

export default CategoryContainer