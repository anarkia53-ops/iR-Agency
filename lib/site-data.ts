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
    title: 'Start',
    text: 'For early-stage teams that need a clear brand direction, launch-ready essentials, and a practical first growth setup.',
  },
  {
    title: 'Growth',
    text: 'For active businesses that want stronger campaign structure, recurring content operations, and disciplined performance tracking.',
  },
  {
    title: 'Business Pro',
    text: 'For established organizations that need integrated brand, growth, and technical execution across multiple priorities and teams.',
  },
  {
    title: 'Custom',
    text: 'For unique scopes requiring a tailored engagement model, phased rollout, and dedicated advisory support aligned to your internal workflows.',
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

export const services = [
  {
    slug: 'creative-content-1',
    name: 'Brand identity systems',
    cluster: 'Creative & Content',
    summary: 'Define a cohesive visual and verbal identity framework that keeps every channel and asset aligned to the same brand standards.',
    deliverables: ['Brand architecture framework', 'Identity usage guidelines', 'Messaging direction', 'Core application examples'],
  },
  {
    slug: 'creative-content-2',
    name: 'Logo design',
    cluster: 'Creative & Content',
    summary: 'Create a distinct logo system with practical variants optimized for digital products, campaigns, and communication materials.',
    deliverables: ['Primary and secondary logo files', 'Monochrome and inverse variants', 'Usage rules', 'Export set for web and print'],
  },
  {
    slug: 'creative-content-3',
    name: 'Color direction',
    cluster: 'Creative & Content',
    summary: 'Establish a strategic color palette that supports brand recognition, accessibility, and consistent implementation across touchpoints.',
    deliverables: ['Primary and supporting color palettes', 'Accessibility contrast guidance', 'Application references', 'Token-ready color specifications'],
  },
  {
    slug: 'creative-content-4',
    name: 'Communication materials',
    cluster: 'Creative & Content',
    summary: 'Design high-quality collateral and presentation assets that communicate offers clearly in sales, onboarding, and investor contexts.',
    deliverables: ['Presentation deck templates', 'Sales one-pagers', 'Proposal layout system', 'Reusable visual components'],
  },
  {
    slug: 'creative-content-5',
    name: 'Professional photo and video production',
    cluster: 'Creative & Content',
    summary: 'Plan and produce premium visual media that strengthens brand trust and improves quality across web, social, and campaign channels.',
    deliverables: ['Creative brief and shot list', 'Production schedule', 'Edited photo/video selections', 'Publishing-ready media exports'],
  },
  {
    slug: 'creative-content-6',
    name: 'Written, visual, and audio content',
    cluster: 'Creative & Content',
    summary: 'Build coordinated content assets across formats to support launch messaging, audience education, and ongoing campaign execution.',
    deliverables: ['Editorial content plan', 'Copy and script drafts', 'Visual/audio asset packages', 'Channel-ready publishing set'],
  },
  {
    slug: 'marketing-growth-1',
    name: 'Social media setup and governance',
    cluster: 'Marketing & Growth',
    summary: 'Set up social channels with clear governance standards so teams publish consistently while preserving brand and approval discipline.',
    deliverables: ['Channel configuration checklist', 'Governance and approval flow', 'Publishing standards', 'Role and access matrix'],
  },
  {
    slug: 'marketing-growth-2',
    name: 'Monthly content planning',
    cluster: 'Marketing & Growth',
    summary: 'Create a monthly planning rhythm that aligns campaign priorities, content themes, production timelines, and distribution commitments.',
    deliverables: ['Monthly content calendar', 'Theme and campaign alignment', 'Production timeline', 'Review and sign-off cadence'],
  },
  {
    slug: 'marketing-growth-3',
    name: 'Paid campaign planning',
    cluster: 'Marketing & Growth',
    summary: 'Design campaign plans with audience segmentation, channel mix, spend logic, and success criteria before budget activation.',
    deliverables: ['Audience and funnel framework', 'Channel allocation proposal', 'Creative and offer matrix', 'Measurement plan'],
  },
  {
    slug: 'marketing-growth-4',
    name: 'Launch management',
    cluster: 'Marketing & Growth',
    summary: 'Coordinate campaign launches with execution controls that keep assets, schedules, approvals, and stakeholders synchronized.',
    deliverables: ['Launch runbook', 'Cross-team responsibility map', 'Pre-launch QA checklist', 'Live monitoring plan'],
  },
  {
    slug: 'marketing-growth-5',
    name: 'Performance reporting',
    cluster: 'Marketing & Growth',
    summary: 'Deliver concise reporting that connects activity to outcomes and highlights where leadership should adjust strategy or execution.',
    deliverables: ['KPI dashboard structure', 'Reporting cadence', 'Insight summaries', 'Priority action recommendations'],
  },
  {
    slug: 'marketing-growth-6',
    name: 'ROI optimization',
    cluster: 'Marketing & Growth',
    summary: 'Improve return on investment through iterative testing, budget reallocation, and channel-level performance refinement.',
    deliverables: ['Optimization hypothesis backlog', 'Testing roadmap', 'Budget adjustment guidance', 'Iteration review notes'],
  },
  {
    slug: 'tech-development-1',
    name: 'Website design and development',
    cluster: 'Tech & Development',
    summary: 'Design and implement fast, maintainable websites that communicate value clearly and support conversion-focused user journeys.',
    deliverables: ['Information architecture', 'Responsive UI implementation', 'Content management setup', 'Launch and QA checklist'],
  },
  {
    slug: 'tech-development-2',
    name: 'Mobile app design and development',
    cluster: 'Tech & Development',
    summary: 'Plan and deliver mobile experiences with clear user flows, scalable architecture, and release practices suited to product growth.',
    deliverables: ['Product requirement outline', 'UX/UI screens', 'Core feature implementation', 'Release readiness checklist'],
  },
  {
    slug: 'tech-development-3',
    name: 'Hosting and server oversight',
    cluster: 'Tech & Development',
    summary: 'Maintain hosting environments with operational controls that improve reliability, uptime visibility, and deployment confidence.',
    deliverables: ['Environment configuration baseline', 'Monitoring setup', 'Incident response playbook', 'Routine health checks'],
  },
  {
    slug: 'tech-development-4',
    name: 'Infrastructure management',
    cluster: 'Tech & Development',
    summary: 'Manage infrastructure components and dependencies with standards that support stable delivery and controlled system changes.',
    deliverables: ['Infrastructure inventory', 'Change management process', 'Scalability recommendations', 'Operational documentation'],
  },
  {
    slug: 'tech-development-5',
    name: 'Backups and maintenance',
    cluster: 'Tech & Development',
    summary: 'Protect operational continuity through dependable backup routines, maintenance schedules, and recovery readiness checks.',
    deliverables: ['Backup and retention policy', 'Maintenance calendar', 'Recovery procedure documentation', 'Update tracking log'],
  },
  {
    slug: 'tech-development-6',
    name: 'Security and protection',
    cluster: 'Tech & Development',
    summary: 'Strengthen security posture with preventative controls, ongoing hardening tasks, and pragmatic risk-reduction practices.',
    deliverables: ['Security baseline checklist', 'Access and credential review', 'Hardening action list', 'Vulnerability review summary'],
  },
] as const;

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
