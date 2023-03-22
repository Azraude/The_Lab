import Payment from '@/src/components/Payment';
import { CartProvider } from '../src/CartContext';
import  Header  from '../src/components/Header'

export default function Menu() {
  return (
    <CartProvider>
    <div>
      <Header />
        <Payment />
    </div>
  </CartProvider>
    
  )
}
