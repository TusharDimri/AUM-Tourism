import React from 'react'
import { Link } from 'react-router-dom';
import packages from '../../utils/PackagesData';

const PackagesSection = () => {
    return (
        <div className="my-[60px] px-4 sm:px-8">
            <h2 className="mb-[40px] xl:mb-[60px] text-center text-3xl font-bold relative after:content-[''] after:block after:w-16 after:h-1 after:bg-[#0071c0] after:mx-auto after:mt-4">
                Our Packages
            </h2>

            <div className="w-[90vw] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {packages.map((pkg) => (
                    <Link key={pkg.id} to={`/packages/?packageId=${pkg.id}`}>
                        <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="relative h-64">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-12" />
                                <img
                                    src={pkg.image}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    alt={pkg.name}
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-15">
                                <h3 className="text-lg md:text-2xl font-bold mb-2">{pkg.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PackagesSection