import React from 'react'

const RoadTrips = () => {
    const destinations = [
        {
            name: "Uttarakhand",
            image: "/UttarakhandRoadTrip.jpg",
        },
        {
            name: "Himachal",
            image: "/HimachalRoadTrip.jpg",
        },
        {
            name: "Ladakh",
            image: "/LadakhRoadTrip.jpeg",
        },
        {
            name: "Sikkim",
            image: "/SikkimRoadTrip.jpg",
        },
        {
            name: "Nepal",
            image: "/NepalRoadTrip.jpg",
        },
    ];
    return (
        <div className="mt-[60px]">
            <div className="w-full">
                <h1 className="text-center text-3xl font-bold mb-[40px] xl:mb-[60px] relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4">
                    Road Trips
                </h1>
                <div className="w-[90vw] mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination) => (
                            <div key={destination.name} className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${destination.image})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                        <div className="absolute bottom-0 left-0 right-0 px-3 py-6 md:px-6 text-white">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{destination.name}</h3>
                                            <button className="text-base mt-3 md:mt-5 bg-[#0071c0] text-white px-4 py-2 rounded-full transition-colors group-hover:text-[#f2942b]">
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Add empty div to maintain grid symmetry on certain screen sizes */}
                        <div className="sm:hidden lg:block lg:col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadTrips