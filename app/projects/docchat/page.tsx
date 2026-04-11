import CaseStudyToc from "../../components/case-study-toc";

export default function DocChatPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "What I Built" },
    { id: "core-pipeline", label: "How the Pipeline Works" },
    { id: "features", label: "Features" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "architecture", label: "Architecture" },
    { id: "engineering-highlights", label: "Technical Highlights" },
    { id: "challenges-solved", label: "Challenges I Hit" },
    { id: "results", label: "What I Learned" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
      <div className="min-w-0 max-w-4xl">
      <p className="chip mb-4">AI Case Study</p>
      <h1 className="text-4xl font-bold mb-2">DocChat</h1>
      <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
        An AI app that lets you chat with your PDF documents
      </p>
      <p className="text-gray-600 mb-8 dark:text-gray-300">
        Built with Next.js, ASP.NET Core, Supabase, and OpenAI. Live and fully deployed.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Build Time</p>
          <p className="font-semibold">5 weeks</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Phases</p>
          <p className="font-semibold">4, end-to-end</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Deployed on</p>
          <p className="font-semibold">Vercel + Railway</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">AI Pattern</p>
          <p className="font-semibold">Full RAG pipeline</p>
        </div>
      </div>

      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href="https://ai-document-chat-sigma.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Kholekile2/ai-document-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View Code
        </a>
      </div>

      <section className="mb-12">
        <h2 id="overview" className="scroll-mt-24 text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          DocChat is a full-stack AI application I built from scratch. You upload a PDF, ask it questions
          in plain English, and get answers streamed back in real time — word by word, like ChatGPT.
          Every conversation is saved so you can come back and pick up where you left off.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Complete RAG pipeline — from PDF ingestion to semantic search to streamed AI responses.</li>
          <li>Answers are grounded in the document — the AI only uses what is actually in your PDF.</li>
          <li>Persistent conversation history per document, across multiple sessions.</li>
          <li>Security built in at every layer — database, API, and frontend.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">The Problem</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I kept running into the same frustration with long PDFs. You need one specific piece of
          information, so you open it, hit Ctrl+F, type a keyword, and either find nothing or end up
          reading through pages of content just to get a single answer. The bigger the document, the worse it gets.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The problem with keyword search is that it only matches exact words. If you ask
          &quot;what are the financial risks?&quot; but the document says &quot;monetary liabilities&quot;,
          you get nothing. I wanted to build something that actually understands what you are asking,
          not just scans for matching text.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="solution" className="scroll-mt-24 text-2xl font-semibold mb-4">What I Built</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          DocChat uses a pattern called RAG — Retrieval-Augmented Generation. The idea is straightforward:
          instead of sending the entire PDF to an AI model (which is too expensive and hits token limits),
          you break the document into small pieces, find the most relevant pieces for a given question,
          and only send those to the model. The model then answers using just that focused context.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This is the same architecture behind a lot of real products — internal company knowledge bases,
          AI-powered support tools, legal document assistants. I wanted to understand how it actually works
          by building one from scratch, not just calling a pre-built API.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="core-pipeline" className="scroll-mt-24 text-2xl font-semibold mb-4">How the Pipeline Works</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">When you upload a PDF:</p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          PDF -&gt; text extraction with PdfPig -&gt; split into 500-word chunks with 50-word overlap
          -&gt; each chunk sent to OpenAI text-embedding-ada-002 -&gt; converted into 1536 numbers
          representing its meaning -&gt; stored in Supabase pgvector.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">When you ask a question:</p>
        <p className="text-gray-700 dark:text-gray-300">
          Your question -&gt; converted to a vector using the same OpenAI model -&gt; compared against
          every stored chunk using cosine similarity -&gt; top 5 most relevant chunks retrieved -&gt;
          sent to GPT-4o-mini as context with an instruction to only answer from that content -&gt;
          answer streamed back token by token -&gt; conversation saved to Supabase.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="features" className="scroll-mt-24 text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Sign up, log in, log out — with protected routes that redirect unauthenticated users.</li>
          <li>Upload any PDF and watch it move through extraction, embedding, and indexing in real time.</li>
          <li>Ask questions in plain English and get answers that come from the actual document.</li>
          <li>Answers stream word by word — you see the response being written as it generates.</li>
          <li>Full conversation history — every question and answer is saved and reloads automatically.</li>
          <li>Multiple documents — upload several PDFs and chat with each one independently.</li>
          <li>Delete documents with two-step confirmation — automatically removes all related data.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="tech-stack" className="scroll-mt-24 text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Frontend: Next.js 14 App Router, TypeScript, Tailwind CSS — deployed on Vercel.</li>
          <li>Backend: ASP.NET Core .NET 8 Minimal APIs, C# — deployed on Railway.</li>
          <li>Database: Supabase PostgreSQL with the pgvector extension for vector storage and similarity search.</li>
          <li>AI: OpenAI text-embedding-ada-002 for embeddings and GPT-4o-mini for chat responses.</li>
          <li>PDF extraction: PdfPig — a pure .NET library, no native dependencies.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="architecture" className="scroll-mt-24 text-2xl font-semibold mb-4">Architecture</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Three separate layers, each with a clear job. Frontend and backend are deployed independently
          and talk to each other over HTTP.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Next.js handles routing, server-side rendering, and the interactive chat UI.
              Server components fetch data before the page renders — no loading flash.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Backend API</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              ASP.NET Core runs the RAG pipeline — PDF processing, embedding generation,
              similarity search, GPT streaming, and making sure users only access their own data.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Database</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Supabase PostgreSQL stores documents, vector embeddings, conversations, and messages.
              Row Level Security ensures users can only ever access their own data.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 id="engineering-highlights" className="scroll-mt-24 text-2xl font-semibold mb-4">Technical Highlights</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This was my first AI project and I learned a lot about what it actually takes to make things
          work correctly in production — not just locally. A few things that stand out:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Streaming responses required reading OpenAI&apos;s Server-Sent Events line by line in C# using IAsyncEnumerable, then forwarding each token to the browser immediately as it arrived.</li>
          <li>The Supabase REST API cannot automatically cast a JSON array to PostgreSQL&apos;s vector type — I had to write a custom PostgreSQL function that handles the type casting, then call it via RPC.</li>
          <li>ASP.NET Core&apos;s injected HttpClient is shared across requests. Setting auth headers on it caused silent failures under concurrent requests because one request would clear the headers another was using. Fixed by switching to per-request headers using HttpRequestMessage.</li>
          <li>4-table relational schema with foreign keys and cascade deletes — deleting a document automatically removes all its chunks, conversations, and messages without any extra code.</li>
          <li>Security in layers — Row Level Security on every table, user ID filtering on every backend query, separate anon and service role keys for frontend and backend, secrets in environment variables only.</li>
          <li>Direct PostgreSQL connections are blocked on many networks, so the backend communicates with Supabase exclusively over HTTPS using the REST API — which works anywhere.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="challenges-solved" className="scroll-mt-24 text-2xl font-semibold mb-4">Challenges I Hit</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Words running together in responses:</strong> Using .trim() on streaming tokens was stripping the leading space that separates words — so &quot;PESTLE is a framework&quot; became &quot;PESTLEisaframework&quot;. Fixed by changing to .trimEnd() which only removes trailing whitespace.</li>
          <li><strong>Embeddings saving as NULL:</strong> The Supabase REST API accepted the insert but silently ignored the embedding field because it couldn&apos;t cast a JSON array to the vector type. Fixed by writing a PostgreSQL function that explicitly casts the value using ::vector.</li>
          <li><strong>Chat page redirecting on every load:</strong> In Next.js 14, the params object is a Promise and has to be awaited before you can use it. I was accessing params.documentId directly, which returned undefined and caused the document lookup to fail every time.</li>
          <li><strong>Concurrent request auth failures:</strong> Multiple requests were sharing the same HttpClient instance. When one request called DefaultRequestHeaders.Clear(), it removed the auth headers another request was in the middle of using. Fixed by switching to HttpRequestMessage so headers are scoped per request.</li>
          <li><strong>React hydration error on dates:</strong> toLocaleDateString() produces different output on the server versus the browser depending on locale settings. The mismatch caused React to throw a hydration error. Fixed by passing an explicit locale and format options so the output is identical everywhere.</li>
          <li><strong>Accidentally committed API keys:</strong> Visual Studio regenerated the .gitignore and removed the entry for appsettings.Development.json. The file got staged with my Supabase and OpenAI keys in it. GitHub&apos;s secret scanning blocked the push, I removed the file from git history with git rm --cached and amended the commit, then rotated the exposed keys.</li>
        </ul>
      </section>

      <section>
        <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">What I Learned</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This was my first time building something with AI at the core and I came out of it understanding
          a lot more than I expected going in. A few things that stand out:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>How vector embeddings actually work — why similar texts produce similar vectors and how cosine similarity turns that into a search.</li>
          <li>How to implement real-time streaming from a third-party API all the way through to the browser, including the edge cases that break it.</li>
          <li>How the Next.js App Router server and client component model works and when to use each one.</li>
          <li>How to design a database schema that handles deletion correctly — foreign keys and cascade deletes matter more than I thought.</li>
          <li>How to manage secrets properly across development and production without ever putting them in the codebase — and what happens when you almost get it wrong.</li>
          <li>How to debug production issues that do not show up locally by reading actual error logs instead of guessing.</li>
          <li>How to deploy two separate services to different platforms and get them talking to each other with proper CORS and environment configuration.</li>
        </ul>
      </section>
      </div>
      <CaseStudyToc sections={sections} />
      </section>
    </main>
  );
}