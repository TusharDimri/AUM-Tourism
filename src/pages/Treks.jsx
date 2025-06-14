import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import treks from "../utils/TreksData";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaMountain,
  FaHiking,
  FaRegClock,
  FaUtensils,
  FaCampground,
  FaCheckCircle,
  FaTimesCircle,
  FaBus,
  FaFirstAid,
  FaWallet,
  FaSnowflake,
  FaSun,
  FaLeaf,
  FaMobileAlt,
  FaTrain,
  FaPlane,
  FaQuestionCircle,
  FaUserTie,
  FaShieldAlt,
  FaSeedling,
  FaUserFriends,
  FaStar
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";
import { div } from "framer-motion/client";
import { FaTents } from "react-icons/fa6";

const TreksPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const trekId = queryParams.get("trekId");

  const [openSections, setOpenSections] = useState({
    trekDetails: false,
    itinerary: false,
    inclusionsAndExclusions: false,
    gear: false,
    bestTime: false,
    whyChooseUs: false,
    quickFacts: false,
  });

  const ResponsiveSection = ({ id, title, children }) => {
    const isMobile = window.innerWidth < 768; // Tailwind's `md` breakpoint
    const isOpen = openSections[id] || false;

    const toggleSection = () => {
      if (!isMobile) return;
      setOpenSections(prev => ({ ...prev, [id]: !isOpen }));
    };

    return (
      <>
        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <div
            onClick={toggleSection}
            className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-t-lg cursor-pointer"
          >
            <h2 className="text-lg font-bold text-[#0071c0]">{title}</h2>
            <span className="text-xl font-bold text-[#0071c0]">
              {isOpen ? "−" : "+"}
            </span>
          </div>
          {isOpen && <div className="p-4 bg-white rounded-b-lg">{children}</div>}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">{children}</div>
      </>
    );
  };

  // Compute which index in our `treks` array corresponds to the URL
  const selectedIndex = useMemo(
    () => Math.max(0, treks.findIndex((t) => t.id === trekId)),
    [trekId]
  );
  const selectedTrek = useMemo(
    () => treks[selectedIndex] || null,
    [selectedIndex]
  );

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, [location.pathname]);

  // Whenever the URL's trekId changes, snap the carousel and update our state
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && selectedIndex >= 0) {
      swiper.slideToLoop(selectedIndex);
      setActiveIndex(selectedIndex);
    }
  }, [selectedIndex]);

  const handleSlideChange = (swiper) => {
    const newIdx = swiper.realIndex;
    setActiveIndex(newIdx);
    const newTrekId = treks[newIdx].id;
    if (newTrekId !== trekId) {
      navigate(`/treks/?trekId=${newTrekId}`, { replace: true });
    }
  };

  const getWhatsAppLink = () => {
    const phoneNumber = "9119058603";
    const message = selectedTrek
      ? `I want to know more about ${selectedTrek.name}`
      : "I want to know more about your tours";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 font-sans">
      <section className="relative py-16 md:h-[800px] bg-gradient-to-br from-[#0071c0] to-[#005a9b] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 h-full relative">
          <Swiper
            initialSlide={selectedIndex}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
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
            onSlideChange={handleSlideChange}
            breakpoints={{
              0: {
                coverflowEffect: { rotate: 10, stretch: 0, depth: 150, modifier: 1.5 },
              },
              640: {
                coverflowEffect: { rotate: 20, stretch: -40, depth: 200 },
              },
              1024: {
                coverflowEffect: { rotate: 25, stretch: -60, depth: 400 },
              },
            }}
          >
            {treks.map((trek, idx) => (
              <SwiperSlide
                key={trek.id}
                className="!w-[260px] sm:!w-[300px] lg:!w-[400px] !h-[400px] sm:!h-[500px] transition-transform duration-500"
              >
                <div
                  className={`relative h-full w-full transform transition-all duration-500 ${activeIndex === idx
                    ? 'scale-110 z-10 shadow-2xl'
                    : 'scale-90 opacity-90 hover:scale-95'
                    }`}
                >
                  {/* clicking this will update the URL, which then triggers our effect to move the swiper */}
                  <div
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
                    {activeIndex === idx && (
                      <div className="absolute inset-0 border-4 border-white/30 rounded-xl pointer-events-none animate-glow" />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* dots */}
          <div className="absolute bottom-1 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3 hidden lg:flex">
            {treks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperRef.current?.swiper.slideToLoop(idx)}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${activeIndex === idx
                  ? 'bg-white scale-150 shadow-sm shadow-white/50'
                  : 'bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>

          {/* arrows */}
          <button
            className="swiper-button-prev hidden lg:flex absolute top-1/2 left-2 xl:left-[-40px] -translate-y-1/2 z-20 bg-white/90 border-2 border-white/90 shadow-lg shadow-[#005a9b]/50 p-2.5 md:p-3.5 rounded-full backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-[#005a9b]/60 hover:-translate-x-[2px] active:scale-95 active:shadow-inner active:border-white/70 transition-all duration-300 group w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            aria-label="Previous"
          >
            <svg
              className="w-7 h-7 md:w-9 md:h-9 text-[#0071c0] flex items-center justify-center transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="swiper-button-next hidden lg:flex absolute top-1/2 right-2 xl:right-[-40px] -translate-y-1/2 z-20 bg-white/90 border-2 border-white/90 shadow-lg shadow-[#005a9b]/50 p-2.5 md:p-3.5 rounded-full backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-[#005a9b]/60 hover:translate-x-[2px] active:scale-95 active:shadow-inner active:border-white/70 transition-all duration-300 group w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
            aria-label="Next"
          >
            <svg
              className="w-7 h-7 md:w-9 md:h-9 text-[#0071c0] flex items-center justify-center transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <main className="max-w-7xl xl:max-w-[75vw] mx-auto px-4 pt-6 md:pt-12 pb-6 md:pb-0 grid grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-8">
        <div className="space-y-4 md:space-y-8 relative">
          {selectedTrek ? (
            <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl md:shadow-3xl lg:transform lg:-translate-y-24 xl:-translate-y-32 z-10">
              <div className="relative h-48 sm:h-64 md:h-[500px] rounded-lg md:rounded-2xl overflow-hidden shadow-lg">
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

              {/* Detailed Information Sections */}
              <div className="mt-4 space-y-8 md:space-y-12">

                {/* Trek Details Grid */}
                <ResponsiveSection
                  id="trekDetails"
                  title={<><FaMapMarkerAlt className="inline mr-2" /> Trek Details</>}
                >

                  <section className="bg-gray-50 rounded-xl p-4 md:p-8">
                    <h2 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif flex items-center gap-2">
                      <FaMapMarkerAlt className="text-lg md:text-xl" /> Trek Details
                    </h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {Object.entries(selectedTrek.details).map(([key, value]) => (
                        <div key={key} className="flex items-start gap-4 p-3 bg-white rounded-lg">
                          <div className="text-[#0071c0] mt-1">
                            {{
                              location: <FaMapMarkerAlt />,
                              altitude: <FaMountain />,
                              duration: <FaRegClock />,
                              distance: <GiPathDistance />,
                              difficulty: <FaHiking />,
                              startingPoint: <FaBus />,
                              bestTime: <BiCalendar />
                            }[key]}
                          </div>
                          <div>
                            <h3 className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
                            <p className="text-gray-600">
                              {Array.isArray(value) ? value.join(" | ") : value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                </ResponsiveSection>

                {/* Itinerary Section */}
                <ResponsiveSection
                  id="itinerary"
                  title={<><FaRegClock className="inline mr-2" /> Detailed Itinerary</>}
                >

                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif flex items-center gap-2">
                      <FaRegClock /> Detailed Itinerary
                    </h2>
                    <div className="space-y-4 lg:space-y-10">
                      {selectedTrek.itinerary.map((day, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-[#0071c0] transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-center gap-3 mb-4 md:mb-5">
                            <div className="bg-[#0071c0] text-white w-6 h-6 md:w-9 md:h-9 rounded-full flex items-center justify-center text-sm md:text-base font-medium shadow-md">
                              {index + 1}
                            </div>
                            <h3 className="text-lg md:text-2xl font-semibold">{day.title}</h3>
                          </div>

                          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 gap-y-3">
                            {/* Altitude */}
                            <div className="flex items-center gap-2 md:gap-3">
                              <FaMountain className="text-[#0071c0] text-lg md:text-xl" />
                              <span className="font-medium text-sm md:text-base">Altitude:</span>
                              <span className="text-sm md:text-base">{day.altitude}</span>
                            </div>

                            {/* Drive (if exists) */}
                            {day.drive && (
                              <div className="flex items-center gap-2 md:gap-3">
                                <FaBus className="text-[#0071c0] text-lg md:text-xl" />
                                <span className="font-medium text-sm md:text-base">Drive:</span>
                                <span className="text-sm md:text-base">{day.drive}</span>
                              </div>
                            )}

                            {/* Trek Distance */}
                            <div className="flex items-center gap-2 md:gap-3">
                              <GiPathDistance className="text-[#0071c0] text-lg md:text-xl" />
                              <span className="font-medium text-sm md:text-base">Trek:</span>
                              <span className="text-sm md:text-base">{day.trek}</span>
                            </div>

                            {/* Trek Time */}
                            <div className="flex items-center gap-2 md:gap-3">
                              <FaRegClock className="text-[#007a0] text-lg md:text-xl" />
                              <span className="font-medium text-sm md:text-base">Time:</span>
                              <span className="text-sm md:text-base">{day.trekTime}</span>
                            </div>

                            {/* Stay (if exists) */}
                            {day.stay && (
                              <div className="flex items-center gap-2 md:gap-3">
                                <FaCampground className="text-[#0071c0] text-lg md:text-xl" />
                                <span className="font-medium text-sm md:text-base">Stay:</span>
                                <span className="text-sm md:text-base">{day.stay}</span>
                              </div>
                            )}

                            {/* Meals */}
                            <div className="col-span-full mt-3 md:mt-4">
                              <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
                                <FaUtensils className="text-[#0071c0]" />
                                Meals Included:
                              </h4>
                              <div className="flex flex-wrap gap-1.5 md:gap-3">
                                {day.meals.map((meal, i) => (
                                  <span
                                    key={i}
                                    className="bg-[#0071c0]/10 text-[#0071c0] px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium"
                                  >
                                    {meal}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Highlights */}
                            <div className="col-span-full mt-3 md:mt-5">
                              <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
                                <FaMountain className="text-[#0071c0]" />
                                Highlights:
                              </h4>
                              <ul className="list-disc pl-5 md:pl-7 space-y-1.5 md:space-y-2">
                                {day.highlights.map((highlight, i) => (
                                  <li key={i} className="text-gray-600 text-sm md:text-base ml-1 md:ml-2">{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                </ResponsiveSection>

                {/* Inclusions and Exclusions */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-800">
                      <FaCheckCircle /> Includes
                    </h3>
                    <ul className="space-y-2">
                      {selectedTrek.costIncludes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-800">
                      <FaTimesCircle /> Excludes
                    </h3>
                    <ul className="space-y-2">
                      {selectedTrek.costExcludes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaTimesCircle className="text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Essential Gear */}
                <ResponsiveSection id="gear" title="Essential Gear">
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif flex items-center gap-2">
                      <FaTents /> Essential Gear
                    </h2>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                      {selectedTrek.thingsToCarry.map((item, i) => (
                        <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 flex items-center gap-2">
                          <FaCheckCircle className="text-[#0071c0] flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </ResponsiveSection>

                {/* Best Time to Visit */}
                <section>
                  <h2 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif flex items-center gap-2">
                    <BiCalendar /> Ideal Seasons
                  </h2>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {selectedTrek.bestTime.map((season, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                        {/* <div className="text-4xl mb-3 text-[#0071c0] mx-auto">
                          {i === 0 ? <FaSnowflake /> : i === 1 ? <FaSun /> : <FaLeaf />}
                        </div> */}
                        <h3 className="font-semibold mb-2">{season.split(":")[0]}</h3>
                        <p className="text-gray-600 text-sm">{season.split(":")[1]}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Choose Us */}
                <ResponsiveSection id="whyChooseUs" title="Why Choose Us">
                  <section className="bg-[#0071c0]/10 rounded-xl p-4 md:p-8">
                    <h2 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif flex items-center gap-2">
                      <FaCheckCircle className="text-[#0071c0]" /> Why Choose Us for {selectedTrek.name} Trek
                    </h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {selectedTrek.whyChooseUs.map((point, i) => {
                        let icon;
                        switch (true) {
                          case point.includes('Experienced'):
                            icon = <FaUserTie className="text-2xl" />;
                            break;
                          case point.includes('safety'):
                            icon = <FaShieldAlt className="text-2xl" />;
                            break;
                          case point.includes('camping'):
                            icon = <FaCampground className="text-2xl" />;
                            break;
                          case point.includes('Eco-friendly'):
                            icon = <FaSeedling className="text-2xl" />;
                            break;
                          case point.includes('personalized'):
                            icon = <FaUserFriends className="text-2xl" />;
                            break;
                          default:
                            icon = <FaCheckCircle className="text-2xl" />;
                        }
                        return (
                          <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-[#0071c0] mt-1 flex-shrink-0">
                              {icon}
                            </div>
                            <p className="text-gray-700 leading-relaxed">{point}</p>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </ResponsiveSection>

                {/* Quick Facts */}
                <ResponsiveSection id="quickFacts" title="Quick Facts">
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif flex items-center gap-2">
                      <FaQuestionCircle /> Quick Facts
                    </h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div className="bg-white p-4 rounded-xl flex items-center gap-4">
                        <FaTrain className="text-3xl text-[#0071c0]" />
                        <div>
                          <h3 className="font-semibold">Nearest Railway</h3>
                          <p className="text-gray-600">{selectedTrek.quickFacts.nearestRailway}</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl flex items-center gap-4">
                        <FaPlane className="text-3xl text-[#0071c0]" />
                        <div>
                          <h3 className="font-semibold">Nearest Airport</h3>
                          <p className="text-gray-600">{selectedTrek.quickFacts.nearestAirport}</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl flex items-center gap-4">
                        <FaMobileAlt className="text-3xl text-[#0071c0]" />
                        <div>
                          <h3 className="font-semibold">Mobile Network</h3>
                          <p className="text-gray-600">{selectedTrek.quickFacts.mobileNetwork}</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-xl flex items-center gap-4">
                        <FaWallet className="text-3xl text-[#0071c0]" />
                        <div>
                          <h3 className="font-semibold">ATM Availability</h3>
                          <p className="text-gray-600">{selectedTrek.quickFacts.atmAvailability}</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </ResponsiveSection>

                {/* FAQs */}
                <section>
                  <h2 className="text-xl md:text-2xl font-black text-[#0071c0] mb-4 md:mb-6 font-serif flex items-center gap-2">
                    <FaQuestionCircle /> Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {selectedTrek.faqs.map((faq, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                        <details className="group">
                          <summary className="flex justify-between items-center cursor-pointer">
                            <span className="font-medium text-gray-700">{faq.question}</span>
                            <FaChevronRight className="text-[#0071c0] transform group-open:rotate-90 transition-transform" />
                          </summary>
                          <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </details>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          ) : (
            // When no trek is selected:
            <div className="text-center py-20">
              <p className="text-3xl text-gray-600 font-medium bg-white p-8 rounded-2xl shadow-xl inline-block">
                Select your journey 🌄
              </p>
            </div>

          )}
        </div>

        {/* Right Sidebar  */}
        <div className="lg:sticky lg:top-[150px] h-fit space-y-4 md:space-y-6 mt-8 lg:mt-0 lg:transform lg:-translate-y-12 xl:-translate-y-16">
          <div className="bg-gradient-to-br from-[#0071c0] to-[#005a9b] text-white rounded-xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute w-32 h-32 bg-white/10 -top-8 -right-8 rounded-full" />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-black mb-4 font-serif">Ready to Explore?</h3>
              <p className="opacity-90 mb-6">Reserve your spot now</p>
              <a href={getWhatsAppLink()} className="bg-white/90 text-[#0071c0] px-8 py-4 rounded-xl font-bold hover:bg-whiteshadow-lg transition-all duration-300 hover:translate-y-1 cursor-pointer">
                Book Now <FaChevronRight className="inline-block ml-2" />
              </a>
            </div>
          </div>

          {/* Key Facts */}
          {selectedTrek && (
            <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
              <h4 className="text-lg md:text-2xl font-black text-[#0071c0] mb-3 md:mb-6 font-serif flex items-center gap-2">
                <FaMountain className="inline mr-1 md:mr-2" /> Trek Snapshot
              </h4>
              <div className="space-y-3">
                {Object.entries(selectedTrek.details).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="font-medium text-[#0071c0] text-right">
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
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
