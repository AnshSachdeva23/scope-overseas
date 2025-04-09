import React from "react";

const Headings = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 mt-40 mb-16">
      <h1 className="text-5xl font-semibold mb-6 text-[#4B3621]">
        Welcome to Our Export Website
      </h1>
      <p className="text-xl mb-8 max-w-xl text-[#5C452B]">
        Explore high-quality products for export including rice, textiles, and
        home furnishings.
      </p>
      <div className="mb-10 flex gap-4">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Browse Products
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-[#4B3621] rounded-lg group bg-gradient-to-br from-[#D2B48C] to-[#C49A6C] hover:from-[#c49a6c] hover:to-[#a87b4c] focus:ring-4 focus:outline-none focus:ring-yellow-200">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-[#4B3621] rounded-md group-hover:bg-transparent group-hover:text-white">
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Headings;
