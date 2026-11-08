import { siteConfig } from '../site.config';

/**
 * Generates Schema.org LodgingBusiness and VacationRental structured data object
 */
export function getStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'VacationRental'],
    '@id': `${siteConfig.url}/#lodging`,
    name: siteConfig.name,
    alternateName: ['Riveredge Villa', 'River Edge Villa Lonavala', 'Riveredge Villa Lonavala'],
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.displayPhone,
    image: siteConfig.photos.map((p) =>
      p.url.startsWith('http') ? p.url : `${siteConfig.url}${p.url}`
    ),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.postalCode,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.latitude,
      longitude: siteConfig.location.longitude,
    },
    priceRange: `${siteConfig.pricing.currencySymbol}${siteConfig.pricing.baseRatePerNight.toLocaleString('en-IN')}`,
    currenciesAccepted: siteConfig.pricing.currency,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.contact.airbnbRating,
      reviewCount: siteConfig.contact.airbnbReviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    containsPlace: {
      '@type': 'Accommodation',
      numberOfBedrooms: siteConfig.specs.bedrooms,
      numberOfBathroomsTotal: siteConfig.specs.bathrooms,
      occupancy: {
        '@type': 'QuantitativeValue',
        maxValue: siteConfig.specs.maxGuests,
      },
    },
    amenityFeature: siteConfig.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a.name,
      value: true,
    })),
  };
}

/**
 * Generates Schema.org FAQPage structured data object for search rich snippets
 */
export function getFaqStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

