import type { Sponsor } from '../types'

const UPLOADS_BASE = 'https://www.sbmconference.org.nz/uploads/1/2/0/6/120656982'

export const sponsors: Sponsor[] = [
  // Gold Business Partners
  {
    name: 'Fujifilm',
    image: `${UPLOADS_BASE}/published/fujifilm-basic.jpg?1762144552`,
    link: 'https://www-fbnz.fujifilm.com/',
    tier: 'gold',
  },
  {
    name: 'Furnware',
    image: `${UPLOADS_BASE}/editor/furnware-rgb-teal-1_1.jpg?1552268261`,
    link: 'https://www.furnware.co.nz/',
    tier: 'gold',
  },
  {
    name: 'OfficeMax',
    image: `${UPLOADS_BASE}/editor/office-max-logo-4c-large-1_1.jpg?1552268265`,
    link: 'https://www.officemax.co.nz/',
    tier: 'gold',
  },
  {
    name: 'Programmed',
    image: `${UPLOADS_BASE}/editor/programmed-horizonal-logo_1.png?1552268269`,
    link: 'https://programmed.co.nz/',
    tier: 'gold',
  },
  {
    name: 'ASB',
    image: `${UPLOADS_BASE}/editor/asb-logo-y-on-b-hr_1.jpg?1552268273`,
    link: 'https://www.asb.co.nz/',
    tier: 'gold',
  },
  {
    name: 'New Era Technology',
    image: `${UPLOADS_BASE}/editor/new-era-technology-primary-pms-4x-100.jpg?1645749438`,
    link: 'http://newerait.co.nz/',
    tier: 'gold',
  },
  // Silver Sponsors
  {
    name: 'Uniform Group',
    image: `${UPLOADS_BASE}/editor/uniform-group-stacked-blk-trans.png?1708288421`,
    link: 'http://uniformgroup.co.nz/',
    tier: 'silver',
  },
  {
    name: 'Kindo',
    image: `${UPLOADS_BASE}/published/2025-kindo-logo.png?1740618569`,
    link: 'http://kindo.co.nz/',
    tier: 'silver',
  },
  {
    name: 'Alsco',
    image: `${UPLOADS_BASE}/published/alsco-new-logo.png?1733453274`,
    link: 'https://www.alsco.co.nz/industries/education/',
    tier: 'silver',
  },
  // Bronze Sponsors
  { name: 'BoardPro Limited', tier: 'bronze' },
  { name: 'FACTS School Management', tier: 'bronze' },
  { name: 'Gallagher Insurance', tier: 'bronze' },
  { name: 'Gallagher Security', tier: 'bronze' },
  { name: 'JaniKing', tier: 'bronze' },
  { name: 'Mastercraft Group', tier: 'bronze' },
  { name: 'Marsh Limited', tier: 'bronze' },
  { name: 'Monitor BM', tier: 'bronze' },
  { name: 'Noel Leeming Commercial', tier: 'bronze' },
  { name: 'Nui Software (eSchool)', tier: 'bronze' },
  { name: 'NZ Mats', tier: 'bronze' },
  { name: 'NZ Uniforms', tier: 'bronze' },
  { name: 'Outclass Outdorable Ltd.', tier: 'bronze' },
  { name: 'Playground People Ltd.', tier: 'bronze' },
  { name: 'PhotoLife', tier: 'bronze' },
  { name: 'Project Floors', tier: 'bronze' },
  { name: 'School Travel Collective', tier: 'bronze' },
  { name: 'Shade Systems', tier: 'bronze' },
  { name: 'SIEBA', tier: 'bronze' },
  { name: 'Solutions & Services', tier: 'bronze' },
  { name: 'Tasman Bay Food Co.', tier: 'bronze' },
  { name: 'Tiger Turf', tier: 'bronze' },
  { name: 'Tuckr', tier: 'bronze' },
  { name: 'Wesco Anixter (Atlas Gentech (NZ) Ltd.', tier: 'bronze' },
]
