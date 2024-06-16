import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <header className="w-full flex flex-row justify-start bg-[#4A4D6D] sm:px-8 px-4 py-4 border-b border-b-[#4A4D6D]">
      <Link to= '/' className="flex w-1/2 justify-center items-center">
        <div className="w-full flex justify-start rounded-lg items-center bg-[#4A4D6D]  ">
          <div className="py-3 pl-12 text-2xl subpixel-antialiased grow	font-bold tracking-wide text-center text-[#DBDCE6]">
            ALZOLVE
          </div>
          <div className="flex-none w-14"></div>
        </div>
      </Link>
      <Link to= '/home' className="flex w-1/2 h-1/2 mt-2 mb-2 mr-4 ml-4  justify-center items-center">
        <div className="w-full flex justify-start rounded-lg items-center bg-[#797DA4] hover:bg-[#8a79a1] shadow-2xl ">
          <div className="py-3 pl-12  text-md subpixel-antialiased grow 	font-bold tracking-wide text-center text-[#DBDCE6]">
            HOME
          </div>
          <div className="flex-none w-14"></div>
        </div>
      </Link>
      <Link to= '/faceRec' className="flex w-1/2 h-1/2 mt-2 mb-2 mr-4 ml-4  justify-center items-center">
        <div className="w-full flex justify-start rounded-lg items-center bg-[#797DA4] hover:bg-[#8a79a1] shadow-2xl ">
          <div className="py-3 pl-12  text-md subpixel-antialiased grow	font-bold tracking-wide text-center text-[#DBDCE6]">
            FaceRec
          </div>
          <div className="flex-none w-14"></div>
        </div>
      </Link>
      <Link to= '/location' className="flex w-1/2 h-1/2 mt-2 mb-2 mr-4 ml-4  justify-center items-center">
        <div className="w-full flex justify-start rounded-lg items-center bg-[#797DA4] hover:bg-[#8a79a1] shadow-2xl ">
          <div className="py-3 pl-12  text-md subpixel-antialiased grow	font-bold tracking-wide text-center text-[#DBDCE6]">
          Location
          </div>
          <div className="flex-none w-14"></div>
        </div>
      </Link>
      <Link to= '/contact' className="flex w-1/2 h-1/2 mt-2 mb-2 mr-4 ml-4  justify-center items-center">
        <div className="w-full flex justify-start rounded-lg items-center bg-[#797DA4] hover:bg-[#8a79a1] shadow-2xl ">
          <div className="py-3 pl-12  text-md subpixel-antialiased grow	font-bold tracking-wide text-center text-[#DBDCE6]">
          Contact US
          </div>
          <div className="flex-none w-14"></div>
        </div>
      </Link>
      

      </header>
  );
}

export default Navbar;
