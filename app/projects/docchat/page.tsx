export default function DocChatPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">DocChat</h1>
      <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
        AI-Powered Document Chat Application
      </p>
      <p className="text-gray-600 mb-8 dark:text-gray-300">
        Production-deployed RAG platform that turns static PDFs into searchable, conversational knowledge.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-gray-500 dark:text-gray-400">Duration</p>
          <p className="font-semibold">5 weeks</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-gray-500 dark:text-gray-400">Delivery Model</p>
          <p className="font-semibold">4 phases, end-to-end</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-gray-500 dark:text-gray-400">Production Stack</p>
          <p className="font-semibold">Vercel + Railway</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-gray-500 dark:text-gray-400">AI Pattern</p>
          <p className="font-semibold">Full RAG pipeline</p>
        </div>
      </div>

      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href="https://ai-document-chat-sigma.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Kholekile2/ai-document-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded"
        >
          View Code
        </a>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          DocChat is a full-stack AI system built from scratch to solve document retrieval friction. Users upload PDFs,
          ask natural-language questions, and receive grounded answers streamed in real time. The project demonstrates
          production software engineering across frontend, backend, database, AI integration, and deployment.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Production deployment across Vercel (frontend) and Railway (ASP.NET Core backend).</li>
          <li>Semantic retrieval with OpenAI embeddings plus pgvector cosine similarity search.</li>
          <li>Real-time token streaming via SSE for ChatGPT-like UX.</li>
          <li>Persistent multi-document conversations with user-scoped data isolation.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Problem</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Traditional PDF workflows rely on manual scanning and keyword matching, which fail when users ask with different
          terminology than the document text. This creates slow, error-prone information retrieval for knowledge workers,
          researchers, and students handling long documents.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Solution</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          DocChat implements Retrieval-Augmented Generation with three coordinated layers:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold mb-2">1) Ingestion Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              PDF text extraction, overlapping chunking, embedding generation, and pgvector storage.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold mb-2">2) Retrieval Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Question embedding plus cosine similarity search to retrieve top semantic chunks.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold mb-2">3) Generation Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Context-grounded GPT response generation with token streaming back to the browser.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Pipeline</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Upload-time ingestion:</p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          PDF -&gt; PdfPig extraction -&gt; 500-word chunks with 50-word overlap -&gt; OpenAI text-embedding-ada-002 -&gt;
          1536-dimension vectors -&gt; Supabase pgvector storage.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Query-time retrieval and generation:</p>
        <p className="text-gray-700 dark:text-gray-300">
          User question -&gt; embedding -&gt; pgvector cosine similarity (top 5 chunks) -&gt; context injection -&gt;
          GPT-4o-mini -&gt; SSE streaming response -&gt; conversation persistence.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Production Features</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Secure signup and login with Supabase Auth and middleware-protected routes.</li>
          <li>Step-by-step PDF processing with upload-to-ready status lifecycle.</li>
          <li>Semantic search that works beyond keyword overlap.</li>
          <li>Real-time streamed answers with persistent conversation history.</li>
          <li>Multi-document support with independent chat sessions per document.</li>
          <li>Safe two-step delete with cascading cleanup of related records.</li>
          <li>Grounded-response constraint: model answers only from retrieved context.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Engineering Highlights</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The most valuable part of DocChat is not the chat UI itself, but the production engineering required to make retrieval, streaming, and security work reliably under real-world constraints.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Server-Sent Events streaming using C# IAsyncEnumerable and incremental browser decoding.</li>
          <li>Database RPC functions to correctly cast embedding payloads into vector columns.</li>
          <li>Per-request HttpRequestMessage pattern to eliminate shared HttpClient header race conditions.</li>
          <li>RLS-based multi-tenant data protection plus backend authorization filtering by user scope.</li>
          <li>Network-safe design using Supabase REST over HTTPS instead of direct PostgreSQL port dependency.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Frontend: Next.js App Router, TypeScript, Tailwind CSS.</li>
          <li>Backend: ASP.NET Core .NET 8 Minimal APIs.</li>
          <li>Data: Supabase PostgreSQL with pgvector, relational schema, cascading constraints.</li>
          <li>AI: OpenAI GPT-4o-mini and text-embedding-ada-002.</li>
          <li>Hosting: Vercel (frontend) and Railway (backend) with production CORS and env separation.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Challenges Solved</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Resolved token spacing defects by changing stream parsing from trim to trimEnd.</li>
          <li>Fixed null embedding writes using PostgreSQL RPC casting into vector type.</li>
          <li>Corrected Next.js dynamic route parameter handling in App Router async page context.</li>
          <li>Eliminated concurrent request authorization failures by removing shared header mutation.</li>
          <li>Stabilized client-server date rendering to prevent hydration mismatches.</li>
          <li>Hardened secret management with key rotation and stricter ignore policies.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Results and Market Relevance</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This project proves end-to-end capability in building and operating commercially relevant AI systems, not
          just prototype demos. The implemented RAG architecture directly maps to enterprise use cases such as internal
          knowledge assistants, support tooling, legal document analysis, and research summarization.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Production-deployed AI application with real users and persistent data workflows.</li>
          <li>Full RAG implementation from ingestion to semantic retrieval to streamed generation.</li>
          <li>Security-aware architecture with layered auth and data isolation controls.</li>
          <li>Documented debugging and reliability improvements across multiple production issues.</li>
        </ul>
      </section>
    </main>
  );
}
