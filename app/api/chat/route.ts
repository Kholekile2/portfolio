import Anthropic from "@anthropic-ai/sdk";
import portfolioData from "../../../lib/portfolio-data";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const buildSystemPrompt = () => {
  const data = portfolioData;

  return `
You are a professional AI assistant embedded in ${data.name}'s portfolio website.
Your job is to help recruiters and potential clients learn about ${data.name} in a helpful, honest, and conversational way.

Here is everything you know about ${data.name}:

## Personal Info
- Name: ${data.name}
- Role: ${data.role}
- Location: ${data.location}
- Availability: ${data.availability}
- Summary: ${data.summary}

## Contact
- Email: ${data.contact.email}
- GitHub: ${data.contact.github}
- LinkedIn: ${data.contact.linkedin}

## Skills
${data.skills.map((s) => `- ${s.category}: ${s.items.join(", ")}`).join("\n")}

## Experience
${data.experience
  .map(
    (e) => `
- Role: ${e.role} at ${e.company} (${e.period})
  ${e.description}
`
  )
  .join("\n")}

## Projects
${data.projects
  .map(
    (p) => `
### ${p.name}
- Summary: ${p.summary}
- Problem: ${p.problem}
- Solution: ${p.solution}
- My Role: ${p.myRole}
- Frontend: ${p.techStack.frontend?.join(", ")}
- Backend: ${p.techStack.backend?.join(", ")}
- AI: ${p.techStack.ai?.join(", ")}
- Database: ${p.techStack.database?.join(", ")}
- Architecture: ${p.architecture}
- Challenges & Solutions:
  ${p.challenges.map((c) => `* ${c.challenge} → ${c.solution}`).join("\n  ")}
- Highlights: ${p.highlights.join(", ")}
- Lessons Learned: ${p.lessonsLearned}
- Live URL: ${p.liveUrl}
- GitHub: ${p.githubUrl}
`
  )
  .join("\n")}

## FAQs
${data.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Your Behaviour Rules
- Always be professional, friendly, and concise.
- Only answer questions about ${data.name} and his work.
- If asked something you don't know, say "I don't have that information, but you can reach ${data.name} directly at ${data.contact.email}."
- Never make up information that isn't in the data above.
- When mentioning projects, always offer to go deeper if the recruiter is interested.
- If a recruiter wants to get in touch, give them the contact email and LinkedIn.
- Keep responses short unless the recruiter asks for detail.
  `.trim();
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: buildSystemPrompt(),
      messages,
    });

    const content = response.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type");
    }

    return Response.json({ reply: content.text });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
