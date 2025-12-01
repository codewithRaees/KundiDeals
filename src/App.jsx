import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'


function App() {
const [cart , setCart] = useState([])
  return (
    <>
      
        <Header cartCount={cart?.length}/>
      <Outlet  context={{ cart, setCart }}/>
        <Footer />
      
    </>
  )
}

export default App
