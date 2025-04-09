import React, { useState } from "react";

const contentData = [
  {
    title: "Quality Rice Products",
    description:
      "Explore our wide range of high-quality rice products sourced from the best farms to bring you the finest grains.",
    image: "/images/rice.png",
  },
  {
    title: "Textile Sector Excellence",
    description:
      "Discover our exceptional textile sector offerings, including fabrics, garments, and more, crafted with precision.",
    image: "/images/textile.png",
  },
  {
    title: "Home Furnishing Solutions",
    description:
      "From cushions to curtains, explore our export-quality furnishings tailored to global tastes.",
    image: "/images/home_furnishings.png",
  },
];

const InfoSwitcher = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeContent = contentData[activeIndex];

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-16 lg:px-32 py-10 h-auto md:h-[400px] mb-20">
      {/* Left content */}
      <div className="flex-1 space-y-6">
        {contentData.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer border-l-4 pl-4 transition-colors ${
              activeIndex === index ? "border-yellow-500" : "border-transparent"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Right image */}
      <div className="flex-1 h-full flex justify-center items-center">
        <div className="w-full sm:w-4/5 md:w-2/3 h-[300px] md:h-full">
          <img
            src={activeContent.image}
            alt="Selected Visual"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSwitcher;
