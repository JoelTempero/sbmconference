export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export interface Speaker {
  id: string
  name: string
  title: string
  bio: string[]
  image: string
  website?: string
  email?: string
}

export interface WorkshopSession {
  number?: number
  title: string
  speaker: string
  organization?: string
  time: string
}

export interface ScheduleEntry {
  time: string
  session: string
  location: string
  isKeynote?: boolean
  isMeal?: boolean
}

export interface SocialEvent {
  id: string
  title: string
  date: string
  time: string
  location?: string
  description: string[]
  image?: string
}

export interface Sponsor {
  name: string
  image?: string
  link?: string
  tier: 'gold' | 'silver' | 'bronze'
}

export interface AccommodationOption {
  name: string
  rating?: string
  pricing: string[]
  distance: string
}
