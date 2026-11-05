export interface Amenity {
  name: string;
  category: 'comfort' | 'kitchen' | 'outdoor' | 'hospitality';
  icon: string;
  description?: string;
}

export interface Review {
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  content: string;
  verifiedAirbnbGuest: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  description: string;
  url: string;
  airbnbListingUrl: string;
  contact: {
    whatsappNumber: string; // international format without + or spaces, e.g. '919876543210'
    displayPhone: string;
    email: string;
    hostName: string;
    airbnbSuperhost: boolean;
    airbnbRating: number;
    airbnbReviewCount: number;
  };
  pricing: {
    baseRatePerNight: number;
    currency: string;
    currencySymbol: string;
    airbnbCommissionPercent: number; // e.g. 18% savings comparison
    cleaningFee: number;
    securityDeposit: number;
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;
    beds: number;
    propertySizeSqFt?: number;
  };
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    googleMapsEmbedUrl: string;
    nearbyLandmarks: Array<{ name: string; distance: string }>;
  };
  photos: Array<{
    url: string;
    alt: string;
    featured?: boolean;
    category?: 'exterior' | 'bedroom' | 'pool' | 'living' | 'dining';
  }>;
  amenities: Amenity[];
  reviews: Review[];
  faqs: FAQItem[];
}

export const siteConfig: SiteConfig = {
  name: 'River Edge Villa',
  tagline: '3BHK Luxury Retreat with Private Pool in Lonavala',
  headline: 'Exclusive 3BHK River Edge Villa with Private Pool & Mountain Views',
  description:
    'Experience scenic serenity at River Edge Villa in Lonavala. Book direct with host Swaraj to skip 15-20% Airbnb service fees. Features 3 plush AC bedrooms with king beds, private swimming pool, lush lawns, and space for up to 15 guests.',
  url: 'https://riveredgevilla.com',
  airbnbListingUrl: 'https://www.airbnb.co.in/rooms/1745062199910740345',
  contact: {
    whatsappNumber: '919876543210',
    displayPhone: '+91 98765 43210',
    email: 'stay@riveredgevilla.com',
    hostName: 'Swaraj',
    airbnbSuperhost: true,
    airbnbRating: 5.0,
    airbnbReviewCount: 12,
  },
  pricing: {
    baseRatePerNight: 16500,
    currency: 'INR',
    currencySymbol: '₹',
    airbnbCommissionPercent: 18,
    cleaningFee: 0,
    securityDeposit: 5000,
  },
  specs: {
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 15,
    beds: 3,
    propertySizeSqFt: 4000,
  },
  location: {
    address: 'River Edge Estate, Near Valvan Dam & River',
    city: 'Lonavala',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '410401',
    latitude: 18.7557,
    longitude: 73.4091,
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.680650992338!2d73.4069113!3d18.7557051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQ1JzIwLjUiTiA3M8KwMjQnMzIuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    nearbyLandmarks: [
      { name: 'Riverfront Access & Lawns', distance: 'Direct Walk (0 mins)' },
      { name: 'Lonavala Railway Station', distance: '4.5 km (10 mins)' },
      { name: 'Mumbai-Pune Expressway Exit', distance: '3.0 km (7 mins)' },
      { name: 'Bhushi Dam & Tiger Point', distance: '8 km (18 mins)' },
    ],
  },
  photos: [
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543628483898367663/original/88a240f4-9c27-4eda-923a-af734aea5a49.jpeg?im_w=1200',
      alt: 'River Edge Villa exterior view with private swimming pool and deck',
      featured: true,
      category: 'pool',
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543628483898367663/original/ff62e3cd-1a2e-4e0c-a698-15b90a9d661c.png?im_w=1200',
      alt: 'Private swimming pool with mountain and river backdrop',
      featured: false,
      category: 'exterior',
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543628483898367663/original/47d6ad20-004d-49f9-8a6e-ca5e5769bcbb.png?im_w=1200',
      alt: 'Luxury air-conditioned bedroom with king-size bed',
      featured: false,
      category: 'bedroom',
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543628483898367663/original/93f604d8-4b67-453b-a34d-db236973e529.png?im_w=1200',
      alt: 'Second master bedroom with attached bathroom and scenic window',
      featured: false,
      category: 'bedroom',
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543628483898367663/original/1120590c-cc81-4507-bdcb-93ed5dc01524.png?im_w=1200',
      alt: 'Spacious open-concept living hall and entertainment area with TV',
      featured: false,
      category: 'living',
    },
    {
      url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1543628483898367663/original/b53efeed-ca6a-45b0-b5a0-6799ae2c9737.jpeg?im_w=1200',
      alt: 'Third plush bedroom suite accommodating family and groups',
      featured: false,
      category: 'bedroom',
    },
  ],
  amenities: [
    { name: 'Private Swimming Pool', category: 'outdoor', icon: 'pool', description: 'Exclusive clean pool with sun-deck loungers' },
    { name: 'Riverfront Lawn & Garden', category: 'outdoor', icon: 'nature', description: 'Sprawling grass lawn ideal for groups and outdoor games' },
    { name: 'High-Speed WiFi', category: 'comfort', icon: 'wifi', description: 'Fast internet across all 3 bedrooms and living lounge' },
    { name: 'Smart TV with Streaming', category: 'comfort', icon: 'tv', description: 'Large screen TV in the central living room' },
    { name: 'Fully Equipped Kitchen', category: 'kitchen', icon: 'kitchen', description: 'Refrigerator, stove, microwave, water filter, cooking utensils' },
    { name: 'Air Conditioning in All Rooms', category: 'comfort', icon: 'ac', description: 'Individual AC units in all 3 bedrooms and main hall' },
    { name: 'Free Gated Parking', category: 'comfort', icon: 'parking', description: 'Secure on-premise parking for multiple cars' },
    { name: 'Caretaker & Housekeeping', category: 'hospitality', icon: 'support', description: 'Resident caretaker for seamless check-in and assistance' },
    { name: 'Bonfire & BBQ Setup', category: 'outdoor', icon: 'fire', description: 'Outdoor charcoal barbecue grill and evening bonfire area' },
  ],
  reviews: [
    {
      author: 'Kunal Singhania',
      date: 'December 2024',
      rating: 5,
      content:
        'Found River Edge Villa on Airbnb, contacted host Swaraj directly on WhatsApp. Saved almost ₹6,000 on platform fees! Private pool is clean and huge, location near river is serene.',
      verifiedAirbnbGuest: true,
    },
    {
      author: 'Pooja Agarwal & Friends',
      date: 'November 2024',
      rating: 5,
      content:
        'Hosted 12 people comfortably. 3 large bedrooms with king beds and extra mattresses. Kitchen is fully stocked, caretaker was super helpful. Highly recommended direct booking!',
      verifiedAirbnbGuest: true,
    },
    {
      author: 'Vikram Joshi',
      date: 'October 2024',
      rating: 5,
      content:
        'Perfect weekend getaway from Mumbai. Just 10 mins from Expressway exit. Swimming pool was the highlight. Booking through WhatsApp was instant and transparent.',
      verifiedAirbnbGuest: true,
    },
  ],
  faqs: [
    {
      question: 'Why book River Edge Villa directly instead of Airbnb?',
      answer:
        'Airbnb adds 14–18% service fees onto the total booking cost. Booking directly with host Swaraj via WhatsApp gives you the exact same villa with zero platform markups.',
    },
    {
      question: 'How do I check availability and confirm booking?',
      answer:
        'Select your dates on the widget above and click "Check Availability on WhatsApp". Host Swaraj will confirm dates and share bank / UPI deposit details to reserve.',
    },
    {
      question: 'How many guests can stay in this 3BHK villa?',
      answer:
        'The villa has 3 private bedrooms with king beds and can comfortably host up to 15 guests with extra mattresses and bedding provided upon request.',
    },
    {
      question: 'What are the check-in and check-out times?',
      answer:
        'Standard check-in is 1:00 PM and check-out is 11:00 AM. Flexible check-in/out can be requested via WhatsApp subject to previous guest departures.',
    },
    {
      question: 'Is outside food allowed or can cook be arranged?',
      answer:
        'Yes! You can cook in the fully equipped kitchen, order from popular Lonavala restaurants via Swiggy/Zomato, or request local meal packages through the caretaker.',
    },
  ],
};
