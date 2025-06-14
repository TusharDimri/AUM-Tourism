// src/pages/SearchPage.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import treks from '../../utils/TreksData';
import tours from '../../utils/RelegiousToursData';
import roadTrips from '../../utils/RoadTripsData';
import packages from '../../utils/PackagesData';

const routeConfig = {
    'treks': { path: '/treks', param: 'trekId' },
    'religious': { path: '/religious-tours', param: 'tourId' },
    'road-trips': { path: '/road-trips', param: 'id' },
    'packages': { path: '/packages', param: 'packageId' },
};

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const searchInputRef = useRef(null);
    const debounceRef = useRef(null);

    // Focus input on component mount
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    // Flatten and tag all items
    const allItems = [
        ...treks.map(item => ({ ...item, type: 'treks', label: item.name, category: 'Treks' })),
        ...tours.map(item => ({ ...item, type: 'religious', label: item.title, category: 'Religious Tours' })),
        ...roadTrips.map(item => ({ ...item, type: 'road-trips', label: item.name, category: 'Road Trips' })),
        ...packages.map(item => ({ ...item, type: 'packages', label: item.name, category: 'Packages' })),
    ];

    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);

        if (query.length < 2) {
            setResults([]);
            return;
        }

        debounceRef.current = setTimeout(() => {
            const q = query.toLowerCase();

            // Special case for trek search
            if (q === "trek" || q === "treks") {
                setResults(allItems.filter(item => item.type === 'treks'));
            } else {
                // Filter by label or category
                setResults(allItems.filter(item =>
                    item.label.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q)
                ));
            }
        }, 300);

        return () => clearTimeout(debounceRef.current);
    }, [query]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-[75px] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search across thousands of treks, tours, road trips and curated packages
          </p>
        </div> */}

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        ref={searchInputRef}
                        type="text"
                        className="block w-full pl-10 pr-3 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071c0] focus:border-[#0071c0] border border-gray-300 shadow-sm placeholder-gray-500 text-gray-900 font-medium"
                        placeholder="Search treks, tours, road trips, or packages..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                </div>

                <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
                    {query.length < 2 ? (
                        <div className="p-8 text-center">
                            <p className="text-gray-500">Enter at least 2 characters to search</p>
                        </div>
                    ) : results.length > 0 ? (
                        <div className="max-h-[60vh] overflow-y-auto">
                            <div className="divide-y divide-gray-200">
                                {results.map((item) => {
                                    const { path, param } = routeConfig[item.type];
                                    const to = `${path}?${param}=${encodeURIComponent(item.id)}`;

                                    return (
                                        <Link
                                            key={`${item.type}-${item.id}`}
                                            to={to}
                                            className="block hover:bg-gray-50 transition-colors group"
                                            onClick={() => setQuery('')}
                                        >
                                            <div className="flex items-center p-4 md:p-6">
                                                <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden">
                                                    <img
                                                        src={item.image || '/placeholder.jpg'}
                                                        alt={item.label}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="ml-4 md:ml-6 flex-1 min-w-0">
                                                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 truncate">
                                                        {item.label}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {item.category} • {item.duration || ''} {item.duration && '•'} {item.level || ''}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                        {item.description?.substring(0, 100)}{item.description?.length > 100 ? '...' : ''}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="mt-2 text-gray-900 font-medium">No results found</h3>
                            <p className="mt-1 text-gray-500">Try adjusting your search terms</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}