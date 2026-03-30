import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'  
import AboutUs from './components/AboutUs.jsx'
import Home from './components/Home.jsx'

import ProductDetail from './components/ProductDetail.jsx'
import ProductsContainer from './components/ProductsContainer.jsx'
import Furniture from './components/Furniture.jsx'
import Laptops from './components/Laptops.jsx'
import ContactUs from './components/ContactUs.jsx'


const router = createBrowserRouter([{
   path: '/',
  element: <App />,
  errorElement: <h1>Not Found page.Rais</h1>,
  
  children: [
   {
   path: '/',
   element: <Home/>
 },
     {
   path: '/About',
   element: <AboutUs/>
    },
 
     {
   path: '/Products',
   element: <ProductsContainer/>
    },
    {
      path: '/Laptops',
      element:<Laptops />
    },
 {
   path: '/furniture',
   element: <Furniture />
    },
    {
   path: '/contact',
   element: <ContactUs/>
 },
      {
   path: '/product/:productName',
   element: <ProductDetail/>
 }
   ]
 }])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
