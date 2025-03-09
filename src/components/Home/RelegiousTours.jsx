import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tours from "../../utils/RelegiousToursData";
import { Link } from 'react-router-dom';
import { FaC, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
const RelegiousTours = ({ isTransparent }) => {

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -right-4 sm:-right-8 transform translate-y-[-50%] cursor-pointer"
                onClick={onClick}
            >
                <FaChevronRight size={30} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -left-4 sm:-left-8 transform translate-y-[-50%] cursor-pointer"
                onClick={onClick}
            >
                <FaChevronLeft size={30} />
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
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className={`mt-[40px] xl:mt-[50px] flex flex-col justify-center`}>
            <h2 className="text-center text-3xl font-bold mb-[40px] xl:mb-[50px] relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4 font-serif">
                Religious Tours
            </h2>
            <div className="w-[97vw] sm:w-[90vw] mx-auto px-4">
                <Slider {...settings}>
                    {tours.map((tour, index) => (
                        <Link to={`/religious-tours/?tourId=${tour.id}`} key={index} className="h-full">
                            <div className="mx-4 h-full py-8">
                                <div className="rounded-[50px] overflow-hidden transition-all duration-300 hover:scale-105 bg-white shadow-lg hover:shadow-xl border border-gray-100 h-full flex flex-col group">
                                    <div
                                        className="h-[350px] bg-cover bg-center rounded-b-[50px] border-b-4 border-[#0071c0] relative overflow-hidden"
                                        style={{ backgroundImage: `url(${tour.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                    </div>
                                    <div className="p-6 text-center rounded-b-[50px] flex flex-col flex-1">
                                        <h3 className="font-serif text-2xl font-bold text-[#1a202c] mb-2 group-hover:text-[#005a9c] transition-colors">
                                            {tour.title}
                                        </h3>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-600 font-sans leading-relaxed">
                                                {tour.description}
                                            </p>
                                        </div>
                                        <button className="font-sans text-[#0071c0] mt-4 text-lg font-medium flex items-center justify-center hover:text-[#00457a] transition-colors">
                                            Explore
                                            <svg
                                                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>

            <style>{`
                .slick-track {
                    display: flex !important;
                    align-items: stretch !important;
                }
                
                .slick-slide {
                    height: auto !important;
                }
                
                .slick-slide > div {
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default RelegiousTours;
