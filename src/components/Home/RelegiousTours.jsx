import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import tours from '../../utils/RelegiousToursData';
import { useNavigate } from 'react-router-dom';

const RelegiousTours = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1070);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1070);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="absolute top-1/2 -right-[22px] sm:-right-8 transform translate-y-[-50%]" onClick={onClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="absolute top-1/2 -left-[22px] sm:-left-8 transform translate-y-[-50%]" onClick={onClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </div>
        );
    };

    const settings = {
        // dots: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 mt-[40px] xl:mt-[60px]">
            <h2 className="text-center text-3xl font-bold mb-[40px] xl:mb-[60px] relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4 font-serif">
                Religious Tours
            </h2>

            <div className="w-[90vw] mx-auto">
                {isSmallScreen ? (
                    <Slider {...settings}>
                        {tours.map((tour) => (
                            <div key={tour.id} className="relative group h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl" onClick={() => navigate(`/religious-tours/?tourId=${tour.id}`)}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={tour.title} />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-lg font-bold font-serif">{tour.title}</h3>
                                    <button className="font-sans text-base mt-3 bg-[#0071c0] text-white px-4 py-2 rounded-full transition-colors group-hover:text-[#f2942b]">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
                        <div className="space-y-[50px]">
                            {tours.slice(0, 2).map((tour) => (
                                <div key={tour.id} className="relative group h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl" onClick={() => navigate(`/religious-tours/?tourId=${tour.id}`)}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <img src={tour.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={tour.title} />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl lg:text-3xl font-bold font-serif">{tour.title}</h3>
                                        <button className="mt-4 bg-[#0071c0] text-white px-6 py-2 rounded-full transition-colors group-hover:text-[#f2942b]">
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-[20px]">
                            {tours.slice(2).map((tour) => (
                                <div key={tour.id} className="relative group h-[250px] lg:h-[270px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl" onClick={() => navigate(`/religious-tours/?tourId=${tour.id}`)}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <img src={tour.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={tour.title} />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold font-serif">{tour.title}</h3>
                                        <button className="mt-4 bg-[#0071c0] text-white px-6 py-2 rounded-full transition-colors group-hover:text-[#f2942b]">
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RelegiousTours;