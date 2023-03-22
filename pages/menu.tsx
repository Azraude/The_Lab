import Footer from '@/src/components/Footer';
import Searchbar from '@/src/components/SearchBar';
import Shop from '@/src/components/Shop'
import { CartProvider } from '../src/CartContext';
import  Header  from '../src/components/Header'
import { useState } from 'react';



export default function Menu() {
  return (
    <CartProvider>
    <div>
      <Header />
      <Shop />
      <Footer />
    </div>
  </CartProvider>
    
  )
}
