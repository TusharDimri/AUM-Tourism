import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0071c0] text-white relative">
            <div className="md:w-[70vw] mx-auto px-4 sm:px-8 py-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-8 border-b border-white/20 pb-12 justify-between">
                    {/* Company Info - Full width on small screens */}
                    <div className="w-full md:w-1/5 text-center ">
                        <div className="flex flex-col items-center  mb-4">
                            <img src="/Logo.jpeg" alt="Logo" className="h-12 w-12 rounded-full mb-3" />
                            <h3 className="text-xl font-bold">AUM Tourism</h3>
                        </div>
                        <p className="text-sm opacity-90">
                            Your trusted partner for spiritual journeys and Himalayan adventures.
                        </p>
                    </div>

                    {/* Remaining 4 Columns */}
                    <div className="w-full md:w-4/5 grid grid-cols-4 gap-4">
                        {/* Religious Tours */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center ">Religious Tours</h4>
                            <ul className="space-y-2">
                                {['Char Dham', 'Do Dham', 'Kedarnath', 'Badrinath', 'Panch Kedar', 'Om Parvat/Adi Kailash'].map((item) => (
                                    <li key={item} className="text-center">
                                        <a href="#" className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Road Trips */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center ">Road Trips</h4>
                            <ul className="space-y-2">
                                {['Uttarakhand', 'Himachal', 'Ladakh', 'Sikkim', 'Nepal'].map((item) => (
                                    <li key={item} className="text-center">
                                        <a href="#" className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Treks */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center ">Treks</h4>
                            <ul className="space-y-2">
                                {['Garhwal', 'Kumaun', 'Himachal', 'Kashmir', 'Nepal'].map((item) => (
                                    <li key={item} className="text-center">
                                        <a href="#" className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Packages */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center ">Packages</h4>
                            <ul className="space-y-2">
                                {['Holiday', 'Honeymoon', 'Corporate', 'Camping'].map((item) => (
                                    <li key={item} className="text-center">
                                        <a href="#" className="text-sm hover:text-[#f2942b] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-center items-center text-sm">
                    <div className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} AUM Tourism. All rights reserved
                    </div>
                    {/* <div className="flex space-x-6">
                        <a href="#" className="hover:text-[#f2942b] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#f2942b] transition-colors">Terms of Service</a>
                    </div> */}
                </div>
            </div>

            {/* Orange Border */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#f2942b]"></div>
        </footer>
    );
};

export default Footer;