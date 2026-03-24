"use client";

import { X } from "./Icons";

const navItems = [
  { id: "now",        label: "Now",         icon: "⚡", desc: "Current focus" },
  { id: "goals",      label: "Goals",       icon: "🎯", desc: "2025 targets" },
  { id: "projects",   label: "Projects",    icon: "🚀", desc: "Active work" },
  { id: "reading",    label: "Reading",     icon: "📚", desc: "Books & links" },
  { id: "habits",     label: "Habits",      icon: "🔁", desc: "Daily systems" },
  { id: "principles", label: "Principles",  icon: "🧭", desc: "Life philosophy" },
  { id: "journal",    label: "Journal",     icon: "✍️",  desc: "Reflections" },
];

interface SidebarProps {
  active: string;
  onNavigate: (id: string) => void;
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ active, onNavigate, mobileOpen, onClose }: SidebarProps) {
  function handleNav(id: string) {
    onNavigate(id);
    onClose();
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50 flex flex-col
          bg-[#0f0f11] border-r border-zinc-800
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">
                AM
              </div>
              <span className="text-sm font-semibold text-zinc-100">Alex Morgan</span>
            </div>
            <p className="text-[11px] text-zinc-500 pl-9">Personal OS · v2025</p>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`
                  nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                  ${isActive
                    ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/25"
                    : "text-zinc-400 border border-transparent"
                  }
                `}
              >
                <span className="text-base w-5 text-center">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium ${isActive ? "text-indigo-300" : "text-zinc-300"}`}>
                    {item.label}
                  </div>
                  <div className="text-[10px] text-zinc-600 truncate">{item.desc}</div>
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-glow" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-zinc-500">Last updated · Mar 2025</span>
          </div>
        </div>
      </aside>
    </>
  );
}
