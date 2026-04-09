export default function DocChatPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">DocChat</h1>
      <p className="text-lg text-gray-600 mb-6">
        AI-powered document chat application using Retrieval-Augmented Generation (RAG).
      </p>

      {/* Links */}
      <div className="flex gap-4 mb-12">
        <a
          href="https://ai-document-chat-sigma.vercel.app"
          target="_blank"
          className="px-4 py-2 bg-black text-white rounded"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Kholekile2/ai-document-chat"
          target="_blank"
          className="px-4 py-2 border rounded"
        >
          View Code
        </a>
      </div>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p className="text-gray-700">
          Extracting information from large documents is slow and inefficient.
          Traditional keyword search cannot understand meaning or context,
          making it difficult to find relevant information quickly.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p className="text-gray-700">
          DocChat transforms static PDFs into an interactive AI assistant using a
          Retrieval-Augmented Generation (RAG) pipeline. Users can upload documents
          and ask natural language questions, receiving accurate, context-aware answers.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-gray-700">
          Next.js, TypeScript, ASP.NET Core, C#, Supabase (PostgreSQL + pgvector),
          OpenAI API (embeddings + GPT)
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>PDF upload and processing pipeline</li>
          <li>Semantic search using vector embeddings</li>
          <li>Streaming AI responses (real-time)</li>
          <li>Conversation history persistence</li>
          <li>Multi-document support</li>
          <li>Secure authentication and access control</li>
        </ul>
      </section>

      {/* RAG Pipeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">RAG Pipeline</h2>
        <p className="text-gray-700 mb-4">
          The system implements a full Retrieval-Augmented Generation pipeline:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Extract text from PDFs</li>
          <li>Split into overlapping chunks</li>
          <li>Generate embeddings using OpenAI</li>
          <li>Store vectors in PostgreSQL (pgvector)</li>
          <li>Retrieve relevant chunks via cosine similarity</li>
          <li>Inject context into GPT for grounded responses</li>
        </ul>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <p className="text-gray-700">
          The application follows a three-tier architecture with a Next.js frontend,
          ASP.NET Core API, and a PostgreSQL database with vector search capabilities.
          AI services are integrated via the OpenAI API.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Implemented vector similarity search using pgvector</li>
          <li>Built streaming responses using Server-Sent Events and IAsyncEnumerable</li>
          <li>Designed chunking strategy with overlap to preserve context</li>
          <li>Used per-request HttpClient pattern to avoid concurrency issues</li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Fixed SSE token spacing issue affecting output readability</li>
          <li>Resolved embedding storage issues using PostgreSQL functions</li>
          <li>Handled Next.js server/client hydration mismatches</li>
          <li>Eliminated HttpClient race conditions in concurrent requests</li>
        </ul>
      </section>

      {/* Results */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Production-deployed AI application</li>
          <li>Full RAG pipeline implemented end-to-end</li>
          <li>Real-time streaming user experience</li>
          <li>Multi-document semantic search system</li>
        </ul>
      </section>

    </main>
  );
}
