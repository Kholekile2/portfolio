import CaseStudyToc from "../../components/case-study-toc";

export default function SplitEasyPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "What I Built" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "architecture", label: "Architecture" },
    { id: "features", label: "Features" },
    { id: "algorithm", label: "Debt Simplification Algorithm" },
    { id: "security", label: "Security" },
    { id: "engineering-highlights", label: "Technical Highlights" },
    { id: "challenges-solved", label: "Challenges I Hit" },
    { id: "results", label: "What I Learned" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
      <div className="min-w-0 max-w-4xl">
      <p className="chip mb-4">Full-stack Project</p>
      <h1 className="text-4xl font-bold mb-2">SplitEasy</h1>
      <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
        A bill splitting and shared expense tracker
      </p>
      <p className="text-gray-600 mb-8 dark:text-gray-300">
        Built with Next.js, ASP.NET Core, and Supabase. Live and fully deployed.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Build Time</p>
          <p className="font-semibold">~3 weeks</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Phases</p>
          <p className="font-semibold">10, end-to-end</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Deployed on</p>
          <p className="font-semibold">Vercel + Railway</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Database</p>
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
        <h2 id="overview" className="scroll-mt-24 text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          SplitEasy is a web app that helps groups of people track shared expenses and figure out who owes whom.
          Think of it as a simplified Splitwise — you create a group, log expenses, and the app
          automatically calculates the minimum number of payments needed to settle everything.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>17 features built across the full expense-sharing workflow.</li>
          <li>Custom debt simplification algorithm written from scratch in C#.</li>
          <li>Real-time updates — expenses appear on everyone&apos;s screen without refreshing.</li>
          <li>Security built in at every layer — database, API, and frontend.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">The Problem</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Anyone who has shared a flat or gone on a group trip knows how quickly expense tracking becomes a mess.
          Someone pays for dinner, someone else buys groceries, a third person covers petrol — and by the end
          of the week nobody knows who owes what to whom.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The problem gets worse if you try to track every individual debt separately. With 4 or 5 people
          splitting costs over a few weeks, you can end up with 20+ transactions going in all directions.
          It becomes more confusing than just paying randomly and hoping it evens out.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="solution" className="scroll-mt-24 text-2xl font-semibold mb-4">What I Built</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          SplitEasy solves this in three steps. First, anyone in the group can log an expense quickly —
          just the description, amount, who paid, and a category. Second, the app automatically splits
          every expense equally among all group members. Third — and this is the part I&apos;m most proud of —
          instead of showing every individual debt, the app runs a simplification algorithm that figures out
          the absolute minimum number of payments needed to settle everything.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The result is a simple, clear answer: &quot;You owe Kholekile R175. That&apos;s it.&quot;
          No spreadsheets, no mental maths, no awkward conversations.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="tech-stack" className="scroll-mt-24 text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Frontend: Next.js 14 App Router, TypeScript, Tailwind CSS — deployed on Vercel.</li>
          <li>Backend: ASP.NET Core Minimal APIs with C# — deployed on Railway.</li>
          <li>Database: Supabase (PostgreSQL) with built-in Auth and Realtime.</li>
          <li>PDF export: jsPDF — runs entirely in the browser, no backend needed.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="architecture" className="scroll-mt-24 text-2xl font-semibold mb-4">Architecture</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The app has three separate layers, each with a clear job. The frontend and backend are deployed
          independently and communicate over HTTP.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Next.js handles routing, server-side rendering, and the interactive UI.
              Pages fetch data on the server before rendering so there&apos;s no loading flash.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Backend API</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              ASP.NET Core handles the business logic — creating groups, calculating splits,
              running the debt algorithm, and checking that users only access their own data.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Database</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Supabase PostgreSQL stores everything. Row Level Security makes sure users
              can only ever read data from groups they actually belong to.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 id="features" className="scroll-mt-24 text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Sign up, log in, log out — with protected routes that redirect unauthenticated users.</li>
          <li>Create groups, invite members by email, leave groups, delete groups.</li>
          <li>Log expenses with a description, amount, who paid, and a category.</li>
          <li>Automatic equal split among all group members on every expense.</li>
          <li>Settlement summary showing exactly who owes whom and how much.</li>
          <li>Settle up — record a payment and watch the balances update live.</li>
          <li>Real-time updates — new expenses appear without refreshing the page.</li>
          <li>Expense categories — Food, Transport, Accommodation, Entertainment, and more.</li>
          <li>Group stats — total spent, who paid the most, spending by category.</li>
          <li>Export to PDF — download a full expense and settlement report.</li>
          <li>Deletion history — see who deleted which expense and when.</li>
          <li>Delete account — permanently removes all your data.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="algorithm" className="scroll-mt-24 text-2xl font-semibold mb-4">Debt Simplification Algorithm</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This was the most interesting thing I built in this project. The algorithm takes all the expenses
          in a group and works out the smallest number of payments that settles everything.
          I wrote it from scratch in C# and it runs on every request to the settlements endpoint.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          It works in three stages:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Stage 1 — Calculate each person&apos;s net balance: total paid minus total owed across all expenses and past settlements. Positive means they&apos;re owed money. Negative means they owe money.</li>
          <li>Stage 2 — Split into two groups: people who are owed money (creditors) and people who owe money (debtors).</li>
          <li>Stage 3 — Greedy matching: repeatedly match the biggest debtor with the biggest creditor. The debtor pays the smaller of the two amounts, which settles one of them. Repeat until everyone is at zero.</li>
          <li>One small detail: I use 0.01 as the threshold instead of 0 to avoid floating point rounding issues that come up with currency calculations.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="security" className="scroll-mt-24 text-2xl font-semibold mb-4">Security</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I spent time making sure the app is secure at every layer, not just at the surface level.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Row Level Security is enabled on every table in the database. Even if someone bypassed the API, they couldn&apos;t read another group&apos;s data without the right session.</li>
          <li>Every backend endpoint checks that the requesting user is actually a member of the group they&apos;re asking about.</li>
          <li>The Supabase service role key — which has full database access — only ever lives on the backend server. The browser only gets the restricted public key.</li>
          <li>CORS is configured to only allow requests from the known frontend URL, both in development and production.</li>
          <li>Secrets are stored as environment variables on Vercel and Railway and are never committed to GitHub.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="engineering-highlights" className="scroll-mt-24 text-2xl font-semibold mb-4">Technical Highlights</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Mixed server and client components in Next.js App Router — pages fetch data on the server, interactive parts are extracted into client components.</li>
          <li>Realtime subscriptions in both the expense list and settlement summary, with a refetch triggered on subscribe to handle reconnects.</li>
          <li>7-table relational schema with foreign keys, cascade deletes, composite primary keys, and a PostgreSQL trigger that auto-creates user profiles on signup.</li>
          <li>All API responses use plain DTO record types instead of returning ORM model objects directly — this avoids serialization issues and keeps API contracts clean.</li>
          <li>PDF generation runs entirely in the browser using jsPDF — no backend call needed.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="challenges-solved" className="scroll-mt-24 text-2xl font-semibold mb-4">Challenges I Hit</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Supabase model serialization:</strong> ASP.NET&apos;s JSON serializer couldn&apos;t handle the internal properties on Supabase model objects, causing 500 errors on every response. Fixed by mapping all data onto plain C# record types before returning from endpoints.</li>
          <li><strong>Null timestamps:</strong> Timestamp columns were storing null instead of the database default. The Supabase .NET client was sending explicit nulls. Fixed by changing the column attribute to omit those fields from inserts entirely.</li>
          <li><strong>Realtime not always firing:</strong> The backend uses the service role key to insert data, which bypasses RLS. But Realtime event delivery uses the browser session, which goes through RLS. Fixed by triggering a data refetch whenever the subscription connects, so the UI is always in sync regardless of whether the event arrived.</li>
          <li><strong>Results.Forbid() crashing in production:</strong> ASP.NET&apos;s built-in Forbid() result requires auth middleware that wasn&apos;t configured. Fixed by returning a manual JSON 403 response everywhere instead.</li>
          <li><strong>Auth trigger disappearing:</strong> The profile auto-creation trigger lives on the auth schema, which the Supabase dashboard doesn&apos;t show in the public triggers view. When the database was cleared during testing the trigger was lost and new signups stopped creating profiles. Fixed by recreating it via SQL and adding a backfill query for existing users.</li>
          <li><strong>Logout returning 405 on Vercel:</strong> A plain HTML form POST worked locally but returned 405 on Vercel&apos;s edge network. Fixed by replacing it with a client-side button that calls supabase.auth.signOut() directly.</li>
          <li><strong>Member card overflow:</strong> Long email addresses pushed the member card wider than its container. Fixed with overflow-hidden and break-all CSS on the affected elements.</li>
        </ul>
      </section>

      <section>
        <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">What I Learned</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This was my second full-stack project and I came out of it knowing a lot more than when I started.
          A few things that stand out:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>How to design a relational database schema properly — thinking about foreign keys, cascades, and what happens when data gets deleted.</li>
          <li>How Row Level Security works in Supabase and why it matters for multi-user apps.</li>
          <li>How to implement a real algorithm from scratch and integrate it into a production API.</li>
          <li>How Next.js App Router server and client components work together and when to use each one.</li>
          <li>How to deploy two separate services to different platforms and get them talking to each other.</li>
          <li>How to debug production issues that don&apos;t show up locally — reading actual error logs instead of guessing.</li>
          <li>How to manage secrets properly across development and production without ever putting them in the codebase.</li>
        </ul>
      </section>
      </div>
      <CaseStudyToc sections={sections} />
      </section>
    </main>
  );
}