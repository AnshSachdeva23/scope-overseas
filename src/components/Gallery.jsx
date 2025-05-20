import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("handicrafts");

  const images = {
    handicrafts: [
      "/images/handi1.jpg",
      "/images/handi2.jpg",
      "/images/handi3.jpg",
      "/images/handi4.jpg",
      "/images/handi5.jpg",
      "/images/handi6.jpg",
      "/images/handi7.jpg",
      "/images/handi8.jpg",
      "/images/handi9.jpg",
    ],
    others: [
      "/images/product1.jpeg",
      "/images/product2.jpeg",
      "/images/product3.jpeg",
      "/images/product4.jpeg",
    ],
  };

  const tabs = Object.keys(images);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20">
      {/* Custom Theme Tabs */}
      <div className="text-sm font-medium text-center text-[#7A6652] border-b border-[#D6C2B0]">
        <ul className="flex flex-wrap justify-center -mb-px">
          {tabs.map((tab) => (
            <li key={tab} className="me-2">
              <button
                onClick={() => setActiveTab(tab)}
                className={`inline-block p-3 sm:p-4 rounded-t-lg border-b-2 capitalize transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-[#4B3621] border-[#4B3621]"
                    : "border-transparent hover:text-[#4B3621] hover:border-[#D6C2B0]"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Responsive Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {images[activeTab].map((url, idx) => (
          <div key={idx} className="w-full">
            <img
              src={url}
              alt={`${activeTab} ${idx + 1}`}
              className="w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
