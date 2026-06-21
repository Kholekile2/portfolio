import CaseStudyToc from "../../components/case-study-toc";
import portfolioData from "../../../lib/portfolio-data";

const project = portfolioData.projects.find((item) => item.id === "meetingmind")!;

export default function MeetingMindPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "What I Built" },
    { id: "ai-workflow", label: "AI Workflow" },
    { id: "cloud-stack", label: "Cloud Stack" },
    { id: "features", label: "Features" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "architecture", label: "Architecture" },
    { id: "engineering-highlights", label: "Technical Highlights" },
    { id: "challenges-solved", label: "Challenges I Hit" },
    { id: "results", label: "What I Learned" },
  ];

  return (
    <main className="page-shell min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
        <div className="min-w-0 max-w-4xl">
          <p className="chip mb-4">AI Case Study</p>
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl text-gray-700 mb-2 dark:text-gray-300">
            AI meeting intelligence for summaries, action items, decisions, and grounded follow up chat
          </p>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            Built with Next.js, FastAPI, MongoDB Atlas, Anthropic Claude, Cloudinary, and Clerk.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4">
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">AI Model</p>
              <p className="font-semibold">Claude Haiku</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Cloud Stack</p>
              <p className="font-semibold">Vercel + Railway + Cloudinary</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Persistence</p>
              <p className="font-semibold">MongoDB Atlas</p>
            </div>
            <div className="surface-card p-3 text-sm">
              <p className="text-gray-500 dark:text-gray-400">Auth</p>
              <p className="font-semibold">Clerk</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12 flex-wrap">
            <a
              href={project.links.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo
            </a>
            <a
              href={project.links.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Code
            </a>
          </div>

          <section className="mb-12">
            <h2 id="overview" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              MeetingMind is a meeting intelligence app that turns transcripts into something people can
              actually work with after a call ends. Instead of leaving users with a long recording or a wall of
              notes, it produces a structured summary, action items with owners, key decisions, and a chat view
              that can answer follow up questions based on the meeting itself.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Structured output instead of free form AI text, so the results can power a clean UI.</li>
              <li>Transcript grounded chat that keeps answers tied to what was actually discussed.</li>
              <li>Cloud backed persistence for meetings, messages, and uploaded assets.</li>
              <li>Async processing so the upload flow stays responsive while AI work runs in the background.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="problem" className="scroll-mt-24 text-2xl font-semibold mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Meeting decisions are often buried in long transcripts, scattered across chat messages, or lost
              in someone&apos;s memory after the call. That creates a familiar problem: people know a meeting was
              important, but they still have to hunt for the decisions and action items afterwards.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I wanted a product that would treat the meeting as structured data, not just as a blob of text.
              The app needed to store the raw input, extract the useful parts, and make the results easy to query
              later without forcing users to reread everything.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="solution" className="scroll-mt-24 text-2xl font-semibold mb-4">
              What I Built
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I built a full stack meeting assistant with a Next.js frontend and a FastAPI backend. Users sign in,
              upload a transcript or meeting file, and the backend saves the meeting in MongoDB before kicking off
              AI processing in the background. Claude then turns the transcript into structured JSON containing the
              summary, action items, and key decisions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The important part is that the system is designed like a production workflow, not a demo. It keeps
              the transcript, status, AI results, and chat history in persistent storage so the meeting can be
              reviewed and queried later.
            </p>
          </section>

          <section className="mb-12">
            <h2 id="ai-workflow" className="scroll-mt-24 text-2xl font-semibold mb-4">
              AI Workflow
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Structured summarisation</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Claude Haiku receives a carefully constrained prompt and returns only JSON. That makes the
                  output reliable enough for the frontend to render summaries, action items, and decisions without
                  needing manual cleanup.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Transcript grounded chat</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The chat endpoint combines the stored transcript with previous messages, so follow up answers are
                  anchored to the actual meeting and stay consistent across turns.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Async background processing</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Meeting uploads return quickly while background tasks mark the record as processing and complete
                  the AI work without blocking the user interface.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Persisted output</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The final summary, action items, decisions, and chat exchanges are written back to MongoDB so the
                  meeting can be revisited long after the original session ends.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="cloud-stack" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Cloud Stack
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Vercel hosts the Next.js frontend so the interface is fast and easy to share.</li>
              <li>Railway runs the FastAPI backend and handles the AI and meeting processing APIs.</li>
              <li>MongoDB Atlas stores users, meetings, summaries, action items, and chat history.</li>
              <li>Cloudinary keeps uploaded audio separate from the core application data.</li>
              <li>Clerk handles authentication so meeting data stays tied to the right user.</li>
              <li>CORS and environment variables keep the frontend and backend connected safely across environments.</li>
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
              <li>Frontend: {project.techStack.frontend?.join(", ")}.</li>
              <li>Backend: {project.techStack.backend?.join(", ")}.</li>
              <li>AI: {project.techStack.ai?.join(", ")}.</li>
              <li>Database: {project.techStack.database?.join(", ")}.</li>
              <li>Infrastructure: {project.techStack.infrastructure?.join(", ")}.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 id="architecture" className="scroll-mt-24 text-2xl font-semibold mb-4">
              Architecture
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The app is separated into a frontend presentation layer, a FastAPI application layer, and a cloud
              persistence layer. That keeps AI work isolated from the UI while still giving the chatbot the full
              transcript context it needs to answer questions reliably.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Next.js handles the meeting upload flow, dashboard screens, and chatbot style interaction.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Backend API</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  FastAPI manages upload validation, meeting persistence, AI processing, and transcript grounded
                  chat endpoints.
                </p>
              </div>
              <div className="surface-card p-5">
                <h3 className="font-semibold mb-2">Database and storage</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  MongoDB Atlas stores application data while Cloudinary stores uploaded media, keeping large files
                  and structured data in the right places.
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
              Building MeetingMind reinforced a few lessons that matter in real product work: AI needs strong
              structure to be useful, cloud services should be chosen by responsibility rather than convenience,
              and background processing is the difference between a nice demo and a responsive user experience.
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