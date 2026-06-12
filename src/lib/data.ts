export const SITE = {
  name: "KINETIQ",
  tagline: "We engineer digital momentum",
  email: "hello@kinetiq.studio",
  url: "https://kinetiq.studio",
  description:
    "Kinetiq is a digital product studio crafting premium websites, software, and mobile experiences for startups, scale-ups, and enterprise teams.",
};

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  index: string;
  title: string;
  description: string;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Web Design",
    description:
      "Art-directed marketing sites and brand experiences that convert attention into trust. Every pixel placed with intent.",
    tags: ["Creative Direction", "Design Systems", "Motion Design"],
  },
  {
    index: "02",
    title: "Software Development",
    description:
      "Custom platforms and SaaS products engineered for scale. Clean architecture, rigorous testing, zero shortcuts.",
    tags: ["SaaS Platforms", "APIs & Integrations", "Cloud Architecture"],
  },
  {
    index: "03",
    title: "Mobile Development",
    description:
      "Native-quality iOS and Android applications that feel inevitable in the hand. From concept to App Store.",
    tags: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    index: "04",
    title: "UI/UX Design",
    description:
      "Research-driven product design that removes friction and rewards every interaction. Interfaces people remember.",
    tags: ["Product Design", "Prototyping", "User Research"],
  },
  {
    index: "05",
    title: "Dedicated Teams",
    description:
      "Senior engineers and designers embedded in your organization. Your roadmap, our velocity — no ramp-up tax.",
    tags: ["Staff Augmentation", "Team Extension", "Outsourcing"],
  },
  {
    index: "06",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology strategy, and due diligence from people who have shipped at every scale.",
    tags: ["Architecture", "Audits", "Strategy"],
  },
];

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  hue: string; // tailwind gradient classes for the visual
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Helios Grid",
    category: "SaaS Platform · Energy",
    year: "2026",
    description:
      "A real-time analytics platform helping renewable operators forecast output across 4,000+ sites.",
    hue: "from-amber-500/40 via-orange-600/20 to-transparent",
    accent: "#f59e0b",
  },
  {
    index: "02",
    title: "Pulsewear",
    category: "Mobile App · Fitness",
    year: "2025",
    description:
      "A training companion app pairing wearable telemetry with adaptive coaching for 300k athletes.",
    hue: "from-rose-500/40 via-fuchsia-600/20 to-transparent",
    accent: "#f43f5e",
  },
  {
    index: "03",
    title: "Atlas Freight",
    category: "Web Platform · Logistics",
    year: "2025",
    description:
      "An end-to-end freight orchestration system moving $2B of cargo through one unified interface.",
    hue: "from-sky-500/40 via-indigo-600/20 to-transparent",
    accent: "#38bdf8",
  },
  {
    index: "04",
    title: "Mira Health",
    category: "Product Design · Healthcare",
    year: "2024",
    description:
      "A telehealth experience rebuilt around patients — cutting appointment friction by 62%.",
    hue: "from-emerald-500/40 via-teal-600/20 to-transparent",
    accent: "#34d399",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your business, users, and market until we understand the problem better than anyone.",
  },
  {
    index: "02",
    title: "Strategy",
    description:
      "Insights become a roadmap. We define scope, architecture, and success metrics before a single pixel moves.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "Concepts, systems, and prototypes — iterated with you in tight loops until the experience feels inevitable.",
  },
  {
    index: "04",
    title: "Development",
    description:
      "Senior engineers build with production discipline from day one. Typed, tested, reviewed, shipped.",
  },
  {
    index: "05",
    title: "Launch",
    description:
      "Zero-drama releases. Performance budgets met, analytics wired, teams trained, champagne optional.",
  },
  {
    index: "06",
    title: "Optimization",
    description:
      "Post-launch we measure, learn, and refine. Great products are grown, not just delivered.",
  },
];

export const REASONS = [
  {
    title: "Senior-only craft",
    description:
      "No juniors learning on your budget. Every project is staffed by engineers and designers with a decade of shipped work behind them.",
  },
  {
    title: "Dedicated teams",
    description:
      "A stable, embedded team that learns your domain deeply — not a rotating cast of strangers billing hours.",
  },
  {
    title: "Velocity without debt",
    description:
      "We move fast because our foundations are disciplined. Clean architecture today is speed tomorrow.",
  },
  {
    title: "Long-term partnership",
    description:
      "Most of our clients have been with us for 3+ years. We win when your product wins — quarter after quarter.",
  },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 14, suffix: "", label: "Industries served" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Kinetiq operates like a senior product team that happens to sit outside our building. They challenged our assumptions, then shipped a platform our users genuinely love.",
    name: "Sarah Lindqvist",
    role: "VP of Product, Helios Grid",
  },
  {
    quote:
      "We interviewed nine agencies. Kinetiq was the only one that talked about our business model before talking about technology. Three years later, they're still our team.",
    name: "Marcus Chen",
    role: "CEO, Atlas Freight",
  },
  {
    quote:
      "The level of polish is absurd. Every interaction in the app feels considered. Our App Store rating went from 3.8 to 4.9 after the relaunch.",
    name: "Amira Hadid",
    role: "Founder, Pulsewear",
  },
];

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Google Cloud",
  "Kubernetes",
  "Terraform",
  "Figma",
  "WebGL",
];

export type ArchiveProject = {
  title: string;
  category: string;
  outcome: string;
  year: string;
};

export const WORK_ARCHIVE: ArchiveProject[] = [
  {
    title: "Northwind Capital",
    category: "Fintech · Design System",
    outcome: "Design-to-dev handoff cut from weeks to days",
    year: "2026",
  },
  {
    title: "Veyra",
    category: "E-commerce · Headless Storefront",
    outcome: "+41% conversion after replatforming",
    year: "2025",
  },
  {
    title: "Cartographer",
    category: "SaaS · Data Visualization",
    outcome: "Seed to Series A in 14 months",
    year: "2025",
  },
  {
    title: "Bloomline",
    category: "Marketing Site · AgTech",
    outcome: "Awwwards Honorable Mention",
    year: "2024",
  },
  {
    title: "Fieldnote",
    category: "Mobile App · Productivity",
    outcome: "Featured by the App Store at launch",
    year: "2024",
  },
  {
    title: "Arcadia",
    category: "Booking Platform · Travel",
    outcome: "3× booking volume in the first season",
    year: "2023",
  },
];

export type EngagementModel = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  includes: string[];
};

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    name: "Fixed Scope",
    price: "From $25k",
    description:
      "A defined build with a defined price and a date we put in writing. Best when you know exactly what needs to exist.",
    bestFor: "Marketing sites, MVPs, replatforms",
    includes: [
      "2–3 week discovery sprint",
      "Fixed price and timeline",
      "Weekly demo cadence",
      "30-day stabilization period",
    ],
  },
  {
    name: "Dedicated Team",
    price: "Per specialist / month",
    description:
      "A stable senior squad embedded in your organization. Your roadmap, our velocity — and a team that compounds knowledge instead of rotating it away.",
    bestFor: "Evolving products, long-term roadmaps",
    includes: [
      "Hand-picked senior specialists",
      "Your repos, standups, and tooling",
      "Scale up or down each quarter",
      "Everything documented, nothing siloed",
    ],
  },
  {
    name: "Advisory Sprint",
    price: "From $8k",
    description:
      "Two focused weeks of architecture review, technology strategy, or due diligence from people who have shipped at every scale.",
    bestFor: "Audits, rescues, investment decisions",
    includes: [
      "Architecture and code review",
      "Written findings and roadmap",
      "Executive readout session",
      "Optional build handoff",
    ],
  },
];

export type RhythmItem = {
  day: string;
  title: string;
  description: string;
};

export const WEEKLY_RHYTHM: RhythmItem[] = [
  {
    day: "Monday",
    title: "Sprint kickoff",
    description:
      "Priorities set together in a 30-minute call — you always know exactly what this week buys you.",
  },
  {
    day: "Tue – Thu",
    title: "Build in the open",
    description:
      "Progress lands in a shared channel as it happens. Staging is always live, so nothing is ever a surprise.",
  },
  {
    day: "Thursday",
    title: "Demo day",
    description:
      "Working software, demonstrated — not slides about software. Feedback goes straight into the backlog.",
  },
  {
    day: "Friday",
    title: "Written recap",
    description:
      "What shipped, what's next, what's blocked — in writing, so stakeholders who missed the demo never miss the picture.",
  },
];

export const PROCESS_PRINCIPLES = [
  {
    title: "Demos over decks",
    description:
      "Status is shown, not reported. Every sprint ends with working software you can click, break, and question.",
  },
  {
    title: "One team, one channel",
    description:
      "No account-manager telephone. You talk directly to the designers and engineers doing the work.",
  },
  {
    title: "Dates we actually hit",
    description:
      "We commit to dates only after discovery — and then we protect them ruthlessly. On-time delivery is the stat we guard most.",
  },
  {
    title: "You own everything",
    description:
      "Code, designs, infrastructure, documentation — in your accounts from day one. No hostage situations, ever.",
  },
];

export type Milestone = {
  year: string;
  event: string;
};

export const STUDIO_TIMELINE: Milestone[] = [
  {
    year: "2015",
    event:
      "Two engineers and a designer leave their agency jobs to build the studio they wished they could hire.",
  },
  {
    year: "2018",
    event:
      "First enterprise engagement ships on time. The senior-only staffing rule becomes permanent policy.",
  },
  {
    year: "2021",
    event:
      "The dedicated-teams model launches — half of all engagements become multi-year embedded partnerships.",
  },
  {
    year: "2024",
    event:
      "100th project delivered. Client work spans fourteen industries across the EU, US, and APAC.",
  },
  {
    year: "2026",
    event:
      "Still independent, still senior-only, still measured on outcomes — never on billable hours.",
  },
];

export const VALUES = [
  {
    title: "Taste is a feature",
    description:
      "Polish isn't decoration — it's the difference between software people tolerate and software people recommend.",
  },
  {
    title: "Disagree, then commit",
    description:
      "We'll challenge your assumptions before we write a line of code. Then we'll back the decision like it was ours.",
  },
  {
    title: "Write it down",
    description:
      "Decisions, architecture, tribal knowledge — documented as we go, so your team never depends on our memory.",
  },
  {
    title: "Leave it better",
    description:
      "Every codebase, design file, and process we touch should be cleaner when we leave than when we arrived.",
  },
];

export type ContactStep = {
  index: string;
  title: string;
  description: string;
};

export const CONTACT_STEPS: ContactStep[] = [
  {
    index: "01",
    title: "A real reply, fast",
    description:
      "Within one business day a senior team member — never a sales bot — reads your message and responds with honest first thoughts.",
  },
  {
    index: "02",
    title: "A scoping call",
    description:
      "Forty-five minutes on your goals, constraints, and timeline. We'll tell you plainly if we're not the right fit.",
  },
  {
    index: "03",
    title: "A proposal in days",
    description:
      "A precise estimate with scope, team, and dates — never a teaser number that doubles after kickoff.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "How do engagements typically work?",
    answer:
      "Most projects start with a 2–3 week discovery sprint to align on scope, architecture, and success metrics. From there we work in transparent two-week cycles with demos every sprint — fixed-scope for well-defined builds, or a dedicated team retainer for evolving products.",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "Marketing sites typically range from $25k–$80k, and product builds from $80k–$400k+ depending on complexity. Dedicated teams are priced per specialist per month. After one scoping call we'll give you a precise, honest estimate — never a teaser number.",
  },
  {
    question: "How long until we can launch?",
    answer:
      "A premium marketing site ships in 6–10 weeks. An MVP product typically takes 3–5 months. We'd rather give you a real date and hit it than promise magic — our on-time delivery rate is the stat we protect most.",
  },
  {
    question: "Do you work with our in-house team?",
    answer:
      "Constantly. About half our engagements are embedded collaborations — we plug into your repos, standups, and tooling, and we document everything so your team owns the result, not us.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every build includes a stabilization period, then most clients move to an optimization retainer: performance monitoring, iteration on real usage data, and a standing team that already knows your codebase.",
  },
  {
    question: "Can you sign an NDA before we talk?",
    answer:
      "Of course. Send yours or use our mutual NDA — we can have it signed the same day so the first call can go deep.",
  },
];
