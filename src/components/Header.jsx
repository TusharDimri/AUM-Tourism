import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Religious Tours", link: `/religious-tours/?tourId=${"badrinath-dham"}` },
    { name: "Road Trips", link: `/road-trips/?id=${"uttarakhand"}` },
    { name: "Treks", link: `/treks/?trekId=${"garhwal-trek"}` },
    { name: "Packages", link: `/packages/?packageId=${"holiday"}` },
    { name: "Contact Us", link: "/contact" },
];

const Header = ({ isTransparent }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full h-[75px] flex items-center px-6 z-40 shadow-md transition-colors duration-300 ${isTransparent
                    ? "bg-black bg-opacity-30 text-white"
                    : "bg-[#0071c0] text-white shadow-[4px_4px_10px_0px_#f89128]"
                    }`}
            >
                <Link to="/">
                    <div className="flex items-center space-x-4">
                        <img src="/AUM.png" alt="AUM Tourism Logo" className="h-[60px] w-[60px] rounded-full" />
                        <h1 className="text-lg md:text-xl font-bold font-serif">AUM Tourism</h1>
                    </div>
                </Link>

                <ul className="hidden lg:flex ml-auto space-x-6 font-sans">
                    {navLinks.map(({ name, link }) => (
                        <li key={name} className="hover:text-[#f2942b] cursor-pointer transition-colors duration-200">
                            <Link to={link}>{name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="ml-auto lg:hidden font-sans">
                    <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle Menu">
                        <FaBars className="text-2xl" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-gradient-to-b from-[#0071c0] to-[#003e82] text-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } z-50`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-end p-6">
                        <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none" aria-label="Close Menu">
                            <FaTimes />
                        </button>
                    </div>

                    <ul className="flex flex-col items-center justify-center space-y-6 text-lg font-semibold font-sans">
                        {navLinks.map(({ name, link }) => (
                            <li key={name} className="hover:text-[#f2942b] transition-colors duration-200 cursor-pointer">
                                <Link to={link} onClick={closeMenu}>{name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto p-6 flex flex-col space-y-4 font-sans">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-[#25D366] text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            aria-label="Contact via WhatsApp"
                            onClick={closeMenu}
                        >
                            <FaWhatsapp className="mr-2" />
                            Contact via WhatsApp
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center bg-[#0071c0] text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            aria-label="Call us"
                            onClick={closeMenu}
                        >
                            <FaPhoneAlt className="mr-2" />
                            Call Us
                        </a>
                    </div>
                </div>
            </div>


            {!isMenuOpen && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 font-sans">
                    <a
                        href="https://wa.me/919119058603"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                        aria-label="Contact via WhatsApp"
                    >
                        <FaWhatsapp className="text-xl md:text-2xl" />
                    </a>

                    <a
                        href="tel:+919119058603"
                        className="bg-[#1a75b4] text-white p-3 rounded-full shadow-lg hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                        aria-label="Call us"
                    >
                        <FaPhoneAlt className="text-xl md:text-2xl" />
                    </a>
                </div>
            )}
        </>
    );
};

export default Header;
