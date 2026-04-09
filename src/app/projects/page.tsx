export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* DocChat */}
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">DocChat</h2>

          <p className="text-gray-700 mb-3">
            AI-powered document chat application using a full Retrieval-Augmented Generation (RAG) pipeline.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Next.js • ASP.NET Core • Supabase • OpenAI • pgvector
          </p>

          <div className="flex gap-4">
            <a href="/projects/docchat" className="text-blue-600">
              View Case Study →
            </a>
            <a
              href="https://ai-document-chat-sigma.vercel.app"
              target="_blank"
              className="text-gray-600"
            >
              Live
            </a>
          </div>
        </div>

        {/* SplitEasy */}
        <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold mb-2">SplitEasy</h2>

          <p className="text-gray-700 mb-3">
            Expense splitting app with real-time updates and a custom debt simplification algorithm.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Next.js • ASP.NET Core • Supabase • PostgreSQL
          </p>

          <div className="flex gap-4">
            <a href="/projects/spliteasy" className="text-blue-600">
              View Case Study →
            </a>
            <a
              href="https://spliteasy-alpha.vercel.app"
              target="_blank"
              className="text-gray-600"
            >
              Live
            </a>
          </div>
        </div>

      </div>

    </main>
  );
}
