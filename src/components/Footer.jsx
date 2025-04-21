import React from "react";
import RelegiousToursData from "../utils/RelegiousToursData";
import roadTrips from "../utils/RoadTripsData";
import treks from "../utils/TreksData";
import packages from "../utils/PackagesData";

const Footer = () => {
    return (
        <footer className="bg-[#0071c0] text-white relative">
            <div className="md:w-[70vw] mx-auto px-4 sm:px-8 py-12">
                
                <div className="flex flex-col md:flex-row gap-8 border-b border-white/20 pb-12 justify-between">
                    
                    <div className="w-full md:w-1/5 text-center ">
                        <div className="flex flex-col items-center  mb-4">
                            <img src="/AUM.png" alt="Logo" className="h-[75px] w-[75px] rounded-full mb-3" />
                            <h3 className="font-serif text-xl font-bold">AUM Tourism</h3>
                        </div>
                        <p className="font-sans text-sm opacity-90">
                            Your trusted partner for spiritual journeys and Himalayan adventures.
                        </p>
                    </div>

                   
                    <div className="w-full md:w-4/5 grid grid-cols-4 gap-4 font-sans">
                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center font-serif">Religious Tours</h4>
                            <ul className="space-y-2">
                                {RelegiousToursData.map((item) => (
                                    <li key={item.id} className="text-center">
                                        <a href={`/religious-tours/?tourId=${item.id}`} className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                       
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center font-serif">Road Trips</h4>
                            <ul className="space-y-2">
                                {roadTrips.map((item) => (
                                    <li key={item.id} className="text-center">
                                        <a href={`/road-trips/?id=${item.id}`} className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center font-serif">Treks</h4>
                            <ul className="space-y-2">
                                {treks.map((item) => (
                                    <li key={item.id} className="text-center">
                                        <a href={`/treks/?trek=${item.id}`} className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                       
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center font-serif">Packages</h4>
                            <ul className="space-y-2">
                                {packages.map((item) => (
                                    <li key={item.id} className="text-center">
                                        <a href={`/packages/?package=${item.id}`} className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="pt-8 flex flex-col md:flex-row justify-center items-center text-sm font-sans">
                    <div className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} AUM Tourism. All rights reserved
                    </div>
                    {/* <div className="flex space-x-6">
                        <a href="#" className="hover:text-[#f2942b] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#f2942b] transition-colors">Terms of Service</a>
                    </div> */}
                </div>
            </div>

           
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#f2942b]"></div>
        </footer>
    );
};

export default Footer;