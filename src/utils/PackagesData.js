const packages = [
  {
    id: 'corporate',
    name: 'Corporate Retreats',
    subtitle: 'Team Building in Inspiring Locations',
    image: '/CorporatePackage.webp',
    // Original keys filled with raw data
    description: `Reconnect. Rejuvenate. Rediscover your team spirit.

Create Moments That Matter
Step away from boardrooms and buzzing phones into the calming embrace of Uttarakhand’s mountains and valleys.
At Aum Tourism, we design corporate retreats that are not just offsites — they are unforgettable journeys towards stronger collaboration, creative thinking, and genuine bonding.
Whether you’re planning an executive meet, an annual reward trip, a leadership workshop, or simply a getaway to recharge your team — we customize every detail to match your vision.`,
    highlights: [
      'Bespoke Experiences: Tailor-made itineraries aligned with your company culture and goals.',
      'Handpicked Destinations: Hill stations, forest lodges, river camps, boutique resorts — you name it.',
      'Professional Facilitation: Leadership trainers, team-building experts, and local guides.',
      'Adventure Meets Wellness: Trekking, rafting, nature walks combined with yoga, meditation, and mindfulness sessions.',
      'Seamless Execution: End-to-end planning — from travel to event coordination — handled by a dedicated team.'
    ],
    difficulty: 'Moderate',
    duration: '3-7 Days',
    price: 'Group Quotes',
    bestSeason: 'All Year',
    inclusions: [
      'Comfortable stay in handpicked hotels/resorts',
      'Meals (customizable according to dietary needs)',
      'Guided adventure and wellness activities',
      'Event logistics (meeting halls, audiovisual setups if needed)',
      'Transportation from base cities (Haridwar, Dehradun, Kathgodam)',
      '24x7 on-ground support'
    ],

    // New keys based on raw data
    retreatThemes: [
      'Adventure Retreats: Push boundaries with activities like river rafting, trekking, ziplining, and rock climbing.',
      'Wellness & Mindfulness Retreats: Morning yoga, meditation, and wellness workshops for complete rejuvenation.',
      'Leadership & Learning Retreats: Sessions with professional trainers focused on leadership skills, communication, and innovation.',
      'Nature & Culture Retreats: Slow travel experiences with village visits, cultural shows, and nature immersion.'
    ],
    favouriteDestinations: [
      'Rishikesh – The Yoga Capital of the World (perfect for wellness retreats)',
      'Auli – Snowy escapades and breathtaking Himalayan views',
      'Jim Corbett – Wildlife safaris and luxury jungle stays',
      'Kanatal & Dhanaulti – Hidden gems for peaceful, offbeat retreats',
      'Mukteshwar & Nainital – Lake serenity and Himalayan charm'
    ],
    exclusions: [
      'Personal expenses (laundry, tips, shopping)',
      'Meals not mentioned in the itinerary',
      'Travel insurance',
      'Entry tickets to monuments/parks unless specified',
      'Air/train tickets (unless included in package)',
      'Early check-in/late check-out charges'
    ],
    optionalAddOns: [
      'Bonfire evenings and entertainment nights',
      'Local sightseeing tours',
      'CSR activities (tree plantation, village interactions)',
      'Customized workshops (motivation, storytelling, leadership)'
    ],
    bestTimeToPlan: `While Uttarakhand is beautiful all year round, the best months for corporate retreats are:
March to June (Spring-Summer) and September to November (Post-monsoon).
The weather is ideal for outdoor activities, sightseeing, and unwinding in nature.`
  },

  {
    id: 'holiday',
    name: 'Holiday Packages',
    subtitle: 'Perfect Getaways for Families & Friends',
    image: '/HolidayPackage.webp',
    description: `Discover. Explore. Celebrate with Aum Tourism.

Overview
At Aum Tourism, we turn ordinary holidays into extraordinary experiences. Whether it’s a quiet retreat, a family fun trip, a romantic honeymoon, or an adventurous journey — we have the perfect holiday package designed for every traveler.`,
    highlights: [
      'Personalized itineraries based on your interests',
      'Local expertise and hidden destination gems',
      'Verified stays with comfort and hygiene assurance',
      'Flexible and customizable packages',
      '24x7 dedicated support during your trip',
      'Competitive and transparent pricing'
    ],
    difficulty: 'Easy',
    duration: '5-14 Days',
    price: 'From $999',
    bestSeason: 'Year-round',
    inclusions: [
      'Comfortable hotel/resort stays',
      'Daily breakfast (plus other meals in select plans)',
      'Private/local transport',
      'Sightseeing tours with guides',
      'Adventure/wellness activities as per itinerary',
      'Dedicated trip coordinator support'
    ],

    // New keys based on raw data
    packageTypes: [
      'Mountain Escapes – Auli, Mussoorie, Chopta',
      'Adventure Holidays – Rafting, camping, treks',
      'Romantic Getaways – Honeymoon and anniversary trips',
      'Family Vacations – Safe, fun, and memorable',
      'Weekend Breaks – Quick refreshing trips'
    ],
    exclusions: [
      'Personal expenses (laundry, tips, shopping)',
      'Meals not mentioned in the itinerary',
      'Travel insurance',
      'Entry tickets to monuments/parks unless specified',
      'Air/train tickets (unless included in package)',
      'Early check-in/late check-out charges'
    ],
    popularDestinations: [
      'Auli',
      'Rishikesh',
      'Nainital',
      'Chopta',
      'Jim Corbett National Park'
    ],
    bestTimeToVisit: [
      'Summer (March–June): Best for mountain escapes and sightseeing.',
      'Post-Monsoon (September–November): Clear skies and vibrant landscapes.',
      'Winter (December–February): Snow adventures and cozy retreats.'
    ]
  },

  {
    id: 'camping',
    name: 'Camping Expeditions',
    subtitle: 'Raw Nature Experiences',
    image: '/CampingPackage.webp',
    description: `Discover. Explore. Celebrate with Aum Tourism.

Overview
Experience the magic of the great outdoors with Aum Tourism’s curated camping adventures. Whether you dream of sleeping under starry skies, waking up to misty mountains, or sharing stories by a bonfire — our camping trips offer it all, safely and comfortably.`,
    highlights: [
      'Safe and eco-friendly camping experiences',
      'Premium quality camping gear and tents',
      'Handpicked scenic locations across Uttarakhand',
      'Hygienic food and clean camping sites',
      'Experienced trek leaders and camp organizers',
      'Fully customizable packages for families, corporates, and groups'
    ],
    difficulty: 'Challenging',
    duration: '2-7 Days',
    price: 'From $499',
    bestSeason: 'Spring-Fall',
    inclusions: [
      'High-quality waterproof tents (double/triple occupancy)',
      'Sleeping bags, mats, and camping equipment',
      'Bonfire and evening snacks (where allowed)',
      'Fresh, hygienic meals (vegetarian and non-vegetarian options)',
      'Guided short hikes and nature walks',
      'Basic first-aid support and emergency assistance'
    ],

    // New keys based on raw data
    packageTypes: [
      'Riverside Camping – Rishikesh, Tons River',
      'Forest Camping – Kanatal, Dhanaulti',
      'Mountain Camping – Chopta, Auli, Dayara Bugyal',
      'Wilderness Camping – Binsar, Pangot, Jharipani',
      'Adventure Camping – Rafting + camping combos'
    ],
    exclusions: [
      'Personal expenses (snacks, bottled drinks, souvenirs)',
      'Transport to and from the campsite (unless included)',
      'Travel/medical insurance',
      'Adventure activities not mentioned in the package',
      'Any additional stay, meals, or services not included in the itinerary',
      'Personal trekking gear like trekking poles or personal rucksacks'
    ],
    popularLocations: [
      'Rishikesh Riverside Camps',
      'Kanatal Eco Camps',
      'Chopta Meadow Camps',
      'Auli Snow Camps',
      'Binsar Wildlife Camps'
    ],
    bestTimeToVisit: [
      'March to June: Pleasant weather and green surroundings',
      'September to November: Clear skies and ideal for star-gazing',
      'December to February: Snow camping experiences (in select locations)'
    ]
  },

  {
    id: 'honeymoon',
    name: 'Honeymoon Specials',
    subtitle: 'Romantic Escapes for Newlyweds',
    image: '/HoneymoonPackage.jpg',
    description: `Romance. Relaxation. Unforgettable Beginnings.

Overview
Celebrate the beginning of your forever with Aum Tourism’s specially crafted honeymoon getaways. From serene mountain towns to charming forest cottages, our packages blend luxury, privacy, and memorable experiences to make your honeymoon truly magical.`,
    highlights: [
      'Handpicked romantic destinations across Uttarakhand & Himachal',
      'Mountain-view resorts, private cottages, and boutique stays',
      'Candlelight dinners, couple spa sessions, and guided local tours',
      'Customizable packages to match your taste and budget',
      'Comfortable transport and smooth end-to-end arrangements',
      'Optional photoshoots and surprises available on request'
    ],
    difficulty: 'Luxury',
    duration: '7-10 Days',
    price: 'From $2999',
    bestSeason: 'All Seasons',
    inclusions: [
      '2–6 nights’ stay in selected romantic accommodations',
      'Daily breakfast and dinner (custom meal plans available)',
      'Local sightseeing with a private cab',
      'Honeymoon room decoration (on Day 1)',
      'Complimentary cake, candlelight dinner & floral arrangements',
      'Personalized itinerary based on couple’s preferences',
      'Support throughout the trip'
    ],

    // New keys based on raw data
    exclusions: [
      'Air/train/bus tickets unless specifically included',
      'Adventure activities unless selected (skiing, rafting, etc.)',
      'Personal expenses like shopping, snacks, etc.',
      'Any extra services outside the agreed itinerary',
      'Travel insurance',
      'Tips, porterage, and additional sightseeing requests'
    ],
    popularDestinations: [
      'Auli – Snowy romance and ski experiences',
      'Mussoorie – Queen of Hills with misty mornings',
      'Ranikhet – Colonial charm with forest walks',
      'Binsar – Peaceful retreat in wildlife sanctuary',
      'Manali & Shimla – Classic mountain honeymoon escape',
      'Chopta – Offbeat romance in nature’s lap'
    ],
    bestTimeToVisit: [
      'March to June – Perfect for hill station getaways and nature experiences',
      'October to February – Ideal for snowy retreats and cozy escapes',
      'July to September – Off-season with lush greenery and fewer crowds (some areas may be affected by monsoons)'
    ]
  }
];

export default packages;
