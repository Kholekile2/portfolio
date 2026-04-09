import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="w-full max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
          Developer Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Kholekile Mpengesi
        </h1>
        <h2 className="mt-3 text-lg font-medium text-zinc-600 dark:text-zinc-300 sm:text-xl">
          Full-Stack Developer | Data &amp; BI Enthusiast
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
          I build modern full-stack applications and craft data-driven solutions
          that turn complex information into clear, practical business insights.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 sm:w-auto"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900 sm:w-auto"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
