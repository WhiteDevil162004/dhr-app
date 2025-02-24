import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Banner from './component/Banner'

import Typewritter from './component/Typewritter'
import ProductListing from './component/ProductListing'
import Cart from './component/Cart'



const App = () => {
  return (
    <div>
   <Header/>
   <br></br>
   <Banner/>
   <Typewritter/>
   <br></br>
   <ProductListing/>
   <Cart/>
   <Footer/>
    </div>
  )
}

export default App