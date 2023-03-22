import { CartProvider } from '../src/CartContext';
import Header from '../src/components/Header';
import Accueil from '../src/components/Accueil';
import {Product} from '../src/components/Product';

export default function Home() {

 
  return (
    <CartProvider>
      <div className='bg-home'>
        <Header />
        <Accueil />
        <div className="grid grid-cols-3 gap-4 mt-40 pt-24">
          <Product
            name="Pizza"
            image="assets/product2.png"
            price={10}
            time={10}
            person={2}
            quantity={0}
            onAddToCart={() => {}}
          />
          <Product
            name="Pizza"
            image="assets/product2.png"
            price={10}
            time={10}
            person={2}
            quantity={0}
            onAddToCart={() => {}}
          />
          <Product
            name="Pizza"
            image="assets/product2.png"
            price={10}
            time={10}
            person={2}
            quantity={0}
            onAddToCart={() => {}}
          />
        </div>
      </div>
    </CartProvider>
  );
}

