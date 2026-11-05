import { describe, it, expect } from 'vitest';
import { getStructuredData } from './seo';
import { siteConfig } from '../site.config';

describe('SEO Structured Data Generator', () => {
  it('generates valid Schema.org LodgingBusiness and VacationRental JSON-LD payload', () => {
    const data = getStructuredData();

    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toContain('LodgingBusiness');
    expect(data['@type']).toContain('VacationRental');
    expect(data.name).toBe(siteConfig.name);
    expect(data.description).toBe(siteConfig.description);
    expect(data.url).toBe(siteConfig.url);
    expect(data.telephone).toBe(siteConfig.contact.displayPhone);
  });

  it('contains valid postal address matching site config', () => {
    const data = getStructuredData();

    expect(data.address['@type']).toBe('PostalAddress');
    expect(data.address.streetAddress).toBe(siteConfig.location.address);
    expect(data.address.addressLocality).toBe(siteConfig.location.city);
    expect(data.address.addressRegion).toBe(siteConfig.location.state);
    expect(data.address.postalCode).toBe(siteConfig.location.postalCode);
  });

  it('contains geo coordinates and aggregate reviews matching Airbnb Superhost stats', () => {
    const data = getStructuredData();

    expect(data.geo.latitude).toBe(siteConfig.location.latitude);
    expect(data.geo.longitude).toBe(siteConfig.location.longitude);
    expect(data.aggregateRating.ratingValue).toBe(siteConfig.contact.airbnbRating);
    expect(data.aggregateRating.reviewCount).toBe(siteConfig.contact.airbnbReviewCount);
  });

  it('maps property amenities and specs into accommodation schema', () => {
    const data = getStructuredData();

    expect(data.containsPlace.numberOfBedrooms).toBe(siteConfig.specs.bedrooms);
    expect(data.containsPlace.numberOfBathroomsTotal).toBe(siteConfig.specs.bathrooms);
    expect(data.containsPlace.occupancy.maxValue).toBe(siteConfig.specs.maxGuests);
    expect(data.amenityFeature.length).toBe(siteConfig.amenities.length);
  });
});
