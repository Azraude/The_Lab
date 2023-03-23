import {useCart} from '../CartContext';
import {FaTrashAlt} from 'react-icons/fa';
import Link from 'next/link'
import router from "next/router";
import Cookies from 'js-cookie';

const CartModal = () => {
  const { cart, removeFromCart } = useCart();
  const handlePaymentClick = () => {
    const cartData = encodeURIComponent(JSON.stringify(cart));
    Cookies.set('cart', cartData);
    router.push('/payment');
  };
  return (
    <div className="cart-modal bg-white p-4 rounded-lg overflow-y-auto shadow-lg w-64 h-64">
      {cart.length === 0 ? (
        <div className="pl-2 text-gray-500">Your cart is empty</div>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <div className="flex flex-col relative" key={product.id}>
                <li className="flex items-center justify-between py-2 border-b border-gray-200 ">
                  <div className="product-image mr-4">
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-contain" />
                  </div>
                  <div className="product-info flex-1">
                    <h3 className="font-bold text-sm">{product.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {product.price.toFixed(2)} € x {product.quantity}
                    </p>
                  </div>
                  <div className="delete cursor-pointer">
                    <FaTrashAlt onClick={() => removeFromCart(product.id)} />
                  </div>
                </li>
              </div>
            ))}
          </ul>
          <div className="button mt-2 w-full">
            <Link href='/payment'><button onClick={handlePaymentClick} className="bg-buy p-3 leading-4 flex justify-center items-center  text-white w-full rounded-md ">Payer</button> </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
