"use client";

import { useEffect, useMemo, useState } from "react";
import Sidebar, { DocsNavGroup } from "./components/Sidebar";
import MainContent, { DocsPageData } from "./components/MainContent";
import docsData from "./mocks/docs.json";

const DocsPage = () => {
  const [activePageId, setActivePageId] = useState<string>("mission");
  const [activeTocId, setActiveTocId] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const navGroups = (docsData as unknown as { nav: DocsNavGroup[] }).nav;
  const pages = (docsData as unknown as { pages: Record<string, DocsPageData> }).pages;
  const page = (pages[activePageId] ?? pages["mission"]) as DocsPageData;

  const sectionIds = useMemo(
    () => (page?.sections ?? []).map((s) => s.id).filter(Boolean),
    [page]
  );

  useEffect(() => {
    const first = sectionIds[0] ?? "";
    setActiveTocId(first);
  }, [sectionIds]);

  useEffect(() => {
    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0)
          );

        if (visible[0]?.target?.id) {
          setActiveTocId(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, activePageId]);

  const handlePageSelect = (id: string) => {
    setActivePageId(id);
    setSidebarOpen(false);
  };

  const handleTocClick = (id: string) => {
    setActiveTocId(id);
    setTocOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 px-4 py-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-900 truncate flex-1 mx-4">{page.title}</h1>
        <button
          type="button"
          onClick={() => setTocOpen(!tocOpen)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay for mobile */}
      {(sidebarOpen || tocOpen) && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setSidebarOpen(false);
            setTocOpen(false);
          }}
        />
      )}

      {/* Left Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50 md:z-auto
        w-[85vw] max-w-[340px] md:w-auto
        transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        transition-transform duration-300 ease-in-out
      `}>
        <Sidebar groups={navGroups} activeId={activePageId} onSelect={handlePageSelect} />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 pt-16 md:pt-0">
        <MainContent page={page} />
      </div>

      {/* Right Sidebar - On This Page (Desktop) */}
      <aside className="hidden xl:block w-64 bg-white border-l border-gray-200 p-6 self-start sticky top-0">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          On this page
        </h3>
        <nav className="space-y-2">
          {(page?.sections ?? []).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleTocClick(s.id);
              }}
              className={`block text-sm hover:text-gray-900 ${
                activeTocId === s.id
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Right Sidebar - On This Page (Mobile) */}
      <div className={`
        md:hidden fixed inset-y-0 right-0 w-[85vw] max-w-[340px] bg-white border-l border-gray-200 z-50
        transform ${tocOpen ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-300 ease-in-out
        pt-16
      `}>
        <div className="p-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            On this page
          </h3>
          <nav className="space-y-2">
            {(page?.sections ?? []).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTocClick(s.id);
                }}
                className={`block text-sm hover:text-gray-900 ${
                  activeTocId === s.id
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;