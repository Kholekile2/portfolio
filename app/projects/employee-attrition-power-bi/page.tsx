import Image from "next/image";
import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";

const project = portfolioData.projects.find((item) => item.id === "employee-attrition-power-bi")!;

export default function EmployeeAttritionPowerBiPage() {
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
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
        <div className="min-w-0 max-w-4xl">
          <p className="chip mb-4">Business Intelligence Case Study</p>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
            Attrition looked like a company wide problem. It wasn&apos;t.
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            This IBM HR Analytics project follows 1,470 employees through department, role, overtime,
            satisfaction, tenure, and compensation to separate a broad looking attrition rate from the risk
            actually concentrated inside Sales Representatives.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Total Employees</p>
              <p className="font-semibold">1,470</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Employees Left</p>
              <p className="font-semibold">237</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Attrition Rate</p>
              <p className="font-semibold">16%</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">High Risk Headcount</p>
              <p className="font-semibold">231</p>
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
              The point of this project was not to produce a dashboard full of charts. It was to answer a
              business question: is attrition spread across the company, or concentrated in specific groups
              that demand a different response? The dataset gives no dates, so the analysis is a snapshot,
              not a trend story, and the work stays honest about that from the start.
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
              A 16 percent attrition rate sounds like a company level problem, but averages are often where a
              concentrated issue hides. Here, the department level number made Sales look concerning at 21
              percent, yet the real problem lived one layer deeper in Sales Representative, where attrition
              reached 40 percent.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I treated the analysis as a sequence of falsifiable checks. First identify where the risk sits,
              then test the most likely explanation, then see whether that explanation still survives after
              controlling for an obvious confounder. That is how the story becomes trustworthy rather than
              merely plausible.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="numbers" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Headline Numbers
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Total Employees</p>
                <p className="text-2xl font-bold">1,470</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Employees Left</p>
                <p className="text-2xl font-bold">237</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Retention Rate</p>
                <p className="text-2xl font-bold">84%</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-gray-500 text-sm dark:text-gray-400">Estimated Cost of Attrition</p>
                <p className="text-2xl font-bold">1.70M</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              The 231 figure is the practical number in the dashboard. It captures the current employees with
              zero to five years tenure who are also working overtime, which is the highest risk profile found
              in the analysis. It is a headcount, not just a rate, so it tells a business what can be acted on
              now.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="question" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Question
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Is employee attrition at this company broad or concentrated? The analysis looks for the answer in
              layers: department first, then job role, then overtime, then satisfaction and tenure, and finally
              compensation checked against job level to see whether the pay gap survives a confounding factor
              test.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="screenshots" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Dashboard
            </h2>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/employee-attrition-power-bi/dashboard.png"
                  alt="Employee Attrition dashboard, Executive Overview page"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The dashboard opens with retention, attrition, high risk headcount, and cost of attrition,
                then frames the main business question in a single line so the chart sequence that follows can
                answer it.
              </p>
            </div>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/employee-attrition-power-bi/02_risk_drivers.png.png"
                  alt="Risk drivers page showing overtime, satisfaction, tenure, and department attrition"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The risk drivers page shows that overtime is the strongest company wide driver, and that the
                highest risk group is new hires working overtime. Satisfaction matters, but it does not explain
                the pattern on its own.
              </p>
            </div>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/employee-attrition-power-bi/03_compensation.png.png"
                  alt="Compensation page comparing income by attrition and by role"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The compensation page checks whether the pay gap is just a seniority effect. It still shows a
                meaningful gap when Sales Representatives are isolated, which makes pay a real factor rather
                than a simple proxy for job level.
              </p>
            </div>

            <div>
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/employee-attrition-power-bi/04_sales_rep_spotlight.png.png"
                  alt="Sales Representative spotlight page showing the highest role level attrition"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The role spotlight page makes the main finding obvious: Sales Representatives are the group
                with the highest attrition, and overtime nearly doubles the risk again inside that role.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="findings" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Findings
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Attrition is concentrated, not spread evenly</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Sales sits at 21 percent by department, but Sales Representative alone reaches 40 percent.
                  The department figure was blurring the real problem instead of describing it.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Overtime is the strongest driver found</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Company wide, employees working overtime show roughly three times the attrition rate of those
                  who do not, and the gap becomes even sharper inside Sales Representatives.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Satisfaction matters, but it does not explain everything</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Higher satisfaction is associated with lower attrition, but overtime still dominates the
                  pattern when the two are viewed together. That makes satisfaction a signal, not the full
                  explanation.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">The pay gap survives a confounding check</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The monthly income gap between leavers and stayers shrinks when Sales Representatives are
                  isolated, but it still remains. That makes pay a real factor rather than a byproduct of job
                  level alone.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="recommendations" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Recommendations
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Review overtime allocation inside Sales Representatives first, since that is where the highest attrition and strongest overtime effect meet.</li>
              <li>Focus retention efforts on employees with five years or less tenure who are also working overtime, because that is the highest risk profile found.</li>
              <li>Investigate compensation inside the Sales Representative role, since the pay gap remains even after the role level confounder is controlled for.</li>
              <li>Treat satisfaction as a secondary indicator rather than the main lever, because overtime is the more consistent and more powerful pattern.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="approach" className="scroll-mt-24 text-2xl font-semibold mb-4">
              How I Worked
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Checked the dataset before analysis: duplicate employee numbers, missing values, data types, and the few columns that held the same value for every employee.</li>
              <li>Scoped the project as a snapshot analysis because there is no date field, which means the data can answer concentration questions but not trend questions.</li>
              <li>Started broad and narrowed down by moving from department to job role once the department figure looked too blended to trust.</li>
              <li>Tested overtime against the other likely explanations, including satisfaction and tenure, instead of leaving the first convincing pattern unchallenged.</li>
              <li>Checked the pay gap against job level by rerunning the comparison inside a single role, which is the only way to see whether the gap still survives the confounder.</li>
              <li>Built the KPI row around retention rate, estimated cost of attrition, and high risk headcount because a business needs more than a single attrition percentage to plan action.</li>
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
              This project makes a careful claim set, not an exaggerated one.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>It shows attrition is linked to overtime, satisfaction, and pay, not that any one of them is the single proven cause.</li>
              <li>The dataset is a single snapshot with no date fields, so it cannot show whether attrition is getting better or worse over time.</li>
              <li>Some groups had too few people to support a reliable conclusion, so they were not stretched into one.</li>
              <li>The estimated cost of attrition is a modelled figure based on a standard replacement multiplier, not a recorded company cost.</li>
              <li>The relationships found are correlations, not proven causes. The data cannot say which direction the effect runs.</li>
            </ul>
          </section>

          <section>
            <h2 id="results" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Took From It
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The biggest takeaway was the difference between a rate and a headcount. A rate tells you how
              severe something is, but a headcount tells you how many people are affected right now, and that
              is what a company plans around. The second lesson was methodological: I trust the findings more
              because they survived checks against the most obvious alternatives.
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