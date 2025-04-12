import React from 'react'

const Hero = () => {
  return (
<div className=" bg-base-200 min-h-screen flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600">
  <div className=" text-center text-gray-200">
    <div className="w-2xl lg:w-5xl">
      <h1 className="text-6xl font-bold drop-shadow-lg">Hello there</h1>
      <p className="py-6 text-2xl lg:text-4xl">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className=" bg-emerald-600 p-2 text-white rounded shadow-2xl lg:p-4 ">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero