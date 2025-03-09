import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import treks from "../utils/TreksData";
import { FaChevronRight } from "react-icons/fa";

const TreksPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trekId = queryParams.get("trekId");
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedTrek = useMemo(
    () => treks.find((trek) => trek.id === trekId),
    [trekId]
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
    if (selectedTrek) {
      const selectedIndex = treks.findIndex((trek) => trek.id === selectedTrek.id);
      swiperRef.current?.swiper?.slideToLoop(selectedIndex);
    }
  }, [selectedTrek]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 font-sans">
      <section className="relative py-16 md:h-[800px] bg-gradient-to-br from-[#0071c0] to-[#005a9b] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 h-full relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            mousewheel={{ forceToAxis: true }}
            keyboard={{ enabled: true }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 300,
              modifier: 2,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Mousewheel, Keyboard, Navigation]}
            className="!h-full !py-12 !overflow-visible"
            ref={swiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              0: {
                coverflowEffect: {
                  rotate: 10,
                  stretch: 0,
                  depth: 150,
                  modifier: 1.5
                }
              },
              640: {
                coverflowEffect: {
                  rotate: 20,
                  stretch: -40,
                  depth: 200,
                }
              },
              1024: {
                coverflowEffect: {
                  rotate: 25,
                  stretch: -60,
                  depth: 400,
                }
              }
            }}
          >
            {treks.map((trek, index) => (
              <SwiperSlide
                key={trek.id}
                className="!w-[260px] sm:!w-[300px] lg:!w-[400px] !h-[400px] sm:!h-[500px] transition-transform duration-500"
              >
                <div className={`relative h-full w-full transform transition-all duration-500 ${activeIndex === index
                  ? 'scale-110 z-10 shadow-2xl'
                  : 'scale-90 opacity-90 hover:scale-95'
                  }`}>
                  <Link
                    to={`/treks/?trekId=${trek.id}`}
                    className="group relative h-full w-full block rounded-xl overflow-hidden shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent rounded-xl" />
                    <img
                      src={trek.image}
                      alt={trek.name}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center space-y-2">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg font-serif">
                        {trek.name}
                      </h3>
                      <p className="text-gray-200 text-sm bg-black/30 px-3 py-1 rounded-full inline-block">
                        {trek.subtitle}
                      </p>
                    </div>
                    {activeIndex === index && (
                      <div className="absolute inset-0 border-4 border-white/30 rounded-xl pointer-events-none animate-glow" />
                    )}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute bottom-1 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {treks.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.swiper?.slideToLoop(index)}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${activeIndex === index
                  ? 'bg-white scale-150 shadow-sm shadow-white/50'
                  : 'bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>

          <button
            className="swiper-button-prev hidden lg:flex absolute top-1/2 left-2 xl:left-[-40px] -translate-y-1/2 z-20 bg-white/90 border-2 border-white/90 shadow-lg shadow-[#005a9b]/50 p-2.5 md:p-3.5 rounded-full backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-[#005a9b]/60 hover:-translate-x-[2px] active:scale-95 active:shadow-inner active:border-white/70 transition-all duration-300 group w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            aria-label="Previous"
          >
            <svg className="w-7 h-7 md:w-9 md:h-9 text-[#0071c0] flex items-center justify-center transform group-hover:-translate-x-1 transition-transform"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="swiper-button-next hidden lg:flex absolute top-1/2 right-2 xl:right-[-40px] -translate-y-1/2 z-20 bg-white/90 border-2 border-white/90 shadow-lg shadow-[#005a9b]/50 p-2.5 md:p-3.5 rounded-full backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-[#005a9b]/60 hover:translate-x-[2px] active:scale-95 active:shadow-inner active:border-white/70
            transition-all duration-300 group w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            aria-label="Next"
          >
            <svg className="w-7 h-7 md:w-9 md:h-9 text-[#0071c0] flex items-center justify-center transform group-hover:translate-x-1 transition-transform"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 pt-12 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 md:gap-12">
        <div className="space-y-8 md:space-y-12 relative">
          {selectedTrek ? (
            <>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl md:shadow-3xl transform -translate-y-24 md:-translate-y-32 z-10">
                <div className="relative h-64 sm:h-80 md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                  <img
                    src={selectedTrek.image}
                    alt={selectedTrek.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                  <h1 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-2xl md:text-4xl font-black text-white font-serif">
                    {selectedTrek.name}
                  </h1>
                </div>

                <div className="mt-6 md:mt-8 space-y-6 md:space-y-8">
                  <h2 className="text-2xl md:text-3xl font-black text-[#0071c0] font-serif">
                    Journey Overview
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    {selectedTrek.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {selectedTrek.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl border-l-4 border-[#0071c0] hover:border-[#005a9b] transition-colors"
                      >
                        <p className="text-sm md:text-base text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-3xl text-gray-600 font-medium bg-white p-8 rounded-2xl shadow-xl inline-block">
                Select your journey 🌄
              </p>
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-[150px] h-fit space-y-6 md:space-y-8 transform -translate-y-12 md:-translate-y-16">
          <div className="bg-gradient-to-br from-[#0071c0] to-[#005a9b] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute w-32 h-32 bg-white/10 -top-8 -right-8 rounded-full" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4 font-serif">Ready to Explore?</h3>
              <p className="opacity-90 mb-6">Reserve your spot now</p>
              <button className="bg-white/90 text-[#0071c0] px-8 py-4 rounded-xl font-bold hover:bg-white w-full shadow-lg transition-all duration-300 hover:translate-y-1">
                Book Now 
                <span>
                  <FaChevronRight className="inline-block ml-2" />
                </span>
              </button>
            </div>
          </div>

          {selectedTrek && (
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg md:shadow-xl">
              <h4 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif">Key Facts</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  { label: "Difficulty", value: selectedTrek.difficulty },
                  { label: "Duration", value: selectedTrek.duration },
                  { label: "Max Altitude", value: "4,500m" },
                  { label: "Best Season", value: "Spring" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl text-center hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-xs md:text-sm text-gray-600 font-medium">{fact.label}</p>
                    <p className="text-lg md:text-xl font-bold text-[#0071c0] mt-1">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TreksPage;