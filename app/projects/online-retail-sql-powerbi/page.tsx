import Image from "next/image";
import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";

const project = portfolioData.projects.find((item) => item.id === "online-retail-sql-powerbi")!;

export default function OnlineRetailSqlPowerBiPage() {
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
          <p className="chip mb-4">Retail Analytics Case Study</p>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
            The same average can describe two completely different products.
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            This project follows 1,055,238 order lines from a real two year UK retail transaction log through
            revenue, seasonality, product performance, customer value and stock demand, to separate a headline
            revenue figure from where that revenue, and the risk around it, actually concentrates.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Total Revenue</p>
              <p className="font-semibold">19.34M</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Total Customers</p>
              <p className="font-semibold">5,942</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">UK Revenue Share</p>
              <p className="font-semibold">85.52%</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">At Risk Customers</p>
              <p className="font-semibold">571</p>
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
              The point of this project was not to produce a dashboard full of charts. It was to answer a set
              of real business questions with a properly built database behind them: where does revenue
              actually come from, which customers are worth focusing retention effort on, and how much stock
              does a product genuinely need. The dataset arrives genuinely messy, and the work stays honest
              about every judgement call made cleaning it up.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              {project.features?.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="context" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Business Context
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A single total revenue figure sounds like the whole story, but averages and totals are often
              where a concentrated pattern hides. Here, the headline number was 19.3 million in revenue, yet
              roughly 85 percent of it came from one country, and the product with the highest apparent average
              monthly demand turned out to be driven by a single bulk order rather than real, repeatable sales.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I treated the analysis as a sequence of checks rather than a single pass. Clean the data and
              prove each decision with evidence, build a database structured around real business questions,
              then test the obvious conclusion before trusting it, exactly what caught the bulk order sitting
              behind an otherwise convincing demand figure.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="numbers" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Headline Numbers
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Total Revenue</p>
                <p className="text-2xl font-bold">19.34M</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Total Customers</p>
                <p className="text-2xl font-bold">5,942</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Average Order Value</p>
                <p className="text-2xl font-bold">370.65</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Steady Seller Share</p>
                <p className="text-2xl font-bold">54.47%</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              The steady seller share is not a raw count sitting in the data, since the dataset never records
              actual stock levels. It comes from checking how many months each product sold in and how evenly
              that demand spread across the two years, then splitting the catalog into products stable enough
              to trust an average versus products whose demand was driven by occasional bulk orders. It is the
              figure behind how the estimated inventory table was built, not just a background statistic.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="question" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Question
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Is this business's revenue and customer base broad and evenly spread, or concentrated in a few
              products, countries and customers that deserve a different response? The analysis looks for the
              answer in layers: monthly trend first, then product performance, then country concentration, then
              customer value segmentation, and finally product demand checked closely enough to see whether an
              average can be trusted or is hiding a spike.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="screenshots" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Dashboard
            </h2>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/online-retail-sql-powerbi/executive_summary.png"
                  alt="Executive Summary dashboard page, KPI cards, findings and recommendations"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The dashboard opens with revenue, average order value, UK revenue share, at risk customers and
                steady seller share, then states the findings and recommendations plainly before anyone needs
                to open a single chart.
              </p>
            </div>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/online-retail-sql-powerbi/sales_overview.png"
                  alt="Sales Overview dashboard page, monthly revenue, top products, revenue by country"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Monthly revenue peaking each November, the top ten products led by Regency Cakestand 3 Tier, and
                revenue by country with the UK deliberately left out of the chart since it accounts for roughly
                85 percent of all revenue on its own.
              </p>
            </div>

            <div>
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/online-retail-sql-powerbi/customer_inventory.png"
                  alt="Customers and Inventory dashboard page, RFM segments and inventory charts"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Customers split across four RFM segments, and the product catalog split almost evenly between
                steady sellers and spike driven demand, the reasoning behind the estimated inventory table
                underneath it.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="findings" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Findings
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Revenue looks broad, but it is concentrated in one country</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The United Kingdom accounts for roughly 85 percent of all revenue. EIRE and the Netherlands
                  lead every other market by a clear margin, but the total on its own was blurring how
                  dependent the business is on a single country.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">The business is strongly seasonal, not steady</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Revenue peaks every November in both years, then drops sharply each January, a normal pattern
                  for a gift retailer once the holiday period ends rather than a sign of instability.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Customer value splits evenly, but risk is specific</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Customers divide fairly evenly across Low, Mid and High Value tiers, alongside a smaller,
                  specifically identifiable group of 571 customers flagged At Risk, a usable list rather than a
                  vague idea of churn.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">An average did not survive a closer check</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The product with the highest apparent average monthly demand had only sold in four months,
                  with nearly all of it from a single order. Compared against a genuinely steady seller active
                  in all twenty five months, the difference was obvious once checked, not assumed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="recommendations" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Recommendations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Framed as what would reasonably follow from these findings, not as changes a real business has
              already acted on.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Prioritize retention outreach on the 571 named At Risk customers before any broader campaign.</li>
              <li>Plan inventory differently by product type, steady sellers on a predictable reorder schedule, spike driven products monitored individually rather than stocked the same way.</li>
              <li>Treat EIRE and the Netherlands as the first markets worth examining for expansion, given they already lead every country outside the UK.</li>
              <li>Build stock and staffing plans around the November peak specifically, rather than assuming demand spreads evenly across the year.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="approach" className="scroll-mt-24 text-2xl font-semibold mb-4">
              How I Worked
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Checked the dataset before analysis: mixed data types on Invoice and StockCode, exact duplicate rows, and a stock code column that mixed real products with fees and adjustments.</li>
              <li>Ran a systematic check across every stock code rather than scanning by eye, extracting only the digits from each code to surface every non product entry in one pass, sixteen in total.</li>
              <li>Started broad with total revenue, then narrowed into monthly trend, product performance, country and customer level views once the total on its own said little.</li>
              <li>Tested the product with the highest average monthly demand against the assumption that an average can be trusted, and found it was driven almost entirely by a single bulk order rather than steady sales.</li>
              <li>Checked that finding against a genuinely steady seller before trusting the distinction, comparing month by month activity for both rather than accepting the average at face value.</li>
              <li>Built the dashboard's headline numbers around revenue, customer count, average order value and the steady seller split, since a single revenue figure does not tell anyone what to actually plan around.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="tools" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Tools & Skills
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Tools: {project.techStack.tools?.join(", ")}.</li>
              <li>Techniques: {project.techStack.data?.join(", ")}.</li>
              <li>Analysis skills: {project.techStack.skills?.join(", ")}.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="limitations" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What It Doesn't Claim
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This project makes a careful claim set, not an exaggerated one.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>It shows revenue is concentrated and demand patterns differ by product, not that any single cause behind the UK's share, marketing spend or customer acquisition among them, has been tested or proven.</li>
              <li>inventory_snapshot is a modelled estimate built from real demand patterns, not a recorded company stock level.</li>
              <li>The RFM quartile scoring and the twelve month steady seller cutoff are reasonable, documented choices, not figures tested against actual retention or stock outcomes.</li>
              <li>The dataset covers two years ending partway through December 2011, that final partial month was excluded from the trend charts rather than left in to imply a decline that is not real.</li>
              <li>No business acted on these findings. This is an analysis of an existing historical dataset, not a deployed system, so no claim is made about real business impact.</li>
            </ul>
          </section>

          <section>
            <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Took From It
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The biggest takeaway was how easily a single, confident looking number can mislead if it is never
              tested. The product with the highest average monthly demand looked like a steady top seller until
              it was checked month by month, and turned out to be one bulk order away from irrelevance. That
              habit, checking a number against something else before trusting it, mattered more here than any
              individual SQL function or DAX formula.
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
