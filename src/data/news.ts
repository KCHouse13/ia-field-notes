// ============================================================================
// News roll-up data — IA Field Notes
// ----------------------------------------------------------------------------
// The /news/ page is a curated INDEX of official Microsoft Copilot
// announcements. Every entry links OUT to an official Microsoft source; there
// are no internal article bodies. This module is the single source of truth the
// news-curator agent maintains (see skills/SKILL-news-curator.md).
//
// To add an announcement: append an item to NEWS (newest entries can go
// anywhere — the page sorts by `iso`). When Microsoft publishes a new monthly
// "What's new in Microsoft 365 Copilot" roll-up, add it to MONTHLY. Promote a
// flagship launch into FEATURED (keep it to 3; drop the oldest).
// ============================================================================

export type CategoryKey =
  | 'app'
  | 'word'
  | 'excel'
  | 'powerpoint'
  | 'outlook'
  | 'teams'
  | 'knowledge'
  | 'agents';

export type SourceKey =
  | 'm365blog'
  | 'm365copilot'
  | 'agent365'
  | 'excelblog'
  | 'spblog'
  | 'hub';

export interface Category {
  key: CategoryKey;
  label: string;
  color: string;
}

export interface NewsItem {
  /** Solution category — must be one of the CATEGORIES keys. */
  cat: CategoryKey;
  /** Publication date, ISO `YYYY-MM-DD`. Drives sorting + the displayed month. */
  iso: string;
  /** Source key — must be one of the SOURCES keys. */
  source: SourceKey;
  /** Official Microsoft URL for this announcement. */
  url: string;
  /** Plain-language headline. */
  title: string;
  /** One tight sentence on what changed and why it matters. */
  desc: string;
  /** 2–3 short scan tags. */
  tags: string[];
}

export interface FeaturedItem {
  title: string;
  iso: string;
  source: SourceKey;
  url: string;
  desc: string;
}

export interface MonthlyItem {
  /** First of the covered month, ISO `YYYY-MM-01`. Label is derived. */
  iso: string;
  url: string;
}

// ── Solution taxonomy ───────────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  { key: 'app', label: 'Copilot App & Chat', color: '#60A5FA' },
  { key: 'word', label: 'Word', color: '#4F8CFF' },
  { key: 'excel', label: 'Excel', color: '#34D399' },
  { key: 'powerpoint', label: 'PowerPoint', color: '#FB923C' },
  { key: 'outlook', label: 'Outlook', color: '#38BDF8' },
  { key: 'teams', label: 'Teams', color: '#A78BFA' },
  { key: 'knowledge', label: 'SharePoint, OneDrive & Notebooks', color: '#FBBF24' },
  { key: 'agents', label: 'Agents, Models & Platform', color: '#F472B6' },
];

// ── Source taxonomy ─────────────────────────────────────────────────────────
export const SOURCES: Record<SourceKey, string> = {
  m365blog: 'Microsoft 365 Blog',
  m365copilot: 'Microsoft 365 Copilot Blog',
  agent365: 'Agent 365 Blog',
  excelblog: 'Excel Blog',
  spblog: 'SharePoint Blog',
  hub: 'Microsoft 365 Copilot product news',
};

// ── Featured (flagship) launches — keep to 3 ────────────────────────────────
export const FEATURED: FeaturedItem[] = [
  {
    title: 'Agentic capabilities in Word, Excel & PowerPoint go GA',
    iso: '2026-04-22',
    source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/',
    desc: 'Copilot takes multi-step, app-native actions directly inside your files while you stay in control.',
  },
  {
    title: 'A new design for Microsoft 365 Copilot',
    iso: '2026-05-28',
    source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/05/28/introducing-a-new-design-for-microsoft-365-copilot/',
    desc: 'A redesigned, chat-centered app framing the next phase of work AI — with Work IQ and the Scout agent.',
  },
  {
    title: 'Microsoft Scout: your always-on personal agent',
    iso: '2026-06-02',
    source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/',
    desc: 'An always-on personal agent woven across Microsoft 365, grounded in your everyday flow of work.',
  },
];

// ── Monthly "What's new in Microsoft 365 Copilot" roll-ups ──────────────────
export const MONTHLY: MonthlyItem[] = [
  { iso: '2025-06-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--june-2025/4427592' },
  { iso: '2025-07-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--july-2025/4438253' },
  { iso: '2025-08-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--august-2025/4449268' },
  { iso: '2025-09-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--september-2025/4457317' },
  { iso: '2025-10-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--october-2025/4464046' },
  { iso: '2026-01-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--january-2026/4488916' },
  { iso: '2026-02-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--february-2026/4496489' },
  { iso: '2026-03-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--march-2026/4506322' },
  { iso: '2026-05-01', url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--may-2026/4522010' },
];

// ── Announcements ───────────────────────────────────────────────────────────
export const NEWS: NewsItem[] = [
  // ── Copilot App & Chat ──
  {
    cat: 'app', iso: '2025-08-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-chat-comes-to-the-microsoft-365-apps/4453349',
    title: 'Copilot Chat comes to the Microsoft 365 apps',
    desc: 'A unified in-app chat across Word, Excel, PowerPoint, Outlook and OneNote — a content-aware side pane with “/” references, multi-image upload, Pages, image generation and agents.',
    tags: ['unified chat', 'side pane', 'cross-app'],
  },
  {
    cat: 'app', iso: '2025-09-23', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--september-2025/4457317',
    title: 'Web grounding, previous-chat references & a long-context model',
    desc: 'Reference previous chats, read live web pages, embedded image understanding in files, and new “/” references for Teams chats and channels.',
    tags: ['web grounding', 'long context', 'Teams refs'],
  },
  {
    cat: 'app', iso: '2025-10-28', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--october-2025/4464046',
    title: 'Tools menu, GPT-5 routing & the Copilot Chat API',
    desc: 'Model selection and GPT-5 routing, email-attachment grounding, image reasoning and generation, Bing web cards, calendar search, and the new Copilot Chat API.',
    tags: ['model choice', 'Chat API', 'calendar search'],
  },
  {
    cat: 'app', iso: '2026-02-24', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--february-2026/4496489',
    title: 'Mobile widgets, the Prompt Gallery & CarPlay',
    desc: 'Mobile widgets and action buttons, Copilot Search + Chat, brand kits in Create, Apple CarPlay, and the Prompt Gallery for prompt discovery.',
    tags: ['mobile', 'Prompt Gallery', 'CarPlay'],
  },
  {
    cat: 'app', iso: '2026-05-28', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/05/28/introducing-a-new-design-for-microsoft-365-copilot/',
    title: 'A redesigned, chat-centered Copilot app',
    desc: 'A new design puts chat at the center and frames the app around Work IQ, Scout, and the move from assistance to execution.',
    tags: ['new design', 'Work IQ', 'Scout'],
  },
  {
    cat: 'agents', iso: '2026-06-02', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/',
    title: 'Microsoft Scout: an always-on personal agent',
    desc: 'A personal agent woven across the Microsoft 365 apps you use every day, staying grounded in your flow of work.',
    tags: ['Scout', 'personal agent', 'flow of work'],
  },

  // ── Word ──
  {
    cat: 'word', iso: '2026-04-22', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/',
    title: 'Agentic editing in Word reaches general availability',
    desc: 'Word moves from chat-only help to multi-step, app-native editing in the document, with you in control of every change.',
    tags: ['GA', 'agent mode', 'in-document'],
  },
  {
    cat: 'word', iso: '2026-04-30', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/word-legal-agent-in-frontier/4516218',
    title: 'Legal Agent enters Frontier in Word',
    desc: 'Word adds a Frontier legal review agent for contract analysis, playbook checks, citations, and tracked redlines inside existing documents.',
    tags: ['Legal Agent', 'Frontier', 'redlines'],
  },
  {
    cat: 'word', iso: '2026-01-27', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--january-2026/4488916',
    title: 'Agent Mode & Edit with Copilot in Word',
    desc: 'Direct document editing by default, blank-document prompts that auto-enable editing, dynamic summaries, writing suggestions, and fix-all grammar.',
    tags: ['Edit with Copilot', 'summaries', 'grammar'],
  },
  {
    cat: 'word', iso: '2025-11-18', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-word-excel-and-powerpoint-agents-in-microsoft-365-copilot/4470604',
    title: 'The dedicated Word Agent in chat',
    desc: 'A chat-first co-creator that builds fully formed Word artifacts in chat, then hands them back into the app for refinement.',
    tags: ['Word Agent', 'chat-first'],
  },

  // ── Excel ──
  {
    cat: 'excel', iso: '2025-09-29', source: 'excelblog',
    url: 'https://techcommunity.microsoft.com/blog/excelblog/building-agent-mode-in-excel/4457320',
    title: 'Building Agent Mode in Excel',
    desc: 'The Excel team explains the reasoning loop, workbook context, validation steps, and native tool calls behind Agent Mode.',
    tags: ['agent mode', 'reasoning', 'validation'],
  },
  {
    cat: 'excel', iso: '2026-04-22', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/',
    title: 'Agentic action in the Excel grid reaches GA',
    desc: 'Copilot acts directly in workbooks and helps you move from questions to decisions — multi-step task execution in the grid.',
    tags: ['GA', 'in-grid', 'decisions'],
  },
  {
    cat: 'excel', iso: '2026-01-27', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--january-2026/4488916',
    title: 'Excel Agent Mode & modern workbook support',
    desc: 'Agent Mode executes multi-step tasks across the grid, with support for locally stored modern workbooks and formula completion.',
    tags: ['agent mode', 'formulas', 'workbooks'],
  },
  {
    cat: 'excel', iso: '2026-02-24', source: 'excelblog',
    url: 'https://techcommunity.microsoft.com/blog/excelblog/app-skills-is-evolving-with-copilot-in-excel/4496577',
    title: 'Excel App Skills fold into Copilot Chat and Agent Mode',
    desc: 'Excel is consolidating App Skills entry points into Copilot Chat and Agent Mode so editing and conversational help share a clearer path.',
    tags: ['App Skills', 'Agent Mode', 'Copilot Chat'],
  },
  {
    cat: 'excel', iso: '2026-05-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--may-2026/4522010',
    title: 'Anthropic model choice arrives in Excel',
    desc: 'Model choice expands into Excel, including Anthropic models — extending multi-model intelligence into spreadsheet work.',
    tags: ['Anthropic', 'model choice'],
  },
  {
    cat: 'excel', iso: '2026-05-12', source: 'excelblog',
    url: 'https://techcommunity.microsoft.com/blog/excelblog/bringing-transparency-to-copilot-edits-in-excel/4518605',
    title: 'Copilot edits become visible in Excel Show Changes',
    desc: 'Excel labels AI-assisted edits in Show Changes so workbook collaborators can review where Copilot changed content.',
    tags: ['Show Changes', 'attribution', 'review'],
  },
  {
    cat: 'excel', iso: '2026-05-28', source: 'excelblog',
    url: 'https://techcommunity.microsoft.com/blog/excelblog/introducing-federated-copilot-connectors-for-lseg-and-moodys-in-excel/4523360',
    title: 'Federated Copilot connectors arrive in Excel',
    desc: 'Copilot in Excel can pull trusted LSEG and Moody\'s data into workbooks through federated connectors built on Model Context Protocol.',
    tags: ['connectors', 'MCP', 'finance data'],
  },

  // ── PowerPoint ──
  {
    cat: 'powerpoint', iso: '2026-04-22', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/04/22/copilots-agentic-capabilities-in-word-excel-and-powerpoint-are-generally-available/',
    title: 'Agentic deck creation in PowerPoint reaches GA',
    desc: 'Create, edit and refine decks conversationally while branding, structure and templates stay intact.',
    tags: ['GA', 'decks', 'branding'],
  },
  {
    cat: 'powerpoint', iso: '2025-10-28', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--october-2025/4464046',
    title: 'Built-in skills: review, visualize & prepare for questions',
    desc: 'Slide explanations, built-in skills, on-canvas translation and speaker notes, view-only interaction, and enterprise brand-library use.',
    tags: ['skills', 'on-canvas', 'brand library'],
  },
  {
    cat: 'powerpoint', iso: '2025-11-18', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-word-excel-and-powerpoint-agents-in-microsoft-365-copilot/4470604',
    title: 'The dedicated PowerPoint Agent',
    desc: 'Creates initial decks from chat and hands them back into PowerPoint for app-native refinement.',
    tags: ['PowerPoint Agent', 'chat-first'],
  },

  // ── Outlook ──
  {
    cat: 'outlook', iso: '2026-01-27', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--january-2026/4488916',
    title: 'Meeting scheduling & rescheduling from chat',
    desc: 'Schedule meetings in chat, reschedule 1:1s and personal events, Edit in Outlook from Copilot Chat, and meeting-prep improvements.',
    tags: ['scheduling', 'meeting prep'],
  },
  {
    cat: 'outlook', iso: '2026-02-24', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--february-2026/4496489',
    title: 'Email triage actions & automatic replies',
    desc: 'Mark read/unread, pin, flag and archive from chat, draft automatic replies, ground on the open email, and use delegated and shared mailbox access.',
    tags: ['triage', 'auto-reply', 'delegated access'],
  },
  {
    cat: 'outlook', iso: '2026-05-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--may-2026/4522010',
    title: 'Meeting-time analytics, voice catch-up & attachment summaries',
    desc: 'Meeting-time analytics, voice catch-up on mobile, RSVP search, and attachment summarization in the reading pane.',
    tags: ['analytics', 'voice', 'attachments'],
  },

  // ── Teams ──
  {
    cat: 'teams', iso: '2026-05-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--may-2026/4522010',
    title: 'Meeting recap intelligence: video, audio & custom templates',
    desc: 'Video recap, audio recap, recap deletion, custom recap templates, and AI summaries with captured visuals.',
    tags: ['recap', 'templates', 'summaries'],
  },
  {
    cat: 'teams', iso: '2025-09-23', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--september-2025/4457317',
    title: 'Thread summaries, custom dictionaries & agents in communities',
    desc: 'Thread summaries, custom dictionaries for org language, and agents surfaced inside Teams communities.',
    tags: ['threads', 'dictionaries', 'communities'],
  },
  {
    cat: 'teams', iso: '2026-05-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--may-2026/4522010',
    title: 'Call delegation for Teams Phone',
    desc: 'Delegate calls in Teams Phone scenarios — extending Copilot into voice and telephony workflows.',
    tags: ['Teams Phone', 'delegation'],
  },

  // ── SharePoint, OneDrive & Notebooks ──
  {
    cat: 'knowledge', iso: '2025-09-18', source: 'spblog',
    url: 'https://techcommunity.microsoft.com/blog/spblog/introducing-knowledge-agent-in-sharepoint/4454154',
    title: 'Knowledge Agent enters public preview in SharePoint',
    desc: 'SharePoint introduces a Knowledge Agent that enriches metadata, organizes libraries, improves pages, and grounds Copilot answers in cleaner content.',
    tags: ['Knowledge Agent', 'metadata', 'preview'],
  },
  {
    cat: 'knowledge', iso: '2026-03-02', source: 'spblog',
    url: 'https://techcommunity.microsoft.com/blog/spblog/introducing-new-agentic-building-in-sharepoint-and-more-updates/4497987',
    title: 'AI in SharePoint expands agentic building',
    desc: 'SharePoint adds natural-language planning and building across sites, pages, lists, libraries, and agents, with Knowledge Agent capabilities moving into the platform.',
    tags: ['AI in SharePoint', 'Build', 'agents'],
  },
  {
    cat: 'knowledge', iso: '2026-03-24', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/meet-the-updated-copilot-notebooks-experience-your-home-for-understanding-work-p/4501383',
    title: 'The updated Copilot Notebooks experience',
    desc: 'A refreshed home for understanding your work — new UI, OneNote sync, notebook grounding for agents, and Teams meetings as sources.',
    tags: ['Notebooks', 'grounding', 'OneNote'],
  },
  {
    cat: 'knowledge', iso: '2026-04-10', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-notebooks-enhancements-to-support-creation-collaboration-and-learning/4505360',
    title: 'Notebooks: creation, collaboration & learning enhancements',
    desc: 'Notebook-driven Excel creation, infographic generation, and notebook-driven Word and PowerPoint artifacts.',
    tags: ['Notebooks', 'artifacts', 'infographics'],
  },
  {
    cat: 'knowledge', iso: '2025-08-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--august-2025/4449268',
    title: 'SharePoint agents: broader access, discovery & custom skills',
    desc: 'Broader access and discovery, direct access in the Copilot app and Teams app store, direct chat with agents, and custom skills in SharePoint.',
    tags: ['SharePoint agents', 'custom skills'],
  },
  {
    cat: 'knowledge', iso: '2026-02-24', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--february-2026/4496489',
    title: 'Agents in OneDrive',
    desc: 'OneDrive gets more agentic with agents plus search and grounding improvements across files and sites.',
    tags: ['OneDrive', 'agents', 'search'],
  },
  {
    cat: 'knowledge', iso: '2026-05-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-notebooks--may-2026/4519838',
    title: 'Notebooks adds Teams, Outlook & web references plus mobile capture',
    desc: 'Copilot Notebooks can now ground on Teams meetings, Outlook emails and web pages, with multimodal capture from the OneNote iPhone app.',
    tags: ['Notebooks', 'references', 'mobile capture'],
  },

  // ── Agents, Models & Platform ──
  {
    cat: 'agents', iso: '2025-09-29', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/29/vibe-working-introducing-agent-mode-and-office-agent-in-microsoft-365-copilot/',
    title: 'Agent Mode and Office Agent come to Microsoft 365 Copilot',
    desc: 'Microsoft introduces Agent Mode in Office apps and Office Agent in Copilot chat for iterative, multi-step creation of documents, spreadsheets, and decks.',
    tags: ['Agent Mode', 'Office Agent', 'Frontier'],
  },
  {
    cat: 'agents', iso: '2026-03-09', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/',
    title: 'Wave 3: from assistant to agentic system',
    desc: 'The public framing of the next phase — Wave 3, Copilot Cowork, Work IQ, and Agent 365 as the foundation for agentic work.',
    tags: ['Wave 3', 'Cowork', 'Agent 365'],
  },
  {
    cat: 'agents', iso: '2025-11-18', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-word-excel-and-powerpoint-agents-in-microsoft-365-copilot/4470604',
    title: 'Word, Excel & PowerPoint Agents in chat',
    desc: 'Dedicated Office agents that co-create artifacts in chat and hand them off into the apps.',
    tags: ['Office agents', 'co-creation'],
  },
  {
    cat: 'agents', iso: '2026-04-12', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-multi-model-intelligence-in-researcher/4506011',
    title: 'Multi-model intelligence in Researcher',
    desc: 'Researcher gains multi-model reasoning through Critique and Council — multiple models checking and debating each other.',
    tags: ['Researcher', 'Critique', 'Council'],
  },
  {
    cat: 'agents', iso: '2026-05-01', source: 'agent365',
    url: 'https://techcommunity.microsoft.com/blog/agent-365-blog/what%E2%80%99s-new-in-agent-365-may-2026/4516340',
    title: 'Agent 365 adds registry, governance, and security controls',
    desc: 'Agent 365 details GA-era dashboards, registry sync, lifecycle actions, policy templates, tool controls, and agent security signals for admins.',
    tags: ['Agent 365', 'governance', 'security'],
  },
  {
    cat: 'agents', iso: '2026-05-14', source: 'agent365',
    url: 'https://techcommunity.microsoft.com/blog/agent-365-blog/agent365-the-identity-first-control-plane-for-scalable-ai-agents/4519921',
    title: 'Agent 365 framed as an identity-first control plane',
    desc: 'Agent 365 is positioned around Entra-backed agent identities, lifecycle governance, access control, observability, and Zero Trust alignment.',
    tags: ['Agent 365', 'identity', 'Zero Trust'],
  },
  {
    cat: 'agents', iso: '2025-08-26', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--august-2025/4449268',
    title: 'Model choice: GPT-5, GPT-5.5 & Anthropic in Copilot',
    desc: 'Broadening model choice across Copilot Chat — GPT-5, GPT-5.5, GPT-5 routing, and Anthropic models for the right model per task.',
    tags: ['GPT-5', 'Anthropic', 'routing'],
  },
  {
    cat: 'agents', iso: '2026-06-02', source: 'm365blog',
    url: 'https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/',
    title: 'New Work IQ APIs for developers',
    desc: 'Developers can build on Work IQ, a new intelligence layer that models how work gets done across an organization.',
    tags: ['Work IQ', 'APIs', 'platform'],
  },
  {
    cat: 'agents', iso: '2026-06-02', source: 'agent365',
    url: 'https://techcommunity.microsoft.com/blog/agent-365-blog/make-any-agent-enterprise-ready-with-the-agent-365-sdk/4524575',
    title: 'Agent 365 SDK opens a path for enterprise-ready agents',
    desc: 'The Agent 365 SDK gives developers a way to register external or open-source agents into Agent 365 for identity, observability, governance, and security controls.',
    tags: ['Agent 365 SDK', 'identity', 'governance'],
  },
  {
    cat: 'agents', iso: '2026-06-02', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/learning-agent-now-generally-available-%E2%80%94-personalized-ai-upskilling-for-every-em/4524571',
    title: 'Learning Agent reaches general availability',
    desc: 'A personalized upskilling agent recommends Copilot and AI skills based on each person’s role and tasks, right in the flow of work.',
    tags: ['Learning Agent', 'GA', 'upskilling'],
  },
  {
    cat: 'agents', iso: '2026-05-28', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-anthropic-claude-opus-4-8-in-microsoft-365-copilot/4523405',
    title: 'Anthropic Claude Opus 4.8 in Copilot',
    desc: 'Model choice expands with Claude Opus 4.8 for complex, multi-step agentic work, starting in Copilot Cowork and rolling out to Chat, Excel and PowerPoint.',
    tags: ['Anthropic', 'Opus 4.8', 'model choice'],
  },
  {
    cat: 'agents', iso: '2026-05-27', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/scaling-the-reach-of-finance-what%E2%80%99s-next-with-finance-agent-in-microsoft-365-cop/4522976',
    title: 'New Finance Agent home & chat experiences',
    desc: 'Finance Agent adds a role-aware Home workspace and natural-language chat in public preview, surfacing ERP-grounded financial insights in the flow of work.',
    tags: ['Finance Agent', 'ERP', 'preview'],
  },
  {
    cat: 'agents', iso: '2026-05-07', source: 'm365copilot',
    url: 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-gpt-5-5-instant-in-microsoft-365-copilot/4517084',
    title: 'GPT-5.5 Instant arrives in Copilot',
    desc: 'A faster everyday model lands in Copilot Chat as “GPT-5.5 Quick response,” with more concise answers and better image and STEM handling.',
    tags: ['GPT-5.5', 'model choice', 'Copilot Chat'],
  },
];

// Page-level meta shown in the hero stats.
export const NEWS_META = {
  monthsCovered: 13,
  officialPct: 100,
};

// ── Helpers (server-side; the client script re-implements equivalents) ──────
const CAT_BY_KEY: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c]),
);

/** "YYYY-MM-DD" → "Mon YYYY" (UTC, to avoid timezone drift). */
export function monthYear(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** "YYYY-MM-DD" → short month label, e.g. "Apr". */
export function monthShort(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  });
}

/** "YYYY-MM-DD" → year, e.g. "2026". */
export function yearOf(iso: string): string {
  return iso.slice(0, 4);
}

export function catLabel(key: string): string {
  return CAT_BY_KEY[key]?.label ?? key;
}

export function catColor(key: string): string {
  return CAT_BY_KEY[key]?.color ?? 'var(--accent)';
}
