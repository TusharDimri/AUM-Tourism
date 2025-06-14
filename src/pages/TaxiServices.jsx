import React from 'react';
import { FaCheckCircle, FaCarSide, FaMapMarkedAlt, FaUsers, FaRegClock, FaMoneyBillAlt } from 'react-icons/fa';

const TaxiServices = () => {
    const getWhatsAppLink = () => {
    const message = "I want to know more about your cab services";
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  };
    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50 mt-20">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center group">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-800/20"
                            style={{ backgroundImage: "url(CabBooking.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
                                <h2 className="text-3xl font-bold text-white font-serif">
                                    Premium Taxi Services in Uttarakhand
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Experience Uttarakhand in unparalleled comfort with our executive transportation solutions.
                            Tailored for discerning travelers, we combine luxury, safety, and local expertise for
                            unforgettable journeys through the Himalayas.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: FaCarSide, text: 'Luxury Fleet Selection', color: 'text-blue-600' },
                                { icon: FaMapMarkedAlt, text: 'GPS Navigation', color: 'text-blue-600' },
                                { icon: FaRegClock, text: 'Punctuality Guarantee', color: 'text-blue-600' },
                                { icon: FaMoneyBillAlt, text: 'All-Inclusive Rates', color: 'text-blue-600' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <item.icon className={`${item.color} text-2xl flex-shrink-0`} />
                                    <span className="text-gray-700 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Ideal For */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-blue-900 mb-8 border-l-4 border-blue-600 pl-4">
                            Curated Experiences
                        </h3>
                        <div className="space-y-6">
                            {[
                                'Spiritual Journeys (Char Dham Yatra)',
                                'Alpine Retreats (Mussoorie, Auli)',
                                'Adventure Expeditions',
                                'Corporate Retreats',
                                'Customized Itineraries'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <FaCheckCircle className="text-blue-600 text-lg flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fleet Options */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-blue-900 mb-8 border-l-4 border-blue-600 pl-4">
                            Executive Fleet
                        </h3>
                        <div className="grid gap-6">
                            {[
                                { type: 'Premium Sedans', desc: 'Mercedes E-Class, BMW 5 Series' },
                                { type: 'Luxury SUVs', desc: 'Toyota Fortuner, Mercedes GLS' },
                                { type: 'VIP Vans', desc: 'Customized Tempo Travellers' },
                                { type: 'Specialty Vehicles', desc: '4x4 for mountain terrain' }
                            ].map((item, index) => (
                                <div key={index} className="flex space-x-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                                        <div className="w-px h-full bg-gray-200" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-blue-900">{item.type}</h4>
                                        <p className="text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center bg-blue-900 rounded-2xl p-12 shadow-2xl bg-[url('texture.png')] bg-cover">
                    <div className="max-w-2xl mx-auto text-white">
                        <h3 className="text-3xl font-serif font-bold mb-6">
                            Begin Your Himalayan Journey
                        </h3>
                        <p className="mb-8 text-lg text-blue-100">
                            Let our travel experts craft your perfect itinerary
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <a href='tel:+919876543210' className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer">
                                <span>📞</span>
                                <span>Connect with Us</span>
                            </a>
                            <a  href={getWhatsAppLink()} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer">
                                <span>📩</span>
                                <span>Request Custom Quote</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxiServices;