import { Menu, X, ShoppingCart, User } from "lucide-react";
import { FaUser,FaShoppingCart, FaRegHeart  } from "react-icons/fa";
import logo from '../assets/images/logo.png';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import RegisterPortal from "./RegisterPortal";
import { Link } from "react-router";
import ItemsInCardPortal from "./ItemsInCardPortal";

export default function Header({cart, cartCount}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [cartPosition, setCartPosition] = useState(null)
  const cartRef = useRef(null)
    const mainMenu = ['Home', 'Products', 'About', 'Contact','Tasks Completed']

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
               setIsOpen(false)           
           }
        }
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener("resize", handleResize);
    }, [])
  // get the position of the cart
  const handleMouseOver = () => {
    const rect = cartRef.current.getBoundingClientRect()
    setCartPosition({
      left: rect.left,
      right: rect.right,
      top: rect.top,
      bottom: rect.bottom
    })
  }
  // close the cart
  const handleMouseLeave = () => {
    setCartPosition(null)
  }

  return (
      <header className="w-full shadow-md  flex justify-between md:pl-10  pl-2 pr-2 md:pr-10 items-center">
      <div className="flex items-center">
  <img src={logo} alt="Kundi Deals Logo" className="w-24 h-auto" />
</div>
          <div className="menues">
               <nav className="main-nav hidden  md:flex gap-5 items-center text-purple-600 ">
              <ul className="flex justify-around gap-10">
                  {
                      mainMenu.map((item, index)=> <li className="hover:text-purple-700 transform hover:scale-110 transition duration-200" key={index}><Link to={item ==='Home' ? "" :item.replace(/\s+/g, '').toLowerCase()}>{item}</Link></li>)
                  }
                 
          </ul>
          <div  className="relative group inline-block">
            <FaUser onClick={() => 
              setIsRegisterOpen(!isRegisterOpen)
             } size={26} className="text-purple-500 transform hover:scale-110 transition duration-200 " />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block 
                       bg-purple-400 text-white text-xs rounded-xl px-3 py-1 shadow-lg">
        Register
            </span>
            {isRegisterOpen && <RegisterPortal setIsRegisterOpen={setIsRegisterOpen}  />}
          </div>
         <div className="relative group inline-block" >
            <FaShoppingCart onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} ref={cartRef} size={26} className="cursor-pointer transform hover:scale-110 transition duration-200 text-red-500 " />
             <span className="absolute  text-xs rounded-full bg-purple-500 items-center flex justify-center w-4 h-4  text-white -top-3 left-2">{cartCount}</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block 
                   bg-purple-400 text-white text-xs rounded-xl px-3 py-1 shadow-lg">
    Cart
            </span>
            {cartCount > 0 && cartPosition && <ItemsInCardPortal cart={cart} cartPosition={cartPosition} />}     
</div>
      <div className="relative group inline-block">
            <FaRegHeart  size={26} className="cursor-pointer transform hover:scale-110 transition duration-200 text-purple-500 " />
             <span className="absolute  text-xs rounded-full bg-purple-500 items-center flex justify-center w-4 h-4  text-white -top-3.5 left-1">0</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block 
                   bg-purple-400 text-white text-xs rounded-xl px-3 py-1 shadow-lg">
    Wishlist
            </span>
            
</div>
                 
          </nav>
              <button className={`md:hidden block `} onClick={() => setIsOpen(!isOpen)}>
                   {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
         <AnimatePresence>
          {isOpen && (
             <>
           
            <motion.div
              className="fixed inset-0 bg-black/30 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} 
            />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 right-0 w-64 h-full bg-white text-gray-800 shadow-2xl z-40 flex flex-col items-start p-8 space-y-6"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-600 hover:text-black"
            >
              <X size={26} />
            </button>

            <ul className="space-y-6 mt-4">
              {mainMenu.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-lg font-medium hover:text-purple-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

           
              </motion.div>
               </>
        )}
             
      </AnimatePresence>
         </div>
      </header>
  );
}
