export interface BookingInquiryParams {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  hostName?: string;
}

/**
 * Formats a user booking selection into a pre-filled, URL-encoded WhatsApp inquiry message.
 */
export function formatWhatsAppMessage(params: BookingInquiryParams): string {
  const hostGreeting = params.hostName ? `Hi ${params.hostName}, ` : 'Hi, ';
  const lines: string[] = [
    `${hostGreeting}I would like to inquire about booking Riveredge Villa directly:`,
  ];

  if (params.checkIn && params.checkOut) {
    lines.push(`• Dates: ${params.checkIn} to ${params.checkOut}`);
  } else if (params.checkIn) {
    lines.push(`• Check-in Date: ${params.checkIn}`);
  } else {
    lines.push('• Dates: Flexible / To be decided');
  }

  const guestCount = params.guests ?? 2;
  const guestLabel = guestCount === 1 ? '1 guest' : `${guestCount} guests`;
  lines.push(`• Group size: ${guestLabel}`);
  lines.push(`• Inquiry: Please share direct rate availability and discount.`);

  return lines.join('\n');
}

/**
 * Builds the complete WhatsApp direct URL with encoded text query parameter.
 */
export function buildWhatsAppUrl(
  phoneNumber: string,
  params: BookingInquiryParams = {}
): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const message = formatWhatsAppMessage(params);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
