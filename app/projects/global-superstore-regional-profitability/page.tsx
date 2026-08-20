import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";
import Image from "next/image";

const project = portfolioData.projects.find((item) => item.id === "global-superstore-regional-profitability")!;

export default function GlobalSuperstoreRegionalProfitabilityPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Business Context" },
    { id: "numbers", label: "Headline Numbers" },
    { id: "question", label: "The Question" },
    { id: "screenshots", label: "The Dashboard" },
    { id: "findings", label: "Findings" },
    { id: "recommendations", label: "Recommendations" },
    { id: "approach", label: "How I Worked" },
    { id: "tools", label: "Tools & Skills" },
    { id: "limitations", label: "What It Doesn't Claim" },
    { id: "results", label: "What I Took From It" },
  ];

  return (
    <main className="page-shell project-page min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
        <div className="min-w-0 max-w-4xl">
          <p className="chip mb-4">Data Analysis Case Study</p>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
            Finding where a global retailer was losing money across its regions, and what was driving it
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            Sales were growing but profit was not keeping up. This project analyses around 51,000 orders across
            13 regions to find where the losses sat and what was causing them, ending with a one page dashboard
            and a set of recommendations a pricing decision could be built on.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Total Sales</p>
              <p className="font-semibold">$12.6M</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Net Margin</p>
              <p className="font-semibold">12%</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Sales Losing Money</p>
              <p className="font-semibold">24%</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Regions</p>
              <p className="font-semibold">13</p>
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
              across many regions. Its sales were growing, but its profit was not growing with them. That gap is
              the kind of thing that is easy to miss, because a business can look healthy on total sales while
              losing money in places the headline numbers hide.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This project set out to find where the money was actually leaking and what was causing it, and to
              give an answer clear enough that someone deciding on pricing could act on it.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Found that about 24 percent of all sales were unprofitable, and that the losses concentrated in three regions rather than being spread evenly.</li>
              <li>Identified heavy discounting as the factor most closely tied to the losses, then tested and ruled out shipping as an alternative cause.</li>
              <li>Separated a region wide problem from a targeted one, so any pricing fix could be aimed precisely instead of applied across the board.</li>
              <li>Pulled it together into a one page dashboard framed for a decision maker, with each finding paired to a recommendation.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="context" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Business Context
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The overall margin sat at around 12 percent, which on its own looks unremarkable. The problem with
              a single company wide number like that is that it blends strong regions and failing ones together,
              so a real problem can hide inside a healthy looking average.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The harder part of the job was not finding a weak region. It was resisting the urge to blame the
              first thing that lined up with the losses, and instead testing whether that explanation actually
              held. A region that discounts heavily and loses money might be losing money because of the
              discounts, or because of shipping, or because of something the data cannot see. Deciding which,
              honestly, is the actual work.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="numbers" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Headline Numbers
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Total Sales</p>
                <p className="text-2xl font-bold">$12.6M</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Total Profit</p>
                <p className="text-2xl font-bold">$1.47M</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Net Margin</p>
                <p className="text-2xl font-bold">12%</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Sales Losing Money</p>
                <p className="text-2xl font-bold">24%</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              The 24 percent is the number that started the investigation. Almost a quarter of all sales were
              unprofitable, so the question was never whether there was a problem, but where it sat and what was
              causing it.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="question" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Question
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Sales were growing but profit was not keeping up, so where across the 13 regions is the business
              actually losing money, and what is driving it? I treated it as one investigation with a spine
              rather than a list of separate questions: establish where the problem is, form a view on the cause,
              try to disprove that view by testing the most likely alternative, then refine the finding once it
              survives the test.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="screenshots" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Dashboard
            </h2>
            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/global-superstore-regional-profitability/dashboard.png"
                  alt="Global Superstore Regional Profitability dashboard"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The dashboard opens with the four headline numbers, then works through the argument in four
                charts: where the losses sit, what is causing them, what is not (shipping), and where inside
                Southeast Asia to act. The share of unprofitable sales is flagged in red because it frames
                everything below it.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="findings" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Findings
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">The losses are concentrated</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Africa, EMEA, and Southeast Asia run negative average margins while the other ten regions stay
                  profitable. The business looks healthy overall only because the profitable regions cover for
                  the rest.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Discounting tracks the losses</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The loss making regions discount between 16 and 27 percent, while Canada discounts nothing and
                  holds the best margin. Across all regions, the deeper the discount, the worse the margin.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Shipping is not the cause</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Shipping cost and delay were both tested and neither lines up with the losses. Two of the loss
                  making regions have the lowest shipping costs in the company yet still lose money.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Southeast Asia is a special case</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Most of the region is profitable apart from a few heavily discounted categories that drag it
                  negative, so the fix there can be targeted rather than applied to the whole region.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="recommendations" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Recommendations
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Treat the three loss making regions as the priority for a pricing and discount review, rather than spreading attention evenly.</li>
              <li>Cap discounts in those regions for a quarter and measure whether margins recover before making the change permanent.</li>
              <li>Do not spend effort on shipping or logistics for this problem, since the evidence points to discount policy instead.</li>
              <li>In Southeast Asia, aim the discount limits at the specific categories losing money, and check local demand before restocking them.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="approach" className="scroll-mt-24 text-2xl font-semibold mb-4">
              How I Worked
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Cleaned and checked the data first. The dates came in as text and would not calculate, so I rebuilt them into real dates, added profit margin and shipping delay as new columns, and checked for duplicates.</li>
              <li>Set a benchmark for each region by building a margin target table and pulling it onto every row with XLOOKUP, so each region could be judged against a goal.</li>
              <li>Located the losses with PivotTables, comparing profit, sales, margin, and discount across the regions.</li>
              <li>Tested the alternative by checking shipping cost and delay against the weak regions, which ruled shipping out.</li>
              <li>Went to product level, breaking the problem regions down by category and checking the most extreme result against its sample size before treating it as real.</li>
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
              What It Doesn't Claim
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Being clear about the limits is part of doing this properly.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>It shows discounting is closely associated with the losses, not that it is the proven single cause. Only a limited set of explanations was tested.</li>
              <li>The data covers four years, too short to say for certain whether things are improving or getting worse over time.</li>
              <li>The dataset has nothing on regional economies, customer behaviour, or pricing strategy, so those cannot be tested and are not claimed.</li>
              <li>The margin targets used were reasonable assumptions set for this exercise, not real company figures.</li>
              <li>Some figures are averages that can hide variation. The most extreme result rests on only 59 sales, so its direction is clear but its exact figure is less reliable.</li>
            </ul>
          </section>

          <section>
            <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Took From It
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most useful thing here was not a feature of Excel. It was learning to test my own conclusion
              before trusting it, and to look twice at a dramatic number before leaning on it. The striking
              finding is not always the whole story, and an honest analysis is worth more than an impressive
              sounding one.
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
