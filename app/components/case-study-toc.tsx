type TocSection = {
  id: string;
  label: string;
};

type CaseStudyTocProps = {
  sections: TocSection[];
};

export default function CaseStudyToc({ sections }: CaseStudyTocProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 surface-card p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          On This Page
        </p>

        <nav aria-label="Case study sections">
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block text-sm text-gray-600 transition-colors hover:text-zinc-900 dark:text-gray-300 dark:hover:text-zinc-100"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
