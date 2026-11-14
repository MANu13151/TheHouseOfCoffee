export const OUTLETS = {
  vaishali: {
    id: 'vaishali',
    name: 'Vaishali Nagar',
    badge: 'Flagship Roastery & Library',
    tagline: 'Amber Library & Board Game Lounge',
    address: '176 Nemi Sagar, Vaishali Marg, Vaishali Nagar, Jaipur, Rajasthan 302021',
    shortAddress: '176 Nemi Sagar, Vaishali Marg, Jaipur',
    landmark: 'Beside Nemi Sagar Park, near Amrapali Circle',
    phone: '+91 98292 44331',
    phoneRaw: '919829244331',
    hours: '8:00 AM – 11:30 PM (Daily)',
    crowdStatus: 'Moderate',
    crowdLabel: 'Relaxed Vibe • 14 Seats Available',
    wifiSpeed: '180 Mbps High-Speed Fiber',
    parking: 'Dedicated Street & Valet Parking',
    signatureFeature: 'Backlit Amber Book & Board-Game Wall',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=176%20Nemi%20Sagar%20Vaishali%20Marg%20Vaishali%20Nagar%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=176+Nemi+Sagar+Vaishali+Marg+Vaishali+Nagar+Jaipur',
  },
  cscheme: {
    id: 'cscheme',
    name: 'C-Scheme',
    badge: 'Sunlit Balcony & Brew Bar',
    tagline: 'First-Floor Patio & Single-Origin Bar',
    address: 'Plot 14, Subhash Marg, near Ahimsa Circle, C-Scheme, Jaipur, Rajasthan 302001',
    shortAddress: 'Plot 14, Subhash Marg, C-Scheme, Jaipur',
    landmark: 'Opposite Central Park Gate 3, near Ahimsa Circle',
    phone: '+91 98292 55442',
    phoneRaw: '919829255442',
    hours: '8:30 AM – 11:00 PM (Daily)',
    crowdStatus: 'Bustling',
    crowdLabel: 'Golden Hour Buzz • 6 Balcony Tables Open',
    wifiSpeed: '220 Mbps High-Speed Fiber',
    parking: 'Free Street Parking Available',
    signatureFeature: 'Breezy Tree-Covered Balcony Sips',
    mapsEmbedUrl: 'https://maps.google.com/maps?q=Subhash%20Marg%20C%20Scheme%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Subhash+Marg+C+Scheme+Jaipur',
  }
};

export function getWhatsAppOrderUrl(outletId, customMessage) {
  const outlet = OUTLETS[outletId] || OUTLETS.vaishali;
  const msg = customMessage || `Hi The House of Coffee (${outlet.name})! I would like to order ahead for pickup / reserve a table.`;
  return `https://wa.me/${outlet.phoneRaw}?text=${encodeURIComponent(msg)}`;
}
