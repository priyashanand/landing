import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import Header from './components/Header';
import Footer1 from './components/Footer1';
import Footer from './components/Footer';
import AboutUs from './page/AboutUs';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay for transition/render
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="font-inter antialiased text-gray-900 bg-white">
        <Header />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
        <Footer />
        <Footer1 />
      </div>
    </Router>
  );
}

export default App;
