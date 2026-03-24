"use client";

import { useState, useEffect, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import NowSection from "./components/NowSection";
import GoalsSection from "./components/GoalsSection";
import ProjectsSection from "./components/ProjectsSection";
import ReadingSection from "./components/ReadingSection";
import HabitsSection from "./components/HabitsSection";
import PrinciplesSection from "./components/PrinciplesSection";
import JournalSection from "./components/JournalSection";
import { Menu } from "./components/Icons";

const sectionMap: Record<string, React.ReactNode> = {
  now: <NowSection />,
  goals: <GoalsSection />,
  projects: <ProjectsSection />,
  reading: <ReadingSection />,
  habits: <HabitsSection />,
  principles: <PrinciplesSection />,
  journal: <JournalSection />,
};

const sectionLabels: Record<string, string> = {
  now: "Now",
  goals: "Goals",
  projects: "Projects",
  reading: "Reading",
  habits: "Habits",
  principles: "Principles",
  journal: "Journal",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("now");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigate = useCallback((id: string) => {
    setActiveSection(id);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex h-screen overflow-hidden bg-[#09090b]">
      {/* Sidebar */}
      <Sidebar
        active={activeSection}
        onNavigate={handleNavigate}
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile topbar */}
        <header className="flex-shrink-0 lg:hidden flex items-center justify-between px-4 py-4 border-b border-zinc-800 bg-[#09090b]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-zinc-400 hover:text-zinc-200 transition-colors p-1 rounded"
          >
            <Menu size={20} />
          </button>
          <span className="text-sm font-semibold text-zinc-300">{sectionLabels[activeSection]}</span>
          <div className="w-7" />
        </header>

        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-5 py-8 lg:py-10">
            <div key={activeSection} className="animate-fade-in">
              {sectionMap[activeSection]}
            </div>
          </div>

          {/* Footer */}
          <div className="max-w-2xl mx-auto px-5 pb-10 pt-6 border-t border-zinc-900 mt-6">
            <p className="text-[11px] text-zinc-700 text-center">
              Personal OS · Built with{" "}
              <a
                href="https://nextjs.org"
                className="text-zinc-600 hover:text-zinc-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
              {" · "}
              <a
                href="https://github.com/bkarras12/framer-personal-os-template"
                className="text-zinc-600 hover:text-zinc-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
