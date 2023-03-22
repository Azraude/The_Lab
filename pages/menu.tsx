import Footer from '@/src/components/Footer';
import Searchbar from '@/src/components/SearchBar';
import Shop from '@/src/components/Shop'
import { CartProvider } from '../src/CartContext';
import  Header  from '../src/components/Header'

export default function Menu() {
  return (
    <CartProvider>
    <div>
      <Header />
      <Searchbar />
      <Shop />
      <Footer />
    </div>
  </CartProvider>
    
  )
}
