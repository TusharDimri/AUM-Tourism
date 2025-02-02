import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Religious Tours", link: `/religious-tours/?tourId=${"badrinath-dham"}` },
    { name: "Road Trips", link: "/" },
    { name: "Treks", link: "/" },
    { name: "Packages", link: "/" },
    { name: "Contact Us", link: "/" },
];

const Header = ({ isTransparent }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <nav
                className={`fixed top-0 left-0 w-full h-[64px] flex items-center px-6 z-10 shadow-md transition-colors duration-300 ${isTransparent
                        ? "bg-black bg-opacity-30 text-white"
                        : "bg-[#0071c0] text-white shadow-[4px_4px_10px_0px_#f89128]"
                    }`}
            >
                {/* Logo and Brand */}
                <Link to="/">
                    <div className="flex items-center space-x-4">
                        <img src="/Logo.jpeg" alt="AUM Tourism Logo" className="h-12 rounded-full" />
                        <h1 className="text-lg md:text-xl font-bold">AUM Tourism</h1>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex ml-auto space-x-6">
                    {navLinks.map(({ name, link }) => (
                        <li key={name} className="hover:text-[#f2942b] cursor-pointer transition-colors duration-200">
                            <Link to={link}>{name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu Icon (Mobile) */}
                <div className="ml-auto lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle Menu">
                        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-gradient-to-b from-[#0071c0] to-[#003e82] text-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } z-20`}
            >
                <div className="flex flex-col h-full">
                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none" aria-label="Close Menu">
                            <FaTimes />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <ul className="flex flex-col items-center justify-center space-y-6 text-lg font-semibold">
                        {navLinks.map(({ name, link }) => (
                            <li key={name} className="hover:text-[#f2942b] transition-colors duration-200 cursor-pointer">
                                <Link to={link}>{name}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Buttons */}
                    <div className="mt-auto p-6 flex flex-col space-y-4">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-[#25D366] text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            aria-label="Contact via WhatsApp"
                        >
                            <FaWhatsapp className="mr-2" />
                            Contact via WhatsApp
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center bg-[#0071c0] text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            aria-label="Call us"
                        >
                            <FaPhoneAlt className="mr-2" />
                            Call Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Action Buttons */}
            {!isMenuOpen && (
                <div className="fixed bottom-[10vh] right-6 z-50 flex flex-col gap-4">
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                        aria-label="Contact via WhatsApp"
                    >
                        <FaWhatsapp className="text-xl md:text-2xl" />
                    </a>

                    <a
                        href="tel:+919876543210"
                        className="bg-[#0071c0] text-white p-3 rounded-full shadow-lg hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
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
