import React from "react";
import HeroSearch from "./HeroSearch";

const HeroSection = () => {
    return (
        <div className="relative hero-section flex flex-col items-center justify-center w-full h-[100vh] text-white overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('/bg-2.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                }}
            ></div>

            {/* Overlay*/}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 p-6 text-center">
                <h1 className="text-2xl md:text-5xl font-bold mb-4 font-serif">
                    Explore the Spiritual and Scenic Beauty of India
                </h1>
                <p className="text-lg md:text-2xl font-sans">
                    Journey beyond the ordinary and discover the divine.
                </p>
            </div>

            <HeroSearch />
        </div>
    );
};

// Forward the ref from Home component to HeroSection
const Hero = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <HeroSection />
        </div>
    );
});

export default Hero;
