import React, {useState,useRef} from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from 'next/link'
import {useCart} from '../CartContext'
import {useRouter} from 'next/router'
import CartModal from './CartModal'


const Header: React.FC = () => {
const {cart, totalQuantity} = useCart()
const [showCart,setShowCart] = useState(false)
const cartRef = useRef<HTMLDivElement>(null)
const router = useRouter();
  return (
    <header className=" pt-6 px-8 flex justify-between items-center">
      <div className="flex items-center">
       <Link href='/'><Image src="/assets/logo.png" alt="The Lab" width={200} height={200} /></Link> 
      </div>
      <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className={router.pathname === "/" ? " border-b-2 border-black font-bold" : "text-gray-500 hover:text-gray-900"}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={router.pathname === "/about" ? " border-b-2 border-black font-bold" : "text-gray-500 hover:text-gray-900"}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/menu" className={router.pathname === "/menu" ? " border-b-2 border-black font-bold" : "text-gray-500 hover:text-gray-900"}>
            Menu
          </Link>
        </li>
      </ul>
    </nav>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:text-gray-700">
          <FaSearch size={18} />
        </button>
       
        <button
          className="relative p-2 rounded-full hover:text-gray-700"
          onClick={() => setShowCart(!showCart)}
        >
        <FaShoppingCart size={18} />
        {totalQuantity > 0 && (
          <div className="absolute -top-3 -right-3 px-2 rounded-full bg-red-500 text-white">
            {totalQuantity}
          </div>
        )}
      </button>
            <div className="flex items-center space-x-4 relative">
        <button className="p-2 rounded-full hover:text-gray-700">
          <FaUser size={18} />
        </button>
        {showCart && (
          <div className="cart-modal-overlay absolute top-11 right-0 z-50">
            <CartModal />
          </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;
