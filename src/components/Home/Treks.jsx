import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const Treks = () => {
    const treks = [
        { name: 'Garhwal', image: '/GarhwalTrek.jpg', type: 'large' },
        { name: 'Kumaon', image: '/KumaonTrek.webp', type: 'medium' },
        { name: 'Kashmir', image: '/KashmirTrek.jpg', type: 'medium' },
        { name: 'Himachal', image: '/HimachalTrek.jpg', type: 'large' },
        { name: 'Nepal', image: '/NepalTrek.jpg', type: 'medium' },
    ];

    const largeTreks = treks.filter((t) => t.type === 'large');
    const mediumTreks = treks.filter((t) => t.type === 'medium');

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1070);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1070);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 -right-[22px] sm:-right-8 transform translate-y-[-50%]"
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
                className="absolute top-1/2 -left-[22px] sm:-left-8 transform translate-y-[-50%]"
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
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 mt-[40px] xl:mt-[60px]">
            <h2 className="text-center text-3xl font-bold mb-[40px] xl:mb-[60px] relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4">
                Explore Treks
            </h2>

            <div className="w-[90vw] mx-auto">
                {isSmallScreen ? (
                    <Slider {...settings}>
                        {[...largeTreks, ...mediumTreks].map((trek) => (
                            <div key={trek.name} className="relative group h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <img
                                    src={trek.image}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    alt={`${trek.name} Trek`}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-lg font-bold">{trek.name} Treks</h3>
                                    <button className="text-base mt-3 lg:mt-5 bg-[#0071c0] text-white px-4 py-2 lg:px-8 lg:py-3 rounded-full transition-colors group-hover:text-[#f2942b]">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
                        {/* Left Column - Large Treks */}
                        <div className="space-y-[50px]">
                            {largeTreks.map((trek) => (
                                <div key={trek.name} className="relative group h-[400px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <img
                                        src={trek.image}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt={`${trek.name} Trek`}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl lg:text-3xl font-bold">{trek.name} Treks</h3>
                                        <button className="mt-4 lg:mt-6 bg-[#0071c0] text-white px-4 py-2 lg:px-8 lg:py-3 rounded-full transition-colors group-hover:text-[#f2942b]">
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Medium Treks */}
                        <div className="space-y-[20px]">
                            {mediumTreks.map((trek) => (
                                <div key={trek.name} className="relative group h-[250px] lg:h-[270px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <img
                                        src={trek.image}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt={`${trek.name} Trek`}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold">{trek.name}</h3>
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

export default Treks;
