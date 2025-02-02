import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tours from "../../utils/RelegiousToursData";
import { Link } from 'react-router-dom';

const RelegiousTours = ({ isTransparent }) => {

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -right-4 sm:-right-8 transform translate-y-[-50%]"
                onClick={onClick}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -left-4 sm:-left-8 transform translate-y-[-50%]"
                onClick={onClick}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>
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
        <div className={`mt-[40px] xl:mt-[50px] flex flex-col justify-center `}>
            <h2 className="text-center text-3xl font-bold mb-[40px] xl:mb-[50px] relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4">
                Religious Tours
            </h2>
            <div className="w-[97vw] sm:w-[90vw] mx-auto px-4">
                <Slider {...settings}>
                    {tours.map((tour, index) => (
                        <Link to={`/religious-tours/?tourId=${tour.id}`} key={index}>
                            <div className="px-2">
                                <div className="relative h-[400px] w-full rounded-xl overflow-hidden group">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${tour.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-xl md:text-2xl font-bold mb-2">{tour.title}</h3>
                                                <p className="text-base opacity-90">{tour.subtitle}</p>
                                                <button className="text-base mt-4 bg-[#0071c0] text-white px-4 py-2 rounded-full transition-colors group-hover:text-[#f2942b]">
                                                    Learn More
                                                </button>
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
    )
}

export default RelegiousTours