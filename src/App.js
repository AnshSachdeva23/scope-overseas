import './App.css';
import ContactUs from './components/ContactUs';
import Headings from './components/Headings';
import InfoSwitcher from './components/InfoSwitcher';
import MarqueeCarousel from './components/MarqueeCarousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Headings />
      <MarqueeCarousel />
      <InfoSwitcher />
      <ContactUs />
    </>
  );
}

export default App;
