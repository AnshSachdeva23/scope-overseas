import React, { useEffect } from "react";
import AboutUsTable from "../components/AboutUsTable";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Scope Overseas";
  }, []);

  return (
    <div className="bg-[#FDF9F4] text-[#4B3621] px-6 sm:px-10 md:px-20 lg:px-28 xl:px-32 py-16 sm:py-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        About Scope Overseas
      </h1>

      <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify">
        Scope Overseas is a proud Indian exporter delivering excellence in
        quality and craftsmanship. We specialize in a curated range of products
        including{" "}
        <span className="font-semibold">
          handicrafts, textiles, and home furnishings
        </span>
        , celebrating the rich heritage of Indian artisanship.
      </p>

      <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify">
        With a strong commitment to sustainability, authenticity, and customer
        satisfaction, we aim to bring traditional Indian products to the global
        stage. Our team works closely with local creators to ensure every piece
        tells a story — a story of culture, skill, and pride.
      </p>

      <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
        Whether you're a retailer, wholesaler, or simply passionate about
        quality handmade goods, Scope Overseas is your trusted partner in global
        sourcing.
      </p>

      <AboutUsTable />
    </div>
  );
};

export default AboutUs;
