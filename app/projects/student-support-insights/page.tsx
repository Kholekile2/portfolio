import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";
import Image from "next/image";

const project = portfolioData.projects.find((item) => item.id === "student-support-insights")!;

export default function StudentSupportInsightsPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "What I Built" },
    { id: "screenshots", label: "What It Looks Like" },
    { id: "design-thesis", label: "Design Thesis" },
    { id: "data-workflow", label: "Data Workflow" },
    { id: "features", label: "Features" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "architecture", label: "Architecture" },
    { id: "engineering-highlights", label: "Technical Highlights" },
    { id: "challenges-solved", label: "Challenges I Hit" },
    { id: "results", label: "What I Learned" },
  ];

  return (
    <main className="page-shell project-page min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
        <div className="min-w-0 max-w-4xl">
          <p className="chip mb-4">Data & Ethics Case Study</p>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
            A responsible by design data tool that helps educational programmes identify learner support needs
            before learners disengage
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            Built with Python, Streamlit, pandas, Plotly, and pytest. Delivered as an SFIA Level 3 integrated
            project covering data ethics, business modelling, process improvement, programming, data analytics,
            and methods/tools.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Language</p>
              <p className="font-semibold">Python 3.11</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Framework</p>
              <p className="font-semibold">Streamlit</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Analysis</p>
              <p className="font-semibold">pandas + Plotly</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Tests</p>
              <p className="font-semibold">8 pytest cases</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12 flex-wrap">
            <a
              href={project.links.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Code
            </a>
          </div>

          <section className="mb-12">
            <h2 id="overview" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Student Support Insights Tool helps an educational programme understand its enrolled learners:
              who they are, where confidence and risk concentrate, and what they themselves are asking for,
              so staff can act on real need before learners disengage. The tool runs as a three page Streamlit
              application with a binding per session responsible use agreement, architecturally enforced consent,
              and a validation pipeline that surfaces data quality issues rather than silently cleaning them.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Aggregate dashboard with eight filters, four colour coded KPIs, and six charts organised into Reach, Struggle, and Voice rows.</li>
              <li>Individual learner page that surfaces the learner&apos;s own stated need first and pairs every signal with a concrete support action.</li>
              <li>Live computed insights and recommendations panels that update as filters change.</li>
              <li>Eight pytest cases, two of which enforce ethical design rules in code, not just documentation.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Digital skills programmes routinely collect detailed information about their learners at intake:
              age, province, device access, internet stability, confidence ratings, stated support needs. Then
              the data sits in a spreadsheet and is rarely used. Problems are noticed late, support is given
              reactively, and the learners least able to ask for help are the most likely to disappear quietly.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The deeper problem is that the same data that could surface a learner&apos;s need early is also the
              data that makes them easy to write off. A &quot;phone only&quot; learner is a learner who needs a device
              loan, or a learner the programme decides not to invest in. The tool the programme uses determines
              which of those framings wins.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="solution" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Built
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A three page Streamlit application built around a single design principle: identifying a learner&apos;s
              need should trigger support, not judgement, and the design must actively make the helping path
              easier than the harming path. The dashboard shows aggregate views with no individual learners
              named. The Learner Detail page surfaces the learner&apos;s own voice first and pairs every signal
              with a concrete action. The About page is the embedded ethics statement.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The architecture enforces three rules at runtime: no data renders until the user identifies
              themselves and agrees to a responsible use statement, every signal shown is paired with a support
              action, and every action taken is recorded against the learner, creating an audit trail the
              programme can be held accountable to.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="screenshots" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What It Looks Like
            </h2>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/student-support-insights/dashboard.png"
                  alt="Student Support Insights Tool: Dashboard view"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The Dashboard. Four colour coded KPIs summarise the current view, and six charts are organised
                into three story rows: Reach (where the programme serves), Struggle (where confidence and risk
                concentrate), and Voice (what learners themselves asked for). No individual learners are named
                on this page.
              </p>
            </div>

            <div className="mb-4">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/student-support-insights/risk-by-device.png"
                  alt="Attendance risk profile by device access, the chart that changed the conversation"
                  width={1080}
                  height={720}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The chart that changed the conversation about the tool&apos;s purpose. 90% of phone only learners
                are at Medium or High attendance risk, compared to 23% of learners with their own laptop. The
                takeaway isn&apos;t that phone only learners are less committed. Device access is a
                structural constraint the programme can act on. Sample sizes are shown above each bar so small
                samples can&apos;t be over interpreted.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="design-thesis" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Design Thesis
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Helping path easier than harming path</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Every signal the tool surfaces is paired with a concrete support action. A &quot;phone only&quot;
                  flag appears next to &quot;suggest device loan,&quot; never as a bare label.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Learner&apos;s voice ranks first</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  On the Learner Detail page, the learner&apos;s own stated support need is shown before anything
                  the system inferred about them. Enforced in code via a pytest assertion.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Consent is architectural</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Until the user identifies themselves and agrees to the responsible use statement, no data
                  renders, not even on individual learner pages, which have their own guard.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Validation as ethical safeguard</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Bad data is surfaced, not silently fixed. The tool refuses to act on assumptions. Duplicates,
                  out of range scores, and malformed entries are flagged for the user to review.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="data-workflow" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Data Workflow
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>A single entry point in <code>utils/data_loader.py</code> handles all data loading, validation, and band derivation. No other part of the codebase loads data directly.</li>
              <li>The data dictionary defines what &quot;valid&quot; means; the loader enforces it; the test suite protects those rules from being accidentally removed.</li>
              <li>Synthetic dataset of 51 learners with deliberate dirt (one duplicate ID, one out of range score, one malformed province) so the validation pipeline has something to catch.</li>
              <li>Confidence bands (Low / Medium / High) are derived on every load, never set manually, never trusted from input.</li>
              <li>Dashboard insights are computed live from the filtered DataFrame, so observations update as the user narrows the view.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="features" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Features
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              {(project.features ?? []).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="tech-stack" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Tech Stack
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Language: {project.techStack.language?.join(", ")}.</li>
              <li>Frontend: {project.techStack.frontend?.join(", ")}.</li>
              <li>Data: {project.techStack.data?.join(", ")}.</li>
              <li>Testing: {project.techStack.testing?.join(", ")}.</li>
              <li>Tools: {project.techStack.tools?.join(", ")}.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="architecture" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Architecture
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The application is separated into a UI layer (the three Streamlit pages), a logic layer (the
              recommendation engine and validation rules), and a data layer (the loader and synthetic dataset).
              That separation made the test suite straightforward. The rules can be tested without spinning up
              a UI, and the UI can be rebuilt without touching the rules.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">UI Layer</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Three Streamlit pages, Dashboard, Learner Detail, and About, each with its own consent guard
                  and rendering logic.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Logic Layer</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Rule based recommendation engine and validation pipeline live in <code>utils/</code>, separated
                  from any UI concern so they can be unit tested in isolation.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Data Layer</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Synthetic CSV dataset with a documented data dictionary that defines the consent boundary of
                  the system, specifically the columns the tool is allowed to know about a learner.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="engineering-highlights" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Technical Highlights
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              {(project.engineeringHighlights ?? []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="challenges-solved" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Challenges I Hit
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {(project.challenges ?? []).map((challenge) => (
                <div key={challenge.challenge} className="surface-card p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{challenge.challenge}</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Learned
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Building this project taught me more about how to think about data than how to write Python. The
              biggest shift was understanding that data is not just numbers. It is a way of shaping how people
              think about other people, and the choices you make in handling it carry weight the numbers
              themselves don&apos;t show. Every column you decide to collect is a decision about what you are
              allowed to judge someone on.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              {(project.lessonsLearned ?? []).map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </section>
        </div>

        <CaseStudyToc sections={sections} />
      </section>
    </main>
  );
}
