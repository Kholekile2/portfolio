export default function ProjectsPage() {
  return (
    <main className="page-shell projects-index min-h-screen px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <p className="section-kicker mb-3">Selected work</p>
        <h1 className="text-[clamp(2.2rem,3vw,3.2rem)] font-semibold tracking-[-0.05em]">Projects</h1>
        <p className="mt-3 max-w-3xl text-[1.02rem] leading-7 text-[var(--ink)]/90">
          Data analytics, business intelligence, and applied machine learning, with full stack engineering to make the analysis deployable and usable.
        </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="surface-card">
          <p className="chip mb-3">Data Analysis</p>
          <h2 className="mb-2 text-[1.45rem] font-semibold tracking-[-0.04em]">Online Retail II: SQL &amp; Power BI</h2>

          <p className="mb-3 text-[1rem] leading-7 text-[var(--ink)]/90">
            SQL and Power BI project on 1,055,238 order lines: a normalized PostgreSQL database built from scratch, analytical SQL, and a two page dashboard.
          </p>

          <p className="mb-4 text-sm text-[var(--ink-faint)]">
            PostgreSQL • Power BI • Power Query • DAX • Window Functions
          </p>

          <p className="mb-4 text-sm leading-6 text-[var(--ink)]/90">
            Star schema design, RFM customer segmentation, and a synthetic inventory model, with SQL logic reused as DAX rather than duplicated.
          </p>

          <div className="flex gap-4">
            <a href="/projects/online-retail-sql-powerbi" className="text-link">
              View Case Study →
            </a>
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
          <h2 className="mb-2 text-[1.45rem] font-semibold tracking-[-0.04em]">Global Superstore: Regional Profitability Analysis</h2>

          <p className="mb-3 text-[1rem] leading-7 text-[var(--ink)]/90">
            A global retailer's sales were growing but profit wasn't. This analysis of ~51,000 orders found a quarter of sales were unprofitable, traced the losses to three regions, and tied them to heavy discounting.
          </p>

          <p className="mb-4 text-sm text-[var(--ink-faint)]">
            Microsoft Excel • XLOOKUP • PivotTables • Data Cleaning • Dashboard Design
          </p>

          <p className="mb-4 text-sm leading-6 text-[var(--ink)]/90">
            Shipping was tested and ruled out, the losses were concentrated in three regions, and the final dashboard turned the findings into pricing recommendations.
          </p>

          <div className="flex gap-4">
            <a href="/projects/global-superstore-regional-profitability" className="text-link">
              View Case Study →
            </a>
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
          <h2 className="mb-2 text-[1.45rem] font-semibold tracking-[-0.04em]">Medical Billing Delay Prediction</h2>

          <p className="mb-3 text-[1rem] leading-7 text-[var(--ink)]/90">
            XGBoost and SHAP study on 50,000 private patient invoices to flag billing delays at the point of capture, not in the collection queue.
          </p>

          <p className="mb-4 text-sm text-[var(--ink-faint)]">
            Python • XGBoost • scikit-learn • SHAP • pandas
          </p>

          <p className="mb-4 text-sm leading-6 text-[var(--ink)]/90">
            Bootstrap confidence interval analysis used to select the final model on recall, the metric that matched the bureau's cost structure.
          </p>

          <div className="flex gap-4">
            <a href="/projects/medical-billing-delay-prediction" className="text-link">
              View Case Study →
            </a>
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
          <h2 className="text-xl font-bold mb-2">Auto Analytics Portal</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            BI dashboard for car pricing strategy, turning BigQuery analysis into actionable pricing guidance.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Streamlit • BigQuery • SQL • Pandas • Plotly
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Pricing intelligence dashboard translating warehouse analytics into commercial decisions.
          </p>

          <div className="flex gap-4">
            <a href="/projects/auto-analytics" className="text-link">
              View Case Study →
            </a>
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
          <h2 className="text-xl font-bold mb-2">MedCare Booking System</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Healthcare operations platform combining specialist booking, admin controls, and analytics.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Streamlit • BigQuery • Python • Pandas • Plotly
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Booking and operations platform linking patient access with capacity and revenue analytics.
          </p>

          <div className="flex gap-4">
            <a href="/projects/medcare" className="text-link">
              View Case Study →
            </a>
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
          <p className="chip mb-3">Business Intelligence</p>
          <h2 className="text-xl font-bold mb-2">Employee Attrition Analysis</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Power BI case study that shows attrition was concentrated in Sales Representatives, not spread
            evenly across the company.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Microsoft Power BI • Power Query • DAX • KPI Design
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Dashboard built around retention, cost of attrition, and high risk headcount, with overtime as the
            strongest risk driver.
          </p>

          <div className="flex gap-4">
            <a href="/projects/employee-attrition-power-bi" className="text-link">
              View Case Study →
            </a>
            <a
              href="https://github.com/Kholekile2/employee-attrition-power-bi"
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
          <h2 className="text-xl font-bold mb-2">Student Support Insights</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Responsible by design data tool that identifies learner support needs before disengagement occurs.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Streamlit • Python • Pandas • Plotly • pytest
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Three page application with architecturally enforced consent, validation as safeguard, and ethics as code tests.
          </p>

          <div className="flex gap-4">
            <a href="/projects/student-support-insights" className="text-link">
              View Case Study →
            </a>
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
          <h2 className="text-xl font-bold mb-2">MeetingMind</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            AI meeting intelligence app that converts transcripts into summaries, action items,
            key decisions, and a searchable follow up chat experience.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Next.js • FastAPI • MongoDB Atlas • Anthropic Claude • Cloudinary
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Transcript first workflow with cloud storage, persistent meeting records, and grounded chat answers.
          </p>

          <div className="flex gap-4">
            <a href="/projects/meetingmind" className="text-link">
              View Case Study →
            </a>
            <a
              href="https://meetingmind-sigma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Live
            </a>
          </div>
        </div>

        <div className="surface-card">
          <p className="chip mb-3">AI</p>
          <h2 className="text-xl font-bold mb-2">DocChat</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Production RAG application that turns PDF documents into grounded, conversational knowledge.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Next.js • ASP.NET Core • Supabase • OpenAI • pgvector
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Enterprise style RAG workflow from document ingestion to grounded streamed answers.
          </p>

          <div className="flex gap-4">
            <a href="/projects/docchat" className="text-link">
              View Case Study →
            </a>
            <a
              href="https://ai-document-chat-sigma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Live
            </a>
          </div>
        </div>

        <div className="surface-card">
          <p className="chip mb-3">Full stack</p>
          <h2 className="text-xl font-bold mb-2">SplitEasy</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Production expense sharing platform with realtime updates and a custom debt simplification algorithm.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Next.js • ASP.NET Core • Supabase • PostgreSQL
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Realtime shared expense platform with algorithmic debt simplification for low friction settlement.
          </p>

          <div className="flex gap-4">
            <a href="/projects/spliteasy" className="text-link">
              View Case Study →
            </a>
            <a
              href="https://spliteasy-alpha.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Live
            </a>
          </div>
        </div>

      </div>
      </section>
    </main>
  );
}
