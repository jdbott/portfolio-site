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
  meta?: string;
  description: string;
  courses?: string[];
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

export interface FeatureSection {
  heading: string;
  text: string;
}

export interface Pursuit {
  title: string;
  kicker: string;
  description: string;
  details: string[];
  imagePath: string;
}

export interface Area {
  slug: string;
  title: string;
  navLabel: string;
  eyebrow?: string;
  summary: string;
  order: number;
  stats: Stat[];
  timeline: TimelineItem[];
  cardsHeading: string;
  cards: Card[];
  galleryCount: number;
  feature?: FeatureSection;
  pursuits?: Pursuit[];
  quote?: Quote;
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
    eyebrow: 'Access · Leadership · Impact',
    summary:
      'I hold myself to a high standard and work relentlessly to leave every project and community better than I found it. But individual achievement has a ceiling: my greatest impact comes not only from what I accomplish myself, but from giving other people the access, confidence, and opportunities to create change of their own. Service, to me, is how personal effort becomes multiplied progress.',
    order: 2,
    stats: [
      { value: '415', label: 'Tracked volunteer hours · Summer 2024–2026' },
      { value: '$24K+', label: 'Raised for STEM programs' },
      { value: '5,000+', label: 'People reached in person' },
      { value: '10+', label: 'Recurring outreach events organized' },
    ],
    timeline: [],
    cardsHeading: '',
    cards: [],
    galleryCount: 0,
  },
  {
    slug: 'academics',
    title: 'Academics',
    navLabel: 'Academics',
    eyebrow: 'Current Year · Incoming Junior',
    summary:
      'I see academics as a way to develop durable, transferable skills for understanding the world and improving it. I am most engaged when rigorous learning leads to a meaningful goal—whether applying engineering and chemistry in robotics, using historical analysis in advocacy, or turning scientific ideas into hands-on projects. I explore broadly, specialize where curiosity takes hold, and value the dedication required to transform knowledge into lasting understanding.',
    order: 3,
    stats: [
      { value: '18+', label: 'AP, dual-enrollment & honors courses' },
      { value: '4.0', label: 'Unweighted cumulative GPA' },
      { value: '2', label: 'Academic distinctions' },
      { value: '7', label: 'Completed advanced STEM courses' },
    ],
    timeline: [
      {
        date: 'Freshman',
        title: 'Exploring STEM Foundations',
        meta: '2024–2025 · 4.0 unweighted GPA',
        description:
          'Exposure to physics, chemistry, and computer science introduced distinct ways of thinking and solidified my interest in engineering and applied science. Honors Physics and Honors Chemistry were particular favorites; physics also led me to explore fluid, soft-body, and rigid-body simulations in Blender as a way to visualize and apply classroom concepts.',
        courses: [
          'Honors Physics',
          'Honors Chemistry',
          'Accelerated Math 2 (Honors)',
          'Foundations of Computer Science',
          'Spanish 2',
          'Humanities 9',
        ],
      },
      {
        date: 'Sophomore',
        title: 'Time Management & Long-Term Planning',
        meta: '2025–2026 · 4.0 unweighted GPA',
        description:
          'AP Chemistry and AP Seminar demanded sustained effort, careful research, and consistent execution across long-term assignments. Balancing that rigor with commitments outside school strengthened my ability to break large goals into manageable phases—a method I now apply to robotics, software development, and other technical projects.',
        courses: [
          'AP Chemistry',
          'Accelerated Math 3 (Honors)',
          'Foundations of Engineering',
          'AP Seminar',
          'Honors Spanish 3',
          'World History',
        ],
      },
      {
        date: 'Incoming Junior',
        title: 'Engineering in Greater Depth',
        meta: '2026–2027 · Current year',
        description:
          'My most rigorous schedule to date pairs three AP courses with dedicated mechanical and electrical engineering study. I hope to deepen my understanding of modeling, simulation, automation, and computational problem-solving while maintaining a 4.0 GPA, strengthening proactive study habits, and mentoring new members in robotics.',
        courses: [
          'AP Calculus BC',
          'AP Research',
          'AP Computer Science A',
          'Electrical Engineering (Honors)',
          'Mechanical Engineering (Honors)',
          'English 11',
          'U.S. History',
        ],
      },
      {
        date: 'Senior',
        title: 'The Hardest Engineering Classes Offered',
        meta: '2027–2028 · Planned senior year',
        description:
          'I plan to take the most advanced STEM electives my school offers, including courses such as multivariable calculus, linear algebra, AP Physics C, and additional advanced coursework still to come. This year will be focused on pushing deeper into the engineering, physics, and mathematical foundations that support the work I want to pursue beyond high school.',
        courses: [
          'Multivariable Calculus',
          'Linear Algebra',
          'AP Physics C',
          'Additional advanced STEM electives to be determined',
        ],
      },
    ],
    cardsHeading: 'Honors & recognition',
    cards: [
      {
        title: 'Highest Honors',
        description:
          'Academy for Science and Design · School recognition awarded every semester for exceptional academic achievement.',
        tag: 'School Honor',
      },
      {
        title: 'National Junior Honor Society',
        description:
          'Member for two years during eighth and ninth grade, recognizing academic achievement, leadership, service, character, and citizenship.',
        tag: 'National Honor',
      },
    ],
    galleryCount: 0,
    feature: {
      heading: 'Academic interests & what’s next',
      text: 'My academic interests drive much of what I pursue outside the classroom. Even when a course does not fit into my schedule or is not offered at school, it often becomes a starting point for independent exploration. I am currently learning MATLAB, exploring opportunities to work with college professors and contribute to research, and continuing to build my interests in mechanical engineering, electrical engineering, and computer science through both school-based and independent work.',
    },
  },
  {
    slug: 'projects',
    title: 'Projects',
    navLabel: 'Projects',
    eyebrow: 'In Progress',
    summary:
      'A dedicated project archive is in progress. Check back soon for details on what I am building, testing, and refining.',
    order: 4,
    stats: [],
    timeline: [],
    cardsHeading: '',
    cards: [],
    galleryCount: 0,
  },
  {
    slug: 'pursuits',
    title: 'Pursuits',
    navLabel: 'Pursuits',
    summary:
      'My pursuits are deliberately open-ended: practices I can guide over years, using creativity and discipline to support both mental and physical well-being. Photography and bonsai provide room for observation, experimentation, and long-term vision; track and fitness turn commitment into tangible progress. Together—alongside reading and cooking—they give me space to think introspectively, apply skills across unfamiliar contexts, and remember that meaningful achievement is driven by sustained effort.',
    order: 5,
    stats: [],
    timeline: [],
    cardsHeading: '',
    cards: [],
    pursuits: [
      {
        title: 'Photography',
        kicker: 'Creativity · Observation · Since 2023',
        description:
          'My interest began with borrowing my mother’s phone to photograph anything that caught my attention, then grew through phone photography into a serious mirrorless-camera practice. I am drawn to wildlife, astrophotography, natural landscapes, and human-made structures—often pairing photography with long hikes or travel, including recreating historical images from the places I visit. I shoot in RAW and use Adobe Lightroom to shape color, composition, detail, and movement into a deliberate emotional story. The possibility that my strongest photograph may still be ahead of me keeps me learning and refining the craft.',
        details: [],
        imagePath: 'src/assets/pursuits/photography.jpg',
      },
      {
        title: 'Bonsai',
        kicker: 'Patience · Design · Long-term thinking',
        description:
          'I began practicing bonsai in middle school and now maintain about five trees, including jade, ficus, and Chinese elm. Through pruning, wiring, repotting, and seasonal care, I have learned to evaluate how small decisions in the present shape results years later. One jade began as a small plant that I wanted to develop into a compact tree with a substantial trunk. I planned years ahead: moving it into a larger grow pot, allowing it to thicken, then cutting it back so it could rebud into the structure I had envisioned. Bonsai makes patience visible.',
        details: ['5 trees', 'Jade', 'Ficus', 'Chinese elm'],
        imagePath: 'src/assets/pursuits/bonsai.jpg',
      },
      {
        title: 'Track & Field',
        kicker: 'Community · Consistency · 5+ seasons',
        description:
          'I compete for Hollis Brookline High School in the 400 meters, shot put, and discus. Track gives me something individual training cannot: a social environment where teammates create positive pressure to keep showing up and improving. Over five-plus seasons, I have become faster, developed better pacing, and learned to value progress produced through consistency rather than any single result. The experience supports both my physical health and the sense of community that makes sustained effort easier to maintain.',
        details: ['400 meters', 'Shot put', 'Discus', 'Hollis Brookline'],
        imagePath: 'src/assets/pursuits/track.jpg',
      },
      {
        title: 'Fitness',
        kicker: 'Discipline · Well-being · Self-direction',
        description:
          'Strength training, interval work, and cardio give me a setting where progress is governed by my own consistency and willingness to push. My father’s commitment to exercise first showed me the practical value of strength, mobility, and being physically capable in everyday life. Training multiple times each week has shifted from feeling like another difficult obligation to becoming time I deliberately protect, even when other responsibilities compete for it. Current goals—including a controlled one-arm push-up and muscle-ups—give that discipline a clear direction.',
        details: ['Strength training', 'Intervals', 'Cardio', 'Multiple sessions weekly'],
        imagePath: 'src/assets/pursuits/fitness.jpg',
      },
    ],
    galleryCount: 0,
  },
  {
    slug: 'about',
    title: 'About Me',
    navLabel: 'About Me',
    eyebrow: 'Personal Profile',
    summary:
      'I am driven by ambition, independent learning, and the belief that sustained effort and opportunity are worth passing along.',
    order: 6,
    stats: [],
    timeline: [],
    cardsHeading: '',
    cards: [],
    galleryCount: 0,
  },
];

export const sortedAreas = [...areas].sort((a, b) => a.order - b.order);
