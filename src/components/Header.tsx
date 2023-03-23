import React, {useState,useRef, useEffect} from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from 'next/link'
import {useCart} from '../CartContext'
import {useRouter} from 'next/router'
import CartModal from './CartModal'
import { useSpring, animated } from "react-spring";


const Header: React.FC = () => {
const {cart, totalQuantity} = useCart()
const [showCart,setShowCart] = useState(false)
const cartRef = useRef<HTMLDivElement>(null)
const router = useRouter();
const [animateHeader, setAnimateHeader] = useState(false);

const headerAnimation = useSpring({
  opacity: 1,
  y: 0,
  from: { opacity: 0, y: -50 },
  config: { duration: 500 },
  shouldUpdate: animateHeader, // Empêcher le rechargement sur les autres pages
  });

    useEffect(() => {
    setAnimateHeader(router.pathname === "/");
  }, [router.pathname]);

return (
  <animated.header
    className="pt-6 px-8 flex justify-between items-center max-md:fixed max-md:-top-0 max-md:w-full max-md:left-0 max-md:z-50 max-md:bg-white max-md:shadow-md"
    style={headerAnimation}
  >
    <div className="flex items-center">
      <Link href="/">
        <Image src="/assets/logo.png" alt="The Lab" width={200} height={200} />
      </Link>
    </div>
    <nav>
      <ul className="flex space-x-6 max-md:hidden">
        <li>
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? "border-b-2 border-black font-bold text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }
            aria-label="Home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              router.pathname === "/about"
                ? "border-b-2 border-black font-bold text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }
            aria-label="About"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/menu"
            className={
              router.pathname === "/menu"
                ? "border-b-2 border-black font-bold text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }
            aria-label="Menu"
          >
            Menu
          </Link>
        </li>
      </ul>
    </nav>
    <div className="flex items-center space-x-4">
      <button
        className="relative p-2 rounded-full hover:text-gray-700"
        onClick={() => setShowCart(!showCart)}
        aria-label="Cart"
      >
        <FaShoppingCart size={18} />
        {totalQuantity > 0 && (
          <div className="absolute -top-3 -right-3 px-2 rounded-full bg-red-500 text-white" aria-label="Cart items">
            {totalQuantity}
          </div>
        )}
      </button>
      <div className="flex items-center space-x-4 relative">
        <button className="p-2 rounded-full hover:text-gray-700" aria-label="User">
          <FaUser size={18} />
        </button>
        {showCart && (
          <div
            className="cart-modal-overlay absolute top-11 right-0 z-50"
            aria-label="Cart modal"
          >
            <CartModal />
          </div>
        )}
      </div>
    </div>
  </animated.header>
);
};

export default Header;
