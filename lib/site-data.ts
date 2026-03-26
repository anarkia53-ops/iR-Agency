export const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const siteName = 'IR Agency';
export const contactLocation = 'Serving clients internationally from a digital-first studio';

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const heroMetrics = [
  { value: 'Brand', label: 'clarity aligned to commercial goals' },
  { value: 'Growth', label: 'programs structured around measurable outcomes' },
  { value: 'Technology', label: 'delivery controlled for speed and reliability' },
] as const;

export const whyIR = [
  {
    title: 'Executive-level clarity',
    text: 'We translate brand, growth, and technology decisions into one commercially clear roadmap that leadership teams can act on quickly.',
  },
  {
    title: 'Integrated delivery',
    text: 'Creative direction, campaign execution, and technical implementation move together so launches feel coordinated instead of fragmented.',
  },
  {
    title: 'Measured business impact',
    text: 'Every engagement is scoped around decision quality, execution visibility, and the business outcomes that matter to your next stage of growth.',
  },
] as const;

export const processSteps = [
  {
    title: 'Discovery',
    text: 'Clarify positioning, commercial priorities, audience signals, and the delivery constraints shaping the engagement.',
  },
  {
    title: 'Scope',
    text: 'Turn strategic intent into an actionable roadmap with service mix, milestones, responsibilities, and success criteria.',
  },
  {
    title: 'Execution',
    text: 'Launch coordinated brand, growth, and technical workstreams with strong creative oversight and controlled implementation.',
  },
  {
    title: 'Optimization',
    text: 'Review performance, refine decision points, and improve ROI through measured iteration rather than disconnected activity.',
  },
] as const;

export const solutionPackages = [
  {
    title: 'Launch Foundation',
    text: 'For emerging or repositioning brands that need a sharper market presence, clearer messaging, and a premium digital launch path.',
  },
  {
    title: 'Growth Acceleration',
    text: 'For companies ready to connect creative, campaign management, and reporting into a more accountable growth engine.',
  },
  {
    title: 'Technology Enablement',
    text: 'For teams that need modern websites, product interfaces, infrastructure oversight, and stable ongoing support.',
  },
] as const;

export const serviceClusters = [
  {
    slug: 'creative-content',
    name: 'Creative & Content',
    summary:
      'Build a premium brand system and content engine that gives your market a clear reason to trust, engage, and remember your business.',
    items: [
      'Brand identity systems',
      'Logo design',
      'Color direction',
      'Communication materials',
      'Professional photo and video production',
      'Written, visual, and audio content',
    ],
    outcomes: ['Sharper market positioning', 'More consistent brand expression', 'Higher-quality launch assets'],
  },
  {
    slug: 'marketing-growth',
    name: 'Marketing & Growth',
    summary:
      'Plan, launch, and optimize growth programs with governance, reporting discipline, and a focus on accountable commercial performance.',
    items: [
      'Social media setup and governance',
      'Monthly content planning',
      'Paid campaign planning',
      'Launch management',
      'Performance reporting',
      'ROI optimization',
    ],
    outcomes: ['More disciplined channel execution', 'Clearer decision-making', 'Measured improvement over time'],
  },
  {
    slug: 'tech-development',
    name: 'Tech & Development',
    summary:
      'Support your growth strategy with reliable digital products, secure infrastructure, and controlled implementation across web and mobile.',
    items: [
      'Website design and development',
      'Mobile app design and development',
      'Hosting and server oversight',
      'Infrastructure management',
      'Backups and maintenance',
      'Security and protection',
    ],
    outcomes: ['Premium customer experience', 'Operational stability', 'Deployment confidence'],
  },
] as const;

export const services = serviceClusters.flatMap((cluster) =>
  cluster.items.map((item, index) => ({
    slug: `${cluster.slug}-${index + 1}`,
    name: item,
    cluster: cluster.name,
    summary: `${item} delivered within a wider ${cluster.name.toLowerCase()} scope built for commercial clarity and measurable execution.`,
    deliverables: [
      'Strategic discovery and recommendations',
      'Executive-ready scope and priorities',
      'Premium execution standards',
      'Optimization and reporting guidance',
    ],
  })),
);

export const aboutPillars = [
  {
    title: 'Vision',
    text: 'To become the executive digital growth partner brands rely on when commercial ambition must be matched by disciplined creative and technical execution.',
  },
  {
    title: 'Mission',
    text: 'To align design, content, marketing, and development into one coordinated growth system that creates measurable business value.',
  },
  {
    title: 'Operating principle',
    text: 'Every engagement should bring more structure, more quality, and more confidence to the decisions that shape digital growth.',
  },
] as const;

export const caseStudies = [] as const;

export const dashboardStats = [
  { title: 'Pipeline', items: ['12 active opportunities', '4 awaiting approval', '2 escalation flags'] },
  { title: 'Delivery', items: ['3 websites in production', '1 QA blocker', '5 items ready to ship'] },
  { title: 'Reporting', items: ['Weekly summary scheduled', 'Leadership snapshot healthy', 'Client scorecards ready'] },
] as const;

export const contactChannels = [
  {
    title: 'Start an intake',
    text: 'Use the project intake form to share your scope, priorities, and business goals so we can recommend an appropriate next step.',
  },
  {
    title: 'Share your brief',
    text: 'Tell us about your brand, commercial objectives, timeline, and project type so we can recommend the right engagement structure.',
  },
  {
    title: 'Speak to the right team',
    text: 'Validated submissions can be forwarded into webhook workflows for rapid follow-up and internal routing.',
  },
] as const;

export const contactServices = [
  'Creative & Content',
  'Marketing & Growth',
  'Tech & Development',
  'Integrated Engagement',
] as const;
