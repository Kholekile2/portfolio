type Role = "user" | "assistant";

interface ChatMessageProps {
  role: Role;
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 shrink-0">
          AI
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-[var(--accent)] text-white rounded-tr-sm"
            : "bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--foreground)] rounded-tl-sm"
        }`}
      >
        {content}
      </div>
    </div>
  );
}