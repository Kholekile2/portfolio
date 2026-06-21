import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell min-h-screen px-6 py-16 text-zinc-900 dark:text-zinc-100">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_320px] lg:items-start">
          <div>
            <p className="chip mb-4">Data Analytics &amp; BI | Open to new roles</p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Kholekile Mpengesi</h1>

            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
              Data Analytics &amp; BI | Full Stack Developer
            </p>

            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              Most analysis stays in a notebook. I make it usable: through dashboards, prediction pipelines,
              and AI powered tools grounded in real business problems.
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
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Primary Focus</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Data analytics, BI, and applied ML, with engineering to make it deployable.</p>
          </div>
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Core Stack</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Next.js, ASP.NET Core, Supabase, BigQuery, Streamlit.</p>
          </div>
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Value Delivered</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Production systems with measurable workflow and decision impact.</p>
          </div>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>

          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m a postgraduate student specialising in Data Analytics and Business Intelligence at UWC.
            What draws me to data work is the space between what a dataset contains and what a decision maker needs.
            A 0.7570 AUC is a number on a page; SHAP turns it into a triage map a billing administrator can act on Monday morning.
            That translation is what I care about.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Through my postgraduate work and personal projects, I&apos;ve built up the technical side to go alongside the analysis:
            BI dashboards, Streamlit tools, prediction pipelines, and AI powered products.
            I don&apos;t have years of industry experience yet, but I&apos;m deliberate about what I build and why,
            and the projects on this site are the clearest evidence of that.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300 md:grid-cols-3">
            <div className="surface-card p-4">Python &amp; R (Data Analysis, ML)</div>
            <div className="surface-card p-4">SQL (BigQuery, PostgreSQL, MySQL)</div>
            <div className="surface-card p-4">Microsoft Excel &amp; Power BI</div>
            <div className="surface-card p-4">Microsoft Azure &amp; AI Services</div>
            <div className="surface-card p-4">C# / .NET (ASP.NET Core, Blazor)</div>
            <div className="surface-card p-4">JavaScript / TypeScript (Next.js)</div>
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Experience</h2>

          <p className="text-gray-700 dark:text-gray-300">
            Currently doing an apprenticeship as an AI Cloud Administrator and Data Analyst at Forvis Mazars,
            where I get practical exposure to data analysis, reporting, and cloud based AI solutions on Microsoft Azure.
            It has given me a real look at how analytics work operates in a professional environment.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Also interning at the UWC CoLab, where I contribute to software and AI projects as part of the team.
            I have had the chance to work on real features using React, ASP.NET Core, and Tailwind CSS,
            which has been a useful bridge between what I build independently and what collaborative development actually looks like.
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
              <p className="chip mb-3">Data Analysis</p>
              <h3 className="text-xl font-bold">Global Superstore: Regional Profitability</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Excel analysis of ~51,000 orders across 13 regions, finding where a global retailer loses money,
                testing the discounting hypothesis, ruling out shipping, and delivering a four chart dashboard of recommendations.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Microsoft Excel • XLOOKUP • PivotTables • Dashboard Design
              </p>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Outcome: Concentrated losses in three regions traced to discounting, with targeted sub category fixes identified.
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
