const roadTrips = [
    {
        id: "darma-valley",
        name: "Darma Valley Road Trip",
        image: "/DarmaValley.webp",
        description: "Explore the untouched Himalayan landscapes of Darma Valley, a pristine and culturally rich region of the Kumaon Himalayas in Uttarakhand. Starting from Haldwani, this road trip takes you deep into the alpine heartland through tribal villages, forested gorges, and eventually to the breathtaking Panchachuli Base Camp. Perfect for offbeat explorers, photographers, and mountain lovers, this trip promises total wilderness, ancient culture, and zero crowds.",
        duration: "7 Nights / 8 Days",
        maximumAltitude: "4,260 m / 13,976 ft (Panchachuli Base Camp)",
        totalDistance: "1,000 km (round trip from Haldwani)",
        accommodationType: ["Guesthouses", "Hotels", "Homestays", "Tents (at base camp)"],
        baseCamp: ["Sela Village"],
        pickupPoint: "Haldwani",
        tourType: "High-Altitude Road Trip / Offbeat / Nature & Culture",
        highlights: [
            "Drive through the stunning Kali River valley to the Indo-Nepal border town of Dharchula",
            "Remote tribal villages: Dantu, Sela, Tidang, and more",
            "Scenic trek or off-road drive to Panchachuli Base Camp",
            "Stay in authentic village homestays with local meals",
            "Unique cultural insights into the Rung and Dar tribes",
            "A rare route with almost no commercial tourism"
        ],
        detailedItinerary: [
            { day: "Day 1", route: "Haldwani – Munsiyari", details: "Approx. 280 km / 10 hrs. Begin your drive early through Almora and Birthi Falls. Reach the hill town of Munsiyari, with incredible views of Panchachuli peaks.", overnight: "Overnight in Munsiyari." },
            { day: "Day 2", route: "Munsiyari – Dharchula", details: "Approx. 100 km / 4 hrs. A scenic drive through pine forests and valleys alongside the Kali River. Arrive at Dharchula, a bustling border town.", overnight: "Overnight stay in Dharchula." },
            { day: "Day 3", route: "Dharchula – Dar – Sela", details: "Approx. 65 km / 5 hrs. After permit check, continue the journey on narrow mountain roads via Dar to reach Sela, a remote village that serves as the base for Panchachuli exploration.", overnight: "Overnight in Sela homestay or guesthouse." },
            { day: "Day 4", route: "Sela – Dantu – Panchachuli Base Camp", details: "Trek/Drive – 15 km / 5 hrs. Trek or drive (based on road conditions and group preference) via Dantu village to Panchachuli Base Camp, nestled below the towering Himalayan peaks.", overnight: "Overnight camping at base camp." },
            { day: "Day 5", route: "Panchachuli Base Camp – Sela", details: "Return – 15 km / 4 hrs. Return from base camp to Sela, enjoying scenic river crossings and meadows along the route.", overnight: "Overnight in Sela." },
            { day: "Day 6", route: "Sela – Dharchula – Askot", details: "Approx. 100 km / 5 hrs. Drive back to Dharchula and continue to Askot, a small village known for the Askot Musk Deer Sanctuary.", overnight: "Overnight in Askot." },
            { day: "Day 7", route: "Askot – Chaukori – Almora", details: "Approx. 150 km / 6 hrs. Pass through Chaukori (great stop for Himalayan views) en route to Almora, a heritage town in Kumaon.", overnight: "Overnight in Almora." },
            { day: "Day 8", route: "Almora – Haldwani", details: "Approx. 95 km / 3 hrs. Return drive to Haldwani, marking the end of a soulful Himalayan journey.", overnight: "Trip concludes." }
        ],
        includes: [
            "Accommodation (hotel, guesthouse, homestay, tents as per itinerary)",
            "Breakfast and dinner on all days",
            "Private vehicle with experienced mountain driver",
            "Local guides during Panchachuli Base Camp segment",
            "Entry permits and forest charges",
            "Camping gear (tent, sleeping bag, mat) at base camp",
            "First aid kit"
        ],
        exclusions: [
            "Lunches and snacks",
            "Travel insurance and personal medical expenses",
            "Tips, porter charges, or personal expenses",
            "Emergency evacuation or transport beyond itinerary",
            "Anything not listed under “What’s Included”"
        ],
        thingsToCarry: [
            "Warm clothing, thermals, and gloves",
            "Rain jacket and quick-dry inner layers",
            "Sturdy hiking shoes with good grip",
            "Day backpack, water bottle, and personal medicines",
            "Sunglasses, lip balm, sunscreen",
            "Torch/headlamp and power bank",
            "Valid ID proof (Aadhaar/Passport mandatory for permits)"
        ],
        bestTimeToVisit: [
            "May to June: Rhododendrons in bloom, moderate weather, clear skies",
            "September to October: Crisp air, golden valleys, and vibrant landscapes",
            "Route closed in winter (Nov–Apr) due to snow and safety concerns"
        ],
        whyChooseUs: [
            "Fully guided, local-supported experience in restricted tribal belt",
            "Expert logistics in a remote terrain",
            "Authentic village homestays and meals",
            "Small group travel for minimal impact and better experience",
            "Permits and access arranged seamlessly"
        ],
        difficulty: "Moderate",
        bestSeason: "May to June, September to October"
    },
    {
        id: "niti-valley",
        name: "Niti Valley Road Trip",
        image: "/NitiValley.webp",
        description: "Embark on a thrilling road trip to Niti Valley, the last civilian-accessible valley near the Indo-Tibet border. This short but high-impact itinerary starts from Rishikesh, takes you through the snow-capped heights of Auli, remote Himalayan villages like Gamshali, and ends with a cultural touch in Joshimath. With surreal mountain views and minimal crowds, this journey offers a rare glimpse into one of India’s most restricted and raw frontiers.",
        duration: "3 Nights / 4 Days",
        maximumAltitude: "3,600 m / 11,800 ft (Gamshali – near Niti Village)",
        totalDistance: "580 km (round trip from Rishikesh)",
        accommodationType: ["Hotel", "Homestay", "Guesthouse"],
        baseCamp: ["Joshimath"],
        pickupPoint: "Rishikesh",
        tourType: "Adventure / Offbeat / High-Altitude Road Trip",
        highlights: [
            "Drive to the last inhabited region near the Indo-China border",
            "Stay in Auli, with views of Nanda Devi, Hathi, and Ghori Parvat",
            "Experience remote Himalayan life in Gamshali, past Malari Village",
            "Visit Tapovan, Bhavishya Badri, and Lata Village",
            "Ideal for explorers seeking offbeat and untouched routes"
        ],
        detailedItinerary: [
            { day: "Day 1", route: "Rishikesh – Auli", details: "Approx. 270 km / 9 hrs. Start early from Rishikesh. Enjoy scenic drive through the five confluences of Uttarakhand: Devprayag, Rudraprayag, Karnaprayag, Nandaprayag, and Vishnuprayag. Reach Auli by evening.", overnight: "Overnight stay in Auli." },
            { day: "Day 2", route: "Auli – Malari – Gamshali", details: "Approx. 90 km / 4.5 hrs. After breakfast, head towards the inner frontier zone via Tapovan and Suraithota. Cross Malari, and reach Gamshali, one of the last villages accessible by road. Walk around the traditional village and take in dramatic landscapes.", overnight: "Overnight in a basic local guesthouse or homestay in Gamshali." },
            { day: "Day 3", route: "Gamshali – Bhavishya Badri – Joshimath", details: "Approx. 95 km / 5 hrs. Start return journey. On the way, take a detour to visit Bhavishya Badri, one of the sacred future pilgrimage sites of Uttarakhand. Continue towards Joshimath for the night.", overnight: "Overnight stay in Joshimath." },
            { day: "Day 4", route: "Joshimath – Rishikesh", details: "Approx. 220 km / 7–8 hrs. Depart early and retrace the route back to Rishikesh. The trip concludes with unforgettable memories of Uttarakhand’s last frontier.", overnight: "Trip concludes." }
        ],
        includes: [
            "3 nights’ accommodation (Auli hotel, Gamshali homestay, Joshimath guesthouse)",
            "Breakfast and dinner at all stays",
            "Private vehicle with experienced hill driver",
            "Entry permits for Malari–Niti region",
            "Local guide support where needed",
            "First aid kit"
        ],
        exclusions: [
            "Lunches and beverages",
            "Travel insurance or medical expenses",
            "Any personal expenses (tips, laundry, shopping)",
            "Anything not mentioned in “What’s Included”"
        ],
        thingsToCarry: [
            "Heavy woolens, thermal wear, windproof jacket",
            "Hiking shoes, gloves, and woolen cap",
            "Sunglasses, sunscreen, lip balm",
            "Power bank, headlamp/torch",
            "Water bottle, basic medicines",
            "Valid ID proof (Aadhaar/Passport mandatory for permits)"
        ],
        bestTimeToVisit: [
            "May to June: Ideal weather, open roads, and fresh alpine views",
            "September to October: Crisp skies, less tourist movement, great for photography",
            "Inner road to Gamshali usually closes from late October to May due to snow"
        ],
        whyChooseUs: [
            "Local expertise with access to inner-line permits",
            "Offbeat and well-curated route with safety-first logistics",
            "Homestay partnerships with remote village families",
            "Customizable itinerary for different pickup/drop cities",
            "Ground support and flexible planning for weather or road changes"
        ],
        difficulty: "Moderate",
        bestSeason: "May to June, September to October"
    },
    {
        id: "mana-pass",
        name: "Mana Pass Off-Road",
        image: "/ManaPass.webp",
        description: "This off-road adventure takes you to one of the most remote and rugged regions of Uttarakhand – the Mana Pass. Starting from Rishikesh, you'll travel through the famous Auli hill station and journey along tough terrains, dense forests, and rocky roads to the Mana Pass, located near the Indo-Tibet border. Along the way, you will explore Dev Tal (a beautiful high-altitude lake) and experience a thrilling off-road ride at extreme altitudes, surrounded by majestic mountains and secluded valleys.",
        duration: "3 Nights / 4 Days",
        maximumAltitude: "5,400 m / 17,700 ft (Mana Pass)",
        totalDistance: "550 km (round trip from Rishikesh)",
        accommodationType: ["Guesthouses", "Camping (in Mana)"],
        baseCamp: ["Mana Village"],
        pickupPoint: "Rishikesh",
        tourType: "Adventure / Off-Road / High-Altitude Exploration",
        highlights: [
            "Off-road drive through rugged mountain paths and uncharted roads",
            "Scenic journey to the Mana Pass, one of the highest accessible passes",
            "Trek to Dev Tal and enjoy the serene, untouched beauty of the high-altitude lake",
            "Stay in remote campsites or homestays in Mana village",
            "Visit spiritual landmarks like Vyas Gufa and Bhim Pul",
            "Experience breathtaking Himalayan landscapes and a unique road trip adventure"
        ],
        detailedItinerary: [
            { day: "Day 1", route: "Rishikesh – Auli", details: "Approx. 270 km / 9 hrs. Depart from Rishikesh early in the morning. Drive through the beautiful Devprayag, Rudraprayag, and Karnaprayag. Arrive in Auli by evening, famous for its panoramic views of the Nanda Devi range.", overnight: "Overnight in Auli." },
            { day: "Day 2", route: "Auli – Mana Village", details: "Approx. 120 km / 7 hrs. After breakfast, begin the off-road adventure towards Mana Village via Joshimath. The drive takes you on rugged paths, with numerous ups and downs, rocky sections, and steep climbs. Cross beautiful landscapes of alpine forests and Himalayan meadows.", overnight: "Overnight stay in Mana, in a guesthouse or camp." },
            { day: "Day 3", route: "Mana Village – Mana Pass – Dev Tal – Mana", details: "Approx. 40 km off-road. Embark on an off-road journey to the Mana Pass, one of the highest motorable passes in India, located near the Indo-Tibet border. After reaching Mana Pass, head towards Dev Tal, a pristine high-altitude lake surrounded by the Himalayas. The serenity of the place is a sight to behold. Return to Mana village for the night.", overnight: "Overnight stay in Mana." },
            { day: "Day 4", route: "Mana – Rishikesh", details: "Approx. 270 km / 9 hrs. In the morning, start the journey back to Rishikesh. Enjoy the views of the landscape on your return, as you pass through the same rugged paths and scenic valleys. Reach Rishikesh by evening.", overnight: "Trip concludes." }
        ],
        includes: [
            "3 nights' accommodation (Auli hotel, Mana guesthouse, and camping in Mana)",
            "Breakfast and dinner throughout the trip",
            "Private off-road vehicle with a skilled driver",
            "Local guide during the Mana Pass and Dev Tal visit",
            "Entry permits and all road clearances for high-altitude regions",
            "Camping gear at Mana (tent, sleeping bag, etc.)",
            "First-aid kit"
        ],
        exclusions: [
            "Lunches and snacks",
            "Personal expenses (tips, laundry, shopping)",
            "Travel insurance and emergency medical expenses",
            "Anything not mentioned in the inclusions"
        ],
        thingsToCarry: [
            "Warm clothing, including jackets, thermals, and gloves (high-altitude conditions)",
            "Waterproof jacket, trekking shoes, and sturdy hiking gear",
            "Sunscreen, sunglasses, lip balm, and hat",
            "Water bottle, snacks, and high-energy food",
            "Personal medicines, power bank, torch/headlamp",
            "Valid ID proof (Aadhaar/Passport) for permits"
        ],
        bestTimeToVisit: [
            "May to June: Best weather for off-roading with clear skies and pleasant temperatures",
            "September to October: Ideal for less crowded roads, crisp weather, and spectacular views",
            "Note: The Mana Pass road and surrounding regions may be closed from November to April due to snow and extreme conditions"
        ],
        whyChooseUs: [
            "Expert off-road drivers with knowledge of high-altitude routes",
            "Customizable itineraries for adventurous explorers",
            "Authentic experience with homestays and camping in remote regions",
            "Access to exclusive areas like Mana Pass and Dev Tal",
            "Local support for permits and entry to restricted areas"
        ],
        difficulty: "Challenging",
        bestSeason: "May to June, September to October"
    },
    {
        id: "nelong-valley",
        name: "Nelong Valley Road Trip",
        image: "/NelongValley.webp",
        description: "Embark on an off-road adventure to Nelong Valley, a pristine and remote region near the Indo-Tibet border in Uttarakhand. Starting from Rishikesh, this journey takes you through Harshil Valley, a picturesque hamlet known for its apple orchards and deodar forests, before reaching the high-altitude Nelong Valley. This area, once part of an ancient Indo-Tibetan trade route, offers breathtaking landscapes and a glimpse into the region's rich cultural heritage.",
        duration: "4 Days / 3 Nights",
        maximumAltitude: "4,500 m / 14,764 ft (Nelong Valley)",
        totalDistance: "~600 km (round trip from Rishikesh)",
        accommodationType: ["Guesthouses", "Homestays", "Camping (optional)"],
        baseCamp: ["Harshil Village"],
        pickupPoint: "Rishikesh",
        tourType: "Adventure, Offbeat, High-Altitude Exploration",
        highlights: [
            "Off-Road Expedition: Traverse rugged terrains and high-altitude roads to reach Nelong Valley.",
            "Cultural Immersion: Explore ancient temples, monasteries, and remnants of the Indo-Tibetan trade route.",
            "Scenic Beauty: Witness panoramic views of snow-capped peaks, alpine meadows, and pristine rivers.",
            "Gartang Gali Trek: Experience the historic wooden stairway carved into the granite rock face, offering a unique trekking experience.",
            "Local Interactions: Engage with the Bhotia community and learn about their traditions and lifestyle."
        ],
        detailedItinerary: [
            {
                day: "Day 1",
                route: "Rishikesh – Harshil",
                details: "Approx. 270 km / 9 hrs. Depart from Rishikesh early in the morning. En route, visit Devprayag, Rudraprayag, and Karnaprayag. Arrive in Harshil by evening.",
                overnight: "Overnight stay in Harshil (guesthouse or homestay)."
            },
            {
                day: "Day 2",
                route: "Harshil – Nelong Valley",
                details: "Approx. 50 km off-road / 4 hrs. After breakfast, drive towards Nelong Valley via Bhaironghati. The journey involves rough, high-altitude roads through forests and meadows. Upon arrival, explore the valley and visit the Vishwanath Temple.",
                overnight: "Return to Harshil for overnight stay."
            },
            {
                day: "Day 3",
                route: "Harshil – Gartang Gali – Harshil",
                details: "After breakfast, embark on a trek to Gartang Gali, a historic wooden stairway carved into a vertical granite rock face. Explore the area and enjoy the panoramic views.",
                overnight: "Return to Harshil for overnight stay."
            },
            {
                day: "Day 4",
                route: "Harshil – Rishikesh",
                details: "Approx. 270 km / 9 hrs. After breakfast, begin the drive back to Rishikesh. Arrive by evening, concluding the trip.",
                overnight: "Trip concludes."
            }
        ],
        includes: [
            "3 nights' accommodation (Harshil guesthouse or homestay)",
            "Breakfast and dinner on all days",
            "Private off-road vehicle with an experienced driver",
            "Local guide for exploration in Nelong Valley and Gartang Gali",
            "Entry permits for restricted areas (Nelong Valley)",
            "First-aid kit"
        ],
        exclusions: [
            "Lunches and snacks",
            "Personal expenses (tips, shopping, laundry)",
            "Travel insurance and emergency medical expenses",
            "Anything not mentioned under \"What's Included\""
        ],
        thingsToCarry: [
            "Warm clothing (jackets, thermals, gloves, and hats)",
            "Waterproof jacket and sturdy trekking shoes",
            "Sunscreen, sunglasses, and lip balm",
            "Personal medicines and power bank",
            "Water bottle, snacks, and energy bars",
            "Valid ID proof (Aadhaar/Passport) for permits and entry",
            "Camera for capturing breathtaking views"
        ],
        bestTimeToVisit: [
            "May to June: Ideal for clear skies, pleasant temperatures, and perfect off-road conditions.",
            "September to October: Post-monsoon with fresh greenery and crisp weather.",
            "Note: The road to Nelong Valley may be closed during November to April due to heavy snowfall and extreme weather conditions."
        ],
        whyChooseUs: [
            "Expertise: Experienced drivers and local guides familiar with high-altitude terrains.",
            "Authenticity: Stay in homestays and guesthouses to experience local culture.",
            "Exclusivity: Access to restricted areas like Nelong Valley and Gartang Gali.",
            "Flexibility: Customizable itineraries to suit individual preferences."
        ],
        difficulty: "",
        bestSeason: ""
    },
    {
        id: "ukhimath-chopta-mandal",
        name: "Ukhimath, Chopta & Mandal Road Trip",
        image: "/ChoptaMandal.webp",
        description: "This road trip takes you through the stunning landscapes of Ukhimath, Chopta, and Mandal, in the Garhwal Himalayas. Known for its panoramic views, dense forests, and tranquil atmosphere, these destinations offer a perfect blend of spirituality and adventure. Starting from Rishikesh, you’ll pass through lush valleys, beautiful meadows, and visit important temples, making it a well-rounded road trip for nature lovers, photographers, and spiritual seekers.",
        duration: "4 Days / 3 Nights",
        maximumAltitude: "2,680 m (Chopta)",
        totalDistance: "~350 km (round trip from Rishikesh)",
        accommodationType: ["Guesthouses", "Homestays", "Campsites"],
        baseCamp: ["Chopta"],
        pickupPoint: "Rishikesh",
        tourType: "Spiritual, Scenic, Adventure, Nature",
        highlights: [
            "Ukhimath Temple: A sacred town with the Omkareshwar Temple and Chandrashila Trek base.",
            "Chopta: Known as “Mini Switzerland of India,” offering stunning views of Nanda Devi, Trishul, and Chaukhamba peaks.",
            "Mandal: A picturesque village surrounded by meadows and forests.",
            "Tungnath & Chandrashila: Trek to one of the highest Shiva temples and enjoy panoramic mountain views.",
            "Unspoiled Nature: Trek through alpine meadows, dense oak, and rhododendron forests.",
            "Camping Experience: Enjoy an overnight stay in campsites amidst scenic beauty."
        ],
        detailedItinerary: [
            {
                day: "Day 1",
                route: "Rishikesh – Ukhimath",
                details: "Approx. 185 km / 7 hrs. Depart early from Rishikesh via Narendranagar, Devprayag, Rudraprayag, and Karnaprayag. Continue through picturesque towns like Srinagar and Tharali to reach Ukhimath by late afternoon. Visit the Omkareshwar Temple, dedicated to Lord Shiva, and explore the beautiful town.",
                overnight: "Overnight stay in Ukhimath (guesthouse or homestay)."
            },
            {
                day: "Day 2",
                route: "Ukhimath – Chopta",
                details: "Approx. 20 km / 1 hr. After breakfast, drive to Chopta, also known as the “Mini Switzerland of India.” Check-in at your campsite or guesthouse in Chopta. Explore the surrounding area, take a nature walk, and enjoy views of the snow-covered peaks of Nanda Devi, Trishul, and Chaukhamba. Optional: Visit Tungnath Temple (highest Shiva temple) and start your trek to Chandrashila Peak for stunning panoramic views.",
                overnight: "Overnight in Chopta."
            },
            {
                day: "Day 3",
                route: "Chopta – Mandal",
                details: "Approx. 40 km / 2 hrs. After breakfast, drive to Mandal, a quaint village nestled amidst the beautiful landscapes of the Garhwal Himalayas. Explore the surrounding meadows, the Kanchula Korak Musk Deer Sanctuary, and enjoy nature walks through dense forests. Optional: Take a short trek in the surrounding areas or visit the nearby Kedarnath Wildlife Sanctuary.",
                overnight: "Overnight in Mandal (homestay or guesthouse)."
            },
            {
                day: "Day 4",
                route: "Mandal – Rishikesh",
                details: "Approx. 130 km / 5 hrs. After breakfast, depart from Mandal and drive back to Rishikesh, concluding your trip by evening.",
                overnight: "Trip concludes."
            }
        ],
        includes: [
            "3 nights' accommodation (Ukhimath guesthouse, Chopta campsite/guesthouse, Mandal homestay)",
            "Breakfast and dinner on all days",
            "Private vehicle with an experienced driver",
            "Local guide for exploring Chopta, Mandal, and surrounding areas",
            "First-aid kit"
        ],
        exclusions: [
            "Lunches and snacks",
            "Personal expenses (tips, shopping, laundry)",
            "Travel insurance and emergency medical expenses",
            "Anything not mentioned under \"What's Included\""
        ],
        thingsToCarry: [
            "Warm clothing (jackets, thermals, gloves, and hats)",
            "Waterproof jacket and sturdy trekking shoes",
            "Sunscreen, sunglasses, and lip balm",
            "Personal medicines and power bank",
            "Water bottle, snacks, and energy bars",
            "Valid ID proof (Aadhaar/Passport)",
            "Camera to capture the beauty of the landscape"
        ],
        bestTimeToVisit: [
            "April to June: Pleasant weather, clear skies, and good trekking conditions.",
            "September to November: Post-monsoon, perfect for trekking with fresh greenery and crisp weather.",
            "Note: The roads may be inaccessible during the winter months (November to March) due to heavy snowfall."
        ],
        whyChooseUs: [
            "Experience Nature & Adventure: Ideal for those who love nature, trekking, and exploring off-the-beaten-path destinations.",
            "Blend of Spirituality & Scenic Beauty: Visit sacred temples like Omkareshwar and trek to Tungnath and Chandrashila for spiritual growth and panoramic views.",
            "Authentic Himalayan Experience: Stay in homestays, guesthouses, and camps to experience local culture.",
            "Guided Treks: Treks with experienced local guides for safe and enriching exploration of Chopta, Mandal, and Chandrashila."
        ],
        difficulty: "",
        bestSeason: ""
    },
    {
        id: "ladakh",
        name: "Ladakh Road Trip",
        image: "/Ladakh.webp",
        description: "This thrilling road trip takes you through the heart of the Himalayas to explore the stunning landscapes of Ladakh. Starting from Delhi, the journey spans over 10 days and covers some of the most iconic destinations, including Leh, Nubra Valley, and Pangong Lake. Expect high-altitude passes, barren landscapes, turquoise lakes, and cultural treasures, all packed into this unforgettable adventure.",
        duration: "10 Days / 9 Nights",
        maximumAltitude: "5,359 m (Khardung La Pass)",
        totalDistance: "~3,000 km (round trip from Delhi)",
        accommodationType: ["Guesthouses", "Campsites", "Hotels"],
        baseCamp: ["Leh", "Nubra Valley", "Pangong Lake"],
        pickupPoint: "Delhi",
        tourType: "Adventure, Offbeat, High-Altitude Exploration",
        highlights: [
            "Khardung La Pass: Drive through one of the highest motorable roads in the world.",
            "Nubra Valley: Explore the \"Valley of Flowers,\" visit Diskit Monastery, and enjoy a camel ride in Hunder Sand Dunes.",
            "Pangong Lake: Experience the serene beauty of one of the most famous lakes in the world, known for its ever-changing colors.",
            "Leh Town: Explore ancient monasteries like Hemis, Thiksey, and Shey, and experience Ladakhi culture.",
            "Chang La Pass: One of the highest passes in the world that connects Leh with Pangong Lake.",
            "Tso Moriri Lake (optional extension): A tranquil and lesser-known lake near Leh, perfect for a peaceful retreat."
        ],
        detailedItinerary: [
            { day: "Day 1", route: "Delhi – Manali", details: "Approx. 550 km / 12 hrs. Depart from Delhi early in the morning for Manali.", overnight: "Overnight stay in Manali." },
            { day: "Day 2", route: "Manali – Keylong", details: "Approx. 115 km / 6 hrs. Continue your journey from Manali to Keylong, passing through the scenic Rohtang Pass.", overnight: "Overnight stay in Keylong." },
            { day: "Day 3", route: "Keylong – Leh", details: "Approx. 370 km / 10 hrs. Drive from Keylong to Leh, passing through the stunning Baralacha La Pass, Naki La, and Lachulung La. Arrival in Leh by evening.", overnight: "Overnight stay in Leh." },
            { day: "Day 4", route: "Leh Local Sightseeing", details: "Acclimatization and visit Hemis Monastery, Shey Palace, and Thiksey Monastery.", overnight: "Overnight stay in Leh." },
            { day: "Day 5", route: "Leh – Nubra Valley", details: "Approx. 120 km / 5 hrs. Depart via Khardung La Pass. Explore Diskit Monastery and camel ride in Hunder Sand Dunes.", overnight: "Overnight stay in Nubra Valley." },
            { day: "Day 6", route: "Nubra Valley – Pangong Lake", details: "Approx. 160 km / 6 hrs. Depart via Shyok Valley. Arrive at Pangong Lake and enjoy its breathtaking beauty.", overnight: "Overnight stay at Pangong Lake (camping or guesthouse)." },
            { day: "Day 7", route: "Pangong Lake – Leh", details: "Approx. 160 km / 6 hrs. Morning views of the lake, then drive back to Leh via Chang La Pass.", overnight: "Overnight stay in Leh." },
            { day: "Day 8", route: "Leh – Tso Moriri Lake (Optional)", details: "Approx. 240 km / 7 hrs. Drive to Tso Moriri Lake and visit Korzok Monastery.", overnight: "Overnight stay near Tso Moriri Lake." },
            { day: "Day 9", route: "Leh – Kargil", details: "Approx. 220 km / 6 hrs. Drive to Kargil, visit Drass and Kargil War Memorials.", overnight: "Overnight stay in Kargil." },
            { day: "Day 10", route: "Kargil – Delhi", details: "Approx. 650 km / 14 hrs. Return via Srinagar (option to break journey). Arrival in Delhi by evening.", overnight: "Trip concludes." }
        ],
        includes: [
            "9 nights' accommodation (Guesthouses, Campsites, Hotels)",
            "Breakfast and dinner on all days",
            "Private vehicle with an experienced driver for the entire trip",
            "Inner-line permits (if required)",
            "Local guide for sightseeing in Leh and surrounding areas",
            "First-aid kit and emergency assistance"
        ],
        exclusions: [
            "Lunches and snacks",
            "Personal expenses (tips, shopping, laundry)",
            "Travel insurance and emergency medical expenses",
            "Anything not mentioned under \"What's Included\""
        ],
        thingsToCarry: [
            "Warm clothing (jackets, thermals, gloves, and hats)",
            "Waterproof jacket and sturdy trekking shoes",
            "Sunscreen, sunglasses, and lip balm",
            "Personal medicines and power bank",
            "Water bottle, snacks, and energy bars",
            "Valid ID proof (Aadhaar/Passport)",
            "Camera to capture the beauty of the landscape"
        ],
        bestTimeToVisit: [
            "June to September: Ideal for road trips to Ladakh as all roads are accessible, and the weather is pleasant for outdoor activities.",
            "Note: Roads to Ladakh may be closed in November to May due to snow and extreme cold."
        ],
        whyChooseUs: [
            "Epic Road Trip: Explore one of the most rugged and adventurous road trips in the world, with breathtaking views of the Himalayas.",
            "Cultural Immersion: Visit monasteries, interact with locals, and understand the spiritual significance of Ladakh.",
            "Adventure: Experience the thrill of driving through high-altitude passes like Khardung La and Chang La.",
            "Incredible Landscapes: Discover the stunning Pangong Lake, Nubra Valley, and the serene Tso Moriri Lake.",
            "Experienced Guides and Drivers: Travel with experienced professionals who know the terrain and ensure a safe journey."
        ],
        difficulty: "",
        bestSeason: ""
    },
    {
        id: "spiti-valley",
        name: "Spiti Valley Road Trip",
        image: "/SpitiValley.webp",
        description: "The Spiti Valley road trip is a thrilling adventure through some of the highest and most rugged terrains in India. Starting from Delhi, the journey spans over 9 days, covering the towns and monasteries of Spiti Valley, including Kaza, Tabo, and Chandratal Lake. This trip is perfect for those seeking peace, adventure, and a glimpse into the culture of the Himalayas. The route includes high-altitude passes, off-road trails, ancient monasteries, and breathtaking views of barren landscapes and snow-capped peaks.",
        duration: "9 Days / 8 Nights",
        maximumAltitude: "4,420 m (Kunzum La Pass)",
        totalDistance: "~2,000 km (round trip from Delhi)",
        accommodationType: ["Guesthouses", "Homestays", "Campsites"],
        baseCamp: ["Kaza", "Tabo", "Chandratal Lake"],
        pickupPoint: "Delhi",
        tourType: "Adventure, Culture, Spirituality, High-Altitude Exploration",
        highlights: [
            "Kunzum La Pass: One of the highest motorable passes, offering panoramic views of the surrounding mountains.",
            "Kaza: The administrative capital of Spiti Valley, with beautiful monasteries like Key Monastery and Kye Monastery.",
            "Tabo Monastery: Known as the “Ajanta of the Himalayas,” Tabo Monastery is famous for its ancient murals and sculptures.",
            "Chandratal Lake: A high-altitude lake surrounded by snow-capped peaks, known for its mesmerizing beauty.",
            "Nako Village: Visit this serene village near the Indo-Tibetan border, with its ancient monastery.",
            "Langza and Hikkim: Visit Langza, known for the Buddha statue, and Hikkim, one of the highest villages with a post office.",
            "Off-Road Experience: Travel through rugged and off-road terrains, including the famous Spiti Valley Road."
        ],
        detailedItinerary: [
            {
                day: "Day 1",
                route: "Delhi – Manali",
                details: "Approx. 550 km / 12 hrs. Depart from Delhi early in the morning for Manali.",
                overnight: "Overnight stay in Manali."
            },
            {
                day: "Day 2",
                route: "Manali – Kullu – Jispa",
                details: "Approx. 150 km / 6 hrs. Drive through the scenic Kullu Valley and Rohtang Pass. Continue your journey towards Jispa, a small village in the Lahaul Valley.",
                overnight: "Overnight stay in Jispa."
            },
            {
                day: "Day 3",
                route: "Jispa – Keylong – Sarchu",
                details: "Approx. 120 km / 5 hrs. Continue towards Keylong, passing through Baralacha La Pass and Naki La. Reach Sarchu, which lies on the border of Himachal Pradesh and Ladakh.",
                overnight: "Overnight stay in Sarchu."
            },
            {
                day: "Day 4",
                route: "Sarchu – Leh",
                details: "Approx. 250 km / 7 hrs. Drive from Sarchu to Leh, crossing Tanglang La (one of the highest passes).",
                overnight: "Overnight stay in Leh."
            },
            {
                day: "Day 5",
                route: "Leh – Kaza",
                details: "Approx. 200 km / 8 hrs. Begin your journey to Kaza, passing through the Kunzum La Pass. Explore the scenic Spiti Valley landscapes, and check in at your guesthouse in Kaza.",
                overnight: "Overnight stay in Kaza."
            },
            {
                day: "Day 6",
                route: "Kaza – Key Monastery – Kibber – Langza",
                details: "Approx. 60 km / 3 hrs. Visit Key Monastery at 4,166 m and enjoy panoramic views. Explore Kibber, one of the highest motorable villages in the world. Continue to Langza to see the famous Buddha statue.",
                overnight: "Return to Kaza for overnight stay."
            },
            {
                day: "Day 7",
                route: "Kaza – Tabo",
                details: "Approx. 50 km / 2 hrs. Drive to Tabo, known for its 1,000-year-old Tabo Monastery. Visit the monastery, a UNESCO World Heritage site, and explore its murals and ancient caves.",
                overnight: "Overnight stay in Tabo."
            },
            {
                day: "Day 8",
                route: "Tabo – Chandratal Lake",
                details: "Approx. 70 km / 3 hrs. Drive to Chandratal Lake at 4,300 m and enjoy the pristine blue water surrounded by mountains. Camp near the lake and enjoy its tranquility.",
                overnight: "Overnight stay at Chandratal Lake (campsite)."
            },
            {
                day: "Day 9",
                route: "Chandratal Lake – Manali – Delhi",
                details: "Approx. 350 km / 10 hrs. After breakfast, drive back towards Manali via Rohtang Pass, then continue to Delhi, arriving in the evening.",
                overnight: "Trip concludes."
            }
        ],
        includes: [
            "8 nights' accommodation (Guesthouses, Campsites)",
            "Breakfast and dinner on all days",
            "Private vehicle with an experienced driver",
            "Inner-line permits (if required)",
            "Local guide for sightseeing in Spiti Valley",
            "First-aid kit and emergency assistance"
        ],
        exclusions: [
            "Lunches and snacks",
            "Personal expenses (tips, shopping, laundry)",
            "Travel insurance and emergency medical expenses",
            "Anything not mentioned under \"What's Included\""
        ],
        thingsToCarry: [
            "Warm clothing (jackets, thermals, gloves, and hats)",
            "Waterproof jacket and sturdy trekking shoes",
            "Sunscreen, sunglasses, and lip balm",
            "Personal medicines and power bank",
            "Water bottle, snacks, and energy bars",
            "Valid ID proof (Aadhaar/Passport)",
            "Camera to capture the beauty of the landscape"
        ],
        bestTimeToVisit: [
            "June to September: Ideal for road trips, as the weather is pleasant and all roads are accessible."
        ],
        whyChooseUs: [],
        difficulty: "",
        bestSeason: ""
    },


];

export default roadTrips;
