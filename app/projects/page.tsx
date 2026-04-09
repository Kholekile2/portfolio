export default function ProjectsPage() {
  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h1>
        <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-300">
          Selected case studies focused on production engineering, analytics decision systems, and AI-enabled products.
        </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
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
            Enterprise-style RAG workflow from document ingestion to grounded streamed answers.
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
          <p className="chip mb-3">Full-stack</p>
          <h2 className="text-xl font-bold mb-2">SplitEasy</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Production expense-sharing platform with realtime updates and a custom debt simplification algorithm.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Next.js • ASP.NET Core • Supabase • PostgreSQL
          </p>

          <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
            Realtime shared-expense platform with algorithmic debt simplification for low-friction settlement.
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
      </div>
      </section>
    </main>
  );
}
