import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";
import Image from "next/image";

const project = portfolioData.projects.find((item) => item.id === "medical-billing-delay-prediction")!;

export default function MedicalBillingDelayPredictionPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "approach", label: "What I Did" },
    { id: "key-results", label: "Key Results" },
    { id: "data-workflow", label: "Data Workflow" },
    { id: "methodology", label: "Methodology" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "analytical-highlights", label: "Analytical Highlights" },
    { id: "challenges-solved", label: "Challenges I Hit" },
    { id: "results", label: "What I Learned" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
        <div className="min-w-0 max-w-4xl">
          <p className="chip mb-4">Applied Research Case Study</p>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
            A predictive analytics study that identifies private patient invoices likely to be processed beyond
            a 14-day threshold, using only the information available at the point of invoice capture
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            Built with Python, scikit-learn, XGBoost, and SHAP. Submitted as a postgraduate Applied Research
            Project for the BIA 716 module at the University of the Western Cape.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Language</p>
              <p className="font-semibold">Python 3.12</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Final Model</p>
              <p className="font-semibold">XGBoost</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Dataset</p>
              <p className="font-semibold">50,000 invoices</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">ROC-AUC</p>
              <p className="font-semibold">0.7570</p>
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
              The study built a classification model that flags private patient invoices likely to take longer
              than 14 days to process, so a medical billing bureau can act on high-risk invoices at the point
              of capture rather than chasing delays after they happen. The work moved end to end through the
              CRISP-DM methodology — from data understanding, through preparation and modelling, to
              statistical model selection and explainability — and translated the findings into operational
              recommendations grounded in the South African private patient billing context.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Four classifiers compared on a held-out test set of 15,000 records: Logistic Regression, Decision Tree, Random Forest, and XGBoost.</li>
              <li>Bootstrap confidence interval analysis (1,000 iterations) used to test whether the differences between the two ensemble models were statistically meaningful.</li>
              <li>SHAP explainability on the selected model to identify the operational drivers of delay and translate them into a risk-based triage map.</li>
              <li>Six final predictors engineered from 32 raw variables, with all consolidations preserved as documented mappings.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Medical billing bureaus carry the cash flow risk of every invoice they process. When an invoice
              sits unresolved past two weeks, the practice waits longer for payment, days sales outstanding
              climbs, and the longer the gap, the higher the probability the account turns into bad debt. The
              effort then shifts from prevention into reactive collection, which costs more and recovers less.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The bureau in this study processes private patient self-pay invoices in the South African
              healthcare context. Roughly 24% of those invoices in the available dataset were delayed beyond
              the 14-day threshold. The bureau cannot stop delays from existing — some invoices are inherently
              complex — but it can decide which ones to intervene on early. The research question was whether
              this could be done at the point of capture, using only the administrative and clinical
              information available the moment an invoice enters the system.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="approach" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Did
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The analysis followed CRISP-DM end to end. The 50,000-record dataset was cleaned and reduced
              from 32 raw variables to a final set of six predictors through a screening pipeline of quality
              checks, association testing with Cramer&apos;s V, and pairwise multicollinearity assessment. Four
              classification models were built and evaluated on the same held-out test set.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The two ensemble models — Random Forest and XGBoost — produced very similar test metrics, with
              differences of fractions of a percentage point. Rather than picking by eye, bootstrap resampling
              was used to test whether the differences were statistically meaningful. The result split the
              wins: Random Forest was significantly better on accuracy, XGBoost was significantly better on
              recall, and the two were statistically tied on ROC-AUC, F1, and precision. XGBoost was selected
              as the final model because recall on the minority class matters most for imbalanced
              classification, and because missing a delayed invoice carries more operational cost than raising
              a false alarm. SHAP explainability was then applied to the selected model to turn its
              predictions into operational guidance.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="key-results" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Key Results
            </h2>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/medical-billing/model_comparison_4models.png"
                  alt="ROC curve comparison across all four classifiers on the held-out test set"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ROC curves for all four models on the 15,000-record test set. Random Forest and XGBoost sit
                almost on top of each other and clearly above Decision Tree and Logistic Regression. XGBoost
                achieved the highest ROC-AUC at 0.7570 and the highest recall at 70.04%. Logistic Regression
                at 0.6973 fell below the 0.70 acceptance threshold set in the success criteria.
              </p>
            </div>

            <div className="mb-8">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/medical-billing/shap_beeswarm_xgb.png"
                  alt="SHAP beeswarm showing the direction and magnitude of each feature's effect on the XGBoost prediction"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                SHAP beeswarm on the XGBoost model. Each dot is one invoice from the test set. Red means the
                feature was present (active category for that one-hot encoded variable), blue means absent.
                Position on the x-axis shows the direction and magnitude of effect on the prediction: left
                pushes toward Timely, right pushes toward Delayed. Facility Type Hospital and Specialty Mental
                Health and General Practice consistently push toward Delayed, identifying them as risk
                categories. Consulting Rooms, Obstetrics, Dental, and Ophthalmology push toward Timely.
              </p>
            </div>

            <div className="mb-4">
              <div className="surface-card overflow-hidden mb-3">
                <Image
                  src="/projects/medical-billing/bootstrap_ci_verdict1.png"
                  alt="Bootstrap confidence intervals for the paired difference XGBoost minus Random Forest across five metrics"
                  width={1860}
                  height={920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Bootstrap 95% confidence intervals for the paired metric differences (XGBoost minus Random
                Forest) over 1,000 resamples. Intervals crossing the zero line indicate the models are
                statistically tied on that metric; intervals that do not cross zero indicate one model is
                significantly better. The two ensemble models tied on ROC-AUC, F1, and precision. Random
                Forest was significantly better on accuracy. XGBoost was significantly better on recall — the
                metric that mattered most for the bureau&apos;s operational cost structure, and the basis on which
                it was selected as the final model.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="data-workflow" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Data Workflow
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Confidential dataset extracted directly from a South African medical billing bureau&apos;s production system, anonymised at source with patient and doctor identifiers hashed before extraction.</li>
              <li>Raw dataset reduced from 32 variables to a final set of 6 predictors through quality screening (constants and high-missingness variables removed), association testing against the target, and multicollinearity assessment.</li>
              <li>High-cardinality categoricals consolidated into clinically meaningful groups using documented mappings: Specialty 118 → 9, ICD10 2,387 → 9, Service.Centre 730 → 9, Posted.Billing.Group 75 → 13, Debtor.Status 20 → 7.</li>
              <li>Target variable engineered from the date fields as Processing.Time = Latest.Capture.Date − Capture.Date, with a 14-day threshold producing the binary Processing.Class.</li>
              <li>70/30 stratified train-test split preserving the 75.9% / 24.1% class distribution. Random state set to the student number throughout for reproducibility.</li>
              <li>No records dropped during preparation — the dataset remained at 50,000 invoices end to end.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="methodology" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Methodology
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>CRISP-DM applied end to end across business understanding, data understanding, data preparation, modelling, evaluation, and deployment recommendations.</li>
              <li>Four classifiers built and compared: Logistic Regression with StandardScaler and balanced class weights, Decision Tree at depth 10 selected via 5-fold cross-validation, Random Forest with 500 trees, and XGBoost with 500 boosting rounds and scale_pos_weight set to the negative-to-positive class ratio.</li>
              <li>Five primary evaluation metrics used: accuracy, ROC-AUC, F1, precision, and recall, with recall prioritised because of the cost asymmetry between missed delays and false alarms.</li>
              <li>Bootstrap confidence interval analysis (1,000 paired resamples) used to determine whether the test metric differences between Random Forest and XGBoost were statistically meaningful.</li>
              <li>SHAP TreeExplainer applied to the full test set on the selected XGBoost model. Global importance, beeswarm distribution, dependence plots, and individual prediction waterfalls all used to translate model behaviour into operational meaning.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="tech-stack" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Tech Stack
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Language: {project.techStack.language?.join(", ")}.</li>
              <li>Modelling: {project.techStack.modelling?.join(", ")}.</li>
              <li>Data: {project.techStack.data?.join(", ")}.</li>
              <li>Explainability: {project.techStack.explainability?.join(", ")}.</li>
              <li>Tools: {project.techStack.tools?.join(", ")}.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="analytical-highlights" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Analytical Highlights
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
              Building this project taught me that the hard part of a machine learning problem is rarely the
              model itself. The hard part is everything around it — deciding which variables you are even
              allowed to use, justifying why a small AUC difference is or is not meaningful, and translating
              what the model is doing into language a billing administrator can actually act on. The XGBoost
              fit is two lines. Everything else is the work.
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
