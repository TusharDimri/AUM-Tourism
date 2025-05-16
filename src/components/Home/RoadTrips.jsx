import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import roadTrips from '../../utils/RoadTripsData';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const RoadTrips = () => {
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 cursor-pointer bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                onClick={onClick}
            >
                <FaChevronRight size={30} className="text-[#0071c0]" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 cursor-pointer bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
                onClick={onClick}
            >
                <FaChevronLeft size={30} className="text-[#0071c0]" />
            </div>
        );
    };

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
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: false
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false
                },
            },
        ],
    };

    return (
        <div className="mt-[40px] xl:mt-[60px]">
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold mb-[40px] xl:mb-[60px] relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4 font-serif">
                    Road Trips
                </h1>
                <div className="w-[97vw] sm:w-[90vw] mx-auto px-4">
                    <Slider {...settings}>
                        {roadTrips.map((destination) => (
                            <Link
                                key={destination.id}
                                to={`/road-trips/?id=${destination.id}`}
                                className="h-full focus:outline-none"
                            >
                                <div className="mx-4 h-full pb-8">
                                    <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white  h-full">
                                        <div
                                            className="h-[400px] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${destination.image})` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                                                <div className="absolute bottom-0 left-0 right-0 px-6 py-6">
                                                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                                                        {destination.name}
                                                    </h3>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="inline-block px-4 py-2 bg-[#0071c0] text-white rounded-full text-sm font-medium hover:bg-[#005a9c] transition-colors">
                                                            Explore Route
                                                        </span>
                                                        <span className="text-white text-sm font-medium">
                                                            {destination.duration} Days
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx>{`
                .slick-track {
                    display: flex !important;
                    align-items: stretch;
                }
                
                .slick-slide {
                    height: auto !important;
                    padding: 0 8px;
                }
                
                .slick-slide > div {
                    height: 100%;
                }
                
                .slick-dots li button:before {
                    font-size: 12px;
                    color: #0071c0;
                }
                
                .slick-dots li.slick-active button:before {
                    color:rgb(6, 68, 112);
                }
            `}</style>
        </div>
    );
};

export default RoadTrips;