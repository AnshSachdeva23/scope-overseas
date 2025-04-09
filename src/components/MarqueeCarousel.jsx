import React from "react";

const images = [
  "/images/rice.png",
  "/images/textile.png",
  "/images/home_furnishings.png",
  "/images/scope_overseas_export.png",
  "/images/pillow_towel.png",
];

const images_reverse = [
  "/images/curtain.png",
  "/images/carpet.png",
  "/images/lamp.png",
  "/images/wall_art.png",
  "/images/vases.png",
];

const MarqueeCarousel = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-8 space-y-8 mb-32">
      {/* Top Marquee - default scroll left */}
      <div className="marquee">
        <div className="track">
          {images.concat(images).map((src, index) => (
            <div
              key={`top-${index}`}
              className="item w-72 h-72 flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`product-top-${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee - reverse scroll */}
      <div className="marquee">
        <div className="track-reverse">
          {images_reverse.concat(images_reverse).map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="item w-72 h-72 flex-shrink-0 mx-4 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`product-bottom-${index}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeCarousel;
