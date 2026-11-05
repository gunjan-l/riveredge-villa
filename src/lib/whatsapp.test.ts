import { describe, it, expect } from 'vitest';
import { formatWhatsAppMessage, buildWhatsAppUrl } from './whatsapp';

describe('WhatsApp URL & Message Builder', () => {
  it('formats message with both check-in and check-out dates and multiple guests', () => {
    const msg = formatWhatsAppMessage({
      hostName: 'Dev',
      checkIn: '2026-12-24',
      checkOut: '2026-12-27',
      guests: 6,
    });

    expect(msg).toContain('Hi Dev,');
    expect(msg).toContain('• Dates: 2026-12-24 to 2026-12-27');
    expect(msg).toContain('• Group size: 6 guests');
  });

  it('handles singular guest phrasing correctly', () => {
    const msg = formatWhatsAppMessage({
      hostName: 'Dev',
      checkIn: '2026-12-24',
      checkOut: '2026-12-25',
      guests: 1,
    });

    expect(msg).toContain('• Group size: 1 guest');
  });

  it('handles omitted dates with flexible fallback', () => {
    const msg = formatWhatsAppMessage({
      hostName: 'Dev',
      guests: 4,
    });

    expect(msg).toContain('• Dates: Flexible / To be decided');
  });

  it('handles check-in date only', () => {
    const msg = formatWhatsAppMessage({
      hostName: 'Dev',
      checkIn: '2026-12-30',
      guests: 2,
    });

    expect(msg).toContain('• Check-in Date: 2026-12-30');
  });

  it('generates properly formatted and encoded https://wa.me URL', () => {
    const url = buildWhatsAppUrl('+91 (987) 654-3210', {
      hostName: 'Dev',
      checkIn: '2026-12-24',
      checkOut: '2026-12-26',
      guests: 4,
    });

    expect(url.startsWith('https://wa.me/919876543210?text=')).toBe(true);
    expect(url).toContain(encodeURIComponent('Hi Dev,'));
    expect(url).toContain(encodeURIComponent('• Dates: 2026-12-24 to 2026-12-26'));
    expect(url).toContain(encodeURIComponent('• Group size: 4 guests'));
  });
});
