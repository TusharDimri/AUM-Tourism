import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import tours from "../utils/RelegiousToursData";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const ReligiousToursPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tourId = queryParams.get("tourId");

  const selectedTour = useMemo(() => tours.find((tour) => tour.id === tourId), [tourId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, [location.pathname]);

  useEffect(() => {
    if (selectedTour) {
      const selectedIndex = tours.findIndex(tour => tour.id === selectedTour.id);
      swiperRef.current?.swiper?.slideTo(selectedIndex);
      window.scrollTo(0, 0);
    }
  }, [selectedTour]);

  const swiperRef = React.useRef(null);

  return (
    <div className="min-h-screen bg-gray-100 mt-[64px] font-sans">
      <div className="relative py-2 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={false}
            coverflowEffect={{
              rotate: 8,
              stretch: 0,
              depth: 120,
              modifier: 1.1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="!py-6 !overflow-visible"
            ref={swiperRef}
          >
            {tours.map((tour) => (
              <SwiperSlide key={tour.id} className="!w-[280px] !h-[200px]">
                <Link
                  to={`/religious-tours/?tourId=${tour.id}`}
                  className={`block relative h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${selectedTour?.id === tour.id ? 'scale-105 border-4 border-[#0071c0]' : 'hover:scale-105'
                    }`}
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-lg font-bold text-white">{tour.title}</p>
                    <p className="text-sm text-gray-300">{tour.subtitle}</p>
                  </div>
                  {selectedTour?.id === tour.id && (
                    <div className="absolute top-2 right-2 bg-[#0071c0] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                      Selected
                    </div>
                  )}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_350px] gap-8">
        <div className="space-y-8">
          {selectedTour ? (
            <>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold drop-shadow-lg font-serif">{selectedTour.title}</h1>
                  <p className="text-xl font-medium text-gray-300">{selectedTour.subtitle}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md space-y-8">
                <h2 className="text-3xl font-bold text-[#0071c0] font-serif">Journey Overview</h2>
                <p className="text-lg text-gray-700">{selectedTour.description}</p>
                <div className="border-t pt-8">
                  <h3 className="text-3xl font-bold text-[#0071c0] pb-8 font-serif">Experience Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedTour.highlights.map((highlight, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#0071c0]">
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">Select a tour to begin your spiritual journey</p>
            </div>
          )}
        </div>

        <div className="lg:sticky lg:top-8">
          <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
            <div className="bg-gradient-to-br from-[#0071c0] to-[#005a9b] text-white rounded-xl p-6 text-center flex flex-col items-center gap-2">
              <h3 className="text-2xl font-bold font-serif">Ready to Begin?</h3>
              <p className="opacity-90">Start your spiritual journey today</p>
              <button className="bg-white/90 text-[#0071c0] px-8 py-2 rounded-full font-bold hover:bg-white transition-colors w-full shadow-md">
                Book Now
              </button>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#0071c0] font-serif mb-4">Included Features</h4>
              <ul className="space-y-3">
                {["Expert Guides", "Premium Accommodations", "Safety Protocols", "Cultural Experiences"].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-[#f2942b] rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t pt-6">
              <h4 className="text-2xl font-bold text-[#0071c0] font-serif">Tour Facts</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Difficulty", value: "Moderate" },
                  { label: "Duration", value: "7-10 Days" },
                  { label: "Best Season", value: "May-Oct" },
                  { label: "Rating", value: "4.9/5" },
                ].map((fact) => (
                  <div key={fact.label} className="p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm text-gray-600">{fact.label}</p>
                    <p className="text-lg font-bold text-[#0071c0]">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligiousToursPage;