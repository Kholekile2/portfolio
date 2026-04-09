export default function ContactPage() {
  return (
    <main className="page-shell min-h-screen px-6 py-12 text-zinc-900 dark:text-zinc-100">
      <section className="mx-auto max-w-5xl">
        <p className="chip mb-4">Contact</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s Connect</h1>

        <p className="mt-4 max-w-3xl text-gray-700 dark:text-gray-300">
          I&apos;m open to software engineering, data analytics, and AI-focused opportunities.
          If you&apos;d like to collaborate or discuss a role, feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="mailto:kholekilempengesi2000@gmail.com" className="btn-primary">
            Email Me
          </a>
          <a href="tel:+27788654651" className="btn-secondary">
            Call Me
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="surface-card">
            <h2 className="mb-4 text-xl font-semibold">Contact Details</h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:kholekilempengesi2000@gmail.com" className="text-link">
                  kholekilempengesi2000@gmail.com
                </a>
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+27788654651" className="text-link">
                  +27 78 865 4651
                </a>
              </p>

              <p>
                <strong>Location:</strong> Cape Town, South Africa
              </p>
            </div>
          </section>

          <section className="surface-card">
            <h2 className="mb-4 text-xl font-semibold">Professional Profiles</h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Kholekile2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  github.com/Kholekile2
                </a>
              </p>

              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/kholekilempengesi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  linkedin.com/in/kholekilempengesi
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
