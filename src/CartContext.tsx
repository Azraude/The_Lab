import { createContext, useContext, useEffect, useState } from "react";
import { ProductType } from "../src/data/products";

type CartContextType = {
  cart: ProductType[];
  totalQuantity: number;
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
};

type CartProviderProps = {
  children: React.ReactNode;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  totalQuantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateTotalQuantity();
  }, [cart]);

  const updateTotalQuantity = () => {
    const total = cart.reduce((acc, product) => acc + product.quantity, 0);
    setTotalQuantity(total);
  };

  const addToCart = (product: ProductType) => {
    const index = cart.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index] = Object.assign({}, cart[index], {
        quantity: cart[index].quantity + 1,
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  
  const loadCart = () => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      const parsedCart: ProductType[] = JSON.parse(cartFromStorage);
      setCart(parsedCart);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);


  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalQuantity, }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
