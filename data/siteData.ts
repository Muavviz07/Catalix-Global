export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  iconName: 'Shield' | 'Layers' | 'Compass' | 'TrendingUp' | 'Cpu';
  shortCopy: string;
  heroSubheading: string;
  overview: {
    headline: string;
    paragraphs: string[];
  };
  keyBenefits: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  estimator: {
    title: string;
    description: string;
    input1: { label: string; min: number; max: number; default: number; step: number; unit: string };
    input2: { label: string; min: number; max: number; default: number; step: number; unit: string };
    output1Label: string;
    output1Unit: string;
    output2Label: string;
    output2Unit: string;
    type: 'cio' | 'erp' | 'digital' | 'operational' | 'ai';
  };
  relatedSectors: string[]; // sector slugs
  relatedServices: string[]; // service slugs
}

export interface SectorData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  iconName: 'Package' | 'Zap' | 'Cpu' | 'Flame' | 'Truck';
  context: string;
  heroSubheading: string;
  challenges: {
    title: string;
    impact: string;
    description: string;
  }[];
  approachText: string[];
  relevantServices: string[]; // service slugs
  outcomes: {
    metric: string;
    title: string;
    copy: string;
    impact: string;
  }[];
  systemsUsed: {
    name: string;
    slug: string;
    useCase: string;
  }[];
}

export interface BusinessSystemData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  iconName: 'Database' | 'Server' | 'Users' | 'BarChart' | 'Boxes';
  overview: string[];
  keyFeatures: string[];
  catalixServices: {
    title: string;
    description: string;
  }[];
  relevantSectors: {
    name: string;
    slug: string;
    relevance: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'cio-cdo',
    slug: 'cio-cdo-services',
    title: 'CIO / CDO Services',
    subtitle: 'Virtual Leadership & Strategy',
    iconName: 'Shield',
    shortCopy: 'Transform IT strategy and governance to align technology investments with business growth.',
    heroSubheading: 'Executive IT and digital leadership tailored for enterprise leaders navigating complex tech transformations.',
    overview: {
      headline: 'Executive IT & Digital Leadership Without Overhead',
      paragraphs: [
        'Enterprise growth requires clear technology governance, capex optimization, and digital alignment with P&L objectives. Catalix Global provides fractional and virtual CIO/CDO leadership to steer high-stakes technology decisions.',
        'We bridge executive vision, enterprise architecture, and vendor management—ensuring technology spend directly accelerates operational throughput, risk mitigation, and bottom-line margin expansion.',
        'Our managing partners sit on your side of the table, eliminating vendor bias and delivering pragmatic digital roadmaps built for enterprise scale.'
      ]
    },
    keyBenefits: [
      'Virtual CIO / CDO Executive Leadership',
      'IT Strategy & Digital Roadmap Alignment',
      'Budget Planning & Capex Rationalization',
      'Vendor Management & RFP Governance',
      'Cybersecurity & Risk Oversight',
      'IT Operating Model Modernization'
    ],
    deliverables: [
      { title: 'Virtual CIO / CDO Executive Services', description: 'Fractional executive leadership steering your internal technology organization.' },
      { title: 'IT Strategy & Digital Transformation Roadmap', description: 'Multi-year technology blueprint aligned strictly with enterprise EBITDA objectives.' },
      { title: 'IT Capex & Budget Rationalization', description: 'Detailed spend audit eliminating redundant software licenses and bloated vendor contracts.' },
      { title: 'Vendor Governance & RFP Management', description: 'Independent selection and contract negotiation for enterprise software platforms.' },
      { title: 'Cybersecurity & Compliance Oversight', description: 'Enterprise risk management, data protection, and regulatory compliance alignment.' }
    ],
    estimator: {
      title: 'Estimate CIO/CDO Strategic Optimization',
      description: 'Adjust your annual IT budget and internal headcount to project potential technology cost optimization and risk reduction.',
      input1: { label: 'Annual Enterprise IT Spend ($M)', min: 2, max: 100, default: 12, step: 1, unit: '$M' },
      input2: { label: 'IT & Operations Team Headcount', min: 10, max: 500, default: 45, step: 5, unit: 'Staff' },
      output1Label: 'Est. Annual Capex / Opex Savings',
      output1Unit: '$M',
      output2Label: 'Est. License & Vendor Savings',
      output2Unit: '$M',
      type: 'cio',
    },
    relatedSectors: ['fmcg', 'power-cables-manufacturing', 'electrical-equipment-manufacturing', 'petrochemicals', 'distribution-trading'],
    relatedServices: ['erp-advisory', 'digital-transformation', 'ai-advisory']
  },
  {
    id: 'erp-advisory',
    slug: 'erp-advisory',
    title: 'ERP Advisory',
    subtitle: 'End-to-End Implementation Steering',
    iconName: 'Layers',
    shortCopy: 'Independent guidance throughout ERP lifecycle—from vendor selection to go-live optimization.',
    heroSubheading: 'Unbiased executive steering for SAP, Infor, and Microsoft Dynamics implementation lifecycles.',
    overview: {
      headline: 'Unbiased Steering Across the Entire ERP Lifecycle',
      paragraphs: [
        'ERP implementations represent high-stakes capital investments that frequently suffer from budget overruns, timeline slippage, and operational disruption.',
        'Catalix Global provides independent ERP advisory from initial vendor RFP and contract negotiation to PMO governance, business process redesign, and post-go-live optimization.',
        'We enforce strict accountability on software vendors and implementation partners—protecting your capital and ensuring your new ERP delivers promised operational capabilities.'
      ]
    },
    keyBenefits: [
      'Independent ERP Vendor & Integrator Selection',
      'Implementation Risk Mitigation & PMO Governance',
      'Business Process Redesign (BPR)',
      'Go-Live Readiness & Cutover Audits',
      'Contract Negotiation & Licensing Optimization',
      'Post-Implementation Value Realization'
    ],
    deliverables: [
      { title: 'ERP Vendor Selection & RFP Management', description: 'Objective platform selection across SAP, Infor LN, and Microsoft D365 tailored to your sector.' },
      { title: 'ERP Health Checks & Project Recovery', description: 'Rapid diagnostic and turnaround steering for stalled or failing ERP implementations.' },
      { title: 'Business Process Redesign (BPR)', description: 'Harmonizing operational workflows with ERP best practices to prevent custom code bloat.' },
      { title: 'Go-Live Readiness Assessment', description: 'Rigorous risk audit covering data migration, user adoption, and system integration prior to cutover.' },
      { title: 'Vendor Negotiations & Independent QA', description: 'Protecting client interests during software licensing and system integrator SOW negotiations.' }
    ],
    estimator: {
      title: 'Estimate ERP Implementation ROI & Cost Protection',
      description: 'Adjust project scope budget and timeline to preview risk reduction and cost savings.',
      input1: { label: 'Planned ERP Project Budget ($M)', min: 1, max: 50, default: 8, step: 0.5, unit: '$M' },
      input2: { label: 'Target Project Duration (Months)', min: 6, max: 36, default: 18, step: 2, unit: 'Mos' },
      output1Label: 'Est. Overrun Risk Prevented',
      output1Unit: '$M',
      output2Label: 'Est. License & SOW Savings',
      output2Unit: '$M',
      type: 'erp',
    },
    relatedSectors: ['fmcg', 'power-cables-manufacturing', 'electrical-equipment-manufacturing', 'petrochemicals', 'distribution-trading'],
    relatedServices: ['cio-cdo-services', 'digital-transformation', 'operational-excellence']
  },
  {
    id: 'digital-transformation',
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    subtitle: 'Industry 4.0 & Shop-Floor Digitization',
    iconName: 'Compass',
    shortCopy: 'Build pragmatic Industry 4.0 roadmaps connecting plant floor visibility to C-suite decisions.',
    heroSubheading: 'Connecting shop-floor telemetry with executive ERP planning to drive modern industrial performance.',
    overview: {
      headline: 'Pragmatic Industry 4.0 Roadmaps for Modern Manufacturing',
      paragraphs: [
        'True digital transformation goes beyond technology adoption—it establishes real-time visibility across shop-floor operations, supply chains, and executive dashboards.',
        'Catalix Global designs pragmatic Industry 4.0 blueprints that integrate Manufacturing Execution Systems (MES), IoT sensors, and automated workflows directly into enterprise core systems.',
        'We help industrial organizations eliminate paper-based shop-floor tracking, automate KPI reporting, and empower plant managers with predictive decision-making.'
      ]
    },
    keyBenefits: [
      'Industry 4.0 Transformation Blueprint',
      'Smart Factory & Automation Assessments',
      'MES Strategy & ERP Data Integration',
      'Shop-Floor Digitization & Telemetry',
      'Real-Time KPI & Operations Dashboards',
      'Cross-Functional Process Automation'
    ],
    deliverables: [
      { title: 'Industry 4.0 Transformation Roadmap', description: 'Phased digital blueprint connecting plant equipment, MES, and enterprise ERP systems.' },
      { title: 'Smart Factory Assessments', description: 'Comprehensive audit evaluating equipment connectivity, sensor readiness, and data architecture.' },
      { title: 'MES Strategy & AI Opportunity Audits', description: 'Defining shop-floor execution architecture to streamline job dispatching and material tracking.' },
      { title: 'Shop-Floor Digitization & Telemetry', description: 'Replacing manual logbooks with automated sensor telemetry for machine health and cycle times.' },
      { title: 'Real-Time KPI & Operations Frameworks', description: 'C-suite and plant-level dashboards tracking live throughput, scrap rates, and efficiency.' }
    ],
    estimator: {
      title: 'Estimate Digital Transformation Value',
      description: 'Adjust annual manufacturing revenue and plant count to preview capacity unlock and automation yield.',
      input1: { label: 'Annual Manufacturing Revenue ($M)', min: 25, max: 1500, default: 200, step: 25, unit: '$M' },
      input2: { label: 'Active Manufacturing Plants', min: 1, max: 20, default: 3, step: 1, unit: 'Sites' },
      output1Label: 'Est. Annual Productivity Unlock',
      output1Unit: '$M',
      output2Label: 'Est. Throughput Capacity Lift',
      output2Unit: '%',
      type: 'digital',
    },
    relatedSectors: ['fmcg', 'power-cables-manufacturing', 'electrical-equipment-manufacturing', 'petrochemicals'],
    relatedServices: ['erp-advisory', 'operational-excellence', 'ai-advisory']
  },
  {
    id: 'operational-excellence',
    slug: 'operational-excellence',
    title: 'Operational Excellence',
    subtitle: 'Technology-Driven Productivity',
    iconName: 'TrendingUp',
    shortCopy: 'Leverage digital tools to unlock inventory capital, improve OEE, and stabilize production.',
    heroSubheading: 'Aligning digital tools with shop-floor execution to drive EBITDA gains and working capital velocity.',
    overview: {
      headline: 'Quantifiable Operational Gains Through Technology',
      paragraphs: [
        'Technology initiatives must justify themselves on the balance sheet. Catalix Global focuses on operational excellence metrics: inventory reduction, OEE improvement, planning accuracy, and downtime elimination.',
        'We synchronize multi-site Sales & Operations Planning (S&OP) with finite-capacity factory scheduling—eliminating safety stock inflation and bottleneck delays.',
        'By connecting root-cause quality management and predictive telemetry, we help plant managers achieve consistent OTIF delivery and margin expansion.'
      ]
    },
    keyBenefits: [
      'Inventory & Working Capital Optimization',
      'OEE & Machine Capacity Unlock',
      'Multi-Site S&OP & Planning Synchronization',
      'Finite-Capacity Production Scheduling',
      'Scrap & Defect Root-Cause Elimination',
      'Predictive Maintenance Telemetry'
    ],
    deliverables: [
      { title: 'Inventory & Working Capital Rationalization', description: 'Demand-supply synchronization releasing 18-28% tied-up capital in buffer stocks.' },
      { title: 'OEE & Bottleneck Elimination', description: 'Real-time downtime tracking and machine telemetry adding +8-14% productive OEE capacity.' },
      { title: 'S&OP & Demand Planning Synchronization', description: 'Multi-site scheduling alignment raising planning accuracy to 95%+.' },
      { title: 'Inline Quality & Scrap Reduction', description: 'Root-cause quality telemetry cutting scrap and rework rates by up to 35%.' },
      { title: 'Predictive Maintenance Frameworks', description: 'Transforming asset care from reactive firefighting to planned maintenance downtime.' }
    ],
    estimator: {
      title: 'Estimate Operational Yield & Working Capital Release',
      description: 'Adjust enterprise revenue and facility count to calculate projected inventory capital release and EBITDA capacity lift.',
      input1: { label: 'Annual Enterprise Revenue ($M)', min: 50, max: 2000, default: 250, step: 25, unit: '$M' },
      input2: { label: 'Active Facilities / Plants', min: 1, max: 25, default: 4, step: 1, unit: 'Sites' },
      output1Label: 'Est. Working Capital Released',
      output1Unit: '$M',
      output2Label: 'Est. Annual EBITDA Capacity Lift',
      output2Unit: '$M',
      type: 'operational',
    },
    relatedSectors: ['fmcg', 'power-cables-manufacturing', 'electrical-equipment-manufacturing', 'petrochemicals', 'distribution-trading'],
    relatedServices: ['erp-advisory', 'digital-transformation', 'ai-advisory']
  },
  {
    id: 'ai-advisory',
    slug: 'ai-advisory',
    title: 'AI Advisory',
    subtitle: 'Pragmatic & Secure AI Integration',
    iconName: 'Cpu',
    shortCopy: 'Guide enterprise leadership on integrating AI as a business value driver, not an experiment.',
    heroSubheading: 'Deploying secure, high-ROI AI governance frameworks and agentic workflows for enterprise operations.',
    overview: {
      headline: 'Transform AI Hype Into Quantifiable Enterprise EBITDA',
      paragraphs: [
        'Generative AI and agentic automation present massive operational opportunities—alongside significant intellectual property, security, and data governance risks.',
        'Catalix Global cuts through AI market noise. We provide C-suite executives with secure AI governance frameworks, data readiness audits, and prioritized high-ROI use cases.',
        'We help enterprise leaders move past proof-of-concept experiments into scalable, secure AI workflows that automate demand forecasting, invoice auditing, and predictive maintenance.'
      ]
    },
    keyBenefits: [
      'Enterprise AI Governance & IP Compliance',
      'C-Suite AI Readiness & Security Audit',
      'Data Infrastructure & ERP Data Cleanse',
      'High-ROI Agentic Use Case Prioritization',
      'Manufacturing & Supply Chain AI Pilots',
      'AI Capex & Return Metrics Framework'
    ],
    deliverables: [
      { title: 'Enterprise AI Governance Framework', description: 'Risk controls, IP security protocols, and compliance guardrails for corporate AI adoption.' },
      { title: 'Data Infrastructure Readiness Audit', description: 'Cleanse and structure ERP, CRM, and OT data pipelines to feed AI contextual models.' },
      { title: 'High-ROI Agentic Use Cases Matrix', description: 'Targeting high-impact automation in demand planning, quality telemetry, and vendor auditing.' },
      { title: 'Manufacturing AI Pilots & Agent Workflows', description: 'Deploying controlled AI agents that automate complex operational decision loops.' },
      { title: 'CFO Guide to AI Capex & ROI Metrics', description: 'Rigorously evaluating AI software licensing vs measurable EBITDA returns.' }
    ],
    estimator: {
      title: 'Estimate AI Adoption Readiness & Value Unlock',
      description: 'Adjust annual revenue and current data maturity level to calculate projected AI efficiency return.',
      input1: { label: 'Annual Enterprise Revenue ($M)', min: 25, max: 1000, default: 150, step: 25, unit: '$M' },
      input2: { label: 'Data Maturity Level (1 = Basic, 10 = Advanced)', min: 1, max: 10, default: 4, step: 1, unit: '/10' },
      output1Label: 'Est. Annual Automation Savings',
      output1Unit: '$M',
      output2Label: 'Enterprise AI Readiness Score',
      output2Unit: '%',
      type: 'ai',
    },
    relatedSectors: ['fmcg', 'power-cables-manufacturing', 'electrical-equipment-manufacturing', 'petrochemicals', 'distribution-trading'],
    relatedServices: ['cio-cdo-services', 'digital-transformation', 'operational-excellence']
  }
];

export const sectorsData: SectorData[] = [
  {
    id: 'fmcg',
    slug: 'fmcg',
    title: 'FMCG & Consumer Goods',
    subtitle: 'Fast-Moving Consumer Supply Chains',
    iconName: 'Package',
    context: 'Fast-Moving Consumer Goods (FMCG) enterprises face tight retail SLAs, rapid demand fluctuations, short product shelf-lives, and volatile raw material pricing.',
    heroSubheading: 'Driving demand forecast accuracy, inventory velocity, and trade margin protection for consumer brands.',
    challenges: [
      {
        title: 'Inventory Bloat from Demand Uncertainty',
        impact: '$3M - $8M tied up in excess safety stock',
        description: 'Mismatched promotions and retail forecasts force plants to hold excessive safety stock across regional distribution centers.'
      },
      {
        title: 'Retail SLA Penalties & Out-of-Stocks',
        impact: 'Up to 4% revenue lost to OTIF penalties',
        description: 'Line changeover delays and rigid factory scheduling cause missed delivery windows for major retail chains.'
      },
      {
        title: 'Trade Promotion & Margin Leakage',
        impact: '12-18% erosion of gross promotional spend',
        description: 'Lack of integration between trade promotion management (TPM) and ERP finance leads to unverified distributor claims.'
      }
    ],
    approachText: [
      'Catalix Global helps FMCG manufacturers align Sales & Operations Planning (S&OP) with real-time distributor sell-through data.',
      'We steer ERP and supply chain modernizations that automate finite-capacity plant scheduling, reduce changeover times, and track batch traceability from raw material receipt to retail shelf.'
    ],
    relevantServices: ['operational-excellence', 'erp-advisory', 'digital-transformation'],
    outcomes: [
      {
        metric: '22% Capital Unlock',
        title: 'Reduced Inventory Holding',
        copy: 'Synchronized demand forecasting with plant scheduling to eliminate safety stock buffer inflation.',
        impact: 'Released $5.4M in working capital across 6 regional distribution hubs.'
      },
      {
        metric: '97.8% OTIF Delivery',
        title: 'Eliminated Retail SLA Penalties',
        copy: 'Dynamic finite-capacity line scheduling prevented stockouts during promotional spikes.',
        impact: 'Eliminated retailer compliance fines and improved customer satisfaction.'
      }
    ],
    systemsUsed: [
      { name: 'SAP S/4HANA', slug: 'sap', useCase: 'Core enterprise ERP, advanced ATP, and finance' },
      { name: 'Infor LN', slug: 'infor-ln', useCase: 'Supply chain & multi-site plant scheduling' },
      { name: 'MS D365 FinOps', slug: 'ms-d365-finops', useCase: 'Integrated operations and trade promotion management' }
    ]
  },
  {
    id: 'power-cables',
    slug: 'power-cables-manufacturing',
    title: 'Power Cables Manufacturing',
    subtitle: 'Continuous & Custom Cable Production',
    iconName: 'Zap',
    context: 'Power cable manufacturers manage complex metal commodity price exposure (copper/aluminum), continuous extrusion lines, multi-tier drum length tracking, and project-based delivery timelines.',
    heroSubheading: 'Optimizing metal scrap management, continuous extrusion line OEE, and drum length scheduling.',
    challenges: [
      {
        title: 'Copper & Aluminum Metal Scrap Leakage',
        impact: '$1.5M - $4M annual metal scrap waste',
        description: 'Imprecise extrusion line speed control and start-up scrap result in massive raw material metal loss.'
      },
      {
        title: 'Cable Drum Length Allocation Friction',
        impact: '15% inventory tied in non-standard short lengths',
        description: 'Inability to dynamically match customer order lengths with remnant cable drums creates high scrap write-offs.'
      },
      {
        title: 'Extrusion Line Downtime & Changeovers',
        impact: '10-15% loss of continuous line capacity',
        description: 'Frequent compound color and conductor gauge changes cause lengthy line purging outages.'
      }
    ],
    approachText: [
      'Catalix Global specializes in cable manufacturing ERP and MES integrations—embedding metal hedging, scrap tracking, and drum length management directly into core ERP systems.',
      'We deploy telemetry on extrusion and stranding lines to minimize startup scrap and optimize line speed balancing.'
    ],
    relevantServices: ['operational-excellence', 'digital-transformation', 'erp-advisory'],
    outcomes: [
      {
        metric: '32% Scrap Reduction',
        title: 'Copper Material Scrap Cut',
        copy: 'Inline telemetry and automated line speed controls arrested conductor extrusion scrap at the source.',
        impact: 'Saved $2.8M annually in virgin copper raw material purchases.'
      },
      {
        metric: '+11.4% OEE Lift',
        title: 'Extrusion Capacity Unlock',
        copy: 'Dynamic sequence scheduling reduced purging and color changeover downtime across continuous lines.',
        impact: 'Added 4,200 metric tons of annual cable throughput.'
      }
    ],
    systemsUsed: [
      { name: 'Infor LN', slug: 'infor-ln', useCase: 'Specialized cable ERP, scrap tracking, and drum length management' },
      { name: 'SAP S/4HANA', slug: 'sap', useCase: 'Enterprise copper hedging and multi-entity financial consolidation' },
      { name: 'MS D365 BC', slug: 'ms-d365-bc', useCase: 'Mid-market cable manufacturing & distribution management' }
    ]
  },
  {
    id: 'electrical-equipment',
    slug: 'electrical-equipment-manufacturing',
    title: 'Electrical Equipment Manufacturing',
    subtitle: 'Transformers, Switchgear & Assemblies',
    iconName: 'Cpu',
    context: 'Electrical equipment producers handle complex Engineer-to-Order (ETO) and Configure-to-Order (CTO) assemblies, long component lead times, and multi-level BOM changes.',
    heroSubheading: 'Streamlining Engineer-to-Order (ETO) BOMs, project milestone billing, and shop-floor assembly scheduling.',
    challenges: [
      {
        title: 'Engineering Change Order (ECO) Bottlenecks',
        impact: '3-5 week delay per customized order',
        description: 'Disconnect between CAD/PLM systems and shop-floor ERP leads to assembly with outdated bill-of-materials.'
      },
      {
        title: 'Project Milestone Cash Flow Delays',
        impact: '$5M+ stuck in unbilled work-in-progress (WIP)',
        description: 'Manual milestone verification delays milestone invoicing for large utility transformers and switchgear orders.'
      },
      {
        title: 'Component Shortages on Assembly Lines',
        impact: '20% assembly line idle time',
        description: 'Long lead-time components (core steel, specialized bushings) fail to arrive in sync with assembly staging.'
      }
    ],
    approachText: [
      'Catalix Global integrates PLM engineering data with ERP production planning to streamline custom electrical assembly.',
      'We establish finite-capacity assembly scheduling, milestone billing automation, and root-cause quality telemetry for high-voltage testing operations.'
    ],
    relevantServices: ['erp-advisory', 'digital-transformation', 'operational-excellence'],
    outcomes: [
      {
        metric: '45% Faster ECO Processing',
        title: 'PLM to ERP Engineering Sync',
        copy: 'Automated engineering change order synchronization eliminated assembly line BOM discrepancies.',
        impact: 'Reduced custom transformer cycle times by 18 days per unit.'
      },
      {
        metric: '$4.2M Cash Unlock',
        title: 'Automated Milestone Invoicing',
        copy: 'Tied ERP milestone billing directly to shop-floor quality test signoffs.',
        impact: 'Accelerated cash collection cycles by 24 days.'
      }
    ],
    systemsUsed: [
      { name: 'SAP S/4HANA', slug: 'sap', useCase: 'Project System (PS), ETO manufacturing, and complex financial accounting' },
      { name: 'Infor LN', slug: 'infor-ln', useCase: 'Advanced discrete assembly & shop-floor execution' },
      { name: 'MS CRM', slug: 'ms-crm', useCase: 'Tender management & utility bid tracking' }
    ]
  },
  {
    id: 'petrochemicals',
    slug: 'petrochemicals',
    title: 'Petrochemicals & Process Manufacturing',
    subtitle: 'Refining, Polymers & Specialty Chemicals',
    iconName: 'Flame',
    context: 'Petrochemical and process manufacturing plants operate 24/7 continuous production where unplanned downtime costs over $100K/hour and environmental safety compliance is non-negotiable.',
    heroSubheading: 'Maximizing continuous process uptime, yield optimization, and asset reliability telemetry.',
    challenges: [
      {
        title: 'Unplanned Cracker & Reactor Outages',
        impact: '$150K per hour of continuous plant downtime',
        description: 'Reactive maintenance policies fail to detect compressor and heat exchanger degradation prior to failure.'
      },
      {
        title: 'Chemical Yield & Off-Spec Product Loss',
        impact: '2-4% loss in high-value polymer yield',
        description: 'Sub-optimal catalyst ratio and reactor pressure tuning result in off-spec chemical batches sold at steep discounts.'
      },
      {
        title: 'EHS & Regulatory Audit Friction',
        impact: 'High administrative compliance overhead',
        description: 'Siloed plant safety logs make environmental emission reporting and audit compliance labor-intensive.'
      }
    ],
    approachText: [
      'Catalix Global integrates plant DCS/SCADA telemetry with enterprise ERP asset management to enable predictive maintenance.',
      'We guide chemical leaders in deploying real-time process yield analytics, automated regulatory EHS reporting, and bulk logistics scheduling.'
    ],
    relevantServices: ['digital-transformation', 'operational-excellence', 'ai-advisory'],
    outcomes: [
      {
        metric: '38% Downtime Cut',
        title: 'Predictive Asset Reliability',
        copy: 'Connected compressor IoT vibration sensors with SAP PM predictive maintenance work orders.',
        impact: 'Prevented 3 catastrophic cracker outages, saving $6.8M annually.'
      },
      {
        metric: '+1.8% Yield Gain',
        title: 'Reactor Yield Optimization',
        copy: 'Deployed AI process tuning to stabilize polymer reaction pressure and temperature variables.',
        impact: 'Converted off-spec chemical batches into prime-grade product yield.'
      }
    ],
    systemsUsed: [
      { name: 'SAP S/4HANA', slug: 'sap', useCase: 'Process manufacturing, EHS regulatory reporting, and plant asset management' },
      { name: 'Infor LN', slug: 'infor-ln', useCase: 'Chemical plant maintenance & inventory control' },
      { name: 'MS D365 FinOps', slug: 'ms-d365-finops', useCase: 'Bulk chemical distribution & financial accounting' }
    ]
  },
  {
    id: 'distribution-trading',
    slug: 'distribution-trading',
    title: 'Distribution & Wholesale Trading',
    subtitle: 'Multi-Hub Logistics & Commodity Trading',
    iconName: 'Truck',
    context: 'Wholesale distributors and commodity trading houses navigate paper-thin margins, high order volumes, complex rebate structures, and multi-channel fulfillment.',
    heroSubheading: 'Streamlining wholesale pricing, rebate management, and multi-hub warehouse logistics.',
    challenges: [
      {
        title: 'Vendor Rebate Leakage & Unclaimed Margins',
        impact: '15-25% of manufacturer rebates go uncollected',
        description: 'Complex tiered rebate contracts tracked on spreadsheets lead to unbilled supplier claims.'
      },
      {
        title: 'Multi-Warehouse Inventory Misallocation',
        impact: 'High inter-hub transfer costs & dead stock',
        description: 'Lack of real-time inventory visibility across distribution hubs leads to stockouts in one region and excess in another.'
      },
      {
        title: 'Order-to-Cash & Credit Approval Delays',
        impact: 'Slower cash cycles & bad debt risk',
        description: 'Manual credit checks and invoice dispute resolution delay customer payments.'
      }
    ],
    approachText: [
      'Catalix Global modernizes wholesale distribution ERP systems to automate rebate claim tracking, multi-warehouse order routing, and real-time customer credit management.',
      'We streamline logistics execution to maximize warehouse picking throughput and eliminate margin erosion.'
    ],
    relevantServices: ['erp-advisory', 'operational-excellence', 'cio-cdo-services'],
    outcomes: [
      {
        metric: '$3.1M Rebate Recovery',
        title: 'Automated Vendor Rebate Audit',
        copy: 'Integrated supplier rebate agreements directly into ERP purchasing and accounts receivable.',
        impact: 'Recovered 100% of earned manufacturer volume rebates.'
      },
      {
        metric: '28% Faster Order Cycle',
        title: 'Multi-Hub Logistics Optimization',
        copy: 'Deployed automated order routing based on real-time stock levels and shipping distance.',
        impact: 'Reduced order-to-delivery lead times by 1.5 days.'
      }
    ],
    systemsUsed: [
      { name: 'MS D365 FinOps', slug: 'ms-d365-finops', useCase: 'Wholesale logistics, multi-site warehouse, and rebate management' },
      { name: 'MS D365 BC', slug: 'ms-d365-bc', useCase: 'Mid-market distribution & supply chain execution' },
      { name: 'SAP S/4HANA', slug: 'sap', useCase: 'Global commodity trading & high-volume distribution' }
    ]
  }
];

export const businessSystemsData: BusinessSystemData[] = [
  {
    id: 'sap',
    slug: 'sap',
    title: 'SAP (ECC & S/4HANA)',
    subtitle: 'Global Enterprise ERP Architecture',
    iconName: 'Database',
    overview: [
      'SAP S/4HANA and ECC represent the backbone of global enterprise IT architecture across heavy manufacturing, petrochemicals, and complex supply chains.',
      'Catalix Global provides independent SAP advisory services—guiding C-suite leaders through S/4HANA migrations, module selection (MM, PP, SD, FI/CO, PM), custom code remediation, and system integrator governance.',
      'We ensure your SAP landscape directly supports business strategy without becoming bloated with costly custom modifications.'
    ],
    keyFeatures: [
      'S/4HANA Migration Blueprinting & Business Case Development',
      'Independent System Integrator SOW & Quality Governance',
      'SAP Module Optimization (PP, MM, SD, FICO, PM, PS)',
      'Custom Code Rationalization (Clean Core Architecture)',
      'Advanced ATP & Supply Chain Planning Configuration',
      'SAP Fiori User Experience & Mobile Enablement'
    ],
    catalixServices: [
      { title: 'S/4HANA Migration Strategy', description: 'Assessing Greenfield vs Brownfield vs Selective Data Transition strategies.' },
      { title: 'SAP Quality Assurance & PMO', description: 'Independent oversight auditing system integrator deliverables and cutover plans.' },
      { title: 'Process Standardization', description: 'Aligning business processes with SAP Model Company best practices.' },
      { title: 'Post-Go-Live Value Optimization', description: 'Extracting full ROI from existing SAP investments post implementation.' }
    ],
    relevantSectors: [
      { name: 'Petrochemicals', slug: 'petrochemicals', relevance: 'Continuous process control, EHS compliance, and plant maintenance.' },
      { name: 'Electrical Equipment', slug: 'electrical-equipment-manufacturing', relevance: 'Engineer-to-Order (ETO) Project System and assembly.' },
      { name: 'FMCG & Consumer Goods', slug: 'fmcg', relevance: 'High-volume batch management, Advanced ATP, and promotional pricing.' }
    ]
  },
  {
    id: 'infor-ln',
    slug: 'infor-ln',
    title: 'Infor LN (Baan)',
    subtitle: 'Discrete & Process Manufacturing ERP',
    iconName: 'Server',
    overview: [
      'Infor LN (formerly Baan) is a leading ERP platform specifically engineered for discrete manufacturing, industrial equipment, power cables, and aerospace.',
      'Catalix Global brings deep domain expertise in Infor LN implementation steering, scrap management customization, shop-floor control, and version upgrades.',
      'We help manufacturing leaders leverage Infor LN to achieve finite-capacity plant scheduling, multi-level BOM management, and automated shop-floor telemetry.'
    ],
    keyFeatures: [
      'Infor LN Discrete & Continuous Manufacturing Alignment',
      'Specialized Cable & Scrap Tracking Modules',
      'Finite-Capacity Shop-Floor Scheduling (FCS)',
      'Multi-Site Project & Contract Management',
      'Infor OS & ION Integration Platform Deployment',
      'Infor Birst Analytics & Operations Dashboards'
    ],
    catalixServices: [
      { title: 'Infor LN Implementation Steering', description: 'Project management and risk auditing for complex manufacturing rollouts.' },
      { title: 'Cable & Scrap Module Advisory', description: 'Tailoring Infor LN for drum allocation, length tracking, and metal loss.' },
      { title: 'Shop-Floor Integration', description: 'Connecting Infor LN directly to MES and PLC equipment telemetry.' }
    ],
    relevantSectors: [
      { name: 'Power Cables Manufacturing', slug: 'power-cables-manufacturing', relevance: 'Drum allocation, scrap reduction, and continuous extrusion.' },
      { name: 'Electrical Equipment', slug: 'electrical-equipment-manufacturing', relevance: 'Multi-level BOMs and custom assembly scheduling.' },
      { name: 'Industrial Equipment', slug: 'electrical-equipment-manufacturing', relevance: 'Project-based manufacturing & service lifecycle management.' }
    ]
  },
  {
    id: 'ms-crm',
    slug: 'ms-crm',
    title: 'MS CRM (SE & CE)',
    subtitle: 'Enterprise Sales & Customer Engagement',
    iconName: 'Users',
    overview: [
      'Microsoft Dynamics 365 Customer Engagement (CE/CRM) empowers B2B sales organizations, tender management teams, and field service operations.',
      'Catalix Global helps enterprise sales leaders align MS CRM with ERP order fulfillment, quote-to-cash workflows, and customer service SLAs.',
      'We ensure your CRM is not just a contact database, but an active revenue driver integrated seamlessly with your supply chain.'
    ],
    keyFeatures: [
      'B2B Tender & Complex Quote-to-Cash Automation',
      'Field Service Management & Dispatching',
      'Integration with ERP Order Fulfillment (SAP / D365)',
      'Customer Portal & Partner Management',
      'Power Platform & Copilot AI Assistant Integration',
      'Sales Pipeline Analytics & Executive Reporting'
    ],
    catalixServices: [
      { title: 'MS CRM Strategy & Selection', description: 'Defining sales process requirements and platform architecture.' },
      { title: 'ERP-CRM Integration', description: 'Creating real-time synchronization between sales orders and factory scheduling.' },
      { title: 'Field Service Optimization', description: 'Automating technician dispatch, spare parts inventory, and warranty billing.' }
    ],
    relevantSectors: [
      { name: 'Electrical Equipment', slug: 'electrical-equipment-manufacturing', relevance: 'Utility tender management and field service dispatch.' },
      { name: 'Distribution & Trading', slug: 'distribution-trading', relevance: 'B2B key account management and automated credit approvals.' },
      { name: 'FMCG', slug: 'fmcg', relevance: 'Distributor relationship management and trade promotions.' }
    ]
  },
  {
    id: 'ms-d365-finops',
    slug: 'ms-d365-finops',
    title: 'MS D365 FinOps',
    subtitle: 'Enterprise Finance & Supply Chain ERP',
    iconName: 'BarChart',
    overview: [
      'Microsoft Dynamics 365 Finance & Operations (FinOps) is a powerful cloud ERP platform built for global enterprise supply chains, manufacturing, and distribution.',
      'Catalix Global steers D365 FinOps implementations to ensure clean data migration, process standardization, and high user adoption.',
      'We help finance and operations executives leverage D365 FinOps for multi-entity consolidation, automated warehouse management, and trade promotion control.'
    ],
    keyFeatures: [
      'Multi-Entity Global Financial Consolidation',
      'Advanced Warehouse & Logistics Management (WMS)',
      'Process & Discrete Manufacturing Capabilities',
      'Trade Promotion Management (TPM) & Rebate Controls',
      'Power BI Operations & Financial Dashboards',
      'Microsoft Dual-Write Integration with D365 CE'
    ],
    catalixServices: [
      { title: 'D365 FinOps Implementation Steering', description: 'Independent PMO oversight and partner deliverable auditing.' },
      { title: 'WMS & Logistics Optimization', description: 'Streamlining multi-warehouse picking, packing, and shipping workflows.' },
      { title: 'Rebate & Trade Management Advisory', description: 'Automating complex supplier and customer volume rebate calculations.' }
    ],
    relevantSectors: [
      { name: 'Distribution & Trading', slug: 'distribution-trading', relevance: 'Multi-hub distribution, rebate management, and WMS.' },
      { name: 'FMCG', slug: 'fmcg', relevance: 'Trade promotion management, batch tracking, and logistics.' },
      { name: 'Petrochemicals', slug: 'petrochemicals', relevance: 'Bulk distribution & multi-entity financial accounting.' }
    ]
  },
  {
    id: 'ms-d365-bc',
    slug: 'ms-d365-bc',
    title: 'MS D365 Business Central',
    subtitle: 'Mid-Market Enterprise Growth ERP',
    iconName: 'Boxes',
    overview: [
      'Microsoft Dynamics 365 Business Central (BC) is an agile, all-in-one ERP designed for growing mid-market manufacturers and distributors.',
      'Catalix Global helps mid-sized enterprises migrate from legacy accounting software or obsolete ERPs to D365 Business Central.',
      'We focus on fast time-to-value, core financial controls, inventory optimization, and seamless Microsoft 365 ecosystem integration.'
    ],
    keyFeatures: [
      'Core Financials, Purchasing & Order Processing',
      'Mid-Market Assembly & Basic Manufacturing',
      'Inventory Control & Warehousing',
      'Native Integration with Excel, Outlook & Teams',
      'Rapid Cloud Deployment & Low TCO',
      'Power BI Reporting & Insights'
    ],
    catalixServices: [
      { title: 'Business Central Selection & Scope', description: 'Determining fit vs enterprise D365 FinOps based on company scale.' },
      { title: 'Rapid Implementation Governance', description: 'Ensuring on-time, on-budget deployment with minimal customization.' },
      { title: 'Legacy Migration', description: 'Clean data extraction and migration from legacy systems.' }
    ],
    relevantSectors: [
      { name: 'Distribution & Trading', slug: 'distribution-trading', relevance: 'Agile inventory management and multi-currency order handling.' },
      { name: 'Power Cables (Mid-Market)', slug: 'power-cables-manufacturing', relevance: 'Cost-effective plant management for specialized cable producers.' },
      { name: 'FMCG Brands', slug: 'fmcg', relevance: 'Growing consumer brands streamlining supply chain operations.' }
    ]
  }
];

export const homepageOutcomes = [
  {
    id: 'inventory',
    metric: '18-28% Capital Unlock',
    title: 'Reduce Inventory',
    iconName: 'Boxes' as const,
    copy: 'Harmonize demand forecasting with production planning to eliminate safety stock buffer inflation and release millions in tied-up working capital.',
    businessImpact: 'Improves cash flow velocity and warehouse holding efficiency.'
  },
  {
    id: 'oee',
    metric: '+8 to 14% OEE Lift',
    title: 'Improve OEE',
    iconName: 'Gauge' as const,
    copy: 'Identify micro-stoppages and throughput bottlenecks by connecting real-time operational technology telemetry with ERP planning.',
    businessImpact: 'Adds productive capacity without expensive capital investments.'
  },
  {
    id: 'planning',
    metric: '95%+ S&OP Accuracy',
    title: 'Optimize Planning',
    iconName: 'TrendingUp' as const,
    copy: 'Synchronize multi-site Sales & Operations Planning to align sales commitments with true factory constraints and material availability.',
    businessImpact: 'Prevents stockouts and stabilizes production scheduling.'
  }
];
