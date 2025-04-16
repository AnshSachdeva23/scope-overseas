import React from "react";
import Headings from "../components/Headings";
import MarqueeCarousel from "../components/MarqueeCarousel";
import InfoSwitcher from "../components/InfoSwitcher";
import ContactUs from "../components/ContactUs";

const Home = ({ contactRef, servicesRef }) => {
  return (
    <>
      <Headings />
      <MarqueeCarousel />
      <div ref={servicesRef}>
        <InfoSwitcher />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
