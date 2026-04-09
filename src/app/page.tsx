import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="page-shell min-h-screen px-6 py-16 text-zinc-900 dark:text-zinc-100">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_320px] lg:items-start">
          <div>
            <p className="chip mb-4">Open to software and data roles</p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Kholekile Mpengesi</h1>

            <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
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
          </div>

          <figure className="surface-card overflow-hidden p-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--accent-soft)_70%,transparent),transparent_38%),linear-gradient(180deg,color-mix(in_srgb,var(--surface)_94%,var(--accent-soft)),var(--surface))]">
              <Image
                src="/projects/Creative%20coder%20in%20a%20cozy%20workspace.png"
                alt="Portrait of Kholekile Mpengesi"
                fill
                priority
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
            </div>
          </figure>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Primary Focus</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Full-stack product engineering with business-facing analytics.</p>
          </div>
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Core Stack</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Next.js, ASP.NET Core, Supabase, BigQuery, Streamlit.</p>
          </div>
          <div className="surface-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Value Delivered</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Production systems with measurable workflow and decision impact.</p>
          </div>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>

          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m a postgraduate student specialising in Data Analytics and
            Business Intelligence, with hands-on experience building scalable
            web and AI-powered applications. I&apos;ve worked on healthcare
            platforms and cloud-based AI solutions using Microsoft Azure,
            focusing on real-world impact and system reliability.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            My work combines full-stack development with data and machine
            learning concepts, allowing me to build systems that are not only
            functional, but also intelligent and data-driven.
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
            Working as an AI Cloud Administrator &amp; Data Analyst
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
          <h2 className="mb-6 text-2xl font-semibold">Featured Project</h2>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-xl font-bold">SplitEasy</h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A full-stack expense splitting application with real-time updates
              and a custom debt simplification algorithm that minimizes the
              number of transactions between users.
            </p>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Next.js • ASP.NET Core • Supabase • PostgreSQL
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="https://spliteasy-alpha.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Kholekile2/spliteasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:text-zinc-300"
              >
                View Code
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
