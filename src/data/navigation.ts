import type { NavItem } from '../types'

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Programme',
    path: '/programme',
    children: [
      { label: 'Workshops and Panel Sessions', path: '/workshops-and-panel-sessions' },
      { label: 'Social', path: '/social' },
    ],
  },
  { label: 'Keynotes', path: '/keynotes' },
  { label: 'Registration', path: '/registration' },
  {
    label: 'Accommodation',
    path: '/accommodation',
    children: [
      { label: 'Plan your visit', path: '/plan-your-visit' },
    ],
  },
  { label: 'Conference Sponsors', path: '/conference-sponsors' },
  { label: 'Contact', path: '/contact' },
]

export const images = {
  logo: '/images/icons/wind-icon.png',
  footerWindIcon: '/images/icons/wind-icon.png',
  footerImage: '/images/icons/website-footer-image.jpg',
  sbmIcon: '/images/icons/sbm-icon.png',
  heroHome: '/images/backgrounds/home.jpg',
  heroProgramme: '/images/backgrounds/programme.jpg',
  heroWorkshops: '/images/backgrounds/workshops.jpg',
  heroSocial: '/images/backgrounds/social.jpg',
  heroKeynotes: '/images/backgrounds/keynotes.jpg',
  heroRegistration: '/images/backgrounds/registration.jpg',
  heroAccommodation: '/images/backgrounds/accommodation.jpg',
  heroPlanVisit: '/images/backgrounds/plan-visit.jpg',
  heroSponsors: '/images/backgrounds/sponsors.jpg',
  heroContact: '/images/backgrounds/contact.jpg',
  accommodationRates: '/images/accommodation-rates.png',
  walkingMap: '/images/walking-map.png',
  floorplan: '/images/floorplan.png',
  eventSmart: '/images/eventsmart.jpg',
}
