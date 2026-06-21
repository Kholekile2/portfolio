import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";
import Image from "next/image";

const project = portfolioData.projects.find((item) => item.id === "global-superstore-regional-profitability")!;

export default function GlobalSuperstoreRegionalProfitabilityPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "What I Did" },
    { id: "screenshots", label: "What It Looks Like" },
    { id: "approach", label: "Approach" },
    { id: "findings", label: "Findings" },
    { id: "data-workflow", label: "Data Workflow" },
    { id: "tools", label: "Tools & Skills" },
    { id: "limitations", label: "Scope & Limitations" },
    { id: "results", label: "What I Learned" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
        <div className="min-w-0 max-w-4xl">
          <p className="chip mb-4">Data Analysis Case Study</p>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
            An Excel analysis of where a global retailer loses money across its regions, and what is actually
            driving those losses
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            A self directed project analysing around 51,000 order records from the public Global Superstore
            dataset, using XLOOKUP, PivotTables, calculated fields, and data validation, finishing with a
            four chart dashboard that turns the findings into clear recommendations.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Tool</p>
              <p className="font-semibold">Microsoft Excel</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Dataset</p>
              <p className="font-semibold">~51,000 records</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Scope</p>
              <p className="font-semibold">13 regions, 2011 to 2014</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Output</p>
              <p className="font-semibold">4 chart dashboard</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12 flex-wrap">
            <a
              href={project.links.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
          </div>

          <section className="mb-12">
            <h2 id="overview" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Global Superstore is a global online retailer selling office supplies, furniture, and technology
              across many countries. Its sales were growing, but its profit was not keeping pace. This project
              sets out to find where the business loses money across its 13 regions and, more importantly, to
              test what is actually causing those losses rather than stopping at the first pattern that appears.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Cleaned and validated around 51,000 order line items, including converting text dates and building calculated profit margin and shipping delay fields.</li>
              <li>Mapped regional margin targets onto every row with XLOOKUP, so actual performance could be judged against a goal.</li>
              <li>Used PivotTables to locate the losses, test the discounting hypothesis, and rule out shipping as an alternative cause.</li>
              <li>Built a four chart dashboard that follows one argument: where the problem is, what causes it, what it is not, and where to act.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A business can look healthy in total while quietly bleeding money underneath. Global Superstore&apos;s
              overall margin sat at a modest few percent, which on its own looks unremarkable. The risk with a
              number like that is that it averages strong regions and failing regions together, hiding the
              failure inside the average.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The harder part is not finding a weak region. It is resisting the urge to blame the first thing that
              correlates with the losses. A region that discounts heavily and loses money might be losing money
              because of the discounts, or because of shipping costs, or because of something the data cannot see
              at all. Deciding which, honestly, is the actual work.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="solution" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Did
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I treated it as a single investigation with a spine rather than a list of disconnected questions.
              First, establish whether a problem exists and where. Then form a hypothesis about the cause. Then
              actively try to disprove that hypothesis by testing the most plausible alternative. Then refine the
              finding once it survives the test.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              That structure is what the final dashboard reflects: the problem, the likely cause, the alternative
              that was ruled out, and the specific place to act. Every chart earns its place by proving one step
              of that argument, and nothing is included just to look busy.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="screenshots" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What It Looks Like
            </h2>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/global-superstore-regional-profitability/dashboard.png"
                  alt="Global Superstore Regional Profitability dashboard, four charts"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The dashboard. Four charts arranged as one argument: three regions lose money on the average sale
                (the problem), high discounts line up with negative margins (the cause), the loss making regions
                have the lowest shipping costs (an alternative ruled out), and within Southeast Asia a few
                heavily discounted categories drive the damage (where to act).
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="approach" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Approach
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Cleaned and validated the data: confirmed the dates were stored as text and converted them to real dates, built profit margin (Profit ÷ Sales) and shipping delay (Ship Date − Order Date), and checked for full row duplicates.</li>
              <li>Mapped targets onto the data: built a reference table of regional margin targets and pulled them onto every row with XLOOKUP, so actual margins could be compared against a goal.</li>
              <li>Tested the hypothesis with PivotTables: compared total profit, sales, average margin, and average discount across regions to locate the losses and test whether discounting explained them.</li>
              <li>Ruled out alternatives: tested shipping delay and shipping cost against the weak regions to check whether shipping, rather than discounting, was the driver. It was not.</li>
              <li>Drilled into products: broke the problem regions down by sub category, and confirmed the most extreme finding against its sales volume before reporting it.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="findings" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Findings
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Losses are concentrated, not spread</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Africa, EMEA, and Southeast Asia run negative average margins while the other ten regions stay
                  profitable. The business looks healthy overall only because the profitable regions absorb the
                  losses.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Discounting tracks with the losses</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The three loss making regions carry the highest discounts (16 to 27 percent), while the
                  healthiest region, Canada, discounts nothing and holds the best margin. Across all regions,
                  deeper discounts line up with worse margins.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Shipping is not the cause</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Both shipping cost and delay were tested and neither aligns with the losses. Africa and EMEA in
                  fact have the lowest shipping costs in the company yet still lose money, which points the focus
                  back to discounting.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Southeast Asia is surgical, not region wide</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Most of the region is profitable apart from a few heavily discounted categories (Tables,
                  Accessories, Supplies, Fasteners) that drag it negative, so the fix there is targeted rather
                  than blanket.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="data-workflow" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Data Workflow
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>One working copy of the raw download was kept untouched, with all analysis done on a separate file, so the original could always be returned to.</li>
              <li>Dates arrived as text and would not calculate, so they were diagnosed (ISNUMBER returned false) and rebuilt into real dates before any date maths.</li>
              <li>Profit margin and shipping delay were derived as calculated columns rather than trusted from the source, and a Met Target column turned raw margin into a business judgement.</li>
              <li>Region targets live on their own reference sheet and are pulled into the data via XLOOKUP, so the targets can be changed in one place and flow through automatically.</li>
              <li>Summary tables feeding the dashboard were stored as static values, separate from the live pivots, so the charts stay stable while the pivots can still be re sorted freely.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="tools" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Tools & Skills
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Tool: {project.techStack.tools?.join(", ")}.</li>
              <li>Techniques: {project.techStack.data?.join(", ")}.</li>
              <li>Analysis skills: {project.techStack.skills?.join(", ")}.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="limitations" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Scope & Limitations
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Correlation, not proven causation. Discounting is the factor most strongly associated with the losses, but only a limited set of explanations was tested, so discount is not claimed as the sole or definitive cause.</li>
              <li>Short time window. The data spans only four years, too short to confirm whether profitability is genuinely improving or declining over time.</li>
              <li>No visibility into external factors. The dataset holds no information on regional economies, customer behaviour, or pricing strategy, so those explanations cannot be tested and are not claimed.</li>
              <li>Assumed targets. The regional margin targets were reasonable assumptions set for this analysis, not actual company figures.</li>
              <li>Averages can hide variation. The most extreme finding (Tables in Southeast Asia) rests on a smaller sample of 59 sales, so its direction is clear but its precise figure is less reliable.</li>
            </ul>
          </section>

          <section>
            <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Learned
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most useful thing this project taught me was not a feature of Excel. It was the discipline of
              testing my own conclusion before trusting it. The striking finding is rarely the whole story, and a
              number that looks dramatic often deserves a second look at how much data sits behind it.
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
