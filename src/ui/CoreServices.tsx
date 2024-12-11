import React from "react";
import {
  MdAutoFixHigh,
  MdBuild,
  MdLiquor,
  MdOutlineCottage,
  MdOutlineSkateboarding,
} from "react-icons/md";
const CoreServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 xl:px-28">
      <h3 className="font-titleFont uppercase text-3xl mdl:text-4xl font-bold text-white py-10 xl:py-16 text-center">
        Our Core <span className="text-secondaryColor">Services</span>
      </h3>
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-10">
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <MdOutlineSkateboarding className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            3D DESIGN
            <span className="text-secondaryColor -mt-1">& ANIMATION</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <MdOutlineCottage className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Architectural
            <span className="text-secondaryColor -mt-1">Visualization</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <MdLiquor className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Product Animation
            <span className="text-secondaryColor -mt-1">& Visualization</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <MdAutoFixHigh className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Visual Effects
            <span className="text-secondaryColor -mt-1">Motion Graphics</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
