export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">DocChat</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Production RAG application that turns PDF documents into grounded, conversational knowledge.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Next.js • ASP.NET Core • Supabase • OpenAI • pgvector
          </p>

          <div className="flex gap-4">
            <a href="/projects/docchat" className="text-blue-600 dark:text-blue-400">
              View Case Study →
            </a>
            <a
              href="https://ai-document-chat-sigma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300"
            >
              Live
            </a>
          </div>
        </div>

        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">SplitEasy</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Production expense-sharing platform with realtime updates and a custom debt simplification algorithm.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Next.js • ASP.NET Core • Supabase • PostgreSQL
          </p>

          <div className="flex gap-4">
            <a href="/projects/spliteasy" className="text-blue-600 dark:text-blue-400">
              View Case Study →
            </a>
            <a
              href="https://spliteasy-alpha.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300"
            >
              Live
            </a>
          </div>
        </div>

        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">Auto Analytics Portal</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            BI dashboard for car pricing strategy, turning BigQuery analysis into actionable pricing guidance.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Streamlit • BigQuery • SQL • Pandas • Plotly
          </p>

          <div className="flex gap-4">
            <a href="/projects/auto-analytics" className="text-blue-600 dark:text-blue-400">
              View Case Study →
            </a>
            <a
              href="https://github.com/Kholekile2/BIA715_DataExploration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300"
            >
              Code
            </a>
          </div>
        </div>

        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">MedCare Booking System</h2>

          <p className="text-gray-700 mb-3 dark:text-gray-300">
            Healthcare operations platform combining specialist booking, admin controls, and analytics.
          </p>

          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            Streamlit • BigQuery • Python • Pandas • Plotly
          </p>

          <div className="flex gap-4">
            <a href="/projects/medcare" className="text-blue-600 dark:text-blue-400">
              View Case Study →
            </a>
            <a
              href="https://github.com/Kholekile2/Streamlit-Data-Exploration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
