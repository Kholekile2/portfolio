const portfolioData = {
  profile: {
    name: "Kholekile Mpengesi",
    headline: "Data Analyst | SQL, Power BI, Python | Background in Backend Development",
    role: "Data Analyst",
    location: "Cape Town, South Africa",
    availability: "Immediately",
    summary:
      "I work in data analytics with a background in software development that I still draw on when a project needs it. Most of my experience has come from paid client projects for small businesses through the UWC Future Innovation Lab, plus a Cloud Administrator and Data Analyst apprenticeship at Forvis Mazars.",
    shortPitch:
      "Data analyst with a completed Postgraduate Diploma in Data Analysis and Business Intelligence from UWC. Experience in SQL, Power BI, Python, and Microsoft Azure, from client work at the UWC Future Innovation Lab and an apprenticeship at Forvis Mazars.",
    currentFocus: [
      "Data cleaning, SQL analysis, and BI dashboards for small business contexts",
      "Building practical skills under more senior analysts at Forvis Mazars",
      "Looking for a role to apply existing knowledge and keep growing",
    ],
    portfolioMetadata: {
      siteTitle: "Kholekile Mpengesi | Portfolio",
      siteDescription:
        "Portfolio of Kholekile Mpengesi, a data analyst based in Cape Town with a background in backend development.",
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
      category: "Primary (data work)",
      items: [
        "SQL (PostgreSQL, MySQL, SQLite, Microsoft SQL Server, BigQuery)",
        "Microsoft Excel (PivotTables, XLOOKUP, VBA)",
        "Microsoft Power BI (Power Query, DAX)",
        "Python (pandas, NumPy, scikit-learn, XGBoost, SHAP)",
        "R",
        "Microsoft Azure",
      ],
    },
    {
      category: "Secondary (from backend development background)",
      items: [
        "C# and ASP.NET Core",
        "MySQL and Entity Framework",
        "Next.js and TypeScript",
        "Git and GitHub",
      ],
    },
  ],

  experience: [
    {
      role: "Cloud Administrator and Data Analyst (Apprenticeship)",
      company: "Forvis Mazars",
      period: "Current",
      description:
        "Apprenticeship at a global audit and advisory firm. The programme is built around Microsoft Azure administration and certification, with most day to day work covering data analytics, SQL, Power BI dashboards, and report accuracy checks.",
      keywords: ["Azure", "SQL", "Power BI", "data analytics", "reporting", "apprenticeship"],
    },
    {
      role: "Data Analyst and Backend Developer",
      company: "UWC Future Innovation Lab",
      period: "August 2024 to present",
      description:
        "Paid client work for small businesses across retail and food service. Analytics work covers data cleaning, dashboards, reports, and light modelling. Largest engagement was Feedem (October 2024), a food service business on the UWC campus. Also served as Technical Lead on KhathalaCare, a healthcare provider discovery web application, and contributed to MzansiMed GPT, a Gates Foundation funded multilingual healthcare assistant.",
      keywords: ["SQL", "Python", "Power BI", "data cleaning", "dashboards", "client work", "KhathalaCare", "MzansiMed GPT", "Feedem"],
    },
  ],

  certifications: [
    {
      name: "Azure Developer Associate (AZ-204)",
      issuer: "Microsoft",
    },
    {
      name: "Azure AI Engineer Associate (AI-102)",
      issuer: "Microsoft",
    },
    {
      name: "Power BI for Beginners",
      issuer: "Simplilearn",
    },
    {
      name: "SQL and Relational Databases 101",
      issuer: "Cognitive Class",
    },
  ],

  projects: [
    {
      id: "meetingmind",
      name: "MeetingMind",
      category: "AI",
      {
        id: "employee-attrition-power-bi",
        name: "Employee Attrition Analysis",
        category: "Business Intelligence",
        summary:
          "A Power BI case study that shows employee attrition is concentrated in Sales Representatives, with overtime as the strongest risk driver.",
        description:
          "IBM HR Analytics project that traces attrition across department, job role, overtime, satisfaction, tenure, and compensation, then packages the findings into a decision oriented dashboard.",
        problem:
          "A company wide attrition rate can hide a concentrated role level problem, so the real question is where the risk sits and what is actually driving it.",
        solution:
          "Built a Power BI dashboard that separates company wide averages from role level risk, checks leading explanations against confounders, and centers the story on retention, risk headcount, and cost of attrition.",
        myRole:
          "Analysed the IBM HR dataset, developed the dashboard structure, tested the major risk drivers, and wrote the case study narrative around the business interpretation of the findings.",
        thumbnail: "/projects/employee-attrition-power-bi/dashboard.png",
        techStack: {
          tools: ["Microsoft Power BI"],
          data: ["Power Query", "DAX (CALCULATE, DIVIDE, AVERAGE)", "data modelling", "KPI design"],
          skills: [
            "business framing",
            "hypothesis testing",
            "checking for confounding variables",
            "dashboard design",
            "turning findings into recommendations",
          ],
        },
        features: [
          "Found that Sales Representative carries a 40 percent attrition rate, nearly double the department figure it sits inside.",
          "Identified overtime as the strongest factor tied to attrition, tripling the rate across almost every group tested.",
          "Found that 231 current employees match the highest risk profile in the company, 0 to 5 years tenure and working overtime.",
          "Checked the pay gap between leavers and stayers against job level as a confounding variable, and found it holds up within a single role.",
          "Built the dashboard around retention rate, estimated cost of attrition, and high risk headcount, not just attrition rate on its own.",
        ],
        lessonsLearned: [
          "Framing the work as a business question matters more than the tool used to answer it.",
          "A rate and a headcount answer different questions, and a business usually plans around the headcount.",
          "Testing your strongest explanation against the others is part of the job, not an optional extra.",
          "A department level number can hide a role level problem, which is why the Sales Representative result mattered more than the company average.",
          "Being explicit about what a snapshot dataset cannot show makes the findings that remain more trustworthy.",
        ],
        links: {
          caseStudyPath: "/projects/employee-attrition-power-bi",
          githubUrl: "https://github.com/Kholekile2/employee-attrition-power-bi",
        },
      },
      summary:
        "An AI meeting intelligence app that turns transcripts into summaries, action items, decisions, and chat ready context.",
      description:
        "Transcript first meeting assistant that uses Anthropic Claude to structure meeting notes, stores uploaded media in Cloudinary, persists data in MongoDB Atlas, and lets users ask follow up questions about what was discussed.",
      problem:
        "Meeting outcomes are easy to lose across long transcripts, scattered action items, and separate chat threads, which makes follow up work harder than it should be.",
      solution:
        "Built an AI workflow that ingests meeting input, extracts structured JSON summaries, action items, and key decisions with Claude Haiku, stores the results in MongoDB, and keeps the transcript available for grounded follow up questions.",
      myRole:
        "Designed and built the full stack product, including the Next.js frontend, FastAPI backend, AI prompting, cloud storage integration, persistence model, and recruiter friendly chat experience.",
      deployment: ["Vercel", "Railway", "Cloudinary", "MongoDB Atlas"],
      techStack: {
        frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["FastAPI", "Python", "MongoDB"],
        ai: ["Anthropic Claude Haiku", "Structured JSON extraction", "Transcript grounded chat"],
        database: ["MongoDB Atlas", "Persistent meeting records", "Chat history storage"],
        infrastructure: ["Clerk authentication", "Cloudinary audio storage", "CORS protected API", "Background processing"],
      },
      architecture: [
        "Users sign in with Clerk, then upload a meeting transcript, audio file, or transcript document from the Next.js frontend.",
        "Audio assets are stored in Cloudinary so the backend can keep media separate from application data.",
        "FastAPI creates a meeting record in MongoDB and marks it pending before kicking off AI processing in the background.",
        "Claude Haiku converts the transcript into structured JSON containing the summary, action items, and key decisions.",
        "The chatbot endpoint reuses the stored transcript plus previous chat messages to answer follow up questions about the meeting.",
        "Processed meetings and chat history stay persisted in MongoDB Atlas for later review.",
      ],
      features: [
        "Transcript upload, pasted text input, and document ingestion for txt, md, csv, rtf, and docx transcripts",
        "AI generated meeting summaries with action items and owners",
        "Key decision extraction for quick executive review",
        "Meeting chat that answers questions using the transcript as context",
        "Persisted chat history per meeting",
        "Background AI processing with status updates from pending to completed or failed",
        "Cloud based media storage for uploaded audio files",
      ],
      highlights: [
        "Uses Claude Haiku to turn messy meeting input into structured, recruiter readable outcomes",
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
          challenge: "Claude needed to return machine readable meeting output.",
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
            "Included the full transcript and previous messages in every prompt so follow up answers stay specific and consistent.",
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
            "Added a Svix verified webhook so every signup is mirrored into MongoDB as a local user profile.",
        },
        {
          challenge: "Deployment only issues kept breaking the app.",
          solution:
            "Made CORS origin driven, awaited Next.js 16 route params correctly, and forced a fresh Vercel build when cached pages hid UI changes.",
        },
      ],
      outcomes: [
        "Turns raw meeting input into structured actions, decisions, and searchable history",
        "Provides a cloud backed workflow that is practical for real post meeting follow up",
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
        "Production RAG application that converts PDFs into grounded conversational knowledge with real time streamed answers and persistent conversation history.",
      problem:
        "Keyword search in long PDFs is slow and brittle; users struggle to find precise answers when wording differs from search terms.",
      solution:
        "Built an end to end Retrieval Augmented Generation pipeline: extract PDF text, chunk with overlap, generate embeddings, retrieve top matching chunks, and stream grounded answers.",
      myRole:
        "Built from scratch as a full stack AI application, including pipeline design, implementation details, production deployment, and security controls.",
      buildTime: "5 weeks",
      phases: "4, end to end",
      deployment: ["Vercel", "Railway"],
      techStack: {
        frontend: ["Next.js App Router", "TypeScript", "Tailwind CSS"],
        backend: ["ASP.NET Core .NET 8 Minimal APIs", "C#"],
        ai: ["OpenAI text-embedding-ada-002", "OpenAI GPT-4o-mini"],
        database: ["Supabase PostgreSQL", "pgvector"],
        infrastructure: ["Supabase REST API", "Server Sent Events"],
      },
      architecture: [
        "User uploads a PDF document.",
        "Backend extracts text with PdfPig.",
        "Document is chunked into 500-word chunks with 50-word overlap.",
        "Each chunk is embedded with OpenAI and stored in Supabase pgvector.",
        "User question is embedded and matched by cosine similarity.",
        "Top relevant chunks are passed to GPT-4o-mini as constrained context.",
        "Answer streams token by token and conversation history is persisted.",
      ],
      features: [
        "Auth flow: sign up, log in, log out with protected routes",
        "PDF upload and ingestion pipeline",
        "Grounded document Q&A with semantic retrieval",
        "Real time streaming responses",
        "Conversation history persistence",
        "Multi document support",
        "Two step document deletion with cascading data cleanup",
      ],
      highlights: [
        "Complete production grade RAG pipeline from ingestion to retrieval to streaming output",
        "Grounded responses constrained to document context",
        "Layered security across frontend, API, and database",
      ],
      engineeringHighlights: [
        "Implemented streaming token forwarding in C# using IAsyncEnumerable",
        "Solved Supabase vector casting gap via PostgreSQL RPC function",
        "Fixed shared HttpClient header race conditions with per request HttpRequestMessage",
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
        "Enterprise style RAG workflow from document ingestion to grounded streamed answers",
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
      category: "Full stack",
      summary:
        "A production expense sharing app that minimizes settlement transactions using a custom debt simplification algorithm.",
      description:
        "Realtime shared expense platform with secure multi user workflows, group management, settlement tracking, and a C# algorithm that reduces transaction complexity.",
      problem:
        "Group expense tracking becomes confusing with many cross debts, leading to high transaction complexity and poor settlement clarity.",
      solution:
        "Implemented structured expense logging, automatic equal splitting, and a greedy net balance algorithm that computes the minimum required payments.",
      myRole:
        "Built the full stack architecture, designed algorithmic settlement logic, implemented security controls, and deployed frontend and backend services.",
      buildTime: "~3 weeks",
      phases: "10, end to end",
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
          "Use a 0.01 threshold to avoid floating point currency edge cases.",
        ],
      },
      features: [
        "Authentication and protected routes",
        "Create, manage, leave, and delete groups",
        "Invite members by email",
        "Expense creation with categories",
        "Automatic equal split",
        "Settlement summary and settle up flow",
        "Realtime updates across clients",
        "Group statistics by total/payer/category",
        "PDF report export",
        "Deletion history tracking",
        "Account deletion",
      ],
      highlights: [
        "17 features delivered across end to end shared expense workflow",
        "Custom C# algorithm reduces settlement to minimal payment steps",
        "Security first implementation across database, API, and frontend",
      ],
      engineeringHighlights: [
        "Mixed Next.js server and client component strategy",
        "Realtime resiliency with refetch on subscription connect",
        "7 table relational schema with foreign keys, cascade deletes, and auth trigger",
        "DTO based API contracts to avoid serialization pitfalls",
      ],
      security: [
        "Row Level Security on all relevant tables",
        "API level group membership authorization checks",
        "Service role key isolated to backend",
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
        "Production deployment with realtime multi user workflows",
      ],
      lessonsLearned: [
        "Schema design and cascade behavior are foundational for reliable multi user apps",
        "RLS must be paired with API level authorization for defense in depth",
        "Production debugging requires log driven, evidence based troubleshooting",
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
        "A BigQuery + Streamlit decision support dashboard for used car pricing strategy.",
      description:
        "Transforms raw vehicle records into pricing intelligence through SQL driven analysis and interactive visualizations for valuation, inventory, and negotiation decisions.",
      problem:
        "Used car pricing decisions are often inconsistent and intuition based, causing margin risk and valuation uncertainty.",
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
        "Converts pricing uncertainty into evidence based valuation signals",
        "Supports faster listing, negotiation, and stock positioning decisions",
        "Demonstrates warehouse to dashboard BI pipeline delivery",
      ],
      decisionFramework: [
        "Set baseline valuation by age and mileage",
        "Apply fuel and transmission premium adjustments",
        "Use model tiers for margin vs volume strategy",
        "Track consistency through repeatable dashboard views",
      ],
      portfolioFocus: [
        "BigQuery SQL query design and testing",
        "Streamlit multi page architecture",
        "Interactive Plotly visualizations",
        "Performance optimization with caching and sampling",
        "Business insight communication",
      ],
      outcomes: [
        "Turns pricing uncertainty into repeatable valuation decisions",
        "Supports data led commercial pricing strategy",
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
        "A healthcare operations platform combining specialist booking workflows with BigQuery powered analytics.",
      description:
        "Integrates patient booking and administrator decision support through dashboard filtering, KPI tracking, specialty performance views, and revenue/capacity analytics.",
      problem:
        "Manual appointment coordination causes delays, poor specialist visibility, and high admin overhead.",
      solution:
        "Built a unified digital booking and BI environment with real time operational visibility, enabling better staffing, utilization, and revenue decisions.",
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
        "Fact model approach centered on Bookings linked to Clients, Specialists, Dates, and TimeSlots",
      ],
      dataFlow: [
        "User interactions trigger BigQuery reads/writes",
        "Pandas performs shaping and metric aggregation",
        "Plotly visualizes utilization, specialist performance, and revenue trends",
        "Filter driven views enable targeted diagnosis and planning",
      ],
      features: [
        "Patient facing booking workflow",
        "Admin dashboard with advanced filtering",
        "KPI monitoring (bookings, revenue, specialist count, average booking value)",
        "Specialty performance analysis",
        "Revenue trends and peak hours analytics",
        "Filtered raw data tables and CSV export",
        "Security controls and booking limits",
      ],
      highlights: [
        "Connects booking operations with live capacity and revenue insights",
        "Combines patient access and operational intelligence in one platform",
        "Enables managerial decision playbooks with measurable KPIs",
      ],
      decisionPlaybook: [
        "Use peak hour insights to rebalance staffing",
        "Use specialty trends for recruitment and referral decisions",
        "Track booking value and revenue trends for risk detection",
        "Use date/specialist filters to evaluate interventions",
      ],
      challenges: [
        {
          challenge: "Multi table query and integration complexity.",
          solution:
            "Resolved with iterative SQL testing, modular page design, and parameterized filtering.",
        },
        {
          challenge: "Maintaining dashboard consistency under multiple filters.",
          solution: "Applied defensive validation and filter aware architecture.",
        },
      ],
      outcomes: [
        "Improved patient access and stronger administrator control",
        "Data led approach to service quality and facility performance improvement",
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
        "Responsible by design data tool that helps educational programmes identify learner support needs early, with architecturally enforced consent, validation as ethical safeguard, and ethics as code tests.",
      tagline: "Identifying need triggers support, not judgement.",
      summary:
        "A responsible by design data tool that helps educational programmes identify learner support needs before learners disengage.",
      description:
        "Three page Streamlit application with architecturally enforced consent, validation pipeline that surfaces data quality issues, and ethics enforced in code test suite.",
      problem:
        "Digital skills programmes collect detailed learner data at intake but rarely use it for early support. Problems are noticed late, support is reactive, and learners least able to ask for help are most likely to disengage quietly.",
      solution:
        "Built a three page Streamlit application that identifies learner need and triggers support through aggregate dashboards with no names, individual learner pages that surface stated need first, and architecturally enforced consent guards.",
      myRole:
        "Designed the end to end system including the data validation pipeline, recommendation engine, ethical design enforcement in code, and the three page application architecture.",
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
        "Logic Layer: Rule based recommendation engine and validation pipeline in utils/, tested separately from UI",
        "Data Layer: Synthetic CSV dataset with documented data dictionary defining the consent boundary",
      ],
      features: [
        "Three page Streamlit application: Dashboard, Learner Detail, and About",
        "Eight sidebar filters that combine to narrow the dashboard view to any subgroup of learners",
        "Four colour coded KPIs and six charts organised into Reach / Struggle / Voice story rows",
        "Live computed insights and recommendations panels that update as filters change",
        "Binding per session responsible use agreement that gates all data access, enforced on every page with personal data",
        "Learner Detail view that surfaces the learner's own stated need first and pairs every signal with a concrete support action",
        "Accountability form on the Learner Detail page for staff to record what was actually done",
        "Filtered CSV export with optional inclusion of rows flagged for data quality issues",
        "CSV upload with schema validation, missing required columns produce a clear error",
      ],
      highlights: [
        "Helping path easier than harming path, every signal paired with a support action",
        "Learner's voice ranks first, stated need shown before system inferences, enforced in code",
        "Consent is architectural, no data renders until user identifies and agrees to responsible use statement",
        "Validation as ethical safeguard, bad data is surfaced, not silently fixed",
      ],
      engineeringHighlights: [
        "Single source of truth architecture: all data flows through one loader module, so the data dictionary, validation rules, and test suite move together",
        "Validation pipeline that surfaces data quality issues (duplicates, out of range scores, malformed entries) rather than silently cleaning them",
        "Eight pytest test cases, two of which enforce ethical design rules in code (every learner gets at least one recommendation; stated need always ranks first)",
        "Five documented bugs with full root cause analysis, including a consent gate bypass on the Learner Detail page found through user led testing",
        "Rule based recommendation engine that is fully traceable, every suggestion the tool makes can be traced back to a transparent rule",
        "Confidence bands derived on every data load rather than stored in the CSV, so the source of truth stays the raw score",
      ],
      challenges: [
        {
          challenge: "Consent gate bypass on the Learner Detail page",
          solution:
            "The agreement guard was implemented in app.py but not actually present in pages/1_Learner_Detail.py, so navigating directly to the Learner Detail URL bypassed consent entirely. Fixed by inserting the guard as the first Streamlit operation after set_page_config, before any title, data load, or UI renders. The most serious bug in the project, and the one I'm most glad I caught through testing rather than after submission.",
        },
        {
          challenge: "Sample size honesty in the dashboard charts",
          solution:
            "A 1.67 average from three respondents isn't really an average. It's three opinions in a row. Added sample size annotations (n=3, n=20, etc.) above every chart bar so small samples can't be over interpreted, and used lighter bar colours when n is below 5 as a visual cue.",
        },
        {
          challenge: "0÷0 division crashes on small filter selections",
          solution:
            "When a filter produced a subset where one device access category had zero learners, the percentage calculation hit 0÷0 and the page crashed with IntCastingNaNError. Replaced zero row sums with NaN before division and built chart labels using a NaN safe function so empty groups now produce a graceful caption instead of a crash.",
        },
        {
          challenge: "Telling the story of the analysis honestly",
          solution:
            "One finding (90% of phone only learners are at Medium or High attendance risk) was so striking it was tempting to lead the report with it. But that framing reads as judging phone only learners. Reframed every finding to pair the constraint with the supportive response, same fact, different action, no judgement implied.",
        },
      ],
      outcomes: [
        "Turns learner data into early support triggers instead of late stage judgement",
        "Provides a framework for responsible data use in educational contexts",
      ],
      lessonsLearned: [
        "Data is a way of shaping how people think about other people, every column you decide to collect is a decision about what you're allowed to judge someone on",
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
      id: "medical-billing-delay-prediction",
      name: "Medical Billing Delay Prediction",
      category: "Applied Research",
      shortDescription:
        "Predictive analytics study that identifies private patient invoices likely to be processed beyond a 14 day threshold, using XGBoost and SHAP on 50,000 real world records from a South African medical billing bureau.",
      tagline: "Catching delays at the point of capture, not in the collection queue.",
      summary:
        "Classification model that flags private patient invoices likely to exceed a 14 day processing threshold, built on 50,000 real records from a South African medical billing bureau using CRISP-DM, XGBoost, and SHAP explainability.",
      problem:
        "Medical billing bureaus carry the cash flow risk of every unresolved invoice. Roughly 24% of the bureau's private patient invoices were delayed beyond the 14 day threshold, but interventions only happened reactively, after delays had already occurred and turned into collection efforts.",
      solution:
        "Built and evaluated four classifiers (Logistic Regression, Decision Tree, Random Forest, XGBoost) on a 50,000 record dataset, selected XGBoost via bootstrap confidence interval analysis for its recall advantage, and applied SHAP TreeExplainer to translate predictions into a risk based triage map for billing administrators.",
      myRole:
        "Sole researcher and analyst. Designed the study, performed all data cleaning and feature engineering, built and evaluated the models, conducted bootstrap statistical analysis, applied SHAP explainability, and translated findings into operational recommendations, as a postgraduate Applied Research Project for BIA 716 at the University of the Western Cape.",
      deployment: [],
      techStack: {
        language: ["Python 3.12"],
        modelling: ["scikit-learn", "XGBoost"],
        data: ["pandas", "numpy", "scipy"],
        explainability: ["SHAP"],
        tools: ["Jupyter", "matplotlib", "seaborn", "Git", "GitHub", "PyCharm"],
      },
      architecture: [
        "CRISP-DM methodology applied end to end across business understanding, data understanding, preparation, modelling, evaluation, and deployment recommendations.",
        "50,000 record dataset cleaned and reduced from 32 raw variables to 6 predictors through quality screening, Cramér's V association testing, and pairwise multicollinearity assessment.",
        "Four classifiers built and compared on a held-out test set of 15,000 records: Logistic Regression, Decision Tree, Random Forest, and XGBoost.",
        "Bootstrap confidence interval analysis (1,000 paired resamples) used to test whether metric differences between ensemble models were statistically meaningful.",
        "XGBoost selected as final model based on its statistically significant recall advantage, the metric prioritised for the bureau's cost asymmetry.",
        "SHAP TreeExplainer applied to the full test set, with global importance, beeswarm, dependence plots, and waterfalls used to produce an operational triage map.",
      ],
      features: [
        "Binary classification of private patient invoices as Timely or Delayed at the point of capture.",
        "Bootstrap confidence interval procedure comparing five metrics across 1,000 test set resamples.",
        "SHAP derived risk triage map identifying facility type and specialty combinations that consistently push toward delay.",
        "Documented variable consolidation mappings reducing high cardinality categoricals to clinically meaningful groups.",
        "Stratified 70/30 train test split preserving the 75.9/24.1 class distribution across the full 50,000 records.",
        "Age.Bracket data leakage analysis with proposed two model architecture to resolve it in production.",
      ],
      highlights: [
        "XGBoost achieved ROC-AUC of 0.7570 and recall of 70.04%, meeting the study's acceptance threshold.",
        "Bootstrap analysis revealed the two ensemble models were statistically tied on three of five metrics, with XGBoost winning on recall, the metric that mattered most.",
        "SHAP identified Hospital facility type and Mental Health/General Practice specialties as the strongest risk drivers, translating model output into operational guidance.",
      ],
      engineeringHighlights: [
        "Bootstrap confidence interval analysis (1,000 paired resamples) used to test whether the metric differences between Random Forest and XGBoost were statistically meaningful, not just visually different. The procedure revealed the two models were tied on three of five metrics and split the wins on the other two.",
        "Recall prioritised model selection grounded in the bureau's operational cost asymmetry, where missing a delayed invoice costs more than investigating a false alarm. XGBoost was chosen for its statistically significant recall advantage rather than its best on paper accuracy.",
        "End to end variable engineering from 32 raw fields to a final set of 6 predictors, including consolidation of 118 Specialty naming variants into 9 clinical groups, 2,387 ICD-10 codes into 9 chapters, and 730 Service.Centre names into 9 facility types via keyword matching.",
        "SHAP TreeExplainer applied to the full 15,000 record test set on the selected XGBoost model. Global importance, beeswarm direction, dependence plots, and individual prediction waterfalls used together to turn model behaviour into operational triage guidance.",
        "Age.Bracket data leakage flagged honestly as a study limitation. The variable updates dynamically with time, so the strong Timely push it produces in training partly reflects time yet to pass rather than a signal available at the point of capture, and the report says so.",
        "Reproducibility built in from the start: stratified 70/30 split, all four models trained with random_state set to the student number, and a documented preparation pipeline that takes the raw dataset to the modelling table without dropping any records.",
      ],
      challenges: [
        {
          challenge: "Random Forest and XGBoost split the wins almost evenly on the test set",
          solution:
            "The two ensemble models produced metric differences of fractions of a percentage point, Random Forest slightly ahead on accuracy, XGBoost slightly ahead on recall. Picking by eye would have been guesswork. Built a bootstrap confidence interval procedure that resamples the test set with replacement 1,000 times, computes the paired metric difference on each resample, and tests whether zero falls inside the resulting interval. The result showed the models were statistically tied on three metrics and significantly different on two, clarifying the selection decision into a question of which metric the bureau cared about most.",
        },
        {
          challenge: "Age.Bracket data leakage at the point of capture",
          solution:
            "SHAP showed Age.Bracket as one of the strongest directional drivers, with young debt brackets pushing very strongly toward Timely. The supervisor flagged this as a possible leakage concern, and it was. Age.Bracket updates dynamically in the billing system, so the value in training reflects time that had already passed. In production every new invoice would start at zero, removing the signal. Acknowledged the issue as a limitation in the report and proposed a two model architecture in the recommendations: one model trained without Age.Bracket for fresh invoices, and a second model retaining it for invoices already aged beyond 30 days.",
        },
        {
          challenge: "Translating model output into something a billing administrator can act on",
          solution:
            "A ROC-AUC of 0.7570 means nothing to an administrator deciding which invoice to chase next. Used SHAP directional analysis to identify specific risk and safe categories at the predictor level: Hospital invoices and Mental Health and General Practice specialties pushed toward Delayed, while Consulting Rooms and Obstetrics, Dental, and Ophthalmology specialties pushed toward Timely. Turned this into a risk based triage map in the recommendations, with specific signal combinations and the suggested workflow for each.",
        },
        {
          challenge: "The third research objective could not be tested because the data did not contain a reliable service delivery date",
          solution:
            "The original objective asked whether the temporal gap between service delivery and invoice capture predicts delay. The dataset had Capture.Date and Latest.Capture.Date but no clean service delivery field. Rather than dropping the objective or inventing a proxy that would look like the answer to a different question, recorded the objective as partially met, explained why directly in the report, and proposed engineering a true service to capture feature as the first item in the future research section.",
        },
      ],
      outcomes: [
        "XGBoost model achieved ROC-AUC of 0.7570 and recall of 70.04%, meeting the prespecified acceptance threshold.",
        "Bootstrap analysis provided a statistically defensible basis for selecting XGBoost over Random Forest on recall.",
        "SHAP triage map translated model predictions into six specific risk/safe category combinations for operational use.",
        "Study completed as a postgraduate Applied Research Project for BIA 716 at the University of the Western Cape.",
      ],
      lessonsLearned: [
        "Small metric differences are not the same as real metric differences. Bootstrap confidence intervals turn 'XGBoost looks slightly better' into a question with a defensible answer.",
        "Choosing the right metric is more important than choosing the right model. The bureau's cost asymmetry, a missed delay hurts more than a false alarm, is what made recall the deciding metric, not anything about XGBoost itself.",
        "Explainability is what makes a model deployable. A 0.7570 AUC by itself is a number on a page; SHAP turns it into a triage map a billing administrator can actually use.",
        "When a finding is too convenient, check it for leakage. Age.Bracket looked like the most powerful predictor in the model, but the same property that made it look powerful was the one that would erase its value in production.",
        "Honest limitations strengthen a report, they don't weaken it. The third objective could not be tested directly, and saying so plainly, with a concrete recommendation for how to fix it next time, was more credible than smoothing it over.",
      ],
      thumbnail: "/projects/medical-billing/shap_beeswarm_xgb.png",
      links: {
        caseStudyPath: "/projects/medical-billing-delay-prediction",
        githubUrl: "https://github.com/Kholekile2/medical-billing-prediction",
      },
    },
    {
      id: "global-superstore-regional-profitability",
      name: "Global Superstore: Regional Profitability Analysis",
      shortDescription:
        "A global retailer's sales were growing but profit wasn't. This analysis of ~51,000 orders found that a quarter of all sales were unprofitable, traced the losses to three regions and to heavy discounting, ruled out shipping as the cause, and turned it into a dashboard and pricing recommendations.",
      tagline: "Sales were growing but profit wasn't. This is where it was going.",
      thumbnail: "/projects/global-superstore-regional-profitability/dashboard.png",
      links: {
        caseStudyPath: "/projects/global-superstore-regional-profitability",
        // No live demo. Excel workbook and dashboard, with the write-up in the README.
        githubUrl: "https://github.com/Kholekile2/Global-superstore-regional-profitability",
      },
      techStack: {
        tools: ["Microsoft Excel"],
        data: ["XLOOKUP", "PivotTables", "calculated fields", "data validation", "data mapping"],
        skills: [
          "business framing",
          "data cleaning",
          "hypothesis testing",
          "ruling out alternative explanations",
          "dashboard design",
          "turning findings into recommendations",
        ],
      },
      features: [
        "Found that ~24% of all sales were unprofitable and that the losses concentrated in three regions.",
        "Identified heavy discounting as the factor most closely tied to the losses, holding across all 13 regions.",
        "Tested and ruled out shipping cost and delay as an alternative cause.",
        "Separated a region wide problem from a targeted one so any pricing fix could be aimed precisely.",
        "Built a one page dashboard with four headline numbers and a four chart argument, framed for a decision maker.",
      ],
      lessonsLearned: [
        "Framing the work as a business question, where is the money leaking and what do we do about it, matters more than the tool used to answer it.",
        "Total sales can look healthy while the business loses money underneath. Margin, not raw totals, is what shows whether each sale is actually healthy.",
        "Testing your own conclusion is part of the job. Ruling out shipping is a big part of why I trust the discounting finding.",
        "A dramatic number deserves a look at its sample size before it becomes a headline.",
        "Being honest about what the data cannot claim makes the parts it can claim more trustworthy, not less.",
      ],
    },
    {
      id: "online-retail-sql-powerbi",
      name: "Online Retail II: Database Build, SQL Analysis and Power BI Dashboard",
      shortDescription:
        "A SQL and Power BI project built on a two year, over one million row transactional dataset — cleaning genuinely messy data, designing a normalized PostgreSQL database from scratch, analysing it with window functions, CTEs and a full RFM segmentation, and finishing with a two page dashboard.",
      tagline: "The same average can describe two completely different products.",
      summary:
        "A self-directed SQL and Power BI project analysing 1,055,238 order line items from the public Online Retail II dataset, cleaning the raw data, designing a normalized PostgreSQL star schema, writing analytical SQL including window functions and a subquery, and finishing with a two page Power BI dashboard.",
      problem:
        "Raw transaction data rarely arrives ready to answer anything. Before any question about revenue, customers, or stock can be answered honestly, the data itself has to be understood, cleaned, and structured properly, including deciding what to do with values that are technically valid but ambiguous, such as a missing customer ID or a product with ten different recorded names.",
      solution:
        "Treated the project as four connected stages: profiled the data thoroughly enough to know exactly what was wrong with it, designed and built a normalized PostgreSQL database around what that profiling found, wrote SQL that answers real questions about revenue, products, and customers, and brought that same analysis into Power BI without silently redoing or duplicating any of it.",
      thumbnail: "/projects/online-retail-sql-powerbi/sales_overview.png",
      links: {
        caseStudyPath: "/projects/online-retail-sql-powerbi",
        githubUrl: "https://github.com/Kholekile2/online-retail-ii-analysis",
      },
      techStack: {
        tools: ["PostgreSQL", "pgAdmin", "Power BI", "Power Query"],
        data: [
          "window functions",
          "common table expressions",
          "subqueries",
          "star schema design",
          "foreign key relationships",
          "DAX measures",
        ],
        skills: [
          "data cleaning",
          "database design",
          "customer segmentation",
          "dashboard design",
          "translating SQL logic into DAX rather than duplicating it",
        ],
      },
      features: [
        "Cleaned and validated a two year, 1,055,238 row transactional dataset in Power Query, including type corrections, a systematic method for finding every non product code, and resolving inconsistent product descriptions.",
        "Designed and built a normalized PostgreSQL database using a star schema, one fact table and three dimension tables, with working foreign key constraints.",
        "Built a synthetic inventory table from actual product demand patterns, treating steady sellers and spike driven products differently rather than applying one formula across the whole catalog.",
        "Wrote analytical SQL covering joins, window functions (RANK, LAG, running totals), common table expressions, and a subquery.",
        "Built a full RFM customer segmentation model, scoring recency, frequency and monetary value into quartiles and grouping customers into four segments.",
        "Connected Power BI directly to the database and built a two page dashboard, using DAX measures and calculated columns to reproduce the SQL logic rather than duplicate it separately.",
      ],
      lessonsLearned: [
        "A number that looks wrong is worth chasing down, not shrugging off. A one row mismatch between Power Query and Postgres turned out to be a stale profiling reading once checked with a direct SQL comparison, not real data loss.",
        "An average can hide two completely different products. One item's typical monthly demand was driven almost entirely by a single bulk order, and treating it the same as a genuinely steady seller would have badly overstated its stock needs.",
        "Don't duplicate logic that already works. Rebuilding customer segmentation in DAX partway through, the tested SQL version already existed, so it was brought in as a database view instead of maintaining two versions that could quietly drift apart.",
        "A dominant category can make a chart useless. The UK accounted for about 85 percent of all revenue, so it was stated as a fact in writing but left out of the country comparison chart, since one bar would have made every other country invisible.",
        "Filters have to be reapplied deliberately in every query. A ranking rebuilt with a window function let a shipping fee code slip into the results the first time, since the database enforces no business rules on its own.",
      ],
    },
  ],

  recruiterFAQs: [
    {
      q: "What kind of roles are you currently open to?",
      a: "I am looking for a data analyst role where I can work with SQL, Power BI, or Python on real business problems. I am open to junior or graduate level positions.",
    },
    {
      q: "What is your background?",
      a: "I completed a Postgraduate Diploma in Data Analysis and Business Intelligence at UWC. My hands on experience comes from two years of paid client work at the UWC Future Innovation Lab and a Cloud Administrator and Data Analyst apprenticeship at Forvis Mazars. I also have a background in backend development, which I draw on when a project needs it.",
    },
    {
      q: "What tools and technologies do you work with?",
      a: "My main tools are SQL, Microsoft Excel, Power BI, Python (pandas, NumPy, scikit-learn), R, and Microsoft Azure. On the development side I have used C#, ASP.NET Core, Next.js, and TypeScript.",
    },
    {
      q: "How should recruiters contact you?",
      a: "Best by email at kholekilempengesi2000@gmail.com or via LinkedIn at https://www.linkedin.com/in/kholekilempengesi/.",
    },
  ],

  agentUseGuidelines: {
    tone: "Professional, concise, recruiter friendly.",
    responsePolicy: [
      "Prefer facts from this data object before generating inferred claims.",
      "If a metric or date is unknown, say it is not specified instead of guessing.",
      "Use project links for proof when asked for evidence.",
      "Differentiate portfolio content from code implemented in this repository.",
    ],
  },
};

export default portfolioData;