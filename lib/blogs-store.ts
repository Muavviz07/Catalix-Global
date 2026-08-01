import fs from 'fs';
import path from 'path';
import prisma from './prisma';

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  published: boolean;
  publishedAt?: Date | string | null;
  scheduledFor?: Date | string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  relatedPostIds: string[];
}

const INITIAL_BLOGS: BlogItem[] = [
  {
    id: 'blog-1',
    title: 'The CIO Governance Blueprint for Enterprise ERP Alignment in 2026',
    slug: 'cio-governance-blueprint-enterprise-erp-alignment-2026',
    excerpt: 'Modern enterprise ERP implementations fail not because of technology, but due to misalignment between C-suite strategy and operational execution. Here is how leading CIOs govern successful ERP rollouts.',
    content: `
      <h2>Executive Summary</h2>
      <p>Enterprise Resource Planning (ERP) transformations represent some of the largest capital investments a corporate leadership team will make over a decade. Yet, over 65% of large-scale ERP initiatives experience cost overruns, timeline slippage, or operational disruption post go-live.</p>
      
      <p>The root cause is rarely the software suite itself. Whether deploying SAP S/4HANA, Oracle Cloud ERP, or Microsoft Dynamics 365, failure stems from governance gaps and executive disconnect. This blueprint outlines the strategic framework top-tier CIOs use to ensure enterprise alignment from day zero.</p>
      
      <h3>1. Establishing Standard C-Suite Steering Committee Cadence</h3>
      <p>Successful ERP governance requires active, multi-disciplinary ownership across the C-suite:</p>
      <ul>
        <li><strong>Chief Executive Officer (CEO):</strong> Drives change management strategy and sponsors operational mandate.</li>
        <li><strong>Chief Information Officer (CIO):</strong> Architect of data integration, technical risk mitigation, and vendor governance.</li>
        <li><strong>Chief Financial Officer (CFO):</strong> Controls capital allocation, benefits realization tracking, and ROI metrics.</li>
        <li><strong>Chief Operating Officer (COO):</strong> Ensures frontline workflow adoption and site-level readiness.</li>
      </ul>
      
      <h3>2. Defining Non-Negotiable Business Architecture Baseline</h3>
      <p>Before writing a single line of custom code or configuring workflows, enterprise leadership must freeze core master data structures, chart of accounts, and organizational hierarchies. Customizations should require executive panel approval with clear payback justification.</p>
      
      <h3>3. Measuring Operational Readiness Over Arbitrary Deadlines</h3>
      <p>Going live on a targeted quarter-end is secondary to site readiness scores, user competency assessments, and cutover simulations. Implement phased go-lives backed by rigorous stress testing to protect enterprise operational integrity.</p>
    `,
    category: 'ERP',
    tags: ['ERP Advisory', 'CIO Strategy', 'Governance', 'Digital Transformation'],
    metaTitle: 'The CIO Governance Blueprint for Enterprise ERP Alignment in 2026',
    metaDescription: 'Strategic framework for CIOs and executive leaders to govern large-scale ERP implementations and achieve operational alignment.',
    metaKeywords: 'CIO Advisory, ERP Implementation, Enterprise Governance, SAP, Oracle',
    published: true,
    publishedAt: new Date('2026-07-15T10:00:00Z').toISOString(),
    createdAt: new Date('2026-07-15T10:00:00Z').toISOString(),
    updatedAt: new Date('2026-07-15T10:00:00Z').toISOString(),
    relatedPostIds: ['blog-2', 'blog-3'],
  },
  {
    id: 'blog-2',
    title: 'Navigating AI Governance & Risk in Enterprise Operations',
    slug: 'navigating-ai-governance-risk-enterprise-operations',
    excerpt: 'As generative AI and agentic workflows integrate into core enterprise decision-making, establishing robust AI risk management and data governance frameworks is mandatory for CDOs and CIOs.',
    content: `
      <h2>The New Mandate for Chief Data Officers</h2>
      <p>Artificial Intelligence has rapidly evolved from speculative pilot programs to mission-critical operational systems. From automated supply chain forecasting to intelligent automated customer workflows, AI drives undeniable efficiency. However, without strict governance, unmanaged AI introduces significant compliance, financial, and reputational risks.</p>
      
      <h3>Core Pillars of Enterprise AI Governance</h3>
      <p>An enterprise-grade AI governance model must address three foundational capabilities:</p>
      
      <h4>1. Data Integrity and Provenance</h4>
      <p>AI models are only as robust as the underlying enterprise datasets. Unstructured data lakes, outdated master data, and unverified third-party inputs undermine model accuracy. CDOs must institute real-time data auditing pipelines.</p>
      
      <h4>2. Model Observability and Hallucination Prevention</h4>
      <p>Critical business decisions require deterministic safety bounds. Autonomous models operating in finance, procurement, or medical/industrial safety must include human-in-the-loop validation checkpoints.</p>
      
      <h4>3. Regulatory & Intellectual Property Safeguards</h4>
      <p>With evolving global regulatory standards, enterprise AI deployments must strictly enforce data privacy, cross-border transmission limits, and strict IP isolation between tenant environments.</p>
    `,
    category: 'AI Advisory',
    tags: ['AI Governance', 'CDO Strategy', 'Enterprise Risk', 'Data Policy'],
    metaTitle: 'Navigating AI Governance & Risk in Enterprise Operations | Catalix Global',
    metaDescription: 'Essential AI risk governance framework for CDOs, CIOs, and enterprise boards deploying generative and agentic AI.',
    metaKeywords: 'AI Governance, Agentic AI, CDO Strategy, Risk Management, Enterprise AI',
    published: true,
    publishedAt: new Date('2026-07-20T08:30:00Z').toISOString(),
    createdAt: new Date('2026-07-20T08:30:00Z').toISOString(),
    updatedAt: new Date('2026-07-20T08:30:00Z').toISOString(),
    relatedPostIds: ['blog-1', 'blog-4'],
  },
  {
    id: 'blog-3',
    title: 'Achieving Operational Excellence & OEE Optimization Across Global Sites',
    slug: 'achieving-operational-excellence-oee-optimization-global-sites',
    excerpt: 'How leading industrial and manufacturing organizations standardize Overall Equipment Effectiveness (OEE) and eliminate systemic operational bottlenecks.',
    content: `
      <h2>The Quest for Operational Precision</h2>
      <p>In capital-intensive industrial sectors, minor efficiency losses aggregate into millions of dollars in annual lost throughput. Overall Equipment Effectiveness (OEE) remains the golden benchmark for assessing manufacturing productivity, yet multi-site enterprises frequently struggle with inconsistent measurement criteria across plants.</p>
      
      <h3>Harmonizing Multi-Site Metrics</h3>
      <p>To establish true operational visibility, corporate leadership must eliminate plant-level metric variations. Standardizing definitions for Availability, Performance, and Quality ensures meaningful cross-site benchmark comparisons.</p>
      
      <ul>
        <li><strong>Availability:</strong> Automated tracking of planned vs. unplanned downtime events using IoT telemetry.</li>
        <li><strong>Performance:</strong> Real-time comparison of actual operating speeds against rated ideal cycle times.</li>
        <li><strong>Quality:</strong> Direct integration with Quality Assurance (QA) systems to log rework and scrap rates.</li>
      </ul>
      
      <h3>Executing Targeted Throughput Recovery</h3>
      <p>Once baseline telemetry is established, operational improvement teams can execute high-yield interventions focusing on root-cause downtime elimination and bottleneck migration analysis.</p>
    `,
    category: 'Operational Excellence',
    tags: ['Operational Excellence', 'OEE Improvement', 'Manufacturing', 'Supply Chain'],
    metaTitle: 'Achieving Operational Excellence & OEE Optimization | Catalix Global',
    metaDescription: 'A practical framework for multi-site industrial enterprises seeking to standardize OEE metrics and maximize operational throughput.',
    metaKeywords: 'Operational Excellence, OEE, Manufacturing Optimization, Supply Chain, Throughput',
    published: true,
    publishedAt: new Date('2026-07-25T14:15:00Z').toISOString(),
    createdAt: new Date('2026-07-25T14:15:00Z').toISOString(),
    updatedAt: new Date('2026-07-25T14:15:00Z').toISOString(),
    relatedPostIds: ['blog-1', 'blog-5'],
  },
  {
    id: 'blog-4',
    title: 'IPO Readiness: Aligning Systems, Controls & Financial Reporting for Public Markets',
    slug: 'ipo-readiness-aligning-systems-controls-financial-reporting',
    excerpt: 'Preparing an enterprise for an IPO requires rigorous IT general controls, automated financial consolidation, and SOX compliance infrastructure well ahead of filing.',
    content: `
      <h2>The Technology & Governance Mandate for Public Markets</h2>
      <p>Transitioning from a high-growth private organization to a publicly traded corporation demands a fundamental shift in executive governance, system predictability, and financial reporting automation.</p>
      
      <h3>Key Technology Infrastructure Priorities for IPO Candidates</h3>
      <p>Investment bankers and audit committees look closely at an enterprise's system maturity during due diligence. Core requirements include:</p>
      
      <ol>
        <li><strong>Automated Period-End Financial Closing:</strong> Replacing error-prone manual spreadsheets with unified core ERP consolidation engines.</li>
        <li><strong>IT General Controls (ITGC) & Access Segregation:</strong> Strict Segregation of Duties (SoD) policies embedded directly within core financial platforms.</li>
        <li><strong>Auditable Data Lineage:</strong> End-to-end traceability of operational transactions from purchase order creation to general ledger posting.</li>
      </ol>
    `,
    category: 'IPO Readiness',
    tags: ['IPO Readiness', 'Financial Reporting', 'SOX Compliance', 'CIO Advisory'],
    metaTitle: 'IPO Readiness: Systems & Financial Controls Blueprint | Catalix Global',
    metaDescription: 'Essential IT controls, system alignment, and financial reporting governance needed for enterprise IPO readiness.',
    metaKeywords: 'IPO Readiness, SOX Compliance, Financial Controls, ERP Consolidation, CIO Advisory',
    published: true,
    publishedAt: new Date('2026-07-28T11:00:00Z').toISOString(),
    createdAt: new Date('2026-07-28T11:00:00Z').toISOString(),
    updatedAt: new Date('2026-07-28T11:00:00Z').toISOString(),
    relatedPostIds: ['blog-1', 'blog-2'],
  },
  {
    id: 'blog-5',
    title: 'The Chief Digital Officer Framework for Sustainable Digital Transformation',
    slug: 'chief-digital-officer-framework-sustainable-digital-transformation',
    excerpt: 'Digital transformation often suffers from initiative fatigue. Here is how CDOs prioritize digital roadmaps, execute value realization, and sustain momentum.',
    content: `
      <h2>Overcoming Digital Initiative Fatigue</h2>
      <p>Across industries, enterprise executives face an overwhelming volume of proposed digital projects. Without a structured prioritization model, business units risk fragmenting capital across disconnected point solutions.</p>
      
      <h3>The Three-Tiered Digital Value Framework</h3>
      <p>To maximize return on digital investments, the Chief Digital Officer must categorize initiatives across three horizon levels:</p>
      
      <ul>
        <li><strong>Horizon 1: Core Automation (0-6 months):</strong> Rapid payback projects targeting high-frequency operational bottlenecks.</li>
        <li><strong>Horizon 2: Platform Modernization (6-18 months):</strong> Upgrading core cloud infrastructure, data integrations, and enterprise workflows.</li>
        <li><strong>Horizon 3: Transformational Innovation (18-36 months):</strong> Autonomous business models, predictive ecosystem integrations, and proprietary AI assets.</li>
      </ul>
    `,
    category: 'Digital Transformation',
    tags: ['Digital Transformation', 'CDO Advisory', 'Strategy', 'Value Realization'],
    metaTitle: 'The Chief Digital Officer Transformation Framework | Catalix Global',
    metaDescription: 'Strategic roadmap framework for Chief Digital Officers to prioritize enterprise digital initiatives and deliver measurable ROI.',
    metaKeywords: 'Digital Transformation, CDO Advisory, Value Realization, Digital Roadmap',
    published: true,
    publishedAt: new Date('2026-07-29T09:00:00Z').toISOString(),
    createdAt: new Date('2026-07-29T09:00:00Z').toISOString(),
    updatedAt: new Date('2026-07-29T09:00:00Z').toISOString(),
    relatedPostIds: ['blog-2', 'blog-3'],
  }
];

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'blogs.json');

function ensureDataFile(): BlogItem[] {
  if (process.env.VERCEL) return INITIAL_BLOGS;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      const data = JSON.parse(content);
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_BLOGS, null, 2), 'utf-8');
    return INITIAL_BLOGS;
  } catch {
    return INITIAL_BLOGS;
  }
}

function saveDataFile(blogs: BlogItem[]) {
  if (process.env.VERCEL) return;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
  } catch {
    // Silently ignore read-only filesystem errors in serverless environments
  }
}

let memoryStore: BlogItem[] = ensureDataFile();
let dbTested = false;
let dbAvailable = false;

// Smart DB connection checker: avoids logging authentication errors when using local placeholder DB URLs
const isDbConnected = async (): Promise<boolean> => {
  if (dbTested) return dbAvailable;
  
  const dbUrl = process.env.DATABASE_URL || '';
  if (!dbUrl || dbUrl.includes('user:password@localhost') || dbUrl.includes('placeholder')) {
    dbTested = true;
    dbAvailable = false;
    return false;
  }

  try {
    await prisma.blog.findFirst({ select: { id: true } });
    dbTested = true;
    dbAvailable = true;
    return true;
  } catch {
    dbTested = true;
    dbAvailable = false;
    return false;
  }
};

export const getBlogsFromDb = async (): Promise<BlogItem[]> => {
  const canUseDb = await isDbConnected();
  if (canUseDb) {
    try {
      const blogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' },
      });
      if (blogs && blogs.length > 0) {
        return blogs.map((b) => ({
          ...b,
          publishedAt: b.publishedAt ? b.publishedAt.toISOString() : null,
          scheduledFor: b.scheduledFor ? b.scheduledFor.toISOString() : null,
          createdAt: b.createdAt.toISOString(),
          updatedAt: b.updatedAt.toISOString(),
        }));
      }
    } catch {
      dbAvailable = false;
    }
  }
  memoryStore = ensureDataFile();
  return memoryStore;
};

export const getPublishedBlogs = async (page = 1, limit = 9) => {
  const allBlogs = await getBlogsFromDb();
  const published = allBlogs.filter((b) => b.published);
  const total = published.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const blogs = published.slice(startIndex, startIndex + limit);

  return { blogs, total, page, totalPages };
};

export const getAdminBlogs = async (page = 1, limit = 10, status = 'all', search = '') => {
  const allBlogs = await getBlogsFromDb();
  let filtered = allBlogs;

  if (status === 'published') {
    filtered = filtered.filter((b) => b.published);
  } else if (status === 'draft') {
    filtered = filtered.filter((b) => !b.published);
  }

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q)
    );
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const blogs = filtered.slice(startIndex, startIndex + limit);

  return { blogs, total, page, totalPages };
};

export const getBlogBySlug = async (slug: string): Promise<BlogItem | null> => {
  const canUseDb = await isDbConnected();
  if (canUseDb) {
    try {
      const blog = await prisma.blog.findUnique({ where: { slug } });
      if (blog) {
        return {
          ...blog,
          publishedAt: blog.publishedAt ? blog.publishedAt.toISOString() : null,
          scheduledFor: blog.scheduledFor ? blog.scheduledFor.toISOString() : null,
          createdAt: blog.createdAt.toISOString(),
          updatedAt: blog.updatedAt.toISOString(),
        };
      }
    } catch {
      dbAvailable = false;
    }
  }
  memoryStore = ensureDataFile();
  return memoryStore.find((b) => b.slug === slug || b.id === slug) || null;
};

export const getBlogById = async (id: string): Promise<BlogItem | null> => {
  const canUseDb = await isDbConnected();
  if (canUseDb) {
    try {
      const blog = await prisma.blog.findUnique({ where: { id } });
      if (blog) {
        return {
          ...blog,
          publishedAt: blog.publishedAt ? blog.publishedAt.toISOString() : null,
          scheduledFor: blog.scheduledFor ? blog.scheduledFor.toISOString() : null,
          createdAt: blog.createdAt.toISOString(),
          updatedAt: blog.updatedAt.toISOString(),
        };
      }
    } catch {
      dbAvailable = false;
    }
  }
  memoryStore = ensureDataFile();
  return memoryStore.find((b) => b.id === id || b.slug === id) || null;
};

export const createBlogInDb = async (data: Omit<BlogItem, 'id' | 'createdAt' | 'updatedAt'>) => {
  const now = new Date();
  const id = `blog-${Date.now()}`;
  const newBlog: BlogItem = {
    ...data,
    id,
    publishedAt: data.published ? (data.publishedAt || now.toISOString()) : null,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    relatedPostIds: data.relatedPostIds || [],
  };

  const canUseDb = await isDbConnected();
  if (canUseDb) {
    try {
      const created = await prisma.blog.create({
        data: {
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          category: data.category,
          tags: data.tags,
          metaTitle: data.metaTitle,
          metaDescription: data.metaDescription,
          metaKeywords: data.metaKeywords,
          published: data.published,
          publishedAt: data.published ? (data.publishedAt ? new Date(data.publishedAt) : now) : null,
          relatedPostIds: data.relatedPostIds || [],
        },
      });
      if (created) {
        return {
          ...created,
          publishedAt: created.publishedAt ? created.publishedAt.toISOString() : null,
          createdAt: created.createdAt.toISOString(),
          updatedAt: created.updatedAt.toISOString(),
        };
      }
    } catch {
      dbAvailable = false;
    }
  }

  memoryStore = ensureDataFile();
  memoryStore.unshift(newBlog);
  saveDataFile(memoryStore);
  return newBlog;
};

export const updateBlogInDb = async (id: string, data: Partial<BlogItem>) => {
  const now = new Date();
  let updatedBlog: BlogItem | null = null;

  const canUseDb = await isDbConnected();
  if (canUseDb) {
    try {
      const updated = await prisma.blog.update({
        where: { id },
        data: {
          ...(data.title !== undefined && { title: data.title }),
          ...(data.slug !== undefined && { slug: data.slug }),
          ...(data.excerpt !== undefined && { excerpt: data.excerpt }),
          ...(data.content !== undefined && { content: data.content }),
          ...(data.category !== undefined && { category: data.category }),
          ...(data.tags !== undefined && { tags: data.tags }),
          ...(data.metaTitle !== undefined && { metaTitle: data.metaTitle }),
          ...(data.metaDescription !== undefined && { metaDescription: data.metaDescription }),
          ...(data.metaKeywords !== undefined && { metaKeywords: data.metaKeywords }),
          ...(data.published !== undefined && { published: data.published }),
          ...(data.published !== undefined && { publishedAt: data.published ? (data.publishedAt ? new Date(data.publishedAt) : now) : null }),
          ...(data.relatedPostIds !== undefined && { relatedPostIds: data.relatedPostIds }),
        },
      });
      if (updated) {
        return {
          ...updated,
          publishedAt: updated.publishedAt ? updated.publishedAt.toISOString() : null,
          createdAt: updated.createdAt.toISOString(),
          updatedAt: updated.updatedAt.toISOString(),
        };
      }
    } catch {
      dbAvailable = false;
    }
  }

  memoryStore = ensureDataFile();
  const idx = memoryStore.findIndex((b) => b.id === id || b.slug === id);
  if (idx !== -1) {
    memoryStore[idx] = {
      ...memoryStore[idx],
      ...data,
      updatedAt: now.toISOString(),
      publishedAt: data.published ? (data.publishedAt || memoryStore[idx].publishedAt || now.toISOString()) : null,
    };
    if (!updatedBlog) updatedBlog = memoryStore[idx];
    saveDataFile(memoryStore);
  }

  return updatedBlog;
};

export const deleteBlogInDb = async (identifier: string) => {
  const canUseDb = await isDbConnected();
  if (canUseDb) {
    try {
      await prisma.blog.deleteMany({
        where: {
          OR: [{ id: identifier }, { slug: identifier }],
        },
      });
    } catch {
      dbAvailable = false;
    }
  }

  memoryStore = ensureDataFile().filter((b) => b.id !== identifier && b.slug !== identifier);
  saveDataFile(memoryStore);
  return true;
};

export const getRelatedBlogs = async (id: string, limit = 3) => {
  const current = await getBlogById(id);
  const allBlogs = await getBlogsFromDb();
  const published = allBlogs.filter((b) => b.published && b.id !== id && b.slug !== id);

  if (!current) return published.slice(0, limit);

  // Match by explicit related ids first
  if (current.relatedPostIds && current.relatedPostIds.length > 0) {
    const explicitRelated = published.filter((b) => current.relatedPostIds.includes(b.id));
    if (explicitRelated.length >= limit) return explicitRelated.slice(0, limit);
  }

  // Match by same category
  const sameCategory = published.filter((b) => b.category === current.category);
  const combined = Array.from(new Set([...sameCategory, ...published]));
  return combined.slice(0, limit);
};
