import { div, main } from 'framer-motion/client';
import logo from '../assets/images/logo.png';
import { useState } from 'react';

export default function Header() {
    const [isOpen , setIsOpen] = useState(false)
    const mainMenu = ['Home', 'Products', 'About', 'Contact']

  return (
      <header className="w-auto shadow-md  flex justify-between md:pl-10  pl-2 pr-2 md:pr-10 items-center">
      <div className="flex items-center">
  <img src={logo} alt="Kundi Deals Logo" className="w-24 h-auto" />
</div>
          <div className="menues">
               <nav className="main-nav hidden  md:flex gap-5 items-center ">
              <ul className="flex justify-around gap-10">
                  {
                      mainMenu.map((item, index)=> <li key={index}><a href="#">{item}</a></li>)
                  }
                 
                  </ul>
                 <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
          </nav>
          <button className="md:hidden block" onClick={()=> setIsOpen(!isOpen)}>Hamburger Menu</button>
          {isOpen && <div className='mobile-menu'>
              <nav className="main-nav absolute right-10 top-20">
              <ul className="flex flex-col gap-10 bg-purple-200">
                  {
                      mainMenu.map((item, index)=> <li key={index}><a href="#">{item}</a></li>)
                  }
                 
              </ul>
                  </nav>
              
              </div>}
              
         </div>
      </header>
  );
}
