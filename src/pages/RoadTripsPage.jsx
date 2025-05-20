import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight, FaPlus, FaMinus } from 'react-icons/fa';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';
import roadTrips from '../utils/RoadTripsData';
import './RoadTripsPageStyle.css';
import 'swiper/css/effect-coverflow';

const Accordion = ({ title, children, isOpen, onClick }) => (
    <div className="border rounded-xl mb-4 overflow-hidden">
        <button
            className="w-full p-4 text-left bg-[#0071c0]/5 flex justify-between items-center"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold text-[#0071c0]">{title}</h3>
            {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-4"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const TimelineDay = ({ day }) => (
    <div className="relative pl-8 border-l-2 border-[#0071c0]/20 mb-6">
        <div className="absolute w-4 h-4 bg-[#0071c0] rounded-full -left-[9px] top-0" />
        <h4 className="text-lg font-bold text-[#0071c0] mb-2">{day.day}</h4>
        <p className="font-semibold text-gray-700 mb-2">{day.route}</p>
        <p className="text-gray-600">{day.details}</p>
        <p className="text-sm text-gray-500 mt-2">{day.overnight}</p>
    </div>
);

const RoadTripsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const swiperRef = useRef(null);

    const queryParams = new URLSearchParams(location.search);
    const initialId = queryParams.get('id');

    const initialIndex = roadTrips.findIndex(trip => trip.id === initialId);
    const initialSlide = initialIndex !== -1 ? initialIndex : 0;

    const [selectedTrip, setSelectedTrip] = useState(roadTrips[initialSlide]);

    const [openAccordion, setOpenAccordion] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const toggleAccordion = (section) => {
        setOpenAccordion(openAccordion === section ? null : section);
    };

    // Responsive check
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setOpenAccordion(null);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, [location.pathname]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tripId = params.get('id');
        if (tripId && swiperRef.current) {
            const tripIndex = roadTrips.findIndex(t => t.id === tripId);
            if (tripIndex !== -1) {
                const swiper = swiperRef.current.swiper;
                if (swiper.realIndex !== tripIndex) {
                    swiper.slideToLoop(tripIndex, 600);
                    setSelectedTrip(roadTrips[tripIndex]);
                }
            }
        }
    }, [location.search]);

    const handleSlideChangeTransitionEnd = (swiper) => {
        const trip = roadTrips[swiper.realIndex];
        const currentParams = new URLSearchParams(location.search);
        const currentId = currentParams.get('id');
        if (currentId !== trip.id) {
            navigate(`/road-trips?id=${trip.id}`, { replace: true });
        }
        setSelectedTrip(trip);
    };

    const getWhatsAppLink = () => {
        const message = selectedTrip
            ? `I want to know more about ${selectedTrip.name}`
            : "I want to know more about your tours";
        return `https://wa.me/?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0071c0]/5 to-gray-50 font-sans">
            <div className="relative h-screen-70 md:h-screen-80 py-12">
                <Swiper
                    ref={swiperRef}
                    initialSlide={initialSlide}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    loop
                    keyboard
                    speed={600}
                    navigation={{
                        prevEl: '.carousel-prev',
                        nextEl: '.carousel-next',
                    }}
                    coverflowEffect={{
                        rotate: isMobile ? 10 : 20,
                        stretch: isMobile ? 0 : -30,
                        depth: isMobile ? 150 : 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Keyboard, Navigation]}
                    className="h-full"
                    onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
                    breakpoints={{
                        640: {
                            coverflowEffect: {
                                rotate: 15,
                                stretch: -20,
                                depth: 250,
                            },
                        },
                        1024: {
                            coverflowEffect: {
                                rotate: 20,
                                stretch: -30,
                                depth: 350,
                            },
                        },
                    }}
                >
                    {roadTrips.map((trip) => (
                        <SwiperSlide
                            key={trip.id}
                            className="mt-20 !w-[280px] !h-[400px] md:!w-[400px] transition-transform duration-300"
                        >
                            <motion.div
                                className={`relative h-full w-full rounded-2xl overflow-hidden shadow-xl transform-style-preserve-3d ${selectedTrip?.id === trip.id
                                    ? 'scale-105 z-10 shadow-2xl'
                                    : 'scale-95 opacity-90'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={trip.image}
                                    alt={trip.name}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg font-serif">
                                        {trip.name}
                                    </h3>
                                    <p className="text-gray-200 text-sm mt-2">{trip.subtitle}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4 items-center">
                    <button className="carousel-prev p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <div className="flex gap-2">
                        {roadTrips.map((_, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    swiperRef.current.swiper.slideToLoop(index, 600)
                                }
                                className={`w-2.5 h-2.5 rounded-full transition-all ${selectedTrip?.id === roadTrips[index].id
                                    ? 'bg-white scale-150'
                                    : 'bg-white/30'
                                    }`}
                            />
                        ))}
                    </div>
                    <button className="carousel-next p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>


            {selectedTrip && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl xl:max-w-[75vw] mx-auto px-4 py-8"
                >
                    <div className="mx-auto rounded-2xl pb-6 md:pb-8 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Image Hero */}
                                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                                    <img
                                        src={selectedTrip.image}
                                        alt={selectedTrip.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Title & Description */}
                                <h1 className="text-2xl md:text-3xl font-bold text-[#0071c0] font-serif">
                                    {selectedTrip.name} Road Expedition
                                </h1>
                                <p className="text-gray-700">{selectedTrip.description}</p>

                                {/* Route Highlights */}
                                <div className="space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0071c0] font-serif">
                                        Route Highlights
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedTrip.highlights.map((h, i) => (
                                            <div
                                                key={i}
                                                className="p-4 bg-[#0071c0]/5 rounded-xl border-l-4 border-[#0071c0]"
                                            >
                                                <p className="text-gray-700">📍 {h}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {!isMobile ? (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-white rounded-xl shadow-sm">
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500">Maximum Altitude</p>
                                            <p className="font-bold text-[#0071c0]">{selectedTrip.maximumAltitude}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500">Total Distance</p>
                                            <p className="font-bold text-[#0071c0]">{selectedTrip.totalDistance}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm text-gray-500">Accommodation</p>
                                            <p className="font-bold text-[#0071c0]">{selectedTrip.accommodationType.join(', ')}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <Accordion
                                        title="Trip Specifications"
                                        isOpen={openAccordion === 'specs'}
                                        onClick={() => toggleAccordion('specs')}
                                    >
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Maximum Altitude</p>
                                                <p className="font-bold text-[#0071c0]">{selectedTrip.maximumAltitude}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Total Distance</p>
                                                <p className="font-bold text-[#0071c0]">{selectedTrip.totalDistance}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Accommodation</p>
                                                <p className="font-bold text-[#0071c0]">{selectedTrip.accommodationType.join(', ')}</p>
                                            </div>
                                        </div>
                                    </Accordion>
                                )}

                                {/* Detailed Itinerary */}
                                {!isMobile ? (
                                    <div className="space-y-6 pr-3">
                                        <h2 className="text-2xl font-bold text-[#0071c0] font-serif">Detailed Itinerary</h2>
                                        {selectedTrip.detailedItinerary.map((day) => (
                                            <TimelineDay key={day.day} day={day} />
                                        ))}
                                    </div>
                                ) : (
                                    <Accordion
                                        title="Detailed Itinerary"
                                        isOpen={openAccordion === 'itinerary'}
                                        onClick={() => toggleAccordion('itinerary')}
                                    >
                                        <div className="space-y-6">
                                            {selectedTrip.detailedItinerary.map((day) => (
                                                <TimelineDay key={day.day} day={day} />
                                            ))}
                                        </div>
                                    </Accordion>
                                )}

                                {/* Inclusions & Exclusions */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-green-800 mb-4">What's Included</h3>
                                        <ul className="space-y-3">
                                            {selectedTrip.includes.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FaChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-red-800 mb-4">Exclusions</h3>
                                        <ul className="space-y-3">
                                            {selectedTrip.exclusions.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FaChevronRight className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Additional Sections */}
                                <Accordion
                                    title="Essential Gear"
                                    isOpen={openAccordion === 'gear'}
                                    onClick={() => toggleAccordion('gear')}
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        {selectedTrip.thingsToCarry.map((item, i) => (
                                            <div key={i} className="flex items-center bg-white p-3 rounded-lg">
                                                <div className="w-2 h-2 bg-[#0071c0] rounded-full mr-2" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion>

                                {selectedTrip.whyChooseUs?.length > 0 && (
                                    <Accordion
                                        title="Why Choose Us"
                                        isOpen={openAccordion === 'why'}
                                        onClick={() => toggleAccordion('why')}
                                    >
                                        <ul className="space-y-3">
                                            {selectedTrip.whyChooseUs.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="w-2 h-2 bg-[#0071c0] rounded-full mt-2 mr-3 flex-shrink-0" />
                                                    <p className="text-gray-700">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion>
                                )}
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6 lg:sticky lg:top-[90px] h-fit">
                                {/* Trip Essentials  */}
                                <div className="bg-gradient-to-br from-[#0071c0] to-[#005a9b] text-white p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4 font-serif">Trip Essentials</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span>Difficulty</span>
                                            <span className="">{selectedTrip.difficulty}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Duration</span>
                                            <span className="">{selectedTrip.duration}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Best Season</span>
                                            <span className="">{selectedTrip.bestSeason}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Tour Type</span>
                                            <span className=" text-right">{selectedTrip.tourType}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Pickup Point</span>
                                            <span className="">{selectedTrip.pickupPoint}</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center mt-2'>
                                        <a
                                            className=" bg-white text-[#0071c0] py-2 rounded-lg font-bold  hover:bg-gray-100 transition-colors px-2 py-2"
                                            href={getWhatsAppLink()}
                                        >
                                            Plan Journey
                                            <FaChevronRight className="ml-2 inline-block" />
                                        </a>
                                    </div>
                                </div>

                                {/* Base Camp & Best Time */}
                                <div className="bg-white border-2 border-[#0071c0]/10 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-[#0071c0] mb-4 font-serif">Locations</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Base Camps</p>
                                            <p className=" text-gray-700">{selectedTrip.baseCamp.join(', ')}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Best Time to Visit</p>
                                            <p className=" text-gray-700">{selectedTrip.bestTimeToVisit}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default RoadTripsPage;