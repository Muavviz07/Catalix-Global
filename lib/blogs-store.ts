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

export const INITIAL_BLOGS: BlogItem[] = [
  {
    id: 'blog-1',
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
    relatedPostIds: ['blog-2', 'blog-3'],
  },
  {
    id: 'blog-2',
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
    category: 'ERP Advisory',
    tags: ['ERP Advisory', 'CIO Strategy', 'Governance', 'Digital Transformation'],
    metaTitle: 'The CIO Governance Blueprint for Enterprise ERP Alignment in 2026',
    metaDescription: 'Strategic framework for CIOs and executive leaders to govern large-scale ERP implementations and achieve operational alignment.',
    metaKeywords: 'CIO Advisory, ERP Implementation, Enterprise Governance, SAP, Oracle',
    published: true,
    publishedAt: new Date('2026-07-15T10:00:00Z').toISOString(),
    createdAt: new Date('2026-07-15T10:00:00Z').toISOString(),
    updatedAt: new Date('2026-07-15T10:00:00Z').toISOString(),
    relatedPostIds: ['blog-1', 'blog-3'],
  },
  {
    id: 'blog-3',
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
    category: 'CIO & CDO Advisory',
    tags: ['Digital Transformation', 'CDO Advisory', 'Strategy', 'Value Realization'],
    metaTitle: 'The Chief Digital Officer Transformation Framework | Catalix Global',
    metaDescription: 'Strategic roadmap framework for Chief Digital Officers to prioritize enterprise digital initiatives and deliver measurable ROI.',
    metaKeywords: 'Digital Transformation, CDO Advisory, Value Realization, Digital Roadmap',
    published: true,
    publishedAt: new Date('2026-07-29T09:00:00Z').toISOString(),
    createdAt: new Date('2026-07-29T09:00:00Z').toISOString(),
    updatedAt: new Date('2026-07-29T09:00:00Z').toISOString(),
    relatedPostIds: ['blog-1', 'blog-2'],
  }
];

// Helper to seed database if 0 rows exist
export const seedDatabaseIfNeeded = async () => {
  try {
    const count = await prisma.blog.count();
    if (count === 0) {
      for (const item of INITIAL_BLOGS) {
        await prisma.blog.create({
          data: {
            id: item.id,
            title: item.title,
            slug: item.slug,
            excerpt: item.excerpt,
            content: item.content,
            category: item.category,
            tags: item.tags,
            metaTitle: item.metaTitle,
            metaDescription: item.metaDescription,
            metaKeywords: item.metaKeywords,
            published: item.published,
            publishedAt: item.publishedAt ? new Date(item.publishedAt) : new Date(),
            relatedPostIds: item.relatedPostIds,
          },
        });
      }
    }
  } catch (err) {
    console.error('Failed to seed PostgreSQL database:', err);
  }
};

export const getBlogsFromDb = async (): Promise<BlogItem[]> => {
  await seedDatabaseIfNeeded();
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return blogs.map((b) => ({
      ...b,
      publishedAt: b.publishedAt ? b.publishedAt.toISOString() : null,
      scheduledFor: b.scheduledFor ? b.scheduledFor.toISOString() : null,
      createdAt: b.createdAt.toISOString(),
      updatedAt: b.updatedAt.toISOString(),
    }));
  } catch {
    return [];
  }
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
  await seedDatabaseIfNeeded();
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        OR: [{ slug }, { id: slug }],
      },
    });
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
    // ignore
  }
  return null;
};

export const getBlogById = async (id: string): Promise<BlogItem | null> => {
  return getBlogBySlug(id);
};

export const createBlogInDb = async (data: Omit<BlogItem, 'id' | 'createdAt' | 'updatedAt'>) => {
  const now = new Date();
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

  return {
    ...created,
    publishedAt: created.publishedAt ? created.publishedAt.toISOString() : null,
    createdAt: created.createdAt.toISOString(),
    updatedAt: created.updatedAt.toISOString(),
  };
};

export const updateBlogInDb = async (id: string, data: Partial<BlogItem>) => {
  const now = new Date();
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

  return {
    ...updated,
    publishedAt: updated.publishedAt ? updated.publishedAt.toISOString() : null,
    createdAt: updated.createdAt.toISOString(),
    updatedAt: updated.updatedAt.toISOString(),
  };
};

export const deleteBlogInDb = async (identifier: string) => {
  await prisma.blog.deleteMany({
    where: {
      OR: [{ id: identifier }, { slug: identifier }],
    },
  });
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
