import React from 'react';
import Link from 'next/link';

const Accueil = () => {
    return (
      <>
        <div className="flex justify-center items-center flex-col space-y-6 h-screen">
          <h1 className="text-5xl font-bold max-md:text-center">
            Le restaurant du futur à Montpellier
          </h1>
          <p className="text-xl text-gray-400 home_span">
            Get <span className="font-bold">FREE delivery </span>on every weekend.
          </p>
          <Link
            href="/menu"
            className="btn bg-black text-white rounded-full text-md px-8 py-2 border border-black hover:scale-110 hover:bg-transparent hover:border hover:border-black hover:text-black p-2 transition-all duration-300"
          >
            Take order
          </Link>
        </div>
      </>
    );
  };
  
  

export default Accueil;
