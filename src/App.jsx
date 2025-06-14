import { useState, useRef, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import SearchPage from './components/Home/SearchPage';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import ReligiousToursPage from './pages/RelegiousToursPage';
import RoadTripsPage from './pages/RoadTripsPage';
import TreksPage from './pages/Treks';
import PackagesPage from "./pages/PackagesPage";
import ContactUs from "./pages/ContactUs";
import Footer from './components/Footer';
import TaxiServices from './pages/TaxiServices';

function App() {
  const [isTransparent, setIsTransparent] = useState(true);
  const heroRef = useRef(null);
  const location = useLocation(); // Now this works!

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsTransparent(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTransparent(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [location.pathname]);

  return (
    <>
      <Header isTransparent={isTransparent} />
      <Routes>
        <Route path="/" element={<Home isTransparent={isTransparent} heroRef={heroRef} />} />
        <Route path="/search" element={<SearchPage />} /> 
        <Route path="/religious-tours/:id?" element={<ReligiousToursPage />} />
        <Route path="/road-trips/:id?" element={<RoadTripsPage />} />
        <Route path="/treks/:id?" element={<TreksPage />} />
        <Route path="/packages/:id?" element={<PackagesPage />} />
        <Route path="/contact?" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/taxi-services" element={<TaxiServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
