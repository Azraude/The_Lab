import { useRouter } from 'next/router';
import Image from 'next/image';
import products, { ProductType } from '../../src/data/products';
import Header from '../../src/components/Header'
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const MAX_RATING = 5;

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(
    products.find((product) => product.id === Number(id))
  );

  const handleAddToCart = () => {
    console.log('Product added to cart:', product);
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    setProduct((prevProduct) => ({ ...prevProduct, quantity }));
  };

  const handlePrevProduct = () => {
    const index = products.findIndex((product) => product.id === product.id);
    const prevProduct = products[index - 1];
    if (prevProduct) {
      setProduct(prevProduct);
      router.push(`/product/${prevProduct.id}`);
    }
  };
  const handleIncrementQuantity = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1,
    }));
  };
  const handleDecrementQuantity = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity > 1 ? prevProduct.quantity - 1 : 1,
    }));
  };
  

  const handleNextProduct = () => {
    const index = products.findIndex((product) => product.id === product.id);
    const nextProduct = products[index + 1];
    if (nextProduct) {
      setProduct(nextProduct);
      router.push(`/product/${nextProduct.id}`);
    }
  };

  return (
    <>
    <Header />
    <div className="flex justify-center items-center h-screen">
  <div className="flex flex-col md:flex-row w-full max-w-screen-lg  rounded-lg  overflow-hidden">
    <div className="md:w-1/2">
      <Image src={product.image} width={450} height={450} />
    </div>
    <div className="md:w-1/2 p-8 flex flex-col">
      <div className="flex items-center mb-4">
        {Array.from({length: MAX_RATING}, (_, i) => (
          <AiFillStar key={i} className={`h-6 w-6 text-yellow-500 ${product.rating >= i + 1 ? "opacity-100" : "opacity-25"}`} />
        ))}
        <span className="text-lg font-bold ml-2">{product.rating.toFixed(1)}/{MAX_RATING}</span>
      </div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-lg font-bold mb-4">Prix : {product.price}€</p>
      <div className="flex items-center mb-4">
        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Ajouter au panier
        </button>
        <div className="flex items-center border rounded">
          <button onClick={handleDecrementQuantity} className="text-gray-700 py-1 px-2">
            <FaMinus className="h-4 w-4" />
          </button>
          <input type="number" min="1" max="10" value={product.quantity} onChange={handleQuantityChange} className="w-20 text-center" />
          <button onClick={handleIncrementQuantity} className="text-gray-700 py-1 px-2">
            <FaPlus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-auto">
        <button onClick={handlePrevProduct} className="text-gray-700 hover:text-gray-900 font-bold py-2 px-4 rounded mr-2">
          <AiOutlineArrowLeft className="h-6 w-6" />
        </button>
        <button onClick={handleNextProduct} className="text-gray-700 hover:text-gray-900 font-bold py-2 px-4 rounded">
          <AiOutlineArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
