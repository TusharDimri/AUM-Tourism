import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import packages from '../../utils/PackagesData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const PackagesSection = () => {
    const NextArrow = ({ onClick }) => (
        <div className="absolute top-1/2 -right-[38px]  transform -translate-y-1/2 cursor-pointer z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
            onClick={onClick}>
            <FaChevronRight className="text-[#0071c0] text-2xl sm:text-3xl" />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="absolute top-1/2 -left-[38px] transform -translate-y-1/2 cursor-pointer z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
            onClick={onClick}>
            <FaChevronLeft className="text-[#0071c0] text-2xl sm:text-3xl" />
        </div>
    );

    const settings = {
        dots: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="pt-8 lg:pt-16 pb-16 px-4 sm:px-8 font-sans">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4 font-serif">
                Our Packages
            </h2>

            <div className="max-w-7xl mx-auto">
                <Slider {...settings} className="package-carousel">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="px-2 focus:outline-none">
                            <Link to={`/packages/?packageId=${pkg.id}`} className="block h-full">
                                <div className="group relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                                    <div className="relative aspect-video overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent/30 to-transparent z-10" />
                                        <img
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-20">
                                            <h3 className="font-serif text-xl md:text-2xl font-bold mb-1">{pkg.name}</h3>
                                            <p className="text-sm md:text-base text-gray-200">{pkg.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="p-4 md:p-6 bg-white">
                                        
                                        <button className="w-full bg-gradient-to-r from-[#0071c0] to-[#005a9b] text-white py-2 md:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>

            <style>{`
                .package-carousel .slick-track {
                    display: flex !important;
                    align-items: stretch;
                }

                .package-carousel .slick-slide {
                    height: auto !important;
                    padding: 0 8px;
                }

                .package-carousel .slick-slide > div {
                    height: 100%;
                }

                .package-carousel .slick-dots {
                    bottom: -40px;
                }

                .package-carousel .slick-dots li button:before {
                    font-size: 10px;
                    color: #0071c0;
                }

                .package-carousel .slick-dots li.slick-active button:before {
                    color: #0071c0;
                }
            `}</style>
        </section>
    );
};

export default PackagesSection;