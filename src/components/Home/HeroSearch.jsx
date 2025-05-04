// src/components/HeroSearch.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import treks from '../../utils/TreksData';
import tours from '../../utils/RelegiousToursData';
import roadTrips from '../../utils/RoadTripsData';
import packages from '../../utils/PackagesData';

const routeConfig = {
  'treks':       { path: '/treks',        param: 'trekId'     },
  'religious':   { path: '/religious-tours', param: 'tourId'    },
  'road-trips':  { path: '/road-trips',   param: 'id'         },
  'packages':    { path: '/packages',     param: 'packageId'  },
};

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debounce = useRef(null);

  // flatten and tag
  const allItems = [
    ...treks.map(i => ({ ...i, type: 'treks',       label: i.name })),
    ...tours.map(i => ({ ...i, type: 'religious',   label: i.title })),
    ...roadTrips.map(i => ({ ...i, type: 'road-trips', label: i.name })),
    ...packages.map(i => ({ ...i, type: 'packages',   label: i.name })),
  ];

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    if (query.length < 2) {
      setResults([]);
      return;
    }
    debounce.current = setTimeout(() => {
      const q = query.toLowerCase();
      setResults(allItems.filter(item =>
        item.label.toLowerCase().includes(q)
      ));
    }, 300);
    return () => clearTimeout(debounce.current);
  }, [query]);

  return (
    <div className="relative w-full w-[60vw] md:max-w-[40vw] mx-auto">
      <input
        type="text"
        className="w-full px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500
                   bg bg-opacity-90 placeholder-gray-500 text-gray-800"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
          {results.map(item => {
            const { path, param } = routeConfig[item.type];
            const to = `${path}/?${param}=${encodeURIComponent(item.id)}`;

            return (
              <Link
                key={`${item.type}-${item.id}`}
                to={to}
                className="flex items-center px-4 py-3 hover:bg-gray-100 transition"
                onClick={() => setQuery('')}
              >
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.label}
                  className="w-12 h-12 rounded-md object-cover mr-4 flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-500 capitalize">
                    {item.type.replace('-', ' ')}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
