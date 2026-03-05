export interface WorkshopGroup {
  day: string
  date: string
  sessions: WorkshopSlot[]
}

export interface WorkshopSlot {
  label: string
  time: string
  workshops: WorkshopItem[]
}

export interface WorkshopItem {
  number?: number
  title: string
  speaker: string
}

export const workshopData: WorkshopGroup[] = [
  {
    day: 'Wednesday',
    date: '15 July',
    sessions: [
      {
        label: 'Discussion Session',
        time: '11:20am - 12:20pm',
        workshops: [
          {
            title: 'Catching the Gust: Navigating the Latest Shifts in Education Payroll',
            speaker: '',
          },
        ],
      },
      {
        label: 'Workshops 1-3',
        time: '1:35pm - 2:40pm',
        workshops: [
          {
            number: 1,
            title: 'Banking Staffing 101: Navigating the Winds of Change',
            speaker: 'Wayne Facer (Education Enterprises)',
          },
          {
            number: 2,
            title: 'Cyclical Maintenance 201: Planning with the Winds of Change',
            speaker: 'Joanne Leiper (Mana College)',
          },
          {
            number: 3,
            title: 'Risk Management 301: Preparing for Changing Conditions',
            speaker: 'Diane Bradley (Paraparaumu College)',
          },
        ],
      },
      {
        label: 'SBM Quiz',
        time: '2:50pm - 3:30pm',
        workshops: [
          {
            title: 'SBM Quiz',
            speaker: '[session info to follow]',
          },
        ],
      },
      {
        label: 'Workshops 4-6',
        time: '3:40pm - 4:40pm',
        workshops: [
          {
            number: 4,
            title: 'Financial Management Practices for International Fee-Paying Education: Navigating the Knowns and Unknowns in an Era of Opportunity',
            speaker: 'Forum with John Van der Zwann (SIEBA), John Gill, Yinka Mosis (Victoria University of Wellington), Alys Freeman (Wellington Girls\u2019 College)',
          },
          {
            number: 5,
            title: 'Catching the Tailwinds: Xero Tips, Tricks, and Add-ons: An overview covering ApprovalMax, Hubdoc, and Syft',
            speaker: 'Craig McWilliam (Miles Group)',
          },
          {
            number: 6,
            title: 'Beginner AI: Finding Opportunity in New Technology',
            speaker: 'Tony Gilbert (New Era)',
          },
        ],
      },
    ],
  },
  {
    day: 'Thursday',
    date: '16 July',
    sessions: [
      {
        label: 'Workshops 7-9',
        time: '10:55am - 11:55am',
        workshops: [
          {
            number: 7,
            title: 'Harnessing the Winds of Opportunity: Building your success toolkit',
            speaker: 'Dr. David Keane',
          },
          {
            number: 8,
            title: 'Buying Goods and Services \u2013 Basic Good Practice for fair winds',
            speaker: 'Cam Leer (Ministry of Education)',
          },
          {
            number: 9,
            title: 'Cyber Security: Staying Secure in Changing Conditions',
            speaker: 'speaker TBC',
          },
        ],
      },
      {
        label: 'Workshops 10-12',
        time: '11:55am - 12:55pm',
        workshops: [
          {
            number: 10,
            title: 'REPEAT Harnessing the Winds of Opportunity: Building your success toolkit',
            speaker: 'Dr. David Keane',
          },
          {
            number: 11,
            title: 'Buying Goods and Services \u2013 Catching the Updraft, Running A Competitive Procurement Process',
            speaker: 'Cam Leer (Ministry of Education)',
          },
          {
            number: 12,
            title: 'Wind patterns in International Education',
            speaker: 'John Van der Zwann (SIEBA)',
          },
        ],
      },
      {
        label: 'Panel Session',
        time: '2:30pm - 4:00pm',
        workshops: [
          {
            title: 'Panel Discussion (HR/Property)',
            speaker: '[session info to follow]',
          },
        ],
      },
    ],
  },
  {
    day: 'Friday',
    date: '17 July',
    sessions: [
      {
        label: 'Workshops 13-15',
        time: '10:00am - 11:00am',
        workshops: [
          {
            number: 13,
            title: 'Property 101: Opening the Door to Opportunity',
            speaker: 'Ministry of Education speaker TBC',
          },
          {
            number: 14,
            title: 'Riding the Jetstream - Setting up and maximising online enrolments: KAMAR Masterclass',
            speaker: 'Mark Fidler',
          },
          {
            number: 15,
            title: 'Cruising at Altitude: Advanced Reporting in Xero (Interactive) - Report Engine, Packs & Syft in Practice',
            speaker: 'Craig McWilliam (Miles Group)',
          },
        ],
      },
      {
        label: 'Workshops 16-18',
        time: '11:30am - 12:30pm',
        workshops: [
          {
            number: 16,
            title: 'HR Good Practice: Catching the wind Turning Policy into Practice \u2013 Workshop',
            speaker: 'Maynard Scott (NZSBA)',
          },
          {
            number: 17,
            title: 'Breezing through Relief Management: KAMAR Masterclass',
            speaker: 'Mark Fidler',
          },
          {
            number: 18,
            title: 'Future Financial Reporting: Setting the Course Ahead',
            speaker: 'Chad Britton (Ministry of Education)',
          },
        ],
      },
    ],
  },
]
