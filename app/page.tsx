import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Kholekile Mpengesi</h1>

        <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
          Full-Stack Developer | Data Analytics and AI
        </p>

        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
          I build production web applications, analytics dashboards, and AI-powered systems.
          My work combines software engineering, data analysis, and practical problem solving across the stack.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>

          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m a postgraduate student specialising in Data Analytics and Business Intelligence,
            with hands-on experience building scalable web applications, analytics platforms,
            and AI-enabled tools. I focus on systems that are useful, reliable, and grounded in real business needs.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            My work combines full-stack development with data and machine learning concepts,
            allowing me to build systems that are not only functional, but also decision-supportive and data-driven.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>

          <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 md:grid-cols-3">
            <div>C# / .NET (ASP.NET Core, Blazor)</div>
            <div>JavaScript / TypeScript (Next.js)</div>
            <div>Python &amp; R (Data Analysis)</div>
            <div>SQL (PostgreSQL, MySQL, BigQuery)</div>
            <div>Microsoft Azure &amp; AI Services</div>
            <div>Supabase &amp; Real-time Systems</div>
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Experience</h2>

          <p className="text-gray-700 dark:text-gray-300">
            Currently working as an AI Cloud Administrator &amp; Data Analyst
            at Forvis Mazars, where I support cloud-based AI solutions, data
            analysis, and reporting using Microsoft Azure.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Currently working as a Software Developer at the University of the
            Western Cape, contributing to AI and software development projects
            within the UWC CoLab. Developing full-stack applications,
            implementing AI solutions, and collaborating on projects to deliver
            practical, user-centered software. Skilled in React, ASP.NET Core,
            Tailwind CSS, and integrating AI-driven features. Focused on
            building efficient, scalable, and maintainable solutions while
            gaining hands-on experience in real-world software development.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-xl font-bold">SplitEasy</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Production expense-sharing platform with realtime updates, secure multi-user workflows,
                and a custom debt simplification algorithm that minimizes settlement steps.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Next.js • ASP.NET Core • Supabase • PostgreSQL
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/spliteasy"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Case Study
                </Link>
                <a
                  href="https://spliteasy-alpha.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-xl font-bold">DocChat</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Production RAG application that turns PDFs into conversational knowledge with grounded,
                real-time answers.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Next.js • ASP.NET Core • Supabase • OpenAI • pgvector
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/docchat"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Case Study
                </Link>
                <a
                  href="https://ai-document-chat-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-xl font-bold">Auto Analytics Portal</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                BI dashboard for car pricing strategy, translating BigQuery analysis into actionable pricing guidance.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Streamlit • BigQuery • SQL • Pandas • Plotly
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/auto-analytics"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/BIA715_DataExploration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-xl font-bold">MedCare Booking System</h3>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Healthcare operations platform combining specialist booking, administrative controls, and analytics for capacity and revenue.
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Streamlit • BigQuery • Python • Pandas • Plotly
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  href="/projects/medcare"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Case Study
                </Link>
                <a
                  href="https://github.com/Kholekile2/Streamlit-Data-Exploration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
