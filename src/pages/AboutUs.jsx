import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./AboutUs.css"

const AboutUs = () => {
    const swiperRef = useRef(null);
    const certifications = [
        "Cert1.webp",
        // "/cert2.jpg",
    ];
    const [selectedCert, setSelectedCert] = useState(null);
    const [showArrows, setShowArrows] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
      }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (swiperRef.current) {
                const swiper = swiperRef.current.swiper;
                setShowArrows(swiper.slides.length > swiper.params.slidesPerView);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 font-sans mt-[64px]">
            <div className="w-[97vw] mx-auto px-4 py-8 md:py-20">


                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0071c0] mb-8 text-center">
                        Our Story
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <div className="space-y-6">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="Mukesh-Airy.webp"
                                    alt="Mukesh Airy - Founder"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white font-serif">
                                    Mukesh Airy
                                </h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                From childhood hikes to Himalayan expeditions, Mukesh's life has been shaped by the mountains.
                                With over 15 years of trekking experience, he's transformed his passion into creating life-changing
                                adventures. His vision? To make the Himalayas accessible while preserving their pristine beauty.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="Ashish Kumar.webp"
                                    alt="Ashish Kumar - Co-Founder"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white font-serif">
                                    Ashish Kumar
                                </h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                A technical wizard with a mountaineer's soul, Ashish combines safety expertise with deep
                                ecological knowledge. His school trips evolved into leading expeditions, blending local
                                community wisdom with modern adventure tourism practices.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-16 text-center">
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            In 2015, their shared passion ignited Aum Tourism - born from countless campfire discussions
                            and mountain trails. Today, we're proud to have crafted 5000+ unforgettable adventures while
                            maintaining a 99.8% safety record.
                        </p>
                    </div>
                </div>


                <div className="mt-8 md:mt-20 bg-gradient-to-r from-[#0071c0] to-[#005a9b] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-serif">
                        Recognized Excellence
                    </h2>

                    <div className="relative px-2 sm:px-4">
                        <div className="max-w-6xl mx-auto"> 
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, FreeMode]}
                                spaceBetween={20}
                                slidesPerView="auto"
                                centeredSlides={false}
                                freeMode={{
                                    momentumBounce: false,
                                    sticky: true
                                }}
                                navigation={showArrows ? {
                                    nextEl: '.cert-next',
                                    prevEl: '.cert-prev',
                                    disabledClass: 'opacity-30 pointer-events-none'
                                } : false}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 25
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 35
                                    }
                                }}
                                className="!py-4 !overflow-visible"
                                onInit={(swiper) => setShowArrows(swiper.slides.length > swiper.params.slidesPerView)}
                            >
                                {certifications.map((cert, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="!w-[220px] sm:!w-[400px] sm:!h-[400px] !flex !items-center !justify-center"
                                    >
                                        <div
                                            className="relative w-full h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/20 cursor-pointer"
                                            onClick={() => setSelectedCert(index)}
                                        >
                                            <img
                                                src={cert}
                                                alt={`Certification ${index + 1}`}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Arrows */}
                            {showArrows && (
                                <>
                                    <button className="cert-prev hidden md:flex absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/90 text-[#0071c0] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button className="cert-next hidden md:flex absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/90 text-[#0071c0] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {selectedCert !== null && (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}>
                        <button className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-200 transition-colors">
                            &times;
                        </button>
                        <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
                            <img
                                src={certifications[selectedCert]}
                                alt={`Certification ${selectedCert + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutUs;