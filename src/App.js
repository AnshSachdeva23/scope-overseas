import './App.css';
import ContactUs from './components/ContactUs';
import Headings from './components/Headings';
import InfoSwitcher from './components/InfoSwitcher';
import Landing from './components/Landing';
import MarqueeCarousel from './components/MarqueeCarousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Headings />
      {/* <Landing /> */}
      <MarqueeCarousel />
      <InfoSwitcher />
      <ContactUs />
    </>
  );
}

export default App;
