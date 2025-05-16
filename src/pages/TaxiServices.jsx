import React from 'react';
import { FaCheckCircle, FaCarSide, FaMapMarkedAlt, FaUsers, FaRegClock, FaMoneyBillAlt } from 'react-icons/fa';

const TaxiServices = () => {
    return (
        <section className="py-8 bg-gray-50 mt-[80px]">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Heading */}
                {/* <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4 font-serif">
                    Premium Taxi Services
                </h2> */}

                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
                    <div className="rounded-xl overflow-hidden shadow-xl h-96 bg-cover bg-center"
                        style={{ backgroundImage: "url(CabService.jpg)" }}>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Exploring Uttarakhand becomes effortless with Aum Tourism's dedicated taxi services.
                            Whether it's a pilgrimage, adventure trip, weekend escape, or business tour - we ensure
                            your journey is smooth, safe, and timely.
                        </p>

                        {/* Quick Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: FaCarSide, text: 'Wide Vehicle Range' },
                                { icon: FaMapMarkedAlt, text: 'Expert Local Drivers' },
                                { icon: FaRegClock, text: 'On-Time Service' },
                                { icon: FaMoneyBillAlt, text: 'Transparent Pricing' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                    <item.icon className="text-[#0071c0] text-xl" />
                                    <span className="text-gray-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services Details */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Ideal For Section */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-serif font-bold text-[#0071c0] mb-6">Ideal For</h3>
                        <div className="grid gap-4">
                            {[
                                'Char Dham Yatra & Pilgrimages',
                                'Hill Station Tours (Mussoorie, Nainital, Auli)',
                                'Treks & Camping Transfers',
                                'Airport/Railway Pickups',
                                'Customizable Road Trips'
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <FaCheckCircle className="text-[#f2942b] mt-1" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fleet Options */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-serif font-bold text-[#0071c0] mb-6">Fleet Options</h3>
                        <div className="grid gap-6">
                            {[
                                { type: 'Sedans', desc: 'For couples & solo travelers' },
                                { type: 'SUVs', desc: 'For families & off-road destinations' },
                                { type: 'Tempo Travelers', desc: 'Group tours & corporate travel' },
                                { type: 'All Vehicles', desc: 'Clean, well-maintained with licensed drivers' }
                            ].map((item, index) => (
                                <div key={index} className="border-l-4 border-[#0071c0] pl-4">
                                    <h4 className="font-semibold text-gray-800">{item.type}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-[#0071c0] rounded-xl p-8 shadow-xl">
                    <div className="max-w-2xl mx-auto text-white">
                        <h3 className="text-2xl font-serif font-bold mb-4">Ready to Explore Uttarakhand?</h3>
                        <p className="mb-6">Share your travel details and we'll handle the rest</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-white text-[#0071c0] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                                📞 Call Now
                            </button>
                            <button className="bg-[#f2942b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#da8324] transition-all">
                                💬 Get Quick Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxiServices;