"use client";

import { useEffect, useState } from "react";

type TocSection = {
  id: string;
  label: string;
};

type CaseStudyTocProps = {
  sections: TocSection[];
};

export default function CaseStudyToc({ sections }: CaseStudyTocProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) {
      return;
    }

    const validIds = new Set(sections.map((section) => section.id));

    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (validIds.has(hashId)) {
        setActiveId(hashId);
      }
    };

    syncFromHash();

    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (!visibleEntries.length) {
          return;
        }

        // Prefer the section closest to the top of the reading area.
        visibleEntries.sort(
          (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        );

        const nextId = (visibleEntries[0].target as HTMLElement).id;
        if (validIds.has(nextId)) {
          setActiveId(nextId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    targets.forEach((target) => observer.observe(target));
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [sections]);

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
                  aria-current={activeId === section.id ? "true" : undefined}
                  className={`block rounded-md px-2 py-1 text-sm transition-colors ${
                    activeId === section.id
                      ? "bg-[var(--accent-soft)] text-zinc-900 dark:text-zinc-100"
                      : "text-gray-600 hover:text-zinc-900 dark:text-gray-300 dark:hover:text-zinc-100"
                  }`}
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
