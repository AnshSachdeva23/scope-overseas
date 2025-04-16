import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import { useEffect, useRef } from 'react';

function App() {
  useEffect(() => {
    document.title = "Scope Overseas";
  }, []);

  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Navbar
        onScrollToContact={scrollToContact}
        onScrollToServices={scrollToServices}
      />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home contactRef={contactRef} servicesRef={servicesRef} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
