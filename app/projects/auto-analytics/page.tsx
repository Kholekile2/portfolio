import Image from "next/image";
import CaseStudyToc from "../../components/case-study-toc";

export default function AutoAnalyticsPage() {
  const sections = [
    { id: "executive-summary", label: "Executive Summary" },
    { id: "business-problem", label: "Business Problem" },
    { id: "objectives", label: "Objectives and Questions" },
    { id: "architecture", label: "Architecture and Data Flow" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "analysis-modules", label: "Analysis Modules" },
    { id: "decision-framework", label: "Decision Framework" },
    { id: "portfolio-focus", label: "Portfolio Focus" },
    { id: "outcome", label: "Outcome and Business Value" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
      <div className="min-w-0 max-w-4xl">
      <p className="chip mb-4">Business Intelligence Case Study</p>
      <h1 className="text-4xl font-bold mb-2">Auto Analytics Portal</h1>
      <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
        BigQuery and Streamlit Business Intelligence Case Study
      </p>
      <p className="text-gray-600 mb-8 dark:text-gray-300">
        Decision-support analytics platform for used-car pricing strategy, combining SQL-driven evidence with interactive BI visualizations.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Analytics Focus</p>
          <p className="font-semibold">Price drivers</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Data Platform</p>
          <p className="font-semibold">Google BigQuery</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Delivery Pattern</p>
          <p className="font-semibold">Multi-page BI app</p>
        </div>
        <div className="surface-card p-3 text-sm">
          <p className="text-gray-500 dark:text-gray-400">Outcome</p>
          <p className="font-semibold">Pricing guidance</p>
        </div>
      </div>

      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href="https://github.com/Kholekile2/BIA715_DataExploration"
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
          Auto Analytics Portal transforms raw used-car records into actionable pricing intelligence.
          Instead of relying on intuition, the dashboard quantifies how brand, mileage, year,
          fuel type, transmission, and model shape market value.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Converts pricing uncertainty into evidence-based valuation signals.</li>
          <li>Supports faster decision cycles for listing, negotiation, and stock positioning.</li>
          <li>Combines query performance, interactivity, and explainable insights in one interface.</li>
          <li>Demonstrates practical BI workflow from warehouse query to business recommendation.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="business-problem" className="scroll-mt-24 text-2xl font-semibold mb-4">Business Problem</h2>
        <p className="text-gray-700 dark:text-gray-300">
          In used-car markets, weak pricing visibility creates direct margin risk.
          Sellers may underprice high-value stock, buyers may overpay, and teams lack a shared,
          data-backed logic for valuation. The project addresses this gap by creating a transparent
          analytics layer for pricing decisions.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="objectives" className="scroll-mt-24 text-2xl font-semibold mb-4">Analytical Objectives and Key Questions</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Identify the strongest value drivers across the vehicle portfolio.</li>
          <li>Quantify directional relationships between usage, age, and price.</li>
          <li>Measure premium or discount effects by brand, fuel type, and transmission.</li>
          <li>Detect model-level opportunities for targeted pricing strategy.</li>
          <li>Answer: Which features should carry the highest weight in negotiation and listing decisions?</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="architecture" className="scroll-mt-24 text-2xl font-semibold mb-4">Architecture and Data Flow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The platform follows a lean two-layer analytics architecture:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Presentation layer: Streamlit pages, sidebar controls, and Plotly visualizations.</li>
          <li>
            Data layer: Google BigQuery dataset and table
            ({" "}
            <span className="font-mono text-sm">
              datawarehouse1-468916.Car_Price_Prediction.CarPricePredictionTable
            </span>
            )
          </li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 mb-2">Data flow:</p>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>User selects a business question from Home or Explore.</li>
          <li>Streamlit triggers SQL aggregation queries in BigQuery.</li>
          <li>Result sets are loaded into Pandas for shaping and display logic.</li>
          <li>Plotly renders interpretable visuals for decision discussion.</li>
          <li>Cache strategy reduces repeated query cost and improves dashboard responsiveness.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 id="tech-stack" className="scroll-mt-24 text-2xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Streamlit, Python, Google BigQuery, SQL, Pandas, Plotly Express, Pillow (PIL)
        </p>
      </section>

      <section className="mb-12">
        <h2 id="analysis-modules" className="scroll-mt-24 text-2xl font-semibold mb-4">Analysis Modules, Insights, and Business Implications</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">1) Home Page</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Home page positions the dashboard around decision-making rather than reporting,
              clarifying what data source is used and what pricing questions can be answered.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <Image
                src="/projects/auto-analytics/home.png"
                alt="Auto Analytics Portal home page"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2) Explore Page</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Explore page is an analytics control hub, enabling rapid movement between pricing dimensions
              to support faster analyst workflows.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <Image
                src="/projects/auto-analytics/explore.png"
                alt="Auto Analytics Portal explore page"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3) Brand Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A BigQuery GROUP BY aggregation compares average price by brand.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Honda appears as the highest-priced brand (~$25,702) while Audi is lowest
              (~$24,664). The range is narrow, suggesting no extreme brand-level outliers in this sample.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Business implication: Brand alone should not be used as a dominant pricing lever in this dataset.
              The tight spread indicates stronger explanatory power likely comes from condition, mileage,
              year, and configuration variables.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <Image
                src="/projects/auto-analytics/brand-analysis.png"
                alt="Brand analysis chart"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4) Mileage vs Price</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A scatter distribution maps depreciation behavior as mileage increases.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: As mileage increases, car prices generally decrease, confirming depreciation with use.
              This page also includes a sample-size slider to improve performance and query speed.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Business implication: Mileage should carry a high weighting in valuation policy.
              Dealers can use this relationship to define mileage bands for discount strategy,
              stock procurement thresholds, and negotiation guardrails.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <Image
                src="/projects/auto-analytics/mileage%20vs%20price.png"
                alt="Mileage versus price chart"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5) Year vs Price</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A line trend analyzes average value by manufacturing year.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Newer vehicles tend to have higher average prices than older vehicles.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Business implication: Inventory and campaign strategy should segment by age tier.
              Newer units can support premium positioning, while older units need value-led pricing and faster turnover tactics.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <Image
                src="/projects/auto-analytics/year%20vs%20price.png"
                alt="Year versus price chart"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6) Fuel Type and Transmission</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Dual visuals compare price behavior across fuel categories and transmission types.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Electric cars have the highest average prices, followed by diesel and then petrol.
              Automatic cars are priced higher on average than manual cars.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Business implication: Configuration-specific premiums are measurable.
              Pricing playbooks can include explicit uplift factors for electric and automatic vehicles,
              improving consistency and defensibility of quoted prices.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <Image
                src="/projects/auto-analytics/fuel%20type%26transmission%20vs%20price.png"
                alt="Fuel type and transmission analysis"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">7) Model Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Model-level aggregation surfaces the highest and lowest value pockets in the portfolio.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Model D ranks highest, followed by Model C. Models A and B are lower-priced in comparison.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Business implication: Model-level strategy should differentiate acquisition, financing,
              and margin targets. High-value models can support margin preservation, while lower-value
              models may benefit from velocity-oriented pricing.
            </p>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <Image
                src="/projects/auto-analytics/model%20analysis.png"
                alt="Model analysis chart"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 id="decision-framework" className="scroll-mt-24 text-2xl font-semibold mb-4">Decision Framework for Business Teams</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Set baseline valuation by age and mileage before applying configuration adjustments.</li>
          <li>Apply fuel and transmission premiums as explicit pricing multipliers.</li>
          <li>Use model tiers to separate margin-maximization strategy from volume strategy.</li>
          <li>Track pricing consistency over time through repeatable dashboard views.</li>
          <li>Use the dashboard as a negotiation support tool to reduce subjective pricing decisions.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="portfolio-focus" className="scroll-mt-24 text-2xl font-semibold mb-4">Portfolio Focus</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This case study highlights my dashboard implementation and analytics delivery focus, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>BigQuery SQL query design and testing for each research question.</li>
          <li>Streamlit multi-page architecture and navigation setup.</li>
          <li>Interactive data visualizations with Plotly.</li>
          <li>Performance optimization using caching and selective sampling.</li>
          <li>Interpretation of findings and communication of business insights.</li>
        </ul>
      </section>

      <section>
        <h2 id="outcome" className="scroll-mt-24 text-2xl font-semibold mb-4">Outcome and Business Value</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Auto Analytics Portal demonstrates how a compact BI stack can turn raw market records into operational pricing intelligence.
          The final output is not only descriptive reporting, but a repeatable decision system that improves pricing consistency,
          strengthens negotiation confidence, and supports data-led commercial strategy.
        </p>
      </section>
      </div>
      <CaseStudyToc sections={sections} />
      </section>
    </main>
  );
}
