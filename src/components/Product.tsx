import React from "react";

type ProductProps = {
  name: string;
  image: string;
  price: number;
  time:number;
  person:number;
  quantity:number;
  onAddToCart: () => void;
};

export const Product: React.FC<ProductProps> = ({
  name,
  image,
  price,
  time,
  person,
  quantity,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col items-center w-64 max-md:w-full max-md:ml-0 h-82 mb-16 ml-5 bg-product bg-shadow transition-all delay-50 hover:-mt-4 cursor-pointer rounded-lg">
    <img src={image} alt={name} className="w-40 h-40 object-contain -mt-8" />
    <h3 className="text-center font-bold text-xl ">{name}</h3>
    <hr
    className='my-3'
   style={{
   background: "rgba(172, 172, 172, 0.2)",
   height: "2px",
   width:"100%",
   border: "none",
   }}
/>
    <div className="flex justify-between px-4 w-full my-2">
      <div className="text-sm text-gray-500">Time</div>
      <div className="text-sm text-gray-500">Person</div>
    </div>
    <div className="flex justify-between px-4 w-full mb-5">
      <div className="text-sm font-bold text-gray-700">{time}</div>
      <div className="text-sm font-bold text-gray-700">{person}</div>
    </div>
    <button
      onClick={onAddToCart}
      className="transition delay-150 bg-black w-full mb-0 pb-5 text-white rounded-b-xl pt-3  "
    >
      Ajouter au panier
    </button>
  </div>
  
  );
};
