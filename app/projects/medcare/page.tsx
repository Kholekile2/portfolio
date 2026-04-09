import Image from "next/image";
import CaseStudyToc from "../../components/case-study-toc";

export default function MedCarePage() {
  const sections = [
    { id: "executive-summary", label: "Executive Summary" },
    { id: "business-problem", label: "Business Problem and Purpose" },
    { id: "architecture", label: "System Architecture" },
    { id: "data-flow", label: "Data Flow and Model" },
    { id: "home-experience", label: "Home Experience" },
    { id: "advanced-filtering", label: "Dashboard and Filtering" },
    { id: "visualizations", label: "Analytics Visualizations" },
    { id: "specialty-performance", label: "Specialty Performance" },
    { id: "revenue-trends", label: "Revenue Trends" },
    { id: "peak-hours", label: "Peak Hours" },
    { id: "data-export", label: "Data Management and Export" },
    { id: "security-controls", label: "Security Controls" },
    { id: "challenges", label: "Challenges Solved" },
    { id: "decision-playbook", label: "Decision Playbook" },
    { id: "outcome", label: "Outcome and Business Value" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
      <div className="min-w-0 max-w-4xl">
      <p className="chip mb-4">Healthcare Analytics Case Study</p>
      <h1 className="text-4xl font-bold mb-2">MedCare Booking System</h1>
      <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
        Streamlit-Based Medical Facility Management and Analytics Platform
      </p>
      <p className="text-gray-600 mb-8 dark:text-gray-300">
        Healthcare operations case study combining patient booking workflows with decision-grade analytics for capacity, revenue, and specialist performance.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Sector</p>
          <p className="font-semibold">Healthcare operations</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Core Objective</p>
          <p className="font-semibold">Booking efficiency</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Data Platform</p>
          <p className="font-semibold">Google BigQuery</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">BI Focus</p>
          <p className="font-semibold">Capacity and revenue</p>
        </div>
      </div>

      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href="https://github.com/Kholekile2/Streamlit-Data-Exploration"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View Code
        </a>
      </div>

      <section className="mb-12">
        <h2 id="executive-summary" className="scroll-mt-24 text-2xl font-semibold mb-4">Executive Summary</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          MedCare Booking System was designed to solve two linked healthcare challenges: patient booking friction and limited managerial visibility.
          The platform digitizes specialist appointment booking while giving administrators a live analytics layer to monitor demand,
          optimize specialist allocation, and improve service quality.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Patient-facing workflow for discovery, booking, and confirmation in one interface.</li>
          <li>Admin dashboard with filtering, KPI monitoring, and visual performance analysis.</li>
          <li>BigQuery-backed architecture enabling scalable, query-driven healthcare reporting.</li>
          <li>Operational controls including authentication, booking limits, and auditable data access.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="business-problem" className="scroll-mt-24 text-2xl font-semibold mb-4">Business Problem and Purpose</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Manual appointment coordination leads to long response times, weak visibility into specialist availability,
          and high administrative overhead. MedCare addresses this by creating a unified digital booking and BI environment
          where patient access and operational decisions are both supported by real-time data.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="architecture" className="scroll-mt-24 text-2xl font-semibold mb-4">System Architecture</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Presentation Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Streamlit pages for patient booking and admin analytics with Plotly visual outputs.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Application Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Python validation logic, workflow orchestration, and BigQuery client interactions.
            </p>
          </div>
          <div className="surface-card p-5">
            <h3 className="font-semibold mb-2">Data Layer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              BigQuery relational model storing clients, specialists, time slots, dates, bookings, and admin credentials.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 id="data-flow" className="scroll-mt-24 text-2xl font-semibold mb-4">Data Flow and Analytical Model</h2>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Users interact with Streamlit pages (patient flow or admin analytics flow).</li>
          <li>Actions trigger SQL reads or writes through the BigQuery API.</li>
          <li>Pandas performs shaping and aggregation for metric-level analysis.</li>
          <li>Plotly visualizes utilization, specialist performance, and revenue behavior.</li>
          <li>Filter-aware dashboard views support targeted operational diagnosis.</li>
        </ol>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          The core model follows a star-schema-like pattern where Bookings acts as the fact table linked to Clients,
          Specialists, Dates, and TimeSlots. This enables scalable joins for time-series and specialty-level reporting.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="home-experience" className="scroll-mt-24 text-2xl font-semibold mb-4">Home Experience and Service Positioning</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The landing page establishes trust and clarity through service highlights, booking steps,
          and transparent care access principles. It frames the platform as both patient-friendly and operations-ready.
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
        <h2 id="advanced-filtering" className="scroll-mt-24 text-2xl font-semibold mb-4">Interactive Dashboard with Advanced Filtering</h2>
        <div className="grid gap-8 md:grid-cols-2 mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Filtering Capabilities</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Date range filtering for period-based demand and revenue diagnostics.</li>
              <li>Specialist-level filtering for targeted performance review.</li>
              <li>Chart style switching for exploratory versus presentation mode analysis.</li>
              <li>One-click reset and cache clearing for rapid iterative analysis.</li>
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Business implication: This view enables management to move from static reporting to active control,
          where staffing, slot allocation, and campaign timing can be adjusted based on live KPI shifts.
        </p>
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
        <h2 id="visualizations" className="scroll-mt-24 text-2xl font-semibold mb-4">Comprehensive Analytics Visualizations</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Interactive specialist booking charts with ranking and hover context.</li>
          <li>Color-coded visuals by medical specialty to improve interpretation speed.</li>
          <li>Multiple chart types to compare operational and financial performance.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Business implication: Visual diversity supports both diagnostic analytics and leadership communication,
          improving speed-to-decision for non-technical stakeholders.
        </p>
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
        <h2 id="specialty-performance" className="scroll-mt-24 text-2xl font-semibold mb-4">Medical Specialty Performance</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Dual charts: pie chart for booking distribution and bar chart for revenue.</li>
          <li>Specialist count and average booking value per specialty.</li>
          <li>Revenue comparison across specialties for strategic staffing decisions.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Business implication: Specialty-level visibility helps identify overutilized and underutilized service lines,
          informing hiring priorities, referral strategies, and marketing allocation.
        </p>
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
        <h2 id="revenue-trends" className="scroll-mt-24 text-2xl font-semibold mb-4">Revenue Trends Analysis</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Monthly revenue line charts with markers.</li>
          <li>Time-series analysis using filtered periods.</li>
          <li>Revenue growth visibility for planning and forecasting.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Business implication: Time-series monitoring supports budget planning, seasonal preparedness,
          and proactive revenue risk management.
        </p>
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
        <h2 id="peak-hours" className="scroll-mt-24 text-2xl font-semibold mb-4">Peak Hours Analysis</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Time-slot utilization analysis by hour.</li>
          <li>Booking distribution throughout the day.</li>
          <li>Color-gradient popularity indicators for schedule optimization.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Business implication: Peak-hour intelligence supports better rota planning, wait-time reduction,
          and improved patient experience through capacity balancing.
        </p>
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
        <h2 id="data-export" className="scroll-mt-24 text-2xl font-semibold mb-4">Data Management and Export</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Expandable, filtered raw tables for analyst-level drill-down validation.</li>
          <li>Tabbed data views for specialist performance, revenue trends, time-slot utilization, and specialty metrics.</li>
          <li>CSV export for offline analysis, audit support, and stakeholder reporting.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="security-controls" className="scroll-mt-24 text-2xl font-semibold mb-4">Security and Operational Controls</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Secure administrator login with hashed passwords and session management.</li>
          <li>Booking limit enforcement to prevent excessive active appointments.</li>
          <li>Controlled BigQuery API access for authorized data operations.</li>
          <li>Validation-oriented workflow to preserve data quality and process consistency.</li>
          <li>Centralized cloud storage to support reliability and auditable reporting.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="challenges" className="scroll-mt-24 text-2xl font-semibold mb-4">Challenges Solved</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The project addressed multi-table query complexity, filter-driven dashboard consistency,
          and end-to-end page integration reliability. These were resolved through iterative SQL testing in BigQuery,
          modular page design, parameterized filtering, caching for performance, and defensive validation for future data changes.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="decision-playbook" className="scroll-mt-24 text-2xl font-semibold mb-4">Decision Playbook for Facility Managers</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Use peak-hour charts to reallocate staffing and reduce patient queue pressure.</li>
          <li>Use specialty performance trends to guide recruitment and referral investment.</li>
          <li>Track average booking value and monthly revenue to detect growth or margin risk early.</li>
          <li>Apply date and specialist filters to evaluate operational impact of interventions.</li>
          <li>Export filtered data for monthly governance and continuous improvement reviews.</li>
        </ul>
      </section>

      <section>
        <h2 id="outcome" className="scroll-mt-24 text-2xl font-semibold mb-4">Outcome and Business Value</h2>
        <p className="text-gray-700 dark:text-gray-300">
          MedCare Booking System demonstrates how digital booking and analytics can operate as one healthcare intelligence system.
          The result is improved access for patients, stronger operational control for administrators, and a repeatable,
          data-driven approach to improving service quality and facility performance.
        </p>
      </section>
      </div>
      <CaseStudyToc sections={sections} />
      </section>
    </main>
  );
}
