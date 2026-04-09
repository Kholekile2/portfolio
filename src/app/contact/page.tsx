export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Feel free to reach out if you&apos;d like to collaborate, discuss opportunities,
        or just connect.
      </p>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:kholekilempengesi2000@gmail.com"
              className="text-blue-600 dark:text-blue-400"
            >
              kholekilempengesi2000@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong> 078 865 4651
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Kholekile2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400"
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
              className="text-blue-600 dark:text-blue-400"
            >
              linkedin.com/in/kholekilempengesi/
            </a>
          </p>

          <p>
            <strong>Location:</strong> Cape Town, South Africa
          </p>
        </div>
      </section>
    </main>
  );
}
