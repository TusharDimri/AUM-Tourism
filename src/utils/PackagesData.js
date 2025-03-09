const packages = [
    {
        id: 'holiday',
        name: 'Holiday Packages',
        subtitle: 'Perfect Getaways for Families & Friends',
        image: '/HolidayPackage.png',
        description: 'Experience unforgettable vacations with curated itineraries that blend relaxation and adventure. Our holiday packages offer something for everyone in your group.',
        highlights: [
            'Customizable duration options',
            'Family-friendly accommodations',
            'Guided sightseeing tours',
            'All-inclusive meal plans'
        ],
        difficulty: 'Easy',
        duration: '5-14 Days',
        price: 'From $999',
        bestSeason: 'Year-round',
        inclusions: ['Accommodation', 'Transport', 'Meals', 'Activities']
    },
    {
        id: 'honeymoon',
        name: 'Honeymoon Specials',
        subtitle: 'Romantic Escapes for Newlyweds',
        image: '/HoneymoonPackage.jpg',
        description: 'Create timeless memories with our romantic packages featuring private villas, couple experiences, and breathtaking locations.',
        highlights: [
            'Private candlelight dinners',
            'Luxury spa treatments',
            'Personalized photography sessions',
            'Exclusive couple activities'
        ],
        difficulty: 'Luxury',
        duration: '7-10 Days',
        price: 'From $2999',
        bestSeason: 'All Seasons',
        inclusions: ['5-star Accommodation', 'Private Transfers', 'Spa Credits']
    },
    {
        id: 'corporate',
        name: 'Corporate Retreats',
        subtitle: 'Team Building in Inspiring Locations',
        image: '/CorporatePackage.jpg',
        description: 'Boost team productivity with strategic retreats combining business facilities and adventure activities.',
        highlights: [
            'Custom team-building exercises',
            'State-of-the-art meeting facilities',
            'Adventure leadership programs',
            'Wellness sessions'
        ],
        difficulty: 'Moderate',
        duration: '3-7 Days',
        price: 'Group Quotes',
        bestSeason: 'All Year',
        inclusions: ['Meeting Rooms', 'Activities', 'Catering', 'Transport']
    },
    {
        id: 'camping',
        name: 'Camping Expeditions',
        subtitle: 'Raw Nature Experiences',
        image: '/CampingPackage.webp',
        description: 'Reconnect with nature through our expert-led camping adventures in pristine wilderness locations.',
        highlights: [
            'Professional wilderness guides',
            'Premium camping gear provided',
            'Wildlife spotting expeditions',
            'Survival skill workshops'
        ],
        difficulty: 'Challenging',
        duration: '2-7 Days',
        price: 'From $499',
        bestSeason: 'Spring-Fall',
        inclusions: ['Camping Gear', 'Meals', 'Safety Equipment', 'Guides']
    },
    {
        id: 'uttarakhand-cab',
        name: 'Uttarakhand Taxi Services',
        subtitle: 'Reliable & Budget-Friendly Car Rentals',
        image: '/CabBooking.jpg',
        description: 'Explore Uttarakhand hassle-free with our reliable cab and taxi services. Whether you are traveling from Dehradun, Haridwar, or Haldwani, we offer budget-friendly and comfortable rides with trusted operators.',
        highlights: [
            'Wide range of vehicle options',
            'Experienced and trusted drivers',
            'Flexible rental plans',
            'Comfortable and well-maintained vehicles'
        ],
        difficulty: 'Easy',
        duration: 'Customizable',
        price: 'Varies by Vehicle',
        bestSeason: 'Year-round',
        inclusions: ['AC & Non-AC Cars', 'Professional Drivers', 'Flexible Pickup & Drop', 'Custom Packages']
    }
];

export default packages;
