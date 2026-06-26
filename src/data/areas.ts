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
    eyebrow: 'FIRST Tech Challenge · Team Tesseract',
    summary:
      'Robotics is my life — though not in the way that might first come to mind. I don’t merely compete, though when I do, I compete well; I don’t merely build robots, though I’ve built real depth in CAD, programming, and everything technical along the way. What matters more is using robotics as a vehicle for something bigger than itself: the foundational skills that will serve me wherever I go next. I’ve raised thousands of dollars for a team I once had no idea how to fund, built relationships with company founders and CEOs, and organized outreach events designed to outlast my own time on the team. When I say I do robotics, I want people to hear past the competition results — toward everything it actually teaches that’s hard to learn anywhere else.',
    order: 1,
    stats: [
      { value: '5', label: 'Seasons competing (entering Year 5)' },
      { value: '3x', label: '1st Inspire Award — FTC’s highest honor' },
      { value: '8', label: 'Competitions won' },
      { value: '45', label: 'Students mentored across 5 FTC teams' },
    ],
    timeline: [],
    cardsHeading: '',
    cards: [],
    galleryCount: 16,
    quote: {
      text: 'This student turns innovation into action, designing fully cadded robots and building a lasting manufacturing pipeline for the team. They lead through guided independence, creating new programs to write autonomous code and mentoring teams locally and globally. Their impact reaches far beyond competition — they organize science fairs, they raise funds for STEM access, and bring FIRST to statewide audiences. They model true Gracious Professionalism and Cooperation, they help opponents, uplift teammates, and ensure every voice is valued. And most importantly, they build systems, resources, and relationships that will strengthen FIRST long after graduation.',
      attribution: 'FIRST New Hampshire Leadership, naming Jason a New Hampshire Dean’s List FIRST Leadership Award winner (FTC Decode)',
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
          'Freshman year exposed me to physics, chemistry, and computer science, which helped lay the foundation for many skills I have used in robotics and strengthened my interest in engineering and applied science. Honors Physics and Honors Chemistry were two of my favorite courses, and physics even led me to explore fluid, soft-body, and rigid-body simulations in Blender as a way to apply classroom concepts.',
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
          'Sophomore year challenged me to manage a heavier workload through AP Chemistry, AP Seminar, and other advanced courses. These classes required steady effort, careful research, and strong long-term planning. Balancing that work with commitments outside school helped me get better at breaking large goals into smaller steps, which is a skill I now use in robotics, software development, and other technical projects.',
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
          'Junior year will be my most rigorous schedule so far, with three AP courses along with dedicated mechanical and electrical engineering study. I want to deepen my understanding of modeling, simulation, automation, and computational problem-solving while maintaining a 4.0 GPA, strengthening my study habits, and continuing to excel in robotics and other extracurriculars.',
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
          'Senior year is planned around the most advanced STEM electives my school offers, including multivariable calculus, linear algebra, AP Physics C, and other advanced coursework still to be determined. I want this year to help me go deeper into the engineering, physics, and math foundations that support the work I hope to pursue beyond high school.',
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
      text: 'My academic interests shape a lot of what I pursue outside the classroom. When a course does not fit into my schedule or is not offered at school, I often use it as a starting point for independent learning. Right now, I am learning MATLAB, looking for opportunities to work with college professors and contribute to research, and continuing to build my interests in mechanical engineering, electrical engineering, and computer science through both school-based and independent work.',
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
      'My pursuits outside of my main activities are deliberately open-ended, namely using the concepts of creativity and discipline to support my mental and physical wellbeing. Photography and bonsai offer room to experiment and think long term, supporting the former, while track and fitness turn commitment into real progress, bolstering the latter. Together, alongside activities like reading and cooking, they give me space to think introspectively, apply skills across unfamiliar contexts, and remember that meaningful achievement is driven by sustained effort.',
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
          'I started by borrowing my mom\'s phone to photograph whatever caught my eye, then moved into phone photography and eventually a real mirrorless setup. I\'m drawn to wildlife, astrophotography, landscapes, and old buildings—I\'ll pair a shoot with a long hike or a trip, sometimes recreating a historical photo from the same spot. I shoot RAW and edit in Lightroom, working color, composition, and detail until the image feels like the moment I actually saw. I haven\'t taken my best shot yet, and that\'s what keeps me going.',
        details: [],
        imagePath: 'src/assets/pursuits/photography.jpg',
      },
      {
        title: 'Bonsai',
        kicker: 'Patience · Design · Long-term thinking',
        description:
          'I started bonsai in middle school, and I now care for about five trees, including jade, ficus, and Chinese elm. A lot of bonsai is slow work: pruning, wiring, repotting, and making small choices that might not fully show for years. One of my jade trees started as a small plant, but I wanted it to become a compact tree with a thicker trunk. I moved it into a larger pot, let it grow out, and then cut it back so it could start building the shape I had pictured. Bonsai has taught me patience in a very physical way.',
        details: ['5 trees', 'Jade', 'Ficus', 'Chinese elm'],
        imagePath: 'src/assets/pursuits/bonsai.jpg',
      },
      {
        title: 'Track & Field',
        kicker: 'Community · Consistency · 5+ seasons',
        description:
          'I compete for Hollis Brookline High School in the 400 meters, shot put, and discus. Track has given me a kind of motivation that is hard to get from training alone. Being around teammates pushes me to keep showing up, even on days when I would not have the same drive by myself. Over more than five seasons, I have gotten faster, improved my pacing, and learned that progress usually comes from steady work rather than one big result. It has been good for my physical health, but it has also given me a community that makes the work easier to keep doing.',
        details: ['400 meters', 'Shot put', 'Discus', 'Hollis Brookline'],
        imagePath: 'src/assets/pursuits/track.jpg',
      },
      {
        title: 'Fitness',
        kicker: 'Discipline · Well-being · Self-direction',
        description:
          'Fitness started as something I knew was important, but it has become something I genuinely protect time for. My dad\'s commitment to exercise first showed me the value of being strong, mobile, and physically capable in everyday life. Now, strength training, interval work, and cardio give me a place where progress depends mostly on consistency and effort. Training several times a week has become less of an obligation and more of a routine I want to keep. Goals like a controlled one-arm push-up and muscle-ups give me something clear to work toward.',
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
