import React, { useState, useRef, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, EffectCreative } from "swiper/modules";
import { FaMoneyBill, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import packages from "../utils/PackagesData";
import { motion } from 'framer-motion';
import { ListboxButton, ListboxOption, ListboxOptions, Listbox } from '@headlessui/react';

const PackagesPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const packageId = queryParams.get("packageId");
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
    const tabRefs = useRef([]);

    const selectedPackage = useMemo(
        () => packages.find((pkg) => pkg.id === packageId),
        [packageId]
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, [location.pathname]);

    useEffect(() => {
        if (selectedPackage) {
            const index = packages.findIndex(p => p.id === selectedPackage.id);
            swiperRef.current?.swiper?.slideTo(index);
        }
    }, [selectedPackage]);

    const handleSwiperChange = (swiper) => {
        const newIndex = swiper.realIndex;
        setActiveIndex(newIndex);
        navigate(`?packageId=${packages[newIndex].id}`, { replace: true });
    };

    useEffect(() => {
        if (tabRefs.current[activeIndex]) {
            const { offsetLeft, clientWidth } = tabRefs.current[activeIndex];
            setUnderlineProps({ left: offsetLeft, width: clientWidth });
        }
    }, [activeIndex, packages]);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        swiperRef.current?.swiper.slideTo(index);
    };

    const handleDropdownChange = (selectedPkg) => {
        const index = packages.findIndex((pkg) => pkg.id === selectedPkg.id);
        setActiveIndex(index);
        swiperRef.current?.swiper.slideTo(index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 font-sans overflow-hidden">

            <div className="mt-[64px] z-50 py-4">
                {/* Desktop Navigation: Horizontal Tabs */}
                <div className="hidden sm:block relative overflow-x-auto">
                    <div className="flex items-center justify-center relative px-4 sm:px-8">
                        {packages.map((pkg, index) => (
                            <button
                                key={pkg.id}
                                ref={(el) => (tabRefs.current[index] = el)}
                                onClick={() => handleTabClick(index)}
                                className={`px-4 py-2 text-lg font-medium whitespace-nowrap focus:outline-none transition-colors duration-200 ${activeIndex === index ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                            >
                                {pkg.name}
                            </button>
                        ))}

                        <motion.div
                            className="absolute bottom-0 h-1 bg-blue-500"
                            animate={{ left: underlineProps.left, width: underlineProps.width }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>

                <div className="sm:hidden px-4">
                    <Listbox value={packages[activeIndex]} onChange={handleDropdownChange}>
                        <div className="relative">
                            <ListboxButton className="w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                                <span className="block truncate">{packages[activeIndex].name}</span>
                            </ListboxButton>
                            <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-lg py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {packages.map((pkg) => (
                                    <ListboxOption
                                        key={pkg.id}
                                        value={pkg}
                                        className={({ active }) =>
                                            `cursor-pointer select-none relative py-2 pl-3 pr-9 ${active ? 'text-white bg-blue-600' : 'text-gray-900'
                                            }`
                                        }
                                    >
                                        {({ selected }) => (
                                            <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                {pkg.name}
                                            </span>
                                        )}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </div>
                    </Listbox>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 pt-0 relative">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Keyboard, EffectCreative]}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-120%", 0, -500],
                            rotate: [0, 0, -5],
                            opacity: 0
                        },
                        next: {
                            shadow: true,
                            translate: ["120%", 0, -500],
                            rotate: [0, 0, 5],
                            opacity: 0
                        }
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    keyboard={{ enabled: true }}
                    onSlideChange={handleSwiperChange}
                    className="h-full"
                >
                    {packages.map((pkg) => (
                        <SwiperSlide key={pkg.id}>
                            <div className="relative group h-full p-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0071c0]/10 to-[#005a9b]/10 rounded-3xl transform rotate-x-12 -rotate-y-3 -translate-z-12 scale-95 transition-transform duration-500 group-hover:-translate-z-20" />

                                <div className="relative bg-white rounded-3xl transform transition-transform duration-500 group-hover:translate-z-20 h-full flex flex-col justify-between overflow-hidden shadow-xl">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 md:p-8">
                                        <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden border-4 border-white shadow-lg transform transition-transform hover:scale-[1.02] self-center">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 z-10" />
                                            <img
                                                src={pkg.image}
                                                alt={pkg.name}
                                                className="w-full h-full object-cover transform transition-transform duration-300"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 space-y-2">
                                                <h1 className="text-2xl md:text-3xl font-black text-white font-serif">
                                                    {pkg.name}
                                                </h1>
                                                <p className="text-sm md:text-base text-white/90 font-medium">{pkg.subtitle}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-between space-y-6 md:space-y-8">
                                            <div className="space-y-6">
                                                <div className="bg-gradient-to-r from-[#0071c0] to-[#005a9b] text-white p-6 rounded-xl shadow-md">
                                                    <h2 className="text-xl font-bold mb-4 font-serif">Package Highlights</h2>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="flex items-center space-x-2">
                                                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="white" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span className="text-sm md:text-base">{pkg.duration}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <FaMoneyBill className="w-5 h-5 flex-shrink-0" />
                                                            <span className="text-sm md:text-base">{pkg.price}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4 px-6">
                                                    <h3 className="text-xl md:text-xl font-bold text-[#0071c0] font-serif">Experience Includes</h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                                        {pkg.highlights.map((highlight, index) => (
                                                            <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#0071c0] hover:bg-gray-100 transition-colors">
                                                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{highlight}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="bg-gradient-to-r from-[#0071c0] to-[#005a9b] text-white py-3 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 text-sm md:text-base">
                                                Book Now
                                                <span>
                                                    <FaChevronRight className="inline-block ml-2" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PackagesPage;