import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import RelegiousTours from "../components/Home/RelegiousTours";
import RoadTrips from "../components/Home/RoadTrips";
import Treks from "../components/Home/Treks";
import PackagesSection from "../components/Home/Packages";
import Footer from "../components/Footer";

const Home = () => {
    const [isTransparent, setIsTransparent] = useState(true);
    const heroRef = useRef(null);


    useEffect(() => {
        // Use IntersectionObserver to detect if the HeroSection is in the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // If HeroSection is in view, set navbar transparent
                    setIsTransparent(entry.isIntersecting);
                });
            },
            {
                root: null,
                threshold: 0.1, // Trigger when 10% of the element is visible
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
    }, []);

    return (
        <>
            <Header isTransparent={isTransparent} />
            <Hero ref={heroRef} />
            <RelegiousTours isTransparent={isTransparent} />
            <RoadTrips isTransparent={isTransparent} />
            <Treks isTransparent={isTransparent} />
            <PackagesSection />
            <Footer/>
        </>
    );
};

export default Home;
