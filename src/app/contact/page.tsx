export default function ContactPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          I am open to collaboration, freelance, and full-time opportunities.
        </p>

        <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <ul className="space-y-4 text-sm sm:text-base">
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                Email
              </span>
              <a
                href="mailto:your.email@example.com"
                className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
              >
                your.email@example.com
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                GitHub
              </span>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
              >
                github.com/your-username
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
              >
                linkedin.com/in/your-profile
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
