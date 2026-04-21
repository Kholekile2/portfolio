import ReactMarkdown from "react-markdown";

type Role = "user" | "assistant";

interface ChatMessageProps {
  role: Role;
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 shrink-0">
          AI
        </div>
      )}
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-[var(--accent)] text-white rounded-tr-sm"
            : "bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--foreground)] rounded-tl-sm"
        }`}
      >
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            components={{
              h3: ({ children }) => (
                <h3 className="font-bold text-base mt-3 mb-1 text-[var(--accent)]">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="font-semibold text-sm mt-2 mb-1">{children}</h4>
              ),
              p: ({ children }) => (
                <p className="mb-2 last:mb-0">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-sm">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-[var(--foreground)]">
                  {children}
                </strong>
              ),
              hr: () => (
                <hr className="my-3 border-[var(--surface-border)]" />
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-2">
                  <table className="text-xs w-full border-collapse">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-[var(--surface-border)] px-2 py-1 bg-[var(--background)] font-semibold text-left">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-[var(--surface-border)] px-2 py-1">
                  {children}
                </td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}