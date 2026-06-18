// Each entry is one top-level area/tab of the site.
// Add a new area by adding an object here — nav links and routing
// (/[slug]/) are generated automatically. `order` controls nav order.
//
// `stats`, `timeline`, `cards`, `galleryCount`, and `quote` feed the
// shared AreaLayout template (Phase 4). All content below is
// placeholder — swap in real copy/numbers/images during Phase 5.

export interface Stat {
  value: string;
  label: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Card {
  title: string;
  description: string;
  tag?: string;
}

export interface Quote {
  text: string;
  attribution: string;
}

export interface Area {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  order: number;
  stats: Stat[];
  timeline: TimelineItem[];
  cardsHeading: string;
  cards: Card[];
  galleryCount: number;
  quote: Quote;
}

export const areas: Area[] = [
  {
    slug: 'robotics',
    title: 'Robotics',
    navLabel: 'Robotics',
    summary:
      'FTC robotics — technical leadership, build, programming, manufacturing, outreach, and fundraising.',
    order: 1,
    stats: [
      { value: '4+', label: 'Seasons competed' },
      { value: '3', label: 'Subsystems led' },
      { value: '5', label: 'Regional awards' },
      { value: '12+', label: 'Outreach events' },
    ],
    timeline: [
      {
        date: 'Sep',
        title: 'Kickoff & strategy',
        description: 'Placeholder — season reveal, game analysis, and early prototyping.',
      },
      {
        date: 'Nov',
        title: 'Build season',
        description: 'Placeholder — design, manufacture, and program the competition robot.',
      },
      {
        date: 'Jan',
        title: 'Qualifiers',
        description: 'Placeholder — first competitions, iteration, and driver practice.',
      },
      {
        date: 'Mar',
        title: 'Regionals & beyond',
        description: 'Placeholder — regional results and advancement.',
      },
    ],
    cardsHeading: 'Awards & highlights',
    cards: [
      { title: 'Award placeholder', description: 'Short description of the award or milestone.', tag: 'Award' },
      { title: 'Award placeholder', description: 'Short description of the award or milestone.', tag: 'Award' },
      { title: 'Project placeholder', description: 'Short description of a build/programming highlight.', tag: 'Build' },
    ],
    galleryCount: 6,
    quote: {
      text: 'Placeholder quote about the team, the season, or a lesson learned along the way.',
      attribution: 'Jason Bottino',
    },
  },
  {
    slug: 'service',
    title: 'Service & Advocacy',
    navLabel: 'Service',
    summary:
      'Volunteering, STEM-access advocacy, fundraising, and community impact.',
    order: 2,
    stats: [
      { value: '150+', label: 'Service hours' },
      { value: '8', label: 'Organizations supported' },
      { value: '3', label: 'Fundraisers led' },
      { value: '2', label: 'Programs founded' },
    ],
    timeline: [
      {
        date: '2023',
        title: 'Program placeholder',
        description: 'Placeholder — description of a service initiative or partnership started.',
      },
      {
        date: '2024',
        title: 'Fundraiser placeholder',
        description: 'Placeholder — description of a fundraising campaign and its impact.',
      },
      {
        date: '2025',
        title: 'STEM outreach placeholder',
        description: 'Placeholder — description of an outreach event or workshop series.',
      },
    ],
    cardsHeading: 'Initiatives',
    cards: [
      { title: 'Initiative placeholder', description: 'Short description of the program and who it serves.', tag: 'Program' },
      { title: 'Initiative placeholder', description: 'Short description of the program and who it serves.', tag: 'Program' },
      { title: 'Fundraiser placeholder', description: 'Short description of the campaign and outcome.', tag: 'Fundraiser' },
    ],
    galleryCount: 4,
    quote: {
      text: 'Placeholder quote about why community impact and STEM access matter.',
      attribution: 'Jason Bottino',
    },
  },
  {
    slug: 'academics',
    title: 'Academics',
    navLabel: 'Academics',
    summary: 'Coursework, rigor, and academic recognition.',
    order: 3,
    stats: [
      { value: '8+', label: 'AP / honors courses' },
      { value: 'X.XX', label: 'GPA placeholder' },
      { value: '3', label: 'Academic awards' },
      { value: '2', label: 'Clubs led' },
    ],
    timeline: [
      {
        date: 'Freshman',
        title: 'Year placeholder',
        description: 'Placeholder — coursework focus and early academic milestones.',
      },
      {
        date: 'Sophomore',
        title: 'Year placeholder',
        description: 'Placeholder — coursework focus and academic milestones.',
      },
      {
        date: 'Junior',
        title: 'Year placeholder',
        description: 'Placeholder — coursework focus, awards, and leadership.',
      },
    ],
    cardsHeading: 'Honors & recognition',
    cards: [
      { title: 'Honor placeholder', description: 'Short description of the academic award or recognition.', tag: 'Honor' },
      { title: 'Honor placeholder', description: 'Short description of the academic award or recognition.', tag: 'Honor' },
    ],
    galleryCount: 4,
    quote: {
      text: 'Placeholder quote about an academic interest, mentor, or favorite subject.',
      attribution: 'Jason Bottino',
    },
  },
  {
    slug: 'projects',
    title: 'Projects',
    navLabel: 'Projects',
    summary:
      'Coding projects, AI development & automation, and business ventures.',
    order: 4,
    stats: [
      { value: '6+', label: 'Shipped projects' },
      { value: '4', label: 'Languages used' },
      { value: '1', label: 'Ventures started' },
      { value: '2', label: 'Open-source contributions' },
    ],
    timeline: [
      {
        date: '2023',
        title: 'Project placeholder',
        description: 'Placeholder — what was built, the stack, and why it mattered.',
      },
      {
        date: '2024',
        title: 'Project placeholder',
        description: 'Placeholder — what was built, the stack, and why it mattered.',
      },
      {
        date: '2025',
        title: 'Venture placeholder',
        description: 'Placeholder — description of a business venture or larger build.',
      },
    ],
    cardsHeading: 'Selected work',
    cards: [
      { title: 'Project placeholder', description: 'Short description of the project, stack, and outcome.', tag: 'Code' },
      { title: 'Project placeholder', description: 'Short description of the project, stack, and outcome.', tag: 'AI / Automation' },
      { title: 'Venture placeholder', description: 'Short description of the business venture.', tag: 'Venture' },
    ],
    galleryCount: 4,
    quote: {
      text: 'Placeholder quote about a favorite project, problem solved, or what drives the work.',
      attribution: 'Jason Bottino',
    },
  },
  {
    slug: 'pursuits',
    title: 'Pursuits',
    navLabel: 'Pursuits',
    summary:
      'Photography, bonsai, music, track & field, and fitness — what I do outside of robotics.',
    order: 5,
    stats: [
      { value: '5', label: 'Pursuits' },
      { value: '3+', label: 'Years of photography' },
      { value: '2+', label: 'Years growing bonsai' },
      { value: '1', label: 'Instrument played' },
    ],
    timeline: [],
    cardsHeading: 'What I do outside robotics',
    cards: [
      { title: 'Photography', description: 'Placeholder — landscapes, events, or whatever you shoot most.', tag: 'Pursuit' },
      { title: 'Bonsai', description: 'Placeholder — species cared for, how long, what drew you to it.', tag: 'Pursuit' },
      { title: 'Music', description: 'Placeholder — instrument, ensembles, or genres.', tag: 'Pursuit' },
      { title: 'Track & Field', description: 'Placeholder — events run, personal bests, team.', tag: 'Pursuit' },
      { title: 'Fitness', description: 'Placeholder — training focus or goals.', tag: 'Pursuit' },
    ],
    galleryCount: 6,
    quote: {
      text: 'Placeholder quote about balance, creativity, or why these pursuits matter outside of robotics.',
      attribution: 'Jason Bottino',
    },
  },
];

export const sortedAreas = [...areas].sort((a, b) => a.order - b.order);
