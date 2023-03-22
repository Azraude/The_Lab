import { useEffect,useState } from "react";
import Cookies from 'js-cookie';
import { useCart } from "../CartContext";
import { useRouter } from "next/router";
import { ProductType } from "../data/products";

const Payment = () => {
    const [cart, setCart] = useState<ProductType[]>([]);
  
    useEffect(() => {
      const cartData = Cookies.get('cart');
      if (cartData) {
        const decodedCart = decodeURIComponent(cartData);
        const parsedCart = JSON.parse(decodedCart) as ProductType[];
        setCart(parsedCart);
      }
    }, []);
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-8">Récapitulatif de la commande</h1>
      {cart.map((product) => (
        <div key={product.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={product.image} alt="" className="w-16 h-16 rounded" />
            <span className="ml-4">{product.name}</span>
            <span className="ml-4">Quantité :{product.quantity}</span>
          </div>
          <div className="font-bold">{product.price} €</div>
        </div>
      ))}
    </div>
  );
};

export default Payment;
