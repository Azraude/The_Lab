import { useRouter } from 'next/router';
import Image from 'next/image';
import products, { ProductType } from '../../src/data/products';
import Header from '../../src/components/Header'
import { useState } from 'react';
import { useCart } from '../../src/CartContext'
import { AiFillStar } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const MAX_RATING = 5;

export default function ProductPage() {
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<ProductType>(
    products.find((product) => product.id === Number(id)) as ProductType
  );

  if (!product) {
    // Handle the case where the product is not found
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }
  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
    console.log(cart)
    console.log(product) // Doesn't work idk why
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    setProduct((prevProduct) => ({ ...prevProduct, quantity }));
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

  const handlePrevProduct = () => {
    const index = products.findIndex((product) => product.id === Number(id));
    const prevProduct = products[index - 1] as ProductType;
    if (prevProduct) {
      setProduct(prevProduct);
      router.push(`/product/${prevProduct.id}`);
    } else if (index === 0) {
      const lastProduct = products[products.length - 1] as ProductType;
      setProduct(lastProduct);
      router.push(`/product/${lastProduct.id}`);
    }
  };

  const handleNextProduct = () => {
    const index = products.findIndex((product) => product.id === Number(id));
    const nextProduct = products[index + 1] as ProductType;
    if (nextProduct) {
      setProduct(nextProduct);
      router.push(`/product/${nextProduct.id}`);
    } else if (index === products.length - 1) {
      const firstProduct = products[0] as ProductType;
      setProduct(firstProduct);
      router.push(`/product/${firstProduct.id}`);
    }
  };


  return (
    <>
    <Header />
    <div className="flex justify-center items-center h-screen relative max-md:mt-20">
    <button onClick={() => router.push('/menu')}><AiOutlineArrowLeft className='absolute top-12 left-20 max-md:top-0 max-md:left-5'/> </button>
  <div className="flex flex-col md:flex-row w-full max-w-screen-lg  rounded-lg  ">
    <div className="md:w-1/2 self-end ">
      <Image src={product.image} width={500} height={500} alt={product.name} />
    </div>
    <div className="md:w-1/2 p-8 flex self-start relative flex-col">
    <div className="flex justify-end absolute -top-20 -right-0 max-md:top-0 max-md:left-0">
        <button onClick={handlePrevProduct} className="text-gray-700 hover:text-gray-900 font-bold py-2 px-4 rounded mr-2">
      <div className='flex items-center'><AiOutlineArrowLeft className="h-6 w-6 mr-2" /> Prev</div> 
        </button>
        <button onClick={handleNextProduct} className="text-gray-700 hover:text-gray-900 font-bold py-2 px-4 rounded">
        <div className='flex items-center'>Next<AiOutlineArrowRight className="h-6 w-6 ml-2" /></div> 
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-2xl font-bold mb-4"> {product.price.toFixed(2) }€</p>
      <div className="flex items-center mb-4">
        {Array.from({length: MAX_RATING}, (_, i) => (
          <AiFillStar key={i} className={`h-6 w-6 text-yellow-500 ${product.rating >= i + 1 ? "opacity-100" : "opacity-25"}`} />
        ))}
        <span className="text-lg font-bold ml-2">{product.rating.toFixed(1)}/{MAX_RATING}</span>
      </div>
      <div className="flex items-center mb-4">
      <div className="flex items-center rounded">
        <button onClick={handleDecrementQuantity} className="text-gray-700 py-1 px-2">
          <FaMinus className="h-4 w-4" />
        </button>
        <input type="number" min="1" max="10" value={product.quantity} onChange={handleQuantityChange} className="w-20 text-center p-2"  />
        <button onClick={handleIncrementQuantity} className="text-gray-700 py-1 px-2">
          <FaPlus className="h-4 w-4 mr-4" />
        </button>
      </div>
        <button onClick={() => handleAddToCart(product)} className="bg-black text-white font-bold py-2 px-4 rounded-full mr-2">
          Add to cart
        </button>
       
      </div>
      
    </div>
  </div>
</div>

    </>
  );
}
