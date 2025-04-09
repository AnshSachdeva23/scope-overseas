import React from "react";

const Landing = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/all.png" // Replace this with your actual hero image filename
          alt="Export Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content on top of image */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl font-semibold mb-6">
          Welcome to Our Export Website
        </h1>
        <p className="mb-8 max-w-xl">
          Explore high-quality products for export including rice, textiles, and
          home furnishings.
        </p>
        <div className="mb-10 flex gap-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Browse Products
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-gray-900 rounded-md group-hover:bg-transparent group-hover:text-white">
              Learn More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
