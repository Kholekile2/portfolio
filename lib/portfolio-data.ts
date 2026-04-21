const portfolioData = {
  profile: {
    name: "Kholekile Mpengesi",
    headline: "Full-Stack Developer | Data Analytics and AI",
    role: "Full-Stack Developer",
    location: "Cape Town, South Africa",
    availability: "Immediately",
    summary:
      "I build production web applications, analytics dashboards, and AI-powered systems. My work combines software engineering, data analysis, and practical problem solving across the stack.",
    shortPitch:
      "Postgraduate data analytics and business intelligence specialist with hands-on full-stack delivery experience across AI, analytics, and decision-support products.",
    currentFocus: [
      "Full-stack product engineering with business-facing analytics",
      "AI-enabled application workflows",
      "Reliable systems grounded in real business needs",
    ],
    portfolioMetadata: {
      siteTitle: "Kholekile Mpengesi | Portfolio",
      siteDescription:
        "Portfolio website for Kholekile Mpengesi, Full-Stack Developer and Data Analytics professional.",
    },
  },

  contact: {
    email: "kholekilempengesi2000@gmail.com",
    phone: "+27 78 865 4651",
    github: "https://github.com/Kholekile2",
    linkedin: "https://www.linkedin.com/in/kholekilempengesi/",
    preferredContact: "Email",
  },

  skills: [
    {
      category: "Backend",
      items: ["C#", ".NET", "ASP.NET Core", "Minimal APIs", "REST APIs"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Data and AI",
      items: ["Python", "R", "OpenAI", "Azure AI Services", "RAG systems"],
    },
    {
      category: "Databases and Query",
      items: ["SQL", "PostgreSQL", "Supabase", "BigQuery", "pgvector", "MySQL"],
    },
    {
      category: "Analytics and BI",
      items: ["Streamlit", "Pandas", "Plotly", "Business Intelligence dashboards"],
    },
    {
      category: "Cloud and Deployment",
      items: ["Microsoft Azure", "Vercel", "Railway"],
    },
    {
      category: "Engineering Practices",
      items: [
        "Security-by-design",
        "Row Level Security",
        "Realtime systems",
        "Performance optimization",
      ],
    },
  ],

  experience: [
    {
      role: "AI Cloud Administrator and Data Analyst",
      company: "Forvis Mazars",
      period: "Current",
      description:
        "Supports cloud-based AI solutions, data analysis, and reporting using Microsoft Azure.",
      keywords: ["Azure", "AI cloud", "data analysis", "reporting"],
    },
    {
      role: "Software Developer",
      company: "University of the Western Cape (UWC CoLab)",
      period: "Current",
      description:
        "Contributes to AI and software development projects by building full-stack applications, implementing AI solutions, and collaborating to deliver practical user-centered software.",
      keywords: ["full-stack", "AI solutions", "React", "ASP.NET Core", "Tailwind CSS"],
    },
  ],

  projects: [
    {
      id: "docchat",
      name: "DocChat",
      category: "AI",
      summary: "An AI app that lets users chat with their PDF documents using a full RAG pipeline.",
      description:
        "Production RAG application that converts PDFs into grounded conversational knowledge with real-time streamed answers and persistent conversation history.",
      problem:
        "Keyword search in long PDFs is slow and brittle; users struggle to find precise answers when wording differs from search terms.",
      solution:
        "Built an end-to-end Retrieval-Augmented Generation pipeline: extract PDF text, chunk with overlap, generate embeddings, retrieve top-matching chunks, and stream grounded answers.",
      myRole:
        "Built from scratch as a full-stack AI application, including pipeline design, implementation details, production deployment, and security controls.",
      buildTime: "5 weeks",
      phases: "4, end-to-end",
      deployment: ["Vercel", "Railway"],
      techStack: {
        frontend: ["Next.js App Router", "TypeScript", "Tailwind CSS"],
        backend: ["ASP.NET Core .NET 8 Minimal APIs", "C#"],
        ai: ["OpenAI text-embedding-ada-002", "OpenAI GPT-4o-mini"],
        database: ["Supabase PostgreSQL", "pgvector"],
        infrastructure: ["Supabase REST API", "Server-Sent Events"],
      },
      architecture: [
        "User uploads a PDF document.",
        "Backend extracts text with PdfPig.",
        "Document is chunked into 500-word chunks with 50-word overlap.",
        "Each chunk is embedded with OpenAI and stored in Supabase pgvector.",
        "User question is embedded and matched by cosine similarity.",
        "Top relevant chunks are passed to GPT-4o-mini as constrained context.",
        "Answer streams token-by-token and conversation history is persisted.",
      ],
      features: [
        "Auth flow: sign up, log in, log out with protected routes",
        "PDF upload and ingestion pipeline",
        "Grounded document Q&A with semantic retrieval",
        "Real-time streaming responses",
        "Conversation history persistence",
        "Multi-document support",
        "Two-step document deletion with cascading data cleanup",
      ],
      highlights: [
        "Complete production-grade RAG pipeline from ingestion to retrieval to streaming output",
        "Grounded responses constrained to document context",
        "Layered security across frontend, API, and database",
      ],
      engineeringHighlights: [
        "Implemented streaming token forwarding in C# using IAsyncEnumerable",
        "Solved Supabase vector casting gap via PostgreSQL RPC function",
        "Fixed shared HttpClient header race conditions with per-request HttpRequestMessage",
        "Designed relational schema with foreign keys and cascade deletes",
      ],
      challenges: [
        {
          challenge: "Streamed words joined together unexpectedly.",
          solution: "Replaced trim() with trimEnd() to preserve leading token spacing.",
        },
        {
          challenge: "Embeddings inserted as NULL through REST API.",
          solution: "Used a PostgreSQL function to cast embedding payload explicitly to vector.",
        },
        {
          challenge: "Concurrent auth failures with shared HttpClient headers.",
          solution: "Scoped headers per request using HttpRequestMessage.",
        },
        {
          challenge: "Date hydration mismatch between server and browser locale formatting.",
          solution: "Applied explicit locale and format options for deterministic rendering.",
        },
      ],
      outcomes: [
        "Enterprise-style RAG workflow from document ingestion to grounded streamed answers",
        "Production deployment with separate frontend and backend layers",
      ],
      lessonsLearned: [
        "RAG quality depends on chunking and retrieval strategy, not only model choice",
        "Production streaming reliability requires careful token and transport handling",
        "Security and data isolation must be enforced in multiple layers",
      ],
      links: {
        caseStudyPath: "/projects/docchat",
        liveUrl: "https://ai-document-chat-sigma.vercel.app",
        githubUrl: "https://github.com/Kholekile2/ai-document-chat",
      },
    },
    {
      id: "spliteasy",
      name: "SplitEasy",
      category: "Full-stack",
      summary:
        "A production expense-sharing app that minimizes settlement transactions using a custom debt simplification algorithm.",
      description:
        "Realtime shared-expense platform with secure multi-user workflows, group management, settlement tracking, and a C# algorithm that reduces transaction complexity.",
      problem:
        "Group expense tracking becomes confusing with many cross-debts, leading to high transaction complexity and poor settlement clarity.",
      solution:
        "Implemented structured expense logging, automatic equal splitting, and a greedy net-balance algorithm that computes the minimum required payments.",
      myRole:
        "Built the full-stack architecture, designed algorithmic settlement logic, implemented security controls, and deployed frontend and backend services.",
      buildTime: "~3 weeks",
      phases: "10, end-to-end",
      deployment: ["Vercel", "Railway"],
      techStack: {
        frontend: ["Next.js App Router", "TypeScript", "Tailwind CSS"],
        backend: ["ASP.NET Core Minimal APIs", "C#"],
        database: ["Supabase", "PostgreSQL", "Supabase Realtime"],
        tooling: ["jsPDF"],
      },
      architecture: [
        "Frontend provides authenticated group and expense workflows.",
        "Backend API executes business logic for groups, expenses, and settlements.",
        "Settlement endpoint computes net balances and simplified payments.",
        "Supabase PostgreSQL stores relational data with RLS protections.",
        "Realtime subscriptions propagate updates across active clients.",
      ],
      algorithm: {
        name: "Greedy debt simplification on net balances",
        steps: [
          "Calculate each member's net balance from expenses and settlements.",
          "Split members into debtors (negative) and creditors (positive).",
          "Repeatedly match largest debtor and creditor, settle min(amounts), and continue.",
          "Use a 0.01 threshold to avoid floating-point currency edge cases.",
        ],
      },
      features: [
        "Authentication and protected routes",
        "Create, manage, leave, and delete groups",
        "Invite members by email",
        "Expense creation with categories",
        "Automatic equal split",
        "Settlement summary and settle-up flow",
        "Realtime updates across clients",
        "Group statistics by total/payer/category",
        "PDF report export",
        "Deletion history tracking",
        "Account deletion",
      ],
      highlights: [
        "17 features delivered across end-to-end shared-expense workflow",
        "Custom C# algorithm reduces settlement to minimal payment steps",
        "Security-first implementation across database, API, and frontend",
      ],
      engineeringHighlights: [
        "Mixed Next.js server/client component strategy",
        "Realtime resiliency with refetch on subscription connect",
        "7-table relational schema with foreign keys, cascade deletes, and auth trigger",
        "DTO-based API contracts to avoid serialization pitfalls",
      ],
      security: [
        "Row Level Security on all relevant tables",
        "API-level group membership authorization checks",
        "Service-role key isolated to backend",
        "CORS restricted to trusted frontend origins",
        "Secrets managed via environment variables",
      ],
      challenges: [
        {
          challenge: "Supabase model serialization caused 500 errors.",
          solution: "Mapped response payloads to plain C# DTO records.",
        },
        {
          challenge: "Realtime delivery inconsistency due to RLS/event path differences.",
          solution: "Triggered refetch on subscription connection.",
        },
        {
          challenge: "Results.Forbid() failures in production.",
          solution: "Returned manual JSON 403 responses.",
        },
        {
          challenge: "Auth profile trigger missing after database reset.",
          solution: "Recreated trigger via SQL and backfilled existing users.",
        },
      ],
      outcomes: [
        "Reduces settlement complexity into minimal payment steps",
        "Production deployment with realtime multi-user workflows",
      ],
      lessonsLearned: [
        "Schema design and cascade behavior are foundational for reliable multi-user apps",
        "RLS must be paired with API-level authorization for defense-in-depth",
        "Production debugging requires log-driven, evidence-based troubleshooting",
      ],
      links: {
        caseStudyPath: "/projects/spliteasy",
        liveUrl: "https://spliteasy-alpha.vercel.app",
        githubUrl: "https://github.com/Kholekile2/spliteasy",
        apiHealthUrl: "https://spliteasy-production-09fc.up.railway.app/health",
      },
    },
    {
      id: "auto-analytics",
      name: "Auto Analytics Portal",
      category: "Business Intelligence",
      summary:
        "A BigQuery + Streamlit decision-support dashboard for used-car pricing strategy.",
      description:
        "Transforms raw vehicle records into pricing intelligence through SQL-driven analysis and interactive visualizations for valuation, inventory, and negotiation decisions.",
      problem:
        "Used-car pricing decisions are often inconsistent and intuition-based, causing margin risk and valuation uncertainty.",
      solution:
        "Built a BI workflow that quantifies key price drivers (brand, mileage, year, fuel type, transmission, model) and presents actionable insights through an interactive dashboard.",
      myRole:
        "Implemented dashboard architecture, BigQuery SQL analysis modules, visualization delivery, and interpretation of business implications.",
      techStack: {
        frontend: ["Streamlit"],
        data: ["Google BigQuery", "SQL", "Pandas"],
        visualization: ["Plotly Express", "Pillow (PIL)"],
      },
      architecture: [
        "Presentation layer: Streamlit pages with controls and visualizations.",
        "Data layer: BigQuery dataset and analytical table.",
        "User selects question, SQL runs in BigQuery, results are shaped in Pandas, and visualized in Plotly.",
        "Caching and selective sampling improve responsiveness and cost efficiency.",
      ],
      dataSource: {
        platform: "Google BigQuery",
        datasetTable: "datawarehouse1-468916.Car_Price_Prediction.CarPricePredictionTable",
      },
      analysisModules: [
        "Home page positioning and decision framing",
        "Explore page for fast analytical navigation",
        "Brand analysis",
        "Mileage vs price",
        "Year vs price",
        "Fuel type and transmission analysis",
        "Model analysis",
      ],
      highlights: [
        "Converts pricing uncertainty into evidence-based valuation signals",
        "Supports faster listing, negotiation, and stock positioning decisions",
        "Demonstrates warehouse-to-dashboard BI pipeline delivery",
      ],
      decisionFramework: [
        "Set baseline valuation by age and mileage",
        "Apply fuel/transmission premium adjustments",
        "Use model tiers for margin-vs-volume strategy",
        "Track consistency through repeatable dashboard views",
      ],
      portfolioFocus: [
        "BigQuery SQL query design and testing",
        "Streamlit multi-page architecture",
        "Interactive Plotly visualizations",
        "Performance optimization with caching and sampling",
        "Business insight communication",
      ],
      outcomes: [
        "Turns pricing uncertainty into repeatable valuation decisions",
        "Supports data-led commercial pricing strategy",
      ],
      links: {
        caseStudyPath: "/projects/auto-analytics",
        githubUrl: "https://github.com/Kholekile2/BIA715_DataExploration",
      },
    },
    {
      id: "medcare",
      name: "MedCare Booking System",
      category: "Healthcare Analytics",
      summary:
        "A healthcare operations platform combining specialist booking workflows with BigQuery-powered analytics.",
      description:
        "Integrates patient booking and administrator decision support through dashboard filtering, KPI tracking, specialty performance views, and revenue/capacity analytics.",
      problem:
        "Manual appointment coordination causes delays, poor specialist visibility, and high admin overhead.",
      solution:
        "Built a unified digital booking and BI environment with real-time operational visibility, enabling better staffing, utilization, and revenue decisions.",
      myRole:
        "Delivered the analytics and workflow system design, data model alignment, visualization modules, and operational decision framing.",
      techStack: {
        frontend: ["Streamlit"],
        data: ["Google BigQuery", "SQL", "Pandas"],
        visualization: ["Plotly"],
        application: ["Python"],
      },
      architecture: [
        "Presentation: Streamlit booking and analytics pages",
        "Application: Python workflow and validation logic",
        "Data: BigQuery relational model",
        "Fact-model approach centered on Bookings linked to Clients, Specialists, Dates, and TimeSlots",
      ],
      dataFlow: [
        "User interactions trigger BigQuery reads/writes",
        "Pandas performs shaping and metric aggregation",
        "Plotly visualizes utilization, specialist performance, and revenue trends",
        "Filter-driven views enable targeted diagnosis and planning",
      ],
      features: [
        "Patient-facing booking workflow",
        "Admin dashboard with advanced filtering",
        "KPI monitoring (bookings, revenue, specialist count, average booking value)",
        "Specialty performance analysis",
        "Revenue trends and peak-hours analytics",
        "Filtered raw data tables and CSV export",
        "Security controls and booking limits",
      ],
      highlights: [
        "Connects booking operations with live capacity and revenue insights",
        "Combines patient access and operational intelligence in one platform",
        "Enables managerial decision playbooks with measurable KPIs",
      ],
      decisionPlaybook: [
        "Use peak-hour insights to rebalance staffing",
        "Use specialty trends for recruitment and referral decisions",
        "Track booking value and revenue trends for risk detection",
        "Use date/specialist filters to evaluate interventions",
      ],
      challenges: [
        {
          challenge: "Multi-table query and integration complexity.",
          solution:
            "Resolved with iterative SQL testing, modular page design, and parameterized filtering.",
        },
        {
          challenge: "Maintaining dashboard consistency under multiple filters.",
          solution: "Applied defensive validation and filter-aware architecture.",
        },
      ],
      outcomes: [
        "Improved patient access and stronger administrator control",
        "Data-driven approach to service quality and facility performance improvement",
      ],
      links: {
        caseStudyPath: "/projects/medcare",
        githubUrl: "https://github.com/Kholekile2/Streamlit-Data-Exploration",
      },
    },
  ],

  recruiterFAQs: [
    {
      q: "What kind of roles are you currently open to?",
      a: "I am open to software engineering, data analytics, and AI-focused opportunities.",
    },
    {
      q: "What is your strongest differentiator as a candidate?",
      a: "I combine full-stack delivery with analytics and AI implementation, so I can ship products that are technically solid and decision-supportive.",
    },
    {
      q: "Do you have production deployment experience?",
      a: "Yes. My projects include production-style deployments across platforms like Vercel and Railway, with security and reliability considerations built in.",
    },
    {
      q: "How should recruiters contact you?",
      a: "Best by email at kholekilempengesi2000@gmail.com or via LinkedIn at https://www.linkedin.com/in/kholekilempengesi/.",
    },
  ],

  agentUseGuidelines: {
    tone: "Professional, concise, recruiter-friendly.",
    responsePolicy: [
      "Prefer facts from this data object before generating inferred claims.",
      "If a metric or date is unknown, say it is not specified instead of guessing.",
      "Use project links for proof when asked for evidence.",
      "Differentiate portfolio content from code implemented in this repository.",
    ],
  },
};

export default portfolioData;