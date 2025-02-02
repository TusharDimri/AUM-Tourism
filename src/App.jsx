import { useState, useRef, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Header from './components/Header';
import ReligiousToursPage from './pages/RelegiousToursPage';
import ContactUs from "./pages/ContactUs";
import Footer from './components/Footer';

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
        <Route path="/religious-tours/:id?" element={<ReligiousToursPage />} />
        <Route path="/contact?" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
