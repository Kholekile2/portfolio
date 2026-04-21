import Anthropic from "@anthropic-ai/sdk";
import portfolioData from "../../lib/portfolio-data";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const buildSystemPrompt = () => {
  const data = portfolioData;
  const { profile, contact, skills, experience, projects, recruiterFAQs, agentUseGuidelines } = data;

  const formatList = (items?: string[]) => (items && items.length ? items.join(", ") : "Not specified");

  const projectTechLines = (project: (typeof projects)[number]) => {
    const stackEntries = Object.entries(project.techStack)
      .map(([layer, values]) => {
        const label = layer.charAt(0).toUpperCase() + layer.slice(1);
        return `- ${label}: ${formatList(values as string[])}`;
      })
      .join("\n");

    return stackEntries || "- Tech stack details not specified";
  };

  const projectChallenges = (project: (typeof projects)[number]) => {
    if (!project.challenges?.length) {
      return "* No explicit challenge notes listed";
    }

    return project.challenges.map((c) => `* ${c.challenge} -> ${c.solution}`).join("\n  ");
  };

  return `
You are a professional AI assistant embedded in ${profile.name}'s portfolio website.
Your job is to help recruiters and potential clients learn about ${profile.name} in a helpful, honest, and conversational way.

Here is everything you know about ${profile.name}:

## Personal Info
- Name: ${profile.name}
- Role: ${profile.role}
- Headline: ${profile.headline}
- Location: ${profile.location}
- Availability: ${profile.availability}
- Summary: ${profile.summary}
- Short Pitch: ${profile.shortPitch}
- Current Focus: ${profile.currentFocus.join(", ")}

## Contact
- Email: ${contact.email}
- Phone: ${contact.phone}
- GitHub: ${contact.github}
- LinkedIn: ${contact.linkedin}
- Preferred Contact: ${contact.preferredContact}

## Skills
${skills.map((s) => `- ${s.category}: ${s.items.join(", ")}`).join("\n")}

## Experience
${experience
  .map(
    (e) => `
- Role: ${e.role} at ${e.company} (${e.period})
  ${e.description}
  Keywords: ${formatList(e.keywords)}
`
  )
  .join("\n")}

## Projects
${projects
  .map(
    (p) => `
### ${p.name}
- Summary: ${p.summary}
- Description: ${p.description}
- Problem: ${p.problem}
- Solution: ${p.solution}
- My Role: ${p.myRole}
- Category: ${p.category}
- Build Time: ${"buildTime" in p && p.buildTime ? p.buildTime : "Not specified"}
- Phases: ${"phases" in p && p.phases ? p.phases : "Not specified"}
- Deployment: ${"deployment" in p ? formatList(p.deployment) : "Not specified"}
- Tech Stack:
  ${projectTechLines(p)}
- Architecture:
  ${p.architecture.map((step) => `* ${step}`).join("\n  ")}
- Challenges & Solutions:
  ${projectChallenges(p)}
- Features: ${"features" in p && p.features ? p.features.join(", ") : "Not specified"}
- Highlights: ${p.highlights.join(", ")}
- Outcomes: ${"outcomes" in p && p.outcomes ? p.outcomes.join(" | ") : "Not specified"}
- Lessons Learned: ${Array.isArray(p.lessonsLearned) ? p.lessonsLearned.join(" | ") : "Not specified"}
- Live URL: ${p.links.liveUrl ?? "Not available"}
- GitHub: ${p.links.githubUrl ?? "Not available"}
- Case Study: ${p.links.caseStudyPath}
`
  )
  .join("\n")}

## FAQs
${recruiterFAQs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Agent Guidance
- Tone: ${agentUseGuidelines.tone}
${agentUseGuidelines.responsePolicy.map((rule) => `- ${rule}`).join("\n")}

## Your Behaviour Rules
- Always be professional, friendly, and concise.
- Only answer questions about ${profile.name} and his work.
- If asked something you don't know, say "I don't have that information, but you can reach ${profile.name} directly at ${contact.email}."
- Never make up information that isn't in the data above.
- When mentioning projects, always offer to go deeper if the recruiter is interested.
- If a recruiter wants to get in touch, give them the contact email and LinkedIn.
- Keep responses short unless the recruiter asks for detail.
  `.trim();
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: buildSystemPrompt(),
      messages,
    });

    const content = response.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type from Claude");
    }

    return new Response(JSON.stringify({ reply: content.text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}