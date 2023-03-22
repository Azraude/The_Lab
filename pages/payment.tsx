import Footer from '@/src/components/Footer';
import Payment from '@/src/components/Payment';
import Searchbar from '@/src/components/SearchBar';
import { CartProvider } from '../src/CartContext';
import  Header  from '../src/components/Header'

export default function Menu() {
  return (
    <CartProvider>
    <div>
      <Header />
        <Payment />
        <Footer />
    </div>
  </CartProvider>   
  )
}
