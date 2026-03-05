import type { Speaker } from '../types'

const UPLOADS_BASE = 'https://www.sbmconference.org.nz/uploads/1/2/0/6/120656982'

export const speakers: Speaker[] = [
  {
    id: 'karen-oleary',
    name: "Karen O'Leary",
    title: "Conference MC & Keynote Speaker - Karen O'Leary",
    bio: [
      "A natural performer, Karen made her acting debut in Taika Waititi and Jemaine Clement's cult-classic feature What We Do in the Shadows. Her head-turning performance as Officer O'Leary led to comedy spin-off series Wellington Paranormal, currently broadcast in over 100 countries around the world.",
      "We're delighted to welcome back Karen as our MC for this year's event following her epic support during our 2022 conference in Tauranga.",
    ],
    image: `${UPLOADS_BASE}/screenshot-2026-01-21-at-11-48-27-am_orig.png`,
    website: 'https://www.frankmanagement.nz',
  },
  {
    id: 'david-keane',
    name: 'Dr. David Keane',
    title: 'Keynote Speaker - Dr. David Keane',
    bio: [
      'Dr David Keane has over 30 years of experience of teaching and coaching people to achieve success in both their professional and personal lives.',
      "Over the years he has directly coached over 5,000 people, which has taught him what works and what doesn't when it comes to his clients achieving extraordinary results while at the same time living a balanced and fulfilling life.",
      'Session Outline:\nTap into the wisdom and experience of Success expert and author of The Art of Deliberate Success \u2013 The 10 Behaviours of Successful People.',
      "In this high-energy and engaging 60-minute keynote, we'll begin by examine what it really means to be successful in both your professional and personal life. In times of change, it's critically important that we know how to define success so that we can make choices and behave in ways that are consistent with what matters.",
      'The second part of the keynote will cover the key behaviours of successful people. These are practical strategies that successful people employ every day in their work and home lives. By understanding these behaviours, it\'s possible to see where changes in behaviours are needed.',
      "Ref: David's 3-decades of research and coaching work which have been published in his book The Art of Deliberate Success: The 10 Behaviours of Successful People.",
    ],
    image: `${UPLOADS_BASE}/screenshot-2026-01-21-at-11-48-50-am_orig.png`,
    website: 'https://www.drdavidkeane.com',
    email: 'david@drdavidkeane.com',
  },
  {
    id: 'john-stroud',
    name: 'John Stroud',
    title: 'Keynote Speaker - John Stroud',
    bio: [
      'With over 40 years of tramping and hunting, and roles as a Trustee on both the Te Araroa Manawat\u016b Trust and the national Te Araroa Trust, Tiaki Ranger, and long\u2011time Trail Angel, John Stroud has lived the trail in every way.',
      'After walking Te Araroa with his 18\u2011year\u2011old daughter, he brings reflections on resilience, connection, and direction \u2014 lessons that shape both his life outdoors and his work as a Lead Account Executive at New Era Technology.',
    ],
    image: `${UPLOADS_BASE}/screenshot-2026-01-21-at-11-49-26-am_orig.png`,
  },
]
