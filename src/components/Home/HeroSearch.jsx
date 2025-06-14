// src/components/HeroSearch.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Note: Removed unused imports like 'Link', 'treks', 'tours', etc.,
// as the search logic and results display are now handled by SearchPage.

export default function HeroSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
  const debounce = useRef(null);

  // This useEffect now primarily handles navigation after a debounce period.
  // It triggers a redirect to the /search page with the current query.
  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);

    // Only trigger navigation if the query has at least 2 characters,
    // or if it's "trek" or "treks" (though the main logic is on SearchPage now).
    // This debounce helps prevent immediate navigation on every single keystroke.
    debounce.current = setTimeout(() => {
      if (query.length >= 2 || query.toLowerCase() === "trek" || query.toLowerCase() === "treks") {
        // Navigate to the new search page, passing the query as a URL parameter.
        // The SearchPage will pick this up and perform the search.
        navigate(`/search?q=${encodeURIComponent(query)}`);
        setQuery(''); // Clear the input field on the home page after navigation.
      }
    }, 300); // Debounce for 300ms before navigating

    return () => clearTimeout(debounce.current);
  }, [query, navigate]); // Depend on query and navigate for re-running the effect

  // This function is called when the input field is clicked.
  // It immediately navigates to the /search page, allowing users to
  // browse the search interface without typing anything first.
  const handleInputClick = () => {
    navigate('/search');
  };

  return (
    <div className="relative w-full w-[60vw] md:max-w-[40vw] mx-auto">
      <input
        type="text"
        className="w-[80vw] md:w-full block mx-auto px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500
                   bg bg-opacity-90 placeholder-gray-500 text-gray-800"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onClick={handleInputClick} // This will trigger immediate navigation on click
      />
      {/* The results display logic has been completely removed from this component,
          as results are now shown on the dedicated SearchPage. */}
    </div>
  );
}