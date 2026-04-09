export default function SplitEasyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">SplitEasy</h1>
      <p className="text-lg text-gray-600 mb-6 dark:text-gray-300">
        Full-stack expense splitting application with real-time updates and a custom debt simplification algorithm.
      </p>

      {/* Links */}
      <div className="flex gap-4 mb-12">
        <a
          href="https://spliteasy-alpha.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Kholekile2/spliteasy"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded"
        >
          View Code
        </a>
      </div>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Splitting expenses in groups quickly becomes messy, with multiple people owing each other different amounts.
          Tracking individual transactions leads to unnecessary complexity and confusion.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p className="text-gray-700 dark:text-gray-300">
          SplitEasy allows users to log shared expenses and automatically calculates the minimum number of payments
          required to settle all debts using a custom algorithm.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Next.js, TypeScript, Tailwind CSS, ASP.NET Core, C#, Supabase (PostgreSQL), Realtime APIs
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Group expense tracking with equal split</li>
          <li>Real-time updates across users</li>
          <li>Debt simplification algorithm</li>
          <li>Settlement tracking and summaries</li>
          <li>Secure authentication with Row Level Security</li>
        </ul>
      </section>

      {/* Algorithm */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Debt Simplification Algorithm</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Instead of tracking every individual debt, the system calculates each user's net balance and uses
          a greedy matching algorithm to minimize the number of transactions required to settle all balances.
        </p>

        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Calculate net balances per user</li>
          <li>Separate creditors and debtors</li>
          <li>Match largest debtor with largest creditor</li>
          <li>Repeat until all balances are settled</li>
        </ul>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The system follows a three-tier architecture with a clear separation between frontend, backend,
          and database. The frontend communicates with a .NET API, which handles business logic and interacts
          with a PostgreSQL database via Supabase.
        </p>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Handled serialization issues using DTOs</li>
          <li>Resolved real-time sync inconsistencies with fallback refetching</li>
          <li>Fixed production auth issues with custom 403 responses</li>
          <li>Managed database triggers and schema consistency</li>
        </ul>
      </section>

      {/* Results */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Fully deployed production application</li>
          <li>17 implemented features</li>
          <li>Custom algorithm reducing transaction complexity</li>
          <li>Real-time multi-user collaboration</li>
        </ul>
      </section>
    </main>
  );
}
