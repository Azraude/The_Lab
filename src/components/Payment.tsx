import { useEffect,useState } from "react";
import Cookies from 'js-cookie';
import { useCart } from "../CartContext";
import { useRouter } from "next/router";
import { ProductType } from "../data/products";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { SiTablecheck } from "react-icons/si";
import { BiTime } from "react-icons/bi";

const uniqueId = Math.floor(Math.random() * 1000);
const Payment = () => {
    const [cart, setCart] = useState<ProductType[]>([]);
    const router = useRouter();

    useEffect(() => {
      const cartData = Cookies.get('cart');
      if (cartData) {
        const decodedCart = decodeURIComponent(cartData);
        const parsedCart = JSON.parse(decodedCart) as ProductType[];
        setCart(parsedCart);
      }
    }, []);
  
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  
    const handleRemoveProduct = (product: ProductType) => {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
      Cookies.set('cart', JSON.stringify(newCart));
    }
  
    const handleCancelOrder = () => {
      Cookies.remove('cart');
      setCart([]);
      router.push('/');
    }
 
    const handlePayNow = () => {
      // handle payment logic here
    }
    useEffect(() => {
      const cartData = Cookies.get('cart');
      if (cartData) {
        const decodedCart = decodeURIComponent(cartData);
        const parsedCart = JSON.parse(decodedCart) as ProductType[];
        setCart(parsedCart);
      }
    }, []);
 return (
  <div className="flex justify-center items-start mt-10 px-2 max-sm:flex-col max-sm:px-0">
    <div className="w-full md:w-2/4 mx-2 md:mx-10">
      <div className="bg-[#F5F5F5] rounded shadow">
        <div className="header-recap flex flex-col md:flex-row justify-between py-5 md:py-10 px-4">
          <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-0 flex-1">
            Order #{uniqueId}
          </h1>
          <div className="table md:mr-5 mb-2 md:mb-0">
            <div className="flex items-center">
              <SiTablecheck />
              <p className="ml-2">
                {" "}
                Table :{" "}
                <span className="text-[#D89F65] font-bold">1</span>
              </p>
            </div>
          </div>

          <div className="time">
            <div className="flex items-center">
              <BiTime />
              <p className="ml-2">
                Time : {}{" "}
                <span className="text-[#D89F65] font-bold">20:02 PM</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-5 md:mb-0 py-5 bg-gray-200 rounded shadow">
          <div className="w-1/3 font-semibold ml-2 md:ml-4">
            Item
          </div>
          <div className="w-1/4 text-right font-semibold">
            Price
          </div>
          <div className="w-1/4 text-right font-semibold">
            Quantity
          </div>
          <div className="w-1/4 text-right font-semibold">
            Total
          </div>
          <div className="w-1/12"></div>
        </div>
        {cart.map((product) => (
          <div
            className="flex items-center md:flex-row mb-4 mt-4 md:ml-2 max-sm:justify-between"
            key={product.id}
          >
            <div className="w-full md:w-1/3 flex items-center ">
              <img
                src={product.image}
                alt=""
                className="w-16 h-16 rounded mr-4"
              />
              <span>{product.name}</span>
            </div>
            <div className="w-1/4 text-right max-md:text-left">
              {product.price} €
            </div>
            <div className="w-1/4 text-right max-md:text-left">
              {product.quantity}
            </div>
            <div className="w-1/4 text-right max-md:text-left">
              {product.price * product.quantity} €
            </div>
            <div className="w-1/12 flex justify-end">
              <button
                className="text-red-500 hover:text-red-600 mr-5"
                onClick={() => handleRemoveProduct(product)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      <div className="flex justify-end mt-4">
        <button className="transition-colors ease-in delay-50 hover:bg-[#fb8e8e]  text-gray-800 font-semibold py-3 px-4 rounded shadow  mt-64 w-full bg-[#EC5A5A]" onClick={handleCancelOrder}>Cancel Order</button>
      </div>
    </div>
  </div>
  <div className="w-1/4  max-sm:w-full">
    <div className=" rounded p-2">
      <div className="flex justify-between flex-start flex-col mb-4">
        <div className=" font-semibold text-2xl">Total Price</div>
        <div className='flex justify-between items-center'>
          <div className="font-bold text-[#D89F65] text-xl">{totalPrice} €</div>
          <div className="font-bold text-md flex items-center "><FaUsers /><div className="ml-2 font-bold text-md "> GUESS: 3</div></div>
        </div>
      
      </div>
      <button className="bg-black transition-colors delay-50 ease hover:bg-[#151515] text-white font-semibold py-2 px-4 w-full rounded shadow" onClick={handlePayNow}>Pay Now</button>
    </div>
  </div>
</div>


  );
};

export default Payment;
