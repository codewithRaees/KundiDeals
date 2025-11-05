import { Menu, X, ShoppingCart, User } from "lucide-react";
import { FaUser,FaShoppingCart  } from "react-icons/fa";
import logo from '../assets/images/logo.png';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen , setIsOpen] = useState(false)
    const mainMenu = ['Home', 'Products', 'About', 'Contact']

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
               setIsOpen(false)           
           }
        }
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    

  return (
      <header className="w-auto shadow-md  flex justify-between md:pl-10  pl-2 pr-2 md:pr-10 items-center">
      <div className="flex items-center">
  <img src={logo} alt="Kundi Deals Logo" className="w-24 h-auto" />
</div>
          <div className="menues">
               <nav className="main-nav hidden  md:flex gap-5 items-center text-red-400 ">
              <ul className="flex justify-around gap-10">
                  {
                      mainMenu.map((item, index)=> <li className="hover:text-red-500 transform hover:scale-110 transition duration-200" key={index}><a href="#">{item}</a></li>)
                  }
                 
          </ul>
          <div  className="relative group inline-block">
            <FaUser size={26} className="text-red-300 transform hover:scale-110 transition duration-200 " />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block 
                       bg-red-200 text-white text-xs rounded-xl px-3 py-1 shadow-lg">
        Register
      </span>
          </div>
         <div className="relative group inline-block">
  <FaShoppingCart size={26} className="cursor-pointer transform hover:scale-110 transition duration-200 text-red-300" />
  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block 
                   bg-red-200 text-white text-xs rounded-xl px-3 py-1 shadow-lg">
    Cart
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
