import React from "react";
import { Button } from "@/components/crazxy/button/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#8b5cf6] opacity-80 z-0" />

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#6d28d9]/20 to-transparent z-0" />

      <div className="relative z-10 text-center text-gray-200 px-4">
        <div className="max-w-4xl flex flex-col justify-center items-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-xl text-shadow-lg">
            Hello there
          </h1>
          <p className="py-6 text-lg lg:text-2xl text-gray-300">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button variant="accent">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
