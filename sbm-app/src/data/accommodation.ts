import type { AccommodationOption } from '../types'

export const accommodationOptions: AccommodationOption[] = [
  {
    name: 'Museum Apartment Hotel',
    rating: '4.5-5*',
    pricing: [
      'Run of house room $299 (Bed & Breakfast for 1)',
      'Run of house room $334 (Bed & Breakfast for 2)',
    ],
    distance: '2 min walk to venue',
  },
  {
    name: 'Cambridge Hotel',
    rating: '3*',
    pricing: [
      'Super King/Twin $125 (no breakfast, limited rooms available)',
    ],
    distance: '9 min walk to venue',
  },
  {
    name: 'Intercontinental Hotel',
    rating: '5*',
    pricing: [
      '$305 (Bed & Breakfast for 1)',
    ],
    distance: '12 min walk to venue',
  },
  {
    name: 'Naumi Hotel Studio',
    pricing: [
      '$236 (Bed & Breakfast for 1)',
    ],
    distance: '13 min walk to venue',
  },
  {
    name: 'Ibis Hotel',
    rating: '3*',
    pricing: [
      '$185 (Bed & Breakfast for 1)',
      '$210 (Bed & Breakfast for 2)',
    ],
    distance: '14min walk to venue',
  },
]
