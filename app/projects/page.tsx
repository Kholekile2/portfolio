type Project = {
  name: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    name: "SplitEasy",
    description:
      "Expense splitting app with real-time updates and a debt simplification algorithm for fair and transparent group settlements.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="mx-auto w-full max-w-6xl">
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            A selection of full-stack and data-focused products built to solve
            practical problems with clean architecture and measurable outcomes.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {project.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 px-4 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  GitHub Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
