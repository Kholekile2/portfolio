import Image from "next/image";

export default function AutoAnalyticsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Auto Analytics Portal</h1>
      <p className="text-lg text-gray-600 mb-6 dark:text-gray-300">
        Business Intelligence dashboard project built with Streamlit, BigQuery, and Plotly to analyze used car prices.
      </p>

      <div className="flex gap-4 mb-12 flex-wrap">
        <a
          href="https://github.com/Kholekile2/BIA715_DataExploration"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded"
        >
          View Code
        </a>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          This project explores a car pricing dataset to uncover how features like brand, mileage,
          manufacturing year, fuel type, transmission, and model affect vehicle price. The dashboard
          supports data-driven decision-making for both buyers and sellers by combining SQL-based
          analysis in BigQuery with interactive Streamlit visuals.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Problem Statement</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Without reliable insights, sellers can underprice vehicles and buyers can overpay. Market
          conditions and customer perceptions change quickly, so pricing decisions need to be supported
          by descriptive statistics, correlations, and predictive thinking.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Goals and Research Questions</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Identify factors that strongly influence car prices.</li>
          <li>Highlight trends and correlations between key features and price.</li>
          <li>Determine which brands and models are more expensive.</li>
          <li>Measure whether higher mileage reduces price.</li>
          <li>Evaluate whether newer cars cost more than older cars.</li>
          <li>Analyze the impact of fuel type and transmission on value.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Architecture and Data Flow</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Auto Analytics Portal follows a two-layer architecture:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
          <li>Frontend: Streamlit pages, sidebar controls, and Plotly visualizations.</li>
          <li>
            Backend: Google BigQuery dataset and table
            ({" "}
            <span className="font-mono text-sm">
              datawarehouse1-468916.Car_Price_Prediction.CarPricePredictionTable
            </span>
            )
          </li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 mb-2">Data flow:</p>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>User opens Home or Explore page and navigates to an analysis module.</li>
          <li>Streamlit executes SQL queries against BigQuery.</li>
          <li>Query results are returned as Pandas DataFrames.</li>
          <li>Plotly renders interactive charts from query output.</li>
          <li>Cached results reduce repeated query cost and improve responsiveness.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Streamlit, Python, Google BigQuery, SQL, Pandas, Plotly Express, Pillow (PIL)
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Analysis Pages and Insights</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">1) Home Page</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Home page introduces the dataset source and overall context.
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
              The Explore page introduces the dashboard and provides navigation to the analysis pages.
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
              A BigQuery GROUP BY query compares average car prices by brand using a bar chart.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Honda appears as the highest-priced brand (~$25,702) while Audi is lowest
              (~$24,664). The range is narrow, suggesting no extreme brand-level outliers in this sample.
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
              A scatter plot visualizes the relationship between mileage and price.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: As mileage increases, car prices generally decrease, confirming depreciation with use.
              This page also includes a sample-size slider to improve performance and query speed.
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
              A line chart shows average price by manufacturing year.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Newer vehicles tend to have higher average prices than older vehicles.
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
              A bar chart compares fuel type prices, and a pie chart compares transmission prices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Electric cars have the highest average prices, followed by diesel and then petrol.
              Automatic cars are priced higher on average than manual cars.
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
              A pie chart highlights top models by average price.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Insight: Model D ranks highest, followed by Model C. Models A and B are lower-priced in comparison.
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
        <h2 className="text-2xl font-semibold mb-4">Project Focus</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This portfolio case study focuses on my implementation of the dashboard presentation and analysis workflow, including:
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
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The Auto Analytics Portal demonstrates how raw data can be transformed into practical BI insights
          through a clear data pipeline: database storage, SQL transformation, visual exploration, and
          decision-focused reporting.
        </p>
      </section>
    </main>
  );
}
