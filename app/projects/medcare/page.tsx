import Image from "next/image";

export default function MedCarePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">MedCare Booking System</h1>
      <p className="text-lg text-gray-600 mb-6 dark:text-gray-300">
        A Streamlit-based medical facility management solution for specialist booking, patient access, and admin analytics.
      </p>

      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href="https://github.com/Kholekile2/Streamlit-Data-Exploration"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded"
        >
          View Code
        </a>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 dark:text-gray-300">
          MedCare Booking System is a multi-page Streamlit web application integrated with Google BigQuery.
          It supports patient-facing appointment booking, specialist browsing, and an administrator dashboard
          for monitoring bookings, revenue, and specialist performance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The application was designed to make specialist appointments easier for patients while giving the
          facility a clearer view of operational data. It reduces manual scheduling friction, improves
          transparency around availability, and provides decision-support analytics for administrators.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold mb-2">Presentation Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Streamlit interface for Home, Specialists, Booking, and Admin pages with Plotly visualizations.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold mb-2">Application Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Python logic, validation, session handling, and Google BigQuery API integration.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold mb-2">Data Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              BigQuery dataset storing clients, specialists, dates, time slots, bookings, and admin users.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Flow</h2>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>User interacts with the Streamlit interface.</li>
          <li>The app sends SQL queries to BigQuery through the Python client.</li>
          <li>Results are processed with Pandas and rendered in the interface.</li>
          <li>Plotly displays charts and dashboards for operational analysis.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The landing page introduces MedCare services, explains the booking workflow, and provides direct navigation into the specialist and booking experience.
        </p>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/projects/medcare/home.png"
            alt="MedCare home page"
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interactive Dashboard with Advanced Filtering</h2>
        <div className="grid gap-8 md:grid-cols-2 mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Filtering Capabilities</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Date range filter to analyze specific periods.</li>
              <li>Multi-select specialist filter for focused performance tracking.</li>
              <li>Chart style selection (interactive, static, or animated views).</li>
              <li>One-click reset with cache clearing for fast re-analysis.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Metrics Display</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Total bookings count.</li>
              <li>Total revenue generated.</li>
              <li>Number of active specialists.</li>
              <li>Average booking value.</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/projects/medcare/interactive-dashboard-advanced-filtering.png"
            alt="Interactive dashboard with advanced filtering"
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Comprehensive Analytics Visualizations</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Interactive specialist booking charts with ranking and hover context.</li>
          <li>Color-coded visuals by medical specialty to improve interpretation speed.</li>
          <li>Multiple chart types to compare operational and financial performance.</li>
        </ul>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/projects/medcare/comprehensive-analytics-visualizations.png"
            alt="Comprehensive analytics visualizations"
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Medical Specialty Performance</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Dual charts: pie chart for booking distribution and bar chart for revenue.</li>
          <li>Specialist count and average booking value per specialty.</li>
          <li>Revenue comparison across specialties for strategic staffing decisions.</li>
        </ul>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/projects/medcare/medical-specialty-performance.png"
            alt="Medical specialty performance analysis"
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Revenue Trends Analysis</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Monthly revenue line charts with markers.</li>
          <li>Time-series analysis using filtered periods.</li>
          <li>Revenue growth visibility for planning and forecasting.</li>
        </ul>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/projects/medcare/revenue-trends-analysis.png"
            alt="Revenue trends analysis"
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Peak Hours Analysis</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Time-slot utilization analysis by hour.</li>
          <li>Booking distribution throughout the day.</li>
          <li>Color-gradient popularity indicators for schedule optimization.</li>
        </ul>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <Image
            src="/projects/medcare/peak-hours-analysis.png"
            alt="Peak hours analysis"
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Secure administrator login with hashed passwords and session management.</li>
          <li>Booking limit enforcement to prevent excessive active appointments.</li>
          <li>Advanced dashboard filtering for targeted operational analysis.</li>
          <li>Comprehensive analytics for specialist performance, revenue, and peak demand periods.</li>
          <li>BigQuery-backed storage for reliable, centralized data management.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Challenges and Solutions</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The main challenges were building efficient SQL joins across related tables, keeping page navigation consistent,
          and ensuring the dashboard responded correctly to filters. These were handled by testing queries in BigQuery,
          using modular page structure, and applying validation and caching where needed.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-gray-700 dark:text-gray-300">
          MedCare Booking System demonstrates how Streamlit and BigQuery can be combined into a practical healthcare
          operations platform that improves patient booking access while supporting data-informed management.
        </p>
      </section>
    </main>
  );
}
