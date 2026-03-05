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

export const SITE_URL = 'https://www.sbmconference.org.nz'
export const UPLOADS_BASE = `${SITE_URL}/uploads/1/2/0/6/120656982`

export const images = {
  logo: `${UPLOADS_BASE}/published/wind-icon.png?1765824238`,
  footerWindIcon: `${UPLOADS_BASE}/published/wind-icon.png?1765824238`,
  footerImage: `${UPLOADS_BASE}/published/website-footer-image.jpg?1765824211`,
  sbmIcon: `${UPLOADS_BASE}/sbm-icon_orig.png`,
  heroHome: `${UPLOADS_BASE}/background-images/28214990.jpg`,
  heroProgramme: `${UPLOADS_BASE}/background-images/488106782.jpg`,
  heroWorkshops: `${UPLOADS_BASE}/background-images/1788110180.jpg`,
  heroSocial: `${UPLOADS_BASE}/background-images/419033871.jpg`,
  heroKeynotes: `${UPLOADS_BASE}/background-images/52889431.jpg`,
  heroRegistration: `${UPLOADS_BASE}/background-images/272673582.jpg`,
  heroAccommodation: `${UPLOADS_BASE}/background-images/1688827203.jpg`,
  heroPlanVisit: `${UPLOADS_BASE}/background-images/1046713745.jpg`,
  heroSponsors: `${UPLOADS_BASE}/background-images/850652248.jpg`,
  heroContact: `${UPLOADS_BASE}/background-images/832998195.jpg`,
  accommodationRates: `${UPLOADS_BASE}/accommodation-rates_orig.png`,
  walkingMap: `${UPLOADS_BASE}/published/walking-map.png?1763005788`,
  floorplan: `${UPLOADS_BASE}/published/floorplan.png?1762335705`,
  eventSmart: `${UPLOADS_BASE}/es1_orig.jpg`,
}
