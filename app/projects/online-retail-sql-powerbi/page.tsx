import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";
import Image from "next/image";

const project = portfolioData.projects.find((item) => item.id === "online-retail-sql-powerbi")!;

export default function OnlineRetailSqlPowerBiPage() {
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
            A SQL and Power BI project built end to end on a real, messy retail transaction dataset
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            A self-directed project analysing around 1,055,238 order line items from the public Online Retail
            II dataset, cleaning the raw data, designing a normalized PostgreSQL database, writing analytical
            SQL including window functions and a subquery, and finishing with a two page Power BI dashboard.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Tools</p>
              <p className="font-semibold">PostgreSQL, Power BI</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Dataset</p>
              <p className="font-semibold">1,055,238 order lines</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Scope</p>
              <p className="font-semibold">Dec 2009 to Nov 2011</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Output</p>
              <p className="font-semibold">2 page dashboard</p>
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
              Online Retail II is a real transaction log from a UK based online retailer selling gift and
              homeware items, with many of its customers being wholesalers rather than individual shoppers.
              This project takes that raw, genuinely messy data and builds the full path an actual analytics
              project would follow, cleaning and profiling it, designing a proper relational database around
              it, analysing it in SQL, and presenting the result as a working dashboard.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Cleaned and validated 1,055,238 order line items across two years, including a systematic method for finding every non product code hiding in the data.</li>
              <li>Designed a normalized PostgreSQL database using a star schema, with a synthetic inventory table built from actual demand patterns rather than assumed figures.</li>
              <li>Wrote analytical SQL covering joins, window functions, common table expressions and a subquery, including a full RFM customer segmentation.</li>
              <li>Built a two page Power BI dashboard connected directly to the database, using DAX to reproduce the SQL logic rather than duplicate it separately.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Raw transaction data rarely arrives ready to answer anything. Before any question about revenue,
              customers or stock can be answered honestly, the data itself has to be understood, cleaned and
              structured properly, otherwise every number built on top of it quietly inherits whatever mess
              sits underneath it.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The harder part isn't fixing an obviously broken value. It's deciding what to do with values
              that are technically valid but ambiguous, a missing customer ID, a product with ten different
              recorded names, a customer linked to two different countries, and being able to explain why each
              decision was made rather than just that it was made.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="solution" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Did
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I treated it as four connected stages rather than a single pass. First, profile the data
              thoroughly enough to know exactly what was wrong with it. Then design and build a proper
              database around what that profiling found, rather than a single flat file. Then write SQL that
              answers real questions about revenue, products and customers. Then bring that same analysis into
              Power BI without silently redoing or duplicating any of it.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Each stage was checked against the one before it rather than assumed correct, a query result
              cross checked against a known total, a dashboard chart checked against its underlying SQL
              output, before moving on to the next piece.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="screenshots" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What It Looks Like
            </h2>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/online-retail-sql-powerbi/sales_overview.png"
                  alt="Sales Overview dashboard page — monthly revenue, top products, revenue by country"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The Sales Overview page. Monthly revenue peaking each November, the top ten products by
                revenue led by Regency Cakestand 3 Tier, and revenue by country with the UK deliberately left
                out of the chart since it accounts for roughly 85 percent of all revenue on its own.
              </p>
            </div>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/online-retail-sql-powerbi/customer_inventory.png"
                  alt="Customers and Inventory dashboard page — RFM segments and inventory charts"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The Customers and Inventory page. Customers split across four RFM segments, and the product
                catalog split almost evenly between steady sellers and spike driven demand, the reasoning
                behind the synthetic inventory table underneath it.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="approach" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Approach
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Profiled the raw data column by column in Power Query, fixing mixed data types on Invoice and StockCode and uncovering sixteen non product codes through a systematic digit extraction check rather than manual scanning.</li>
              <li>Cleaned known issues with evidence behind each decision: exact duplicates removed, inconsistent product descriptions resolved to a single canonical value, missing customer IDs left as true nulls rather than a placeholder.</li>
              <li>Designed a star schema in PostgreSQL, one fact table and three dimension tables, and wrote every create table statement by hand rather than letting a tool infer the structure.</li>
              <li>Wrote SQL covering revenue and trend analysis, product ranking with both aggregation and window functions, a subquery identifying above average products, and a full RFM segmentation.</li>
              <li>Built a synthetic inventory table by checking demand patterns closely enough to catch a spike driven outlier before it distorted the whole calculation.</li>
              <li>Connected Power BI directly to the database, and after starting to rebuild the RFM scoring in DAX, switched to pulling the already tested SQL logic in as a database view instead.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="findings" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Findings
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Revenue is heavily concentrated in one country</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The United Kingdom accounts for roughly 85 percent of all revenue, about 16.5 million of 19.3
                  million total. Expected for a UK based retailer, but large enough that it had to be excluded
                  from the country comparison chart just to keep the rest of the world visible.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">The business is strongly seasonal</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Revenue peaks every November in both years, followed by a sharp drop each January, a normal
                  pattern for a gift retailer once the holiday period ends rather than a sign of instability.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Customers split into balanced tiers, with one actionable group</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  RFM segmentation split customers fairly evenly across Low, Mid and High Value, alongside a
                  smaller, specific group of 571 customers flagged At Risk, a usable list rather than a vague
                  idea of churn.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">The catalog splits almost evenly by demand pattern</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  About 54 percent of products sell steadily enough to trust their average demand, while 46
                  percent show irregular, spike driven demand instead, close enough to even that treating every
                  product the same way would have been a real mistake.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="data-workflow" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Data Workflow
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Invoice, StockCode and CustomerID were typed as text early on, since forcing them to numbers would have silently dropped the C prefix marking cancellations or reformatted IDs incorrectly.</li>
              <li>Non product codes were found by extracting only the digits from StockCode and filtering for rows where nothing was left, a repeatable check rather than scrolling through thousands of distinct values by eye.</li>
              <li>Exporting cleaned tables from Power Query surfaced two real formatting issues before they reached the database, dates silently split into year, quarter, month and day columns by Power BI's default hierarchy, and prices written with a comma decimal separator due to Windows regional settings.</li>
              <li>Every table was built with an explicit primary key and, where relevant, a foreign key constraint, so PostgreSQL itself would reject any row that referenced a customer or product that didn't exist.</li>
              <li>The RFM scoring logic was saved as a PostgreSQL view rather than kept only as a query result, so Power BI could pull in one tested version instead of a second, separately maintained copy.</li>
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
              Scope & Limitations
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Synthetic inventory data. inventory_snapshot does not reflect real stock levels, since the dataset never records them. It's built from actual demand patterns, but it's a modelled estimate, not real inventory data, and is described that way throughout.</li>
              <li>UK dominance is stated, not explained. The dataset holds no information on marketing spend, customer acquisition, or regional strategy, so the reasons behind the UK's share of revenue can't be tested and aren't claimed.</li>
              <li>Judgement calls behind the thresholds. The twelve month cutoff for a steady seller and the RFM quartile scoring are reasonable, documented choices, not figures tested against actual retention or stock outcomes.</li>
              <li>A short, historical window. The data covers two years ending partway through December 2011, that final partial month was excluded from the trend charts rather than left in to imply a decline that isn't real.</li>
              <li>No live business outcome. This is an analysis of an existing historical dataset, not a deployed system, so no claim is made about actual revenue impact.</li>
            </ul>
          </section>

          <section>
            <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Learned
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The most useful part of this project wasn't a specific SQL function or DAX formula. It was the
              habit of checking a result against something already known before trusting it, and being willing
              to investigate a number that looked slightly off rather than explaining it away.
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
