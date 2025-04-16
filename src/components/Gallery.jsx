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
    <div className="px-32 py-20">
      {/* Custom Theme Tabs */}
      <div className="text-sm font-medium text-center text-[#7A6652] border-b border-[#D6C2B0]">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li key={tab} className="me-2">
              <button
                onClick={() => setActiveTab(tab)}
                className={`inline-block p-4 rounded-t-lg border-b-2 capitalize ${
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

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-6">
        {images[activeTab].map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`${activeTab} ${idx + 1}`}
            className="w-full mb-4 rounded-lg break-inside-avoid"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
