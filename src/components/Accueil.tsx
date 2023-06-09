import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';



const Accueil = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

const homeAnimation = useSpring({
  opacity: 1,
  y: 0,
  from: { opacity: 0, y: 50 },
  config: { duration: 500 },
  });
    return (
      <>
      <animated.header className="flex justify-center items-center flex-col space-y-6 h-screen" style={homeAnimation}>
          <h1 className="text-5xl font-bold max-md:text-center">
            The restaurant of the future in Montpellier
          </h1>
          <p className="text-xl text-gray-400 home_span">
            Get <span className="font-bold">FREE delivery </span>on every weekend.
          </p>
          <Link
            href="/menu"
            className="btn bg-buy-hover text-white rounded-full text-md px-8 py-2  border-black hover:scale-110 hover:bg-transparent hover:border hover:border-[#d89654] hover:text-black p-2 transition duration-300"
          >
            Take order
          </Link>
        </animated.header>
      </>
    );
  };
  
  

export default Accueil;
