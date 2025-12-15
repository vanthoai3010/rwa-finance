"use client";

import Image from "next/image";

export type DocsNavItem = {
  id: string;
  label: string;
  icon?: string;
};

export type DocsNavGroup = {
  title: string;
  items: DocsNavItem[];
};

interface SidebarProps {
  groups: DocsNavGroup[];
  activeId: string;
  onSelect: (id: string) => void;
}

const Sidebar = ({ groups, activeId, onSelect }: SidebarProps) => {
  
  return (
    <aside className="w-full md:w-64 lg:w-72 h-full md:h-screen md:sticky md:top-0 border-r border-gray-200 relative overflow-hidden bg-white">
      <Image
        src="/image/home/side-bar.png"
        alt="Sidebar background"
        fill
        priority
        className="hidden md:block object-cover"
      />
      <nav className="p-3 sm:p-4 space-y-4 relative z-10 h-full overflow-y-auto">
        {groups.map((group, gIdx) => (
          <div key={`${group.title}-${gIdx}`} className="space-y-1">
            <div className="px-2 py-2 font-semibold text-gray-900 text-sm">
              {group.title}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelect(item.id)}
                    className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-blue-600 font-medium bg-blue-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;