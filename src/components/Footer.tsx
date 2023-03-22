import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div className="">
          <div className="text-lg flex w-full justify-between items-center max-md:flex-col ">
            <div>
                <h2 className="text-white mb-4 font-bold text-2xl">Still need our support?</h2>
                <p className="text-gray-400 text-sm">
                Sign up for our newsletter to receive updates and exclusive
                offers.
                </p>
            </div>
            
            <div className="flex items-center mb-4 max-md:mt-5 max-md:flex-col max-md:justify-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border-gray-400 py-2 px-3 rounded-lg mr-2 max-md:mr-0 text-black"
              />
              <button className="bg-white w-full text-black px-4 py-2 rounded-lg max-md:mt-2">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  mt-10 max-md:justify-center max-md:flex-col max-md:flex">
            <div className="md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-8">
                <Image src="/assets/logo.png" width={240} height={240} alt="Logo"/>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                Opening hours:<br /> Monday-Sat from 8am to 10pm
                </p>
                <p className="text-gray-400 text-sm">
                Sunday : Closed
                </p>
            </div>
            <div className="text-lg">
                <h2 className="text-white font-bold mb-4">Useful Links</h2>
                <ul className="list-none mb-8">
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    About
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    News
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    Partners
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    Team
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    Menu
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                    </a>
                </li>
                </ul>
            </div>
            <div className="text-lg">
            <h2 className="text-white font-bold mb-4">Help?</h2>
                <ul className="list-none mb-8">
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    Term & Condition
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    Reporting
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                    </a>
                </li>
                </ul>
            </div>
        </div>
        </div>
        <hr className="border-gray-500 border-opacity-50" />
        <div className="flex items-center justify-between py-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Lab. All Rights Reserved.
          </p>
          <ul className="flex items-center list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white mx-4">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white mx-4">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
