import React, { useState, useRef, useEffect } from "react";
import Hero from "../components/Home/Hero";
import RelegiousTours from "../components/Home/RelegiousTours";
import RoadTrips from "../components/Home/RoadTrips";
import Treks from "../components/Home/Treks";
import PackagesSection from "../components/Home/Packages";

const Home = ({ isTransparent, heroRef }) => {

    return (
        <>
            <Hero ref={heroRef} />
            <RelegiousTours isTransparent={isTransparent} />
            <RoadTrips isTransparent={isTransparent} />
            <Treks isTransparent={isTransparent} />
            <PackagesSection />
        </>
    );
};

export default Home;
