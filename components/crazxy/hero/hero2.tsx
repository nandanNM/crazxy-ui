import React from "react";

const Hero2 = () => {
  return (
    <div className="w-screen h-4">
      <div className="flex items-center ">
        <div className="w-1/2 p-10 lg:w-1/3">
        <img
          src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGltYWdlfGVufDB8fDB8fHww"
          className="rounded-lg shadow-2xl"
        />
      
        </div>
       
        <div className="w-1/2 p-5 lg:w-1/3">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="bg-amber-700 p-2 rounded text-white shadow-2xl">Get Started</button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero2;
