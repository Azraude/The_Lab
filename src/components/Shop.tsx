import { useState } from "react";
import { Product } from "../components/Product";
import products, { ProductType } from "../data/products";
import { FaTrashAlt } from "react-icons/fa";
import { useTransition, animated } from '@react-spring/web'
import {useCart} from '../CartContext'
import Link from 'next/link'
import router from "next/router";
import Cookies from 'js-cookie';
import Searchbar from "./SearchBar";

const Shop = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const totalQuantity = cart.reduce((total, product) => total + product.quantity * product.price, 0);
  const transitions = useTransition(cart, {
    key: (item: ProductType) => item.name,
    from: { opacity: 0, transform: "scale(0.9)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
  });
  const handlePaymentClick = () => {
    const cartData = encodeURIComponent(JSON.stringify(cart));
    Cookies.set('cart', cartData);
    router.push('/payment');
  };
  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };
  
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = (id: number) => {
    removeFromCart(id);
  };

  const leftSectionTransition = useTransition(true, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    config: { duration: 600 },
  });
  const rightSectionTransition = useTransition(true, {
    from: { opacity:0 },
    enter: { opacity:1 },
    config: { duration: 600 },
  });
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
  };
  return (
    <>
     <Searchbar setFilter={setFilter} />
    <div className="flex flex-row max-md:flex-col w-full mt-10 px-6 ">

       {leftSectionTransition(
        (style, item) =>
          item && (
            <animated.div
              key={1}
              style={{ ...style }}
              className="w-1/5 max-md:w-full max-md:pb-2  max-md:mb-10 bg-white drop-shadow-lg px-2 min-h-full overflow-y-auto overflow-x-hidden rounded-2xl ml-3"
            >
              {cart.length === 0 ? (
                <div className="pl-2 pt-5 text-gray-500 cart ">
                  Votre panier est vide
                </div>
              ) : (
                <ul>
                  {cart.map((product) => (
                    <animated.div
                      key={product.id}
                      className={`product flex items-center mb-3 mt-3 py-2 rounded-xl bg-product shadow-md`}
                      style={style}
                    >
                      <img
                        src={product.image}
                        alt=""
                        className="w-20 h-20"
                      />
                      <div className="info w-full">
                        <div className="flex justify-between mx-2">
                          <div className="text-md font-bold text-gray-700">
                            {product.name}
                          </div>
                          <div className="text-sm font-bold text-gray-700">
                            x{product.quantity}
                          </div>
                        </div>
                        <div className="price flex justify-between mx-2 mt-2">
                          <span className="text-sm font-bold text-gray-700">
                            {product.price}€
                          </span>
                          <div
                            className="delete cursor-pointer"
                            onClick={() => handleDelete(product.id)}
                          >
                            <FaTrashAlt />
                          </div>
                        </div>
                      </div>
                    </animated.div>
                  ))}
                </ul>
              )}

              {totalQuantity !== 0 && (
                <div className="">
                  <hr
                    className="my-3"
                    style={{
                      background: "#ACACAC33",
                      height: "2px",
                      width: "100%",
                      border: "none",
                    }}
                  />
                  <span className="text-lg font-bold pl-3">
                    Total : {totalQuantity.toFixed(2)} €
                  </span>
                  <div className="button mt-2 flex items-center justify-center">
                    <Link href="/payment">
                      <button
                        onClick={handlePaymentClick}
                        className="bg-[#16C7D2] hover:scale-105 transition ease-linear delay-50 p-4 leading-4 flex justify-center items-center  text-white w-64 rounded-lg "
                      >
                        Payer Maintenant
                        </button>
                        </Link>
                        </div>
                        </div>
                        )}
                        </animated.div>
                        )
                        )}
   
   {rightSectionTransition(
    (style, item) =>
      item && (
        <animated.div
          key={2}
          style={{ ...style }}
          className="flex flex-wrap w-4/5 max-md:w-full mr-4 max-md:mr-0 mt-10"
        >
          {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (
           
            <div key={product.id} className="w-72 max-md:w-full">
              <Product
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                time={product.time}
                person={product.person}
                quantity={product.quantity}
                onAddToCart={() => handleAddToCart(product)}
              />
            </div>
          ))
          ) : (
            <div className=" text-center w-full h-screen">
              <h1 className="text-2xl font-bold">Aucun produit trouvé</h1>
            </div>
          )}
        </animated.div>

      )
  )}
</div>
</>
  );
};

export default Shop;
