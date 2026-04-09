import CaseStudyToc from "../../components/case-study-toc";

export default function SplitEasyPage() {
  const sections = [
    { id: "executive-summary", label: "Executive Summary" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "architecture", label: "Architecture" },
    { id: "production-features", label: "Production Features" },
    { id: "algorithm", label: "Debt Simplification Algorithm" },
    { id: "security", label: "Security and Data Integrity" },
    { id: "engineering-highlights", label: "Engineering Highlights" },
    { id: "challenges-solved", label: "Challenges Solved" },
    { id: "results", label: "Results and Portfolio Value" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
      <div className="min-w-0 max-w-4xl">
      <p className="chip mb-4">Full-stack Case Study</p>
      <h1 className="text-4xl font-bold mb-2">SplitEasy</h1>
      <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
        Shared Expense Tracker and Bill Splitting App
      </p>
      <p className="text-gray-600 mb-8 dark:text-gray-300">
        Production-deployed full-stack platform that simplifies group expenses into the minimum set of settlement payments.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Build Timeline</p>
          <p className="font-semibold">~3 weeks</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Delivery Scope</p>
          <p className="font-semibold">10 phases, end-to-end</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Deployment</p>
          <p className="font-semibold">Vercel + Railway</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Data Layer</p>
          <p className="font-semibold">Supabase PostgreSQL</p>
        </div>
      </div>

      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href="https://spliteasy-alpha.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Kholekile2/spliteasy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View Code
        </a>
        <a
          href="https://spliteasy-production-09fc.up.railway.app/health"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          API Health
        </a>
      </div>

      <section className="mb-12">
        <h2 id="executive-summary" className="scroll-mt-24 text-2xl font-semibold mb-4">Executive Summary</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          SplitEasy is a full-stack expense management product for groups. It handles logging, equal splitting,
          debt simplification, settlement tracking, and real-time synchronization across clients.
          The project demonstrates practical product engineering across architecture, algorithm design,
          data security, and production deployment.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>17 features covering full shared-expense lifecycle.</li>
          <li>Custom debt simplification algorithm integrated into production API logic.</li>
          <li>Real-time collaboration with resilient fallback refresh strategy.</li>
          <li>Multi-layer security through auth, authorization checks, and RLS.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">Problem</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Group expenses create a graph of overlapping debts that becomes hard to track manually.
          Naive tracking surfaces too many person-to-person obligations, increasing settlement friction
          and causing confusion about who owes whom.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="solution" className="scroll-mt-24 text-2xl font-semibold mb-4">Solution</h2>
        <p className="text-gray-700 dark:text-gray-300">
          SplitEasy combines fast expense capture, automatic equal splits, and a debt simplification algorithm
          that reduces settlement complexity to the minimum set of required payments.
          Instead of showing every edge in the debt graph, the app returns clear settlement instructions.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="tech-stack" className="scroll-mt-24 text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Frontend: Next.js 14 App Router, TypeScript, Tailwind CSS.</li>
          <li>Backend: ASP.NET Core Minimal APIs with C# business logic.</li>
          <li>Database: Supabase PostgreSQL with Auth, RLS, and Realtime.</li>
          <li>Deployment: Vercel for frontend and Railway for backend.</li>
          <li>Reporting: Client-side PDF generation using jsPDF.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="architecture" className="scroll-mt-24 text-2xl font-semibold mb-4">Architecture</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Presentation</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Next.js App Router frontend handling routing, server-rendered entry points, and interactive views.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Application</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              ASP.NET Core Minimal APIs implementing business logic, access checks, and settlement computation.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Data</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Supabase PostgreSQL with relational constraints, auth integration, RLS, and realtime channels.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 id="production-features" className="scroll-mt-24 text-2xl font-semibold mb-4">Production Features</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Authentication via Supabase Auth with guarded routes and session handling.</li>
          <li>Group management: create groups, invite members, leave, and controlled deletion.</li>
          <li>Expense capture with category tags and automatic equal split per member.</li>
          <li>Settlement workflow with live balance updates across connected clients.</li>
          <li>Group analytics: totals, contribution breakdown, and category-level spend view.</li>
          <li>Client-side PDF export for expense and settlement reporting.</li>
          <li>Deletion history audit trail and account deletion support.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="algorithm" className="scroll-mt-24 text-2xl font-semibold mb-4">Debt Simplification Algorithm</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The algorithm converts many bilateral debts into a reduced settlement plan.
          It computes each member&apos;s net position, separates debtors and creditors,
          and applies greedy matching until all balances converge near zero.
        </p>

        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Stage 1: Net balances from expenses and historical settlements.</li>
          <li>Stage 2: Partition into creditors (positive) and debtors (negative).</li>
          <li>Stage 3: Greedy match largest debtor with largest creditor repeatedly.</li>
          <li>Precision guard: threshold of 0.01 to avoid floating-point currency noise.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="security" className="scroll-mt-24 text-2xl font-semibold mb-4">Security and Data Integrity</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Row Level Security on all tables for tenant isolation at database level.</li>
          <li>Per-endpoint membership verification using x-user-id authorization checks.</li>
          <li>Service-role keys kept server-side only; browser uses restricted public key.</li>
          <li>Strict CORS policy for known frontend origins in dev and production.</li>
          <li>Environment-based secret management on Vercel and Railway.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="engineering-highlights" className="scroll-mt-24 text-2xl font-semibold mb-4">Engineering Highlights</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Realtime architecture with subscription fallback refetch on connect and reconnect.</li>
          <li>Server and client component split aligned with Next.js App Router boundaries.</li>
          <li>7-table relational schema with cascades, composite keys, and trigger-driven profile creation.</li>
          <li>DTO mapping layer to isolate API contracts from ORM and serializer constraints.</li>
          <li>Client-side PDF generation with structured report content for offline sharing.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="challenges-solved" className="scroll-mt-24 text-2xl font-semibold mb-4">Challenges Solved</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Resolved model serialization failures by returning dedicated DTO records.</li>
          <li>Fixed null timestamp inserts by omitting nullable fields and preserving DB defaults.</li>
          <li>Hardened realtime consistency with refetch-on-subscribed fallback behavior.</li>
          <li>Removed production 403 crashes by replacing middleware-dependent forbid helpers.</li>
          <li>Rebuilt missing auth trigger and added profile backfill query for schema recovery.</li>
          <li>Replaced unreliable form POST logout with client-side sign-out flow for hosting compatibility.</li>
          <li>Fixed responsive overflow issues for long member identifiers in group UI.</li>
        </ul>
      </section>

      <section>
        <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">Results and Portfolio Value</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          SplitEasy demonstrates full ownership of a real, multi-user product from design to deployment.
          It combines algorithmic problem solving with production reliability and secure multi-tenant data handling.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Live production deployment with separate frontend and backend infrastructure.</li>
          <li>17 implemented features across auth, groups, expenses, settlements, analytics, and exports.</li>
          <li>Custom settlement algorithm reducing transaction complexity in practical group scenarios.</li>
          <li>Real-time collaborative UX supported by resilient data synchronization patterns.</li>
          <li>Documented engineering decisions and production-debugging outcomes across 10 build phases.</li>
        </ul>
      </section>
      </div>
      <CaseStudyToc sections={sections} />
      </section>
    </main>
  );
}
