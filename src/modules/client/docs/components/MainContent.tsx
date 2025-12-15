"use client";

import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { useCallback } from "react";

type CalloutVariant = "note" | "warning" | "info" | "error" | "success";

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "unordered_list"; items: string[] }
  | { type: "ordered_list"; items: string[] }
  | { type: "check_list"; items: string[] }
  | { type: "callout"; variant: CalloutVariant; title?: string; text: string }
  | { type: "code"; language?: string; code: string }
  | { type: "table"; caption?: string; columns: string[]; rows: string[][] };

export interface DocsPageData {
  title: string;
  description?: string;
  sections: Array<{
    id: string;
    title: string;
    blocks: ContentBlock[];
  }>;
}

interface MainContentProps {
  page: DocsPageData;
}

const MainContent = ({ page }: MainContentProps) => {
  const getCalloutStyles = (variant: CalloutVariant) => {
    switch (variant) {
      case "note":
        return "bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800";
      case "warning":
        return "bg-red-50 border-l-4 border-red-500 text-red-700";
      case "error":
        return "bg-red-50 border-l-4 border-red-400 text-red-800";
      case "success":
        return "bg-green-50 border-l-4 border-green-400 text-green-800";
      case "info":
      default:
        return "bg-blue-50 border-l-4 border-blue-400 text-blue-800";
    }
  };

  const getCalloutIcon = (variant: CalloutVariant) => {
    switch (variant) {
      case "note":
        return "mdi:information";
      case "warning":
        return "mdi:alert";
      case "error":
        return "mdi:alert-circle";
      case "success":
        return "mdi:check-circle";
      case "info":
      default:
        return "mdi:information";
    }
  };

  const getCalloutIconClass = (variant: CalloutVariant) => {
    switch (variant) {
      case "warning":
      case "error":
        return "text-red-600";
      case "success":
        return "text-green-600";
      case "note":
        return "text-yellow-700";
      case "info":
      default:
        return "text-blue-600";
    }
  };

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  }, []);

  const renderBlock = (block: ContentBlock, key: string) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={key} className="text-gray-700 leading-relaxed text-sm md:text-base">
            {block.text}
          </p>
        );

      case "unordered_list":
        return (
          <ul key={key} className="space-y-2 text-gray-700 text-sm md:text-base">
            {block.items.map((it, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        );

      case "ordered_list":
        return (
          <ol key={key} className="space-y-2 text-gray-700 list-decimal list-inside text-sm md:text-base">
            {block.items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ol>
        );

      case "check_list":
        return (
          <ul key={key} className="space-y-3 text-gray-700 text-sm md:text-base">
            {block.items.map((it, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <IconifyIcon
                  icon="mdi:check-circle"
                  width={18}
                  height={18}
                  className="text-emerald-600 mt-0.5 flex-shrink-0"
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        );

      case "callout":
        return (
          <div
            key={key}
            className={`p-3 md:p-4 rounded-md flex gap-2 md:gap-3 ${getCalloutStyles(block.variant)}`}
          >
            <IconifyIcon
              icon={getCalloutIcon(block.variant)}
              width={18}
              height={18}
              className={`flex-shrink-0 mt-0.5 ${getCalloutIconClass(
                block.variant
              )}`}
            />
            <div className="text-xs md:text-sm leading-relaxed">
              {block.title && (
                <div className="font-semibold mb-1">{block.title}</div>
              )}
              <div>{block.text}</div>
            </div>
          </div>
        );

      case "code":
        return (
          <div
            key={key}
            className="rounded-md overflow-hidden bg-[#0B2A4A]"
          >
            <div className="flex items-center justify-end px-2 md:px-3 py-2 bg-[#0B2A4A]">
              <button
                type="button"
                onClick={() => handleCopy(block.code)}
                className="inline-flex items-center gap-1 md:gap-2 text-xs text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded px-2 md:px-3 py-1"
              >
                <IconifyIcon icon="mdi:content-copy" width={14} height={14} />
                Copy
              </button>
            </div>
            <pre className="p-3 md:p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed">
              <code>{block.code}</code>
            </pre>
          </div>
        );

      case "table":
        return (
          <div key={key} className="rounded-md overflow-hidden border border-gray-200">
            {block.caption && (
              <div className="bg-[#0B2A4A] text-white font-bold text-base md:text-xl px-4 md:px-6 py-3 md:py-5">
                {block.caption}
              </div>
            )}
            <div className="overflow-x-auto bg-white">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="text-gray-500 bg-gray-50">
                    {block.columns.map((c, idx) => (
                      <th
                        key={idx}
                        className="text-center font-medium px-2 md:px-4 py-2 md:py-3 border-b whitespace-nowrap"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b last:border-b-0">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-2 md:px-4 py-3 md:py-4 text-gray-700 text-center whitespace-nowrap">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 min-w-0">
      <article className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-6 sm:py-7 md:py-8 lg:py-12">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{page.title}</h1>
          {page.description && (
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {page.description}
            </p>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-6 md:space-y-8">
          {page.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-3 md:space-y-4 scroll-mt-20 md:scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">{section.title}</h2>
              <div className="space-y-3 md:space-y-4">
                {section.blocks.map((block, idx) =>
                  renderBlock(block, `${section.id}-${idx}`)
                )}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
};

export default MainContent;