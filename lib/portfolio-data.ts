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
      id: "meetingmind",
      name: "MeetingMind",
      category: "AI",
      summary:
        "An AI meeting intelligence app that turns transcripts into summaries, action items, decisions, and chat-ready context.",
      description:
        "Transcript-first meeting assistant that uses Anthropic Claude to structure meeting notes, stores uploaded media in Cloudinary, persists data in MongoDB Atlas, and lets users ask follow-up questions about what was discussed.",
      problem:
        "Meeting outcomes are easy to lose across long transcripts, scattered action items, and separate chat threads, which makes follow-up work harder than it should be.",
      solution:
        "Built an AI workflow that ingests meeting input, extracts structured JSON summaries, action items, and key decisions with Claude Haiku, stores the results in MongoDB, and keeps the transcript available for grounded follow-up questions.",
      myRole:
        "Designed and built the full-stack product, including the Next.js frontend, FastAPI backend, AI prompting, cloud storage integration, persistence model, and recruiter-friendly chat experience.",
      deployment: ["Vercel", "Railway", "Cloudinary", "MongoDB Atlas"],
      techStack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["FastAPI", "Python", "MongoDB"],
        ai: ["Anthropic Claude Haiku", "Structured JSON extraction", "Transcript-grounded chat"],
        database: ["MongoDB Atlas", "Persistent meeting records", "Chat history storage"],
        infrastructure: ["Clerk authentication", "Cloudinary audio storage", "CORS-protected API", "Background processing"],
      },
      architecture: [
        "Users sign in with Clerk, then upload a meeting transcript, audio file, or transcript document from the Next.js frontend.",
        "Audio assets are stored in Cloudinary so the backend can keep media separate from application data.",
        "FastAPI creates a meeting record in MongoDB and marks it pending before kicking off AI processing in the background.",
        "Claude Haiku converts the transcript into structured JSON containing the summary, action items, and key decisions.",
        "The chatbot endpoint reuses the stored transcript plus previous chat messages to answer follow-up questions about the meeting.",
        "Processed meetings and chat history stay persisted in MongoDB Atlas for later review.",
      ],
      features: [
        "Transcript upload, pasted text input, and document ingestion for txt, md, csv, rtf, and docx transcripts",
        "AI-generated meeting summaries with action items and owners",
        "Key decision extraction for quick executive review",
        "Meeting chat that answers questions using the transcript as context",
        "Persisted chat history per meeting",
        "Background AI processing with status updates from pending to completed or failed",
        "Cloud-based media storage for uploaded audio files",
      ],
      highlights: [
        "Uses Claude Haiku to turn messy meeting input into structured, recruiter-readable outcomes",
        "Separates cloud storage, persistence, and AI processing so the app scales cleanly",
        "Keeps chat answers grounded in the actual transcript instead of generic model memory",
      ],
      engineeringHighlights: [
        "FastAPI route handlers manage upload, retrieval, chat, and deletion flows with explicit ownership checks",
        "Background tasks update meeting state while AI processing runs asynchronously",
        "MongoDB stores users, meetings, and chat messages in a way that preserves full conversation history",
        "Cloudinary handles uploaded audio independently from application data to keep the backend focused on analysis",
      ],
      challenges: [
        {
          challenge: "Claude needed to return machine-readable meeting output.",
          solution:
            "Forced a strict JSON schema so summaries, action items, and decisions could be saved and rendered consistently.",
        },
        {
          challenge: "AI processing could not block the upload response.",
          solution:
            "Used asyncio.create_task so the UI returns immediately while the meeting is analysed in the background.",
        },
        {
          challenge: "Chat replies needed to stay grounded in the meeting itself.",
          solution:
            "Included the full transcript and previous messages in every prompt so follow-up answers stay specific and consistent.",
        },
        {
          challenge: "MongoDB Atlas SSL handshakes failed on Railway.",
          solution:
            "Worked around the Python 3.12 TLS mismatch with Atlas by adjusting the connection string and pool timeouts.",
        },
        {
          challenge: "Gemini was unreliable in production.",
          solution:
            "After 503 overload and 429 quota failures, the AI layer was switched to Anthropic Claude Haiku for stability.",
        },
        {
          challenge: "New Clerk users were not saved in the app database.",
          solution:
            "Added a Svix-verified webhook so every signup is mirrored into MongoDB as a local user profile.",
        },
        {
          challenge: "Deployment-only issues kept breaking the app.",
          solution:
            "Made CORS origin-driven, awaited Next.js 16 route params correctly, and forced a fresh Vercel build when cached pages hid UI changes.",
        },
      ],
      outcomes: [
        "Turns raw meeting input into structured actions, decisions, and searchable history",
        "Provides a cloud-backed workflow that is practical for real post-meeting follow-up",
      ],
      lessonsLearned: [
        "Structured outputs are essential when AI responses need to power a product UI",
        "Cloud storage and database persistence should be separated so each layer has one job",
        "Background processing makes AI workflows feel responsive instead of blocking the user",
      ],
      links: {
        caseStudyPath: "/projects/meetingmind",
        liveUrl: "https://meetingmind-sigma.vercel.app",
        githubUrl: "https://github.com/Kholekile2/meetingmind",
      },
    },
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
    {
      id: "student-support-insights",
      name: "Student Support Insights Tool",
      category: "Data & Ethics",
      shortDescription:
        "Responsible-by-design data tool that helps educational programmes identify learner support needs early — with architecturally-enforced consent, validation as ethical safeguard, and ethics-as-code tests.",
      tagline: "Identifying need triggers support, not judgement.",
      summary:
        "A responsible-by-design data tool that helps educational programmes identify learner support needs before learners disengage.",
      description:
        "Three-page Streamlit application with architecturally-enforced consent, validation pipeline that surfaces data quality issues, and ethics-enforced-in-code test suite.",
      problem:
        "Digital-skills programmes collect detailed learner data at intake but rarely use it for early support. Problems are noticed late, support is reactive, and learners least able to ask for help are most likely to disengage quietly.",
      solution:
        "Built a three-page Streamlit application that identifies learner need and triggers support through aggregate dashboards with no names, individual learner pages that surface stated need first, and architecturally-enforced consent guards.",
      myRole:
        "Designed the end-to-end system including the data validation pipeline, recommendation engine, ethical design enforcement in code, and the three-page application architecture.",
      buildTime: "~4 weeks",
      phases: "SFIA Level 3 integrated project",
      techStack: {
        language: ["Python 3.11"],
        frontend: ["Streamlit"],
        data: ["pandas", "Plotly"],
        testing: ["pytest"],
        tools: ["Git", "GitHub", "VS Code"],
      },
      architecture: [
        "UI Layer: Three Streamlit pages (Dashboard, Learner Detail, About) each with consent guards",
        "Logic Layer: Rule-based recommendation engine and validation pipeline in utils/, tested separately from UI",
        "Data Layer: Synthetic CSV dataset with documented data dictionary defining the consent boundary",
      ],
      features: [
        "Three-page Streamlit application: Dashboard, Learner Detail, and About",
        "Eight sidebar filters that combine to narrow the dashboard view to any subgroup of learners",
        "Four colour-coded KPIs and six charts organised into Reach / Struggle / Voice story rows",
        "Live-computed insights and recommendations panels that update as filters change",
        "Binding per-session responsible-use agreement that gates all data access — enforced on every page with personal data",
        "Learner Detail view that surfaces the learner's own stated need first and pairs every signal with a concrete support action",
        "Accountability form on the Learner Detail page for staff to record what was actually done",
        "Filtered CSV export with optional inclusion of rows flagged for data quality issues",
        "CSV upload with schema validation — missing required columns produce a clear error",
      ],
      highlights: [
        "Helping path easier than harming path — every signal paired with a support action",
        "Learner's voice ranks first — stated need shown before system inferences, enforced in code",
        "Consent is architectural — no data renders until user identifies and agrees to responsible-use statement",
        "Validation as ethical safeguard — bad data is surfaced, not silently fixed",
      ],
      engineeringHighlights: [
        "Single-source-of-truth architecture: all data flows through one loader module, so the data dictionary, validation rules, and test suite move together",
        "Validation pipeline that surfaces data quality issues (duplicates, out-of-range scores, malformed entries) rather than silently cleaning them",
        "Eight pytest test cases — two of which enforce ethical design rules in code (every learner gets at least one recommendation; stated need always ranks first)",
        "Five documented bugs with full root-cause analysis, including a consent-gate bypass on the Learner Detail page found through user-led testing",
        "Rule-based recommendation engine that is fully traceable — every suggestion the tool makes can be traced back to a transparent rule",
        "Confidence bands derived on every data load rather than stored in the CSV, so the source of truth stays the raw score",
      ],
      challenges: [
        {
          challenge: "Consent gate bypass on the Learner Detail page",
          solution:
            "The agreement guard was implemented in app.py but not actually present in pages/1_Learner_Detail.py — so navigating directly to the Learner Detail URL bypassed consent entirely. Fixed by inserting the guard as the first Streamlit operation after set_page_config, before any title, data load, or UI renders. The most serious bug in the project, and the one I'm most glad I caught through testing rather than after submission.",
        },
        {
          challenge: "Sample-size honesty in the dashboard charts",
          solution:
            "A 1.67 average from three respondents isn't really an average — it's three opinions in a row. Added sample size annotations (n=3, n=20, etc.) above every chart bar so small samples can't be over-interpreted, and used lighter bar colours when n is below 5 as a visual cue.",
        },
        {
          challenge: "0÷0 division crashes on small filter selections",
          solution:
            "When a filter produced a subset where one device-access category had zero learners, the percentage calculation hit 0÷0 and the page crashed with IntCastingNaNError. Replaced zero row sums with NaN before division and built chart labels using a NaN-safe function so empty groups now produce a graceful caption instead of a crash.",
        },
        {
          challenge: "Telling the story of the analysis honestly",
          solution:
            "One finding (90% of phone-only learners are at Medium or High attendance risk) was so striking it was tempting to lead the report with it. But that framing reads as judging phone-only learners. Reframed every finding to pair the constraint with the supportive response — same fact, different action, no judgement implied.",
        },
      ],
      outcomes: [
        "Turns learner data into early support triggers instead of late-stage judgement",
        "Provides a framework for responsible data use in educational contexts",
      ],
      lessonsLearned: [
        "Data is a way of shaping how people think about other people — every column you decide to collect is a decision about what you're allowed to judge someone on",
        "Validation belongs in the architecture, not in documentation. A test that asserts an ethical design rule is enforcement; a paragraph claiming the same rule is hope",
        "The type of a column tells you what questions you're allowed to ask of it. Categorical columns get distributions; numerical columns get averages; mixing them up produces nonsense",
        "Reading a chart and writing about a chart are two different steps. You have to reconcile what you wrote against what the chart actually shows, line by line, before submission",
        "Single source of truth makes refactoring safe. When the data dictionary, the loader, and the test suite all reference each other, a change in one forces matching changes in the others",
      ],
      thumbnail: "/projects/student-support-insights/dashboard.png",
      links: {
        caseStudyPath: "/projects/student-support-insights",
        githubUrl: "https://github.com/Kholekile2/StudentSupportTool-",
      },
    },
    {
      id: "global-superstore-regional-profitability",
      name: "Global Superstore: Regional Profitability Analysis",
      shortDescription:
        "An Excel analysis of around 51,000 orders across 13 regions to find where a global retailer loses money and what actually drives it — testing the discounting hypothesis, ruling out shipping, and ending with a four-chart dashboard of recommendations.",
      tagline: "The striking finding is rarely the whole story.",
      thumbnail: "/projects/global-superstore-regional-profitability/dashboard.png",
      links: {
        caseStudyPath: "/projects/global-superstore-regional-profitability",
        githubUrl: "https://github.com/Kholekile2/Global-superstore-regional-profitability",
      },
      techStack: {
        tools: ["Microsoft Excel"],
        data: ["XLOOKUP", "PivotTables", "calculated fields", "data validation", "data mapping"],
        skills: [
          "data cleaning",
          "hypothesis testing",
          "ruling out alternative explanations",
          "dashboard design",
          "translating analysis into recommendations",
        ],
      },
      features: [
        "Cleaned and validated ~51,000 order line items, including converting text dates into usable dates.",
        "Calculated profit margin and shipping delay fields derived on load rather than trusted from the source.",
        "XLOOKUP-based mapping of regional margin targets onto every row, with a Met Target verdict column.",
        "PivotTable analysis comparing profit, sales, margin, and discount across 13 regions.",
        "Shipping cost and delay tested as alternative causes and ruled out.",
        "Sub-category drill-down within the loss making regions, with the most extreme finding checked against its sample size.",
        "Four-chart dashboard arranged as a single argument, with each chart titled by its finding.",
      ],
      lessonsLearned: [
        "Test your own conclusion before trusting it. The fix that mattered most was actively trying to disprove the discounting hypothesis by checking shipping, rather than only gathering support for it.",
        "Total profit can hide an unhealthy business. Margin, not raw total, is what reveals whether each sale is actually healthy.",
        "Position on screen is not the same as rank by value. Sorting a pivot by the number you care about prevents reading a high-up row as the highest value.",
        "A dramatic number deserves a look at its sample size. The most extreme result rested on the fewest sales, so it earned a caveat rather than a headline.",
        "Be honest about what data can and cannot claim. The analysis shows discounting is associated with the losses, not that it is the proven sole cause.",
      ],
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