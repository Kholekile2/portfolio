import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell min-h-screen px-6 py-16 text-zinc-900 dark:text-zinc-100">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_320px] lg:items-start">
          <div>
            <p className="chip mb-4">Open to new opportunities</p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Kholekile Mpengesi</h1>

            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              Data Analyst | SQL, Power BI, Python | Background in Backend Development
            </p>

            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              I work in data analytics with a background in software development that I still draw on when a project needs it.
              Most of the work I&apos;ve done so far has come from paid client projects for small businesses through the UWC Future Innovation Lab,
              plus a Cloud Administrator and Data Analyst apprenticeship at Forvis Mazars.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>

          <figure className="surface-card overflow-hidden p-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--accent-soft)_70%,transparent),transparent_38%),linear-gradient(180deg,color-mix(in_srgb,var(--surface)_94%,var(--accent-soft)),var(--surface))]">
              <Image
                src="/projects/Creative%20coder%20in%20a%20cozy%20workspace.png"
                alt="Portrait of Kholekile Mpengesi"
                fill
                priority
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
            </div>
          </figure>

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Focus</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Data cleaning, SQL analysis, BI dashboards, and light modelling work, mostly for small business contexts.</p>
          </div>
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Core Tools</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">SQL, Excel, Power BI, Python (pandas), PostgreSQL, and Microsoft Azure.</p>
          </div>
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">How I Work</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">I take time to understand a problem before I start solving it. I would rather ask a question than guess, and rather flag an issue early than hide it.</p>
          </div>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>

          <p className="text-gray-700 dark:text-gray-300">
            I recently completed my Postgraduate Diploma in Data Analysis and Business Intelligence at the University of the Western Cape,
            on top of a BSc in Physical Science from the same university.
            My interest in data grew out of the physics and mathematics side of my undergraduate work,
            particularly the part that deals with finding structure and meaning in messy real world information.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Most of my analytics experience so far has come from paid client work at the UWC Future Innovation Lab,
            where over the last two years I have worked on projects for small businesses that could not afford larger consulting firms,
            mostly in retail and food service. Alongside that, I&apos;m doing a Cloud Administrator and Data Analyst apprenticeship
            at Forvis Mazars, where I work with SQL, Power BI, and Microsoft Azure under a more senior team.
            I&apos;m not an expert, and I&apos;m open about that. I&apos;m looking for a role where I can apply what I already know,
            keep learning from people who are further along than I am, and grow into a stronger analyst over time.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>

          <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Primary (data work)</p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="surface-card p-4">SQL (PostgreSQL, MySQL, SQLite, Microsoft SQL Server, BigQuery)</div>
                <div className="surface-card p-4">Microsoft Excel (PivotTables, XLOOKUP, VBA)</div>
                <div className="surface-card p-4">Microsoft Power BI (Power Query, DAX)</div>
                <div className="surface-card p-4">Python (pandas, NumPy, scikit-learn, XGBoost, SHAP)</div>
                <div className="surface-card p-4">R</div>
                <div className="surface-card p-4">Microsoft Azure</div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Secondary (from backend development background)</p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="surface-card p-4">C# and ASP.NET Core</div>
                <div className="surface-card p-4">MySQL and Entity Framework</div>
                <div className="surface-card p-4">Next.js and TypeScript</div>
                <div className="surface-card p-4">Git and GitHub</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Experience</h2>

          <p className="text-gray-700 dark:text-gray-300">
            Cloud Administrator and Data Analyst apprenticeship at Forvis Mazars, a global audit and advisory firm.
            The programme was set up around Microsoft Azure administration, certification and data analytics, most of the day to day work
            has been data analytics, writing SQL, building Power BI dashboards, and checking that reports are accurate
            before the team uses them.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Data Analyst and Backend Developer at the UWC Future Innovation Lab since August 2024, working on paid client
            projects for small businesses. Data analytics has been the dominant side of the work over time, covering data
            cleaning, dashboards, reports, and light modelling for three clients across retail and food service.
            The Feedem project (a food service business on the UWC campus, 2024) was the biggest engagement,
            and involved analysing their operational data and helping scope out a small system to support the decisions
            the data was pointing toward. On the software side of the same role, I worked as Technical Lead on KhathalaCare,
            a healthcare provider discovery web application, and contributed to MzansiMed GPT, a Gates Foundation funded
            multilingual healthcare assistant.
          </p>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Certifications</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="surface-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Microsoft</p>
              <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">Azure Developer Associate (AZ-204)</p>
            </div>
            <div className="surface-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Microsoft</p>
              <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">Azure AI Engineer Associate (AI-102)</p>
            </div>
            <div className="surface-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Simplilearn</p>
              <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">Power BI for Beginners</p>
            </div>
            <div className="surface-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Cognitive Class</p>
              <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">SQL and Relational Databases 101</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface-card">
              <p className="chip mb-3">Data Analysis</p>
              <h3 className="text-xl font-bold">Online Retail II: SQL &amp; Power BI</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                SQL and Power BI project on 1,055,238 order lines, cleaning messy data, designing a normalized
                PostgreSQL database from scratch, and building a two page dashboard powered by DAX pulled from
                tested SQL logic.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                PostgreSQL • Power BI • Power Query • DAX • Window Functions
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Star schema database, full RFM customer segmentation, and a synthetic inventory model
                built from real demand patterns.
              </p>

              <div className="mt-4 flex gap-4">
                <Link href="/projects/online-retail-sql-powerbi" className="text-link">
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/online-retail-ii-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">Data Analysis</p>
              <h3 className="text-xl font-bold">Global Superstore: Regional Profitability Analysis</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Excel analysis of ~51,000 orders across 13 regions, finding a quarter of sales were unprofitable,
                tracing the losses to three regions and heavy discounting, ruling out shipping, and turning it into a dashboard and pricing recommendations.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Microsoft Excel • XLOOKUP • PivotTables • Data Cleaning • Dashboard Design
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Concentrated losses in three regions, discounting confirmed as the main driver, shipping ruled out, and pricing recommendations framed for action.
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/global-superstore-regional-profitability"
                  className="text-link"
                >
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/Global-superstore-regional-profitability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">Applied Research</p>
              <h3 className="text-xl font-bold">Medical Billing Delay Prediction</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                XGBoost and SHAP study on 50,000 private patient invoices to flag billing delays at the point of capture, using bootstrap confidence intervals to select the final model on recall.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Python • XGBoost • scikit-learn • SHAP • pandas
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: ROC AUC 0.7570, recall 70.04%, and a SHAP triage map translating model output into operational guidance for billing administrators.
              </p>

              <div className="mt-4 flex gap-4">
                <Link href="/projects/medical-billing-delay-prediction" className="text-link">
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/medical-billing-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">Business Intelligence</p>
              <h3 className="text-xl font-bold">Auto Analytics Portal</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                BI dashboard for car pricing strategy, translating BigQuery analysis into actionable pricing guidance.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Streamlit • BigQuery • SQL • Pandas • Plotly
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Turns pricing uncertainty into repeatable valuation decisions.
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/auto-analytics"
                  className="text-link"
                >
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/BIA715_DataExploration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">Healthcare Analytics</p>
              <h3 className="text-xl font-bold">MedCare Booking System</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Healthcare operations platform combining specialist booking, administrative controls, and analytics for capacity and revenue.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Streamlit • BigQuery • Python • Pandas • Plotly
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Connects booking operations with live capacity and revenue insights.
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/medcare"
                  className="text-link"
                >
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/Streamlit-Data-Exploration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">Data & Ethics</p>
              <h3 className="text-xl font-bold">Student Support Insights</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Responsible by design data tool that helps educational programmes identify learner support needs before disengagement, with architecturally enforced consent and ethics as code tests.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Streamlit • Python • Pandas • Plotly • pytest
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Turns learner data into early support triggers instead of late stage judgement.
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/student-support-insights"
                  className="text-link"
                >
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/StudentSupportTool-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">AI</p>
              <h3 className="text-xl font-bold">MeetingMind</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                AI meeting intelligence app that turns transcripts into summaries, action items,
                key decisions, and follow up chat context.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Next.js • FastAPI • MongoDB Atlas • Anthropic Claude • Cloudinary
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Structured meeting intelligence with persistent chat history and cloud backed storage.
              </p>

              <div className="mt-4 flex gap-4">
                <Link href="/projects/meetingmind" className="text-link">
                  Case Study
                </Link>
                <a
                  href="https://meetingmind-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">AI</p>
              <h3 className="text-xl font-bold">DocChat</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Production RAG application that turns PDFs into conversational knowledge with grounded,
                real time answers.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Next.js • ASP.NET Core • Supabase • OpenAI • pgvector
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Enterprise style RAG pipeline with grounded streaming responses.
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/docchat"
                  className="text-link"
                >
                  Case Study
                </Link>
                <a
                  href="https://ai-document-chat-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="surface-card">
              <p className="chip mb-3">Full stack</p>
              <h3 className="text-xl font-bold">SplitEasy</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Production expense sharing platform with realtime updates, secure multi user workflows,
                and a custom debt simplification algorithm that minimizes settlement steps.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Next.js • ASP.NET Core • Supabase • PostgreSQL
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Reduces settlement complexity into minimal payment steps.
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/spliteasy"
                  className="text-link"
                >
                  Case Study
                </Link>
                <a
                  href="https://spliteasy-alpha.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        </section>
      </section>
    </main>
  );
}
