import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronRight } from 'react-icons/fa';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';
import roadTrips from '../utils/RoadTripsData';
import './RoadTripsPageStyle.css';
import 'swiper/css/effect-coverflow';

const RoadTripsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const swiperRef = useRef(null);

    const queryParams = new URLSearchParams(location.search);
    const initialId = queryParams.get('id');

    const initialIndex = roadTrips.findIndex(trip => trip.id === initialId);
    const initialSlide = initialIndex !== -1 ? initialIndex : 0;

    const [selectedTrip, setSelectedTrip] = useState(roadTrips[initialSlide]);
    const [isMobile, setIsMobile] = useState(false);

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
                    className="max-w-7xl mx-auto px-4 py-8"
                >
                    <div className="bg-white rounded-2xl shadow-lg pb-6 md:pb-8">
                        <div className="grid md:grid-cols-[1fr_300px] gap-8">
                            <div className="space-y-6 p-6">
                                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                                    <img
                                        src={selectedTrip.image}
                                        alt={selectedTrip.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold text-[#0071c0] font-serif">
                                    {selectedTrip.name} Road Expedition
                                </h1>
                                <p className="text-gray-700">{selectedTrip.description}</p>
                                <div className="space-y-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0071c0] font-serif">Route Highlights</h2>
                                    <div className="grid gap-4 md:grid-cols-2">
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
                            </div>
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-[#0071c0] to-[#005a9b] text-white p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4 font-serif">Trip Essentials</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span>Difficulty</span>
                                            <span className="font-bold">{selectedTrip.difficulty}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Duration</span>
                                            <span className="font-bold">{selectedTrip.duration}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Best Season</span>
                                            <span className="font-bold">{selectedTrip.bestSeason}</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-white text-[#0071c0] py-2 rounded-lg font-bold mt-4 hover:bg-gray-100 transition-colors">
                                        Plan Journey 
                                        <span>
                                            <FaChevronRight className="ml-2 inline-block" />
                                        </span>
                                    </button>
                                </div>
                                <div className="bg-white border-2 border-[#0071c0]/10 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-[#0071c0] mb-4 font-serif">Included Features</h3>
                                    <ul className="space-y-3">
                                        {['Custom Route Map', '24/7 Road Assistance', 'Accommodation Guide', 'Local Experience Kit'].map((f) => (
                                            <li key={f} className="flex items-center">
                                                <div className="w-2 h-2 bg-[#0071c0] rounded-full mr-3" />
                                                <span className="text-gray-700">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
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