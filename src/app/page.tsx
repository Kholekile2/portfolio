import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Kholekile Mpengesi</h1>

        <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
          Full-Stack Developer (C# / .NET) | Data &amp; AI Enthusiast
        </p>

        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
          I build full-stack web applications, real-time systems, and
          data-driven solutions. I have experience working with ASP.NET Core,
          cloud-based AI services, and modern frontend frameworks.
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
