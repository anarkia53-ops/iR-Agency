export const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const siteName = 'iR Agency';
export const siteTagline = 'Executive Digital Growth Partner';
export const supportPromise = 'Structured delivery, executive visibility, and technical control.';

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const heroMetrics = [
  { value: '7-stage', label: 'governed client journey' },
  { value: '18', label: 'service lines' },
  { value: '4', label: 'growth tiers' },
  { value: '24/7', label: 'support model' },
] as const;

export const serviceClusters = [
  { slug: 'creative-content', name: 'Creative & Content', summary: 'Identity, content, and communication systems that make the market understand, trust, and remember the brand.', outcomes: ['Sharper positioning', 'Premium presentation', 'Consistent launch assets'] },
  { slug: 'marketing-growth', name: 'Marketing & Growth', summary: 'Governed acquisition and growth operations built around performance, reporting, and decision quality.', outcomes: ['Higher lead quality', 'Measured performance', 'Repeatable growth execution'] },
  { slug: 'tech-development', name: 'Tech & Development', summary: 'Web, app, hosting, security, maintenance, and automation systems that turn delivery into operating capability.', outcomes: ['Launch readiness', 'Operational reliability', 'Technical control'] },
] as const;

export const services = [
  { slug: 'creative-content-1', name: 'Brand identity systems', cluster: 'Creative & Content', summary: 'Complete visual identity system aligned to perception and commercial clarity.', deliverables: ['Brand brief', 'Logo system', 'Color tokens', 'Typography rules', 'Identity applications'] },
  { slug: 'creative-content-2', name: 'Logo design', cluster: 'Creative & Content', summary: 'Logo architecture built for digital usage and long-term recognition.', deliverables: ['Primary logo', 'Secondary lockups', 'Mono/inverse versions', 'Usage guidance'] },
  { slug: 'creative-content-3', name: 'Color direction', cluster: 'Creative & Content', summary: 'Usable color system optimized for credibility and premium dark-mode presentation.', deliverables: ['Primary palette', 'Secondary neutrals', 'Contrast rules', 'Token-ready palette spec'] },
  { slug: 'creative-content-4', name: 'Communication materials', cluster: 'Creative & Content', summary: 'Company profile, sales collateral, decks, and communication assets.', deliverables: ['Company profile', 'Service deck', 'Proposal format', 'Sales one-pager'] },
  { slug: 'creative-content-5', name: 'Professional photo and video production', cluster: 'Creative & Content', summary: 'Visual assets that increase trust and strengthen launch communication.', deliverables: ['Shot plan', 'Editing workflow', 'Social-first exports', 'Campaign-ready assets'] },
  { slug: 'creative-content-6', name: 'Written, visual, and audio content', cluster: 'Creative & Content', summary: 'Coordinated content across text, visual, and audio formats.', deliverables: ['Editorial themes', 'Scripts and captions', 'Publishing assets', 'Brand-aligned content pack'] },
  { slug: 'marketing-growth-1', name: 'Social media setup and governance', cluster: 'Marketing & Growth', summary: 'Set up channels, permissions, standards, and approval flows.', deliverables: ['Platform setup', 'Access matrix', 'Publishing governance', 'Moderation rules'] },
  { slug: 'marketing-growth-2', name: 'Monthly content planning', cluster: 'Marketing & Growth', summary: 'Recurring content planning system tied to campaigns and priorities.', deliverables: ['Monthly calendar', 'Content pillars', 'Production timeline', 'Approval checkpoints'] },
  { slug: 'marketing-growth-3', name: 'Paid campaign planning', cluster: 'Marketing & Growth', summary: 'Audience logic, offer mapping, measurement discipline, and budget controls.', deliverables: ['Funnel mapping', 'Audience plan', 'Offer matrix', 'Measurement framework'] },
  { slug: 'marketing-growth-4', name: 'Launch management', cluster: 'Marketing & Growth', summary: 'Coordinate all live launch dependencies.', deliverables: ['Launch checklist', 'Go-live protocol', 'Stakeholder map', 'Live monitoring plan'] },
  { slug: 'marketing-growth-5', name: 'Performance reporting', cluster: 'Marketing & Growth', summary: 'Translate channel activity into executive signals.', deliverables: ['KPI structure', 'Reporting cadence', 'Executive summary', 'Action recommendations'] },
  { slug: 'marketing-growth-6', name: 'ROI optimization', cluster: 'Marketing & Growth', summary: 'Improve return through disciplined iteration and funnel repair.', deliverables: ['Optimization backlog', 'A/B plan', 'Budget notes', 'Iteration review'] },
  { slug: 'tech-development-1', name: 'Website design and development', cluster: 'Tech & Development', summary: 'Fast, conversion-oriented websites with strong information architecture.', deliverables: ['UX structure', 'Responsive UI', 'CMS-ready architecture', 'Launch QA'] },
  { slug: 'tech-development-2', name: 'Mobile app design and development', cluster: 'Tech & Development', summary: 'Mobile experiences with product clarity and scalable structure.', deliverables: ['Product scope', 'UI screens', 'Feature implementation', 'Release preparation'] },
  { slug: 'tech-development-3', name: 'Hosting and server oversight', cluster: 'Tech & Development', summary: 'Hosting and server environments with uptime, monitoring, and deployment discipline.', deliverables: ['Hosting baseline', 'Monitoring setup', 'Incident policy', 'Health checks'] },
  { slug: 'tech-development-4', name: 'Infrastructure management', cluster: 'Tech & Development', summary: 'Control infrastructure and change management to keep systems stable.', deliverables: ['Infrastructure inventory', 'Change control', 'Scaling notes', 'Operational documentation'] },
  { slug: 'tech-development-5', name: 'Backups and maintenance', cluster: 'Tech & Development', summary: 'Backup policy, maintenance routines, and recovery readiness.', deliverables: ['Backup policy', 'Maintenance schedule', 'Recovery procedure', 'Update tracking log'] },
  { slug: 'tech-development-6', name: 'Security and protection', cluster: 'Tech & Development', summary: 'Hardening, access control, and pragmatic security practices.', deliverables: ['Security baseline', 'Credential review', 'Hardening list', 'Risk summary'] },
] as const;

export const solutionPackages = [
  { slug: 'start', title: 'START', subtitle: 'Brand Foundation', audience: 'New entities needing clean launch assets.', summary: 'Identity setup, social provisioning, base content direction, and launch-ready communication assets.', items: ['Logo and identity system', 'Color and typography rules', 'Core social assets', 'Foundational company profile'] },
  { slug: 'growth', title: 'GROWTH', subtitle: 'Complete Digital Presence', audience: 'Active businesses needing stronger presence and web structure.', summary: 'Refined positioning, website delivery, content architecture, and launch coordination.', items: ['Website design and build', 'Content planning structure', 'Launch support', 'Improved digital presence system'] },
  { slug: 'business-pro', title: 'BUSINESS PRO', subtitle: 'Performance & Scale', audience: 'Revenue-focused brands prioritizing lead generation and optimization.', summary: 'Paid campaigns, reporting cadence, optimization loops, and managed growth operations.', items: ['Campaign planning', 'Performance reporting', 'ROI optimization', 'Ongoing growth management'] },
  { slug: 'custom', title: 'CUSTOM', subtitle: 'Advanced Technical Solutions', audience: 'Organizations needing apps, portals, infrastructure, or internal systems.', summary: 'Custom product delivery, integrations, internal systems, and technical architecture.', items: ['Apps and portals', 'Infrastructure and hosting', 'Automation workflows', 'Custom roadmap'] },
] as const;

export const differentiationPoints = [
  { title: 'Commercial engine, not fragmented outsourcing', text: 'iR Agency connects identity, growth, technology, and operations into one commercial system.' },
  { title: 'Institutional delivery control', text: 'Work moves through discovery, qualification, proposal, onboarding, execution, reporting, and retention with quality gates.' },
  { title: 'Class A technical standards', text: 'Infrastructure, server-side tracking, monitoring, security hardening, and executive reporting are treated as operating requirements.' },
] as const;

export const processSteps = [
  { index: '01', title: 'Discovery', text: 'Baseline diagnosis of positioning, audience, and constraints.' },
  { index: '02', title: 'Qualification', text: 'Scope matching to confirm maturity level, actual need, and commercial fit.' },
  { index: '03', title: 'Proposal', text: 'Commercial and technical blueprint defining deliverables and success criteria.' },
  { index: '04', title: 'Onboarding', text: 'System provisioning, asset collection, and internal operating alignment.' },
  { index: '05', title: 'Execution', text: 'Coordinated delivery across creative, growth, infrastructure, and automation workstreams.' },
  { index: '06', title: 'Reporting', text: 'Dashboard-level visibility focused on business value and next decisions.' },
  { index: '07', title: 'Retention', text: 'Optimization, renewal, managed operations, and higher-order expansion.' },
] as const;

export const marketInsights = [
  { title: 'Execution gap', text: 'The market problem is not only strategy. Many digital initiatives fail because execution becomes fragmented across vendors and disconnected reporting.' },
  { title: 'Why iR wins', text: 'The offer is built as one integrated ecosystem across identity, growth, infrastructure, and reporting instead of isolated deliverables.' },
  { title: 'Positioning edge', text: 'The operating model replaces vanity reporting with executive intelligence: what happened, why it happened, and what to do next.' },
] as const;

export const comparisonRows = [
  { label: 'Operational goal', vendor: 'Reactive task completion and deliverable handover', partner: 'Proactive construction of a commercial engine' },
  { label: 'Strategic alignment', vendor: 'Isolated siloed services', partner: 'Integrated ecosystem across identity, tech, and scale' },
  { label: 'Delivery control', vendor: 'Fragmented and lightly governed', partner: 'Rigid seven-stage lifecycle with quality gates' },
  { label: 'Technical focus', vendor: 'Surface-level functionality', partner: 'Class A standards, security posture, and server-side tracking' },
  { label: 'Reporting style', vendor: 'Clicks and impressions', partner: 'Executive intelligence tied to business value' },
] as const;

export const aboutPillars = [
  { title: 'Vision', text: 'Build a complete digital growth engine for companies by combining strategy, design, technology, automation, and operational discipline into one client experience.' },
  { title: 'Mission', text: 'Help brands launch, position, and scale through integrated creative direction, performance-focused marketing, and controlled technical execution.' },
  { title: 'Operating principle', text: 'Every engagement must increase structure, improve quality, and create measurable business value instead of disconnected deliverables.' },
] as const;

export const aiAgents = [
  { slug: 'orchestrator', title: 'Orchestrator', file: 'orchestrator.agent.md', role: 'Owns sequencing and final coordination across the AI operating layer.', prompts: ['Project orchestration', 'Dependency tracking', 'Executive task routing'] },
  { slug: 'strategy-supervisor', title: 'Strategy Supervisor', file: 'strategy-supervisor.agent.md', role: 'Controls strategic alignment, market logic, and offer integrity.', prompts: ['Positioning validation', 'Offer architecture', 'Growth roadmap review'] },
  { slug: 'lead-intake', title: 'Lead Intake', file: 'lead-intake.agent.md', role: 'Captures incoming requests and structures briefs.', prompts: ['Lead parsing', 'Brief extraction', 'CRM-ready intake'] },
  { slug: 'qualification', title: 'Qualification', file: 'qualification.agent.md', role: 'Assesses fit, urgency, commercial potential, and feasibility.', prompts: ['Budget fit', 'Timeline fit', 'Need scoring'] },
  { slug: 'proposal-architect', title: 'Proposal Architect', file: 'proposal-architect.agent.md', role: 'Builds proposal logic, deliverables, and pricing structure.', prompts: ['Proposal drafting', 'Scope writing', 'Commercial packaging'] },
  { slug: 'content-system', title: 'Content System', file: 'content-system.agent.md', role: 'Generates content plans and messaging systems.', prompts: ['Content calendar', 'Script writing', 'Messaging system'] },
  { slug: 'ux-flow', title: 'UX Flow', file: 'ux-flow.agent.md', role: 'Designs user journeys, page flows, and CTA logic.', prompts: ['Information architecture', 'CTA sequencing', 'Conversion review'] },
  { slug: 'design-direction', title: 'Design Direction', file: 'design-direction.agent.md', role: 'Controls visual language and premium presentation.', prompts: ['Art direction', 'Brand consistency', 'Dark-mode review'] },
  { slug: 'frontend-builder', title: 'Frontend Builder', file: 'frontend-builder.agent.md', role: 'Turns approved UI systems into frontend implementation.', prompts: ['Component build', 'Page assembly', 'Responsive polish'] },
  { slug: 'backend-structure', title: 'Backend Structure', file: 'backend-structure.agent.md', role: 'Designs API logic and validation rules.', prompts: ['API routing', 'Webhook logic', 'Validation systems'] },
  { slug: 'integration', title: 'Integration', file: 'integration.agent.md', role: 'Connects CRM, workflows, forms, and endpoints.', prompts: ['Webhook mapping', 'CRM connection', 'Workflow integration'] },
  { slug: 'qa-guardian', title: 'QA Guardian', file: 'qa-guardian.agent.md', role: 'Checks runtime behavior and release readiness.', prompts: ['Page QA', 'Regression checks', 'Release gate review'] },
  { slug: 'consistency-auditor', title: 'Consistency Auditor', file: 'consistency-auditor.agent.md', role: 'Audits copy, design, service logic, and scope.', prompts: ['Message consistency', 'Design consistency', 'Scope consistency'] },
  { slug: 'safety-validator', title: 'Safety Validator', file: 'safety-validator.agent.md', role: 'Red-teams edge cases and operational safety.', prompts: ['Risk review', 'Safety validation', 'Failure-mode checks'] },
  { slug: 'reporting-analyst', title: 'Reporting Analyst', file: 'reporting-analyst.agent.md', role: 'Converts outputs into executive dashboards and summaries.', prompts: ['Dashboard writing', 'Executive summary', 'KPI narration'] },
  { slug: 'optimization', title: 'Optimization', file: 'optimization.agent.md', role: 'Owns improvement loops and ongoing enhancement.', prompts: ['CRO hypotheses', 'Growth iteration', 'Continuous improvement'] },
] as const;

export const dashboardMetrics = [
  { label: 'Lead response target', value: '< 1 hour' },
  { label: 'Public-site performance target', value: '< 2s' },
  { label: 'Uptime objective', value: '99.9%' },
  { label: 'Delivery visibility', value: 'Executive' },
] as const;

export const dashboardSignals = [
  { title: 'Commercial visibility', text: 'What is working, what needs intervention, and which opportunities should move next.' },
  { title: 'Execution control', text: 'Track scope health, delivery pace, and quality-gate completion across every workstream.' },
  { title: 'Technical posture', text: 'Observe uptime, security, backups, and deployment confidence from one place.' },
] as const;

export const contactChannels = [
  { title: 'Structured intake', text: 'Use the project intake form to route scope, budget, timeline, and desired outcomes into the correct workflow.' },
  { title: 'Executive follow-up', text: 'Validated submissions are prepared for operations review and can flow into CRM or automation endpoints.' },
  { title: 'Technical readiness', text: 'Hosting, build, and deployment requests are framed with enough detail for immediate technical triage.' },
] as const;

export const contactServices = ['Creative & Content', 'Marketing & Growth', 'Tech & Development', 'Integrated Engagement'] as const;
