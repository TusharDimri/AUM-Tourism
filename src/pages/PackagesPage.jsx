import React, { useRef, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, EffectCreative } from "swiper/modules";
import { Disclosure } from '@headlessui/react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaCheck, FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import packages from "../utils/PackagesData";
import { motion } from 'framer-motion';

const PackageSection = ({ title, children, isMobile, icon: Icon }) => {
    const content = (
        <div className="space-y-4">
            {children}
        </div>
    );

    if (isMobile) {
        return (
            <Disclosure>
                {({ open }) => (
                    <div className="mb-4">
                        <Disclosure.Button className="w-full flex justify-between items-center p-4 bg-white rounded-xl shadow-xs border border-gray-100 transition-all hover:border-blue-100">
                            <div className="flex items-center gap-3">
                                {Icon && <Icon className="text-blue-600 w-5 h-5" />}
                                <h3 className="text-base font-semibold text-gray-800">{title}</h3>
                            </div>
                            {open ?
                                <FiChevronUp className="text-blue-600 w-5 h-5" /> :
                                <FiChevronDown className="text-blue-600 w-5 h-5" />
                            }
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-3 px-4 pb-4 bg-gray-50/50 rounded-b-xl">
                            {content}
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xs p-6 mb-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                {Icon && <Icon className="text-blue-600 w-6 h-6" />}
                <span>{title}</span>
            </h3>
            {content}
        </div>
    );
};

const PackagesPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const packageId = queryParams.get("packageId");
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const tabRefs = useRef([]);

    const selectedPackage = useMemo(() =>
        packages.find((pkg) => pkg.id === packageId),
        [packageId]
    );

    useEffect(() => {
        window.scrollTo(0, 0);
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

    const renderContent = (content, variant) => {
        if (Array.isArray(content)) {
            return (
                <ul className="space-y-3">
                    {content.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                            <span className="mr-3 mt-1">
                                {variant === 'inclusion' ? (
                                    <FaCheck className="text-green-600 w-4 h-4 shrink-0" />
                                ) : variant === 'exclusion' ? (
                                    <FaTimes className="text-red-500 w-4 h-4 shrink-0" />
                                ) : (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                )}
                            </span>
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            );
        }

        if (typeof content === 'string') {
            return content.split('\n').map((paragraph, i) => (
                <p key={i} className="text-gray-600 mb-4 leading-relaxed text-justify">{paragraph}</p>
            ));
        }

        return null;
    };

    const handleSwiperChange = (swiper) => {
        const newIndex = swiper.realIndex;
        setActiveIndex(newIndex);
        navigate(`?packageId=${packages[newIndex].id}`, { replace: true });
    };

    const handleTabClick = (index) => {
        setActiveIndex(index);
        swiperRef.current?.swiper.slideTo(index);
    };

    const getWhatsAppLink = () => {
        const phoneNumber = "9119058603"; // Your WhatsApp number
        const message = selectedPackage
            ? `I want to know more about ${selectedPackage.name}`
            : "I want to know more about your tours";
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className=" bg-gray-50 font-sans">
            {/* Navigation Header */}
            <div className="mt-[64px] z-40 bg-white shadow-sm py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="hidden md:flex items-center justify-center relative">
                        {packages.map((pkg, index) => (
                            <button
                                key={pkg.id}
                                ref={(el) => (tabRefs.current[index] = el)}
                                onClick={() => handleTabClick(index)}
                                className={`px-8 py-5 text-lg font-medium relative transition-colors ${activeIndex === index
                                    ? "text-blue-600 font-semibold bg-gradient-to-b from-blue-50/50 to-transparent"
                                    : "text-gray-600 hover:bg-gray-50/50"
                                    }`}
                            >
                                {pkg.name}
                                {activeIndex === index && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                                        layoutId="underline"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Keyboard, EffectCreative]}
                    effect="creative"
                    creativeEffect={{
                        prev: { shadow: true, translate: ["-20%", 0, -1], opacity: 0 },
                        next: { shadow: true, translate: ["20%", 0, -1], opacity: 0 }
                    }}
                    keyboard={{ enabled: true }}
                    onSlideChange={handleSwiperChange}
                >
                    {packages.map((pkg) => (
                        <SwiperSlide key={pkg.id} style={{ overflow: 'visible' }}>
                            <div className="bg-white rounded-2xl shadow-xl overflow-visible border border-gray-100">
                                {/* Image Header */}
                                <div className="relative aspect-video md:aspect-[3/1]">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <div className="max-w-3xl">
                                            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">{pkg.name}</h1>
                                            <p className="text-lg md:text-xl text-gray-200 font-medium">{pkg.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
                                    {/* Left Column */}
                                    <div className="lg:col-span-2 space-y-8">
                                        <div className="md:hidden space-y-5">
                                            {[
                                                ['Experience Highlights', pkg.highlights, 'highlight', FaStar],
                                                ['Package Inclusions', pkg.inclusions, 'inclusion', FaCheck],
                                                ['Package Exclusions', pkg.exclusions, 'exclusion', FaTimes],
                                                ['Featured Destinations', pkg.favouriteDestinations || pkg.popularDestinations, 'destinations', FaMapMarkerAlt],
                                                ['Best Time to Visit', pkg.bestTimeToPlan || pkg.bestTimeToVisit, 'calendar', FaCalendarAlt]
                                            ].map(([title, content, variant, icon]) => content && (
                                                <PackageSection key={title} title={title} isMobile={true} icon={icon}>
                                                    {renderContent(content, variant)}
                                                </PackageSection>
                                            ))}
                                        </div>

                                        <div className="hidden md:block space-y-8">
                                            {pkg.description && (
                                                <PackageSection title="Journey Overview" icon={FaStar}>
                                                    {renderContent(pkg.description)}
                                                </PackageSection>
                                            )}

                                            {pkg.highlights && (
                                                <PackageSection title="Experience Highlights" icon={FaStar}>
                                                    {renderContent(pkg.highlights, 'highlight')}
                                                </PackageSection>
                                            )}

                                            {pkg.inclusions && (
                                                <PackageSection title="Package Inclusions" icon={FaCheck}>
                                                    {renderContent(pkg.inclusions, 'inclusion')}
                                                </PackageSection>
                                            )}

                                            {pkg.exclusions && (
                                                <PackageSection title="Package Exclusions" icon={FaTimes}>
                                                    {renderContent(pkg.exclusions, 'exclusion')}
                                                </PackageSection>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-6 lg:sticky lg:top-[90px]">
                                        <div className="">
                                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-lg flex items-center justify-center">
                                                <a
                                                    className="px-3 bg-white/90 hover:bg-white text-blue-600 py-4 rounded-xl font-semibold shadow-xs transition-all duration-300 w-full text-center"
                                                    href={getWhatsAppLink()}
                                                >
                                                    Reserve Your Adventure
                                                </a>
                                            </div>

                                            <div className="mt-6 space-y-6">
                                                {(pkg.favouriteDestinations || pkg.popularDestinations) && (
                                                    <PackageSection title="Featured Destinations" icon={FaMapMarkerAlt}>
                                                        <div className="grid gap-3">
                                                            {(pkg.favouriteDestinations || pkg.popularDestinations).map((dest, i) => (
                                                                <div key={i} className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                                                                    <FaMapMarkerAlt className="text-blue-600 mr-3 shrink-0" />
                                                                    <span className="text-gray-700 text-sm">{dest}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </PackageSection>
                                                )}

                                                {(pkg.bestTimeToPlan || pkg.bestTimeToVisit) && (
                                                    <PackageSection title="Best Time to Visit" icon={FaCalendarAlt}>
                                                        <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                                                            {renderContent(pkg.bestTimeToPlan || pkg.bestTimeToVisit)}
                                                        </div>
                                                    </PackageSection>
                                                )}
                                            </div>
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