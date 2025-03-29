import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import tours from "../utils/RelegiousToursData";
import {
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaMap,
  FaCalendarAlt,
  FaCheck,
  FaTimes,
  FaUser,
  FaHotel,
  FaGlobe,
  FaShieldAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaSuitcase,
  FaCalendarCheck,
  FaList,
  FaStar
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const ReligiousToursPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tourId = queryParams.get("tourId");

  const selectedTour = useMemo(() => tours.find((tour) => tour.id === tourId), [tourId]);

  const [openAccordions, setOpenAccordions] = useState({});

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
      const selectedIndex = tours.findIndex((tour) => tour.id === selectedTour.id);
      swiperRef.current?.swiper?.slideTo(selectedIndex);
      window.scrollTo(0, 0);
      setOpenAccordions({});
    }
  }, [selectedTour]);

  const swiperRef = React.useRef(null);

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getWhatsAppLink = () => {
    const message = selectedTour
      ? `I want to know more about ${selectedTour.title}`
      : "I want to know more about your tours";
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Carousel Section */}
      <div className="relative py-4 bg-white shadow-md mt-[64px]">
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
                  className={`block relative h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ${selectedTour?.id === tour.id
                      ? "scale-105 border-4 border-[#0071c0]"
                      : "hover:scale-105"
                    }`}
                >
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-lg font-bold text-white">{tour.title}</p>
                    <p className="text-sm text-gray-300">{tour.subtitle}</p>
                  </div>
                  {selectedTour?.id === tour.id && (
                    <div className="absolute top-2 right-2 bg-[#0071c0] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md font-sans">
                      <FaStar className="inline mr-1" /> SELECTED
                    </div>
                  )}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        {/* Left Column: Tour Details */}
        <div className="space-y-8">
          {selectedTour ? (
            <>
              <div className="relative group overflow-hidden rounded-xl shadow-xl">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg font-serif">
                    {selectedTour.title}
                  </h1>
                  <p className="text-lg md:text-xl font-medium text-gray-200">
                    {selectedTour.subtitle}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaMap className="text-[#0071c0] text-3xl mr-2" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0071c0] font-serif">
                    Journey Overview
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {selectedTour.description}
                </p>
              </div>

              {selectedTour.itinerary && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <FaCalendarAlt className="text-[#0071c0] text-3xl mr-2" />
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0071c0] font-serif">
                      Itinerary
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {selectedTour.itinerary.map((day, index) => (
                      <div key={index}>
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex justify-between items-center py-4 focus:outline-none hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="bg-[#0071c0] text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                              Day {day.day}
                            </span>
                            <span className="text-base md:text-xl font-bold text-gray-800">
                              {day.title}
                            </span>
                          </div>
                          <span className="text-gray-600 text-lg">
                            {openAccordions[index] ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </button>
                        {openAccordions[index] && (
                          <div className="pb-4 pl-4 pr-2 text-gray-700 bg-gray-50 rounded-b-lg">
                            <p className="leading-relaxed text-sm md:text-base">{day.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedTour.inclusions && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-[#0071c0] text-xl mr-2" />
                      <h3 className="text-xl md:text-2xl font-bold text-[#0071c0]">
                        What's Included
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedTour.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2" />
                          <span className="leading-relaxed text-sm md:text-base text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedTour.exclusions && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-3">
                      <FaTimesCircle className="text-[#0071c0] text-xl mr-2" />
                      <h3 className="text-xl md:text-2xl font-bold text-[#0071c0]">
                        Exclusions
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedTour.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaTimes className="text-red-500 mt-1 mr-2" />
                          <span className="leading-relaxed text-sm md:text-base text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedTour.things_to_carry && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-3">
                      <FaSuitcase className="text-[#0071c0] text-xl mr-2" />
                      <h3 className="text-xl md:text-2xl font-bold text-[#0071c0]">
                        Things to Carry
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedTour.things_to_carry.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2" />
                          <span className="leading-relaxed text-sm md:text-base text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedTour.why_choose_us && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-[#0071c0] text-xl mr-2" />
                      <h3 className="text-xl md:text-2xl font-bold text-[#0071c0]">
                        Why Choose Us
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedTour.why_choose_us.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2" />
                          <span className="leading-relaxed text-sm md:text-base text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">
                Select a tour to begin your spiritual journey
              </p>
            </div>
          )}
        </div>

        {/* Right Column: CTA, Features & Quick Facts */}
        <div className="lg:sticky lg:top-[80px] space-y-8 self-start">
          {/* CTA Box for large screens */}
          <div className="hidden lg:block bg-white rounded-xl shadow-lg">
            <div className="bg-gradient-to-br from-[#0071c0] to-[#005a9b] rounded-xl p-6 text-center text-white">
              <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">Ready to Begin?</h3>
              <p className="mb-4 text-sm md:text-base">Embark on a life-changing spiritual journey.</p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 text-[#0071c0] font-bold py-4 px-10 rounded-full inline-flex items-center justify-center hover:bg-white transition-colors shadow-lg text-base md:text-lg transition-all duration-300 hover:translate-y-1"
              >
                Book Now <FaChevronRight className="ml-2" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-3">
              <FaList className="text-[#0071c0] text-xl mr-2" />
              <h4 className="text-xl md:text-2xl font-bold text-[#0071c0] font-serif">
                Tour Features
              </h4>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-gray-700">
              {[
                { icon: FaUser, text: "Expert Guides" },
                { icon: FaHotel, text: "Premium Accommodations" },
                { icon: FaGlobe, text: "Cultural Experiences" },
                { icon: FaShieldAlt, text: "Safety Protocols" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <item.icon className="text-[#0071c0] text-xl" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {selectedTour && selectedTour.best_time_to_visit && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-3">
                <FaCalendarCheck className="text-[#0071c0] text-xl mr-2" />
                <h4 className="text-xl md:text-2xl font-bold text-[#0071c0] font-serif">
                  Best Time to Visit
                </h4>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                {selectedTour.best_time_to_visit.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Box for small screens */}
          <div className="lg:hidden bg-white rounded-xl shadow-lg">
            <div className="bg-gradient-to-br from-[#0071c0] to-[#005a9b] rounded-xl p-6 text-center text-white">
              <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">Ready to Begin?</h3>
              <p className="mb-4 text-sm md:text-base">Embark on a life-changing spiritual journey.</p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0071c0] font-bold py-4 px-10 rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg text-base md:text-lg"
              >
                Book Now <FaChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReligiousToursPage;
