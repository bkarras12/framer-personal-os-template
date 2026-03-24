"use client";

const projects = [
  {
    name: "Async Feedback Tool",
    emoji: "🎬",
    status: "active",
    phase: "Growth",
    description: "Video annotation and async review tool for remote design teams. Currently at $3.4k MRR with 28 paying customers.",
    tags: ["SaaS", "B2B", "Design Tools"],
    metrics: [
      { label: "MRR", value: "$3.4k" },
      { label: "Customers", value: "28" },
      { label: "Churn", value: "2.1%" },
    ],
    nextAction: "Launch referral program to accelerate growth",
    startDate: "Sep 2024",
    url: "#",
  },
  {
    name: "Personal OS Template",
    emoji: "🧠",
    status: "active",
    phase: "Building",
    description: "Open-source template for building a personal operating system — the very site you're reading. Built with Next.js and Tailwind.",
    tags: ["Open Source", "Next.js", "Template"],
    metrics: [
      { label: "Stars", value: "847" },
      { label: "Forks", value: "134" },
      { label: "Issues", value: "12" },
    ],
    nextAction: "Publish v2 with new Habits and Journal sections",
    startDate: "Jan 2025",
    url: "#",
  },
  {
    name: "The Systems Letter",
    emoji: "📬",
    status: "active",
    phase: "Consistent",
    description: "Weekly newsletter on systems thinking, mental models, and building better defaults. 3,100 subscribers and growing.",
    tags: ["Newsletter", "Writing", "Systems"],
    metrics: [
      { label: "Subscribers", value: "3.1k" },
      { label: "Open Rate", value: "47%" },
      { label: "Issues", value: "38" },
    ],
    nextAction: "Experiment with paid tier for deep-dive issues",
    startDate: "Apr 2023",
    url: "#",
  },
  {
    name: "AI Workflow Experiments",
    emoji: "🤖",
    status: "exploring",
    phase: "Exploration",
    description: "Personal R&D playground for AI-augmented workflows. Building and stress-testing custom agents for my own productivity stack.",
    tags: ["AI", "Research", "Personal"],
    metrics: [
      { label: "Experiments", value: "14" },
      { label: "Keepers", value: "4" },
      { label: "Hours", value: "60+" },
    ],
    nextAction: "Document the 4 experiments worth keeping into a mini-guide",
    startDate: "Nov 2024",
    url: "#",
  },
  {
    name: "Local Dinner Series",
    emoji: "🍽️",
    status: "recurring",
    phase: "Ongoing",
    description: "Monthly dinners for 8–10 interesting people doing ambitious things. No agenda, great food, real conversation.",
    tags: ["Community", "IRL", "Recurring"],
    metrics: [
      { label: "Events", value: "3" },
      { label: "Guests", value: "24" },
      { label: "Next", value: "Apr 12" },
    ],
    nextAction: "Book venue for April dinner — theme: 'Things that don't scale'",
    startDate: "Jan 2025",
    url: "#",
  },
  {
    name: "Spanish Language Journey",
    emoji: "🇪🇸",
    status: "paused",
    phase: "Paused",
    description: "Working toward conversational Spanish. Hit A2 level in late 2024, currently paused while half marathon training takes priority.",
    tags: ["Learning", "Language", "Personal"],
    metrics: [
      { label: "Level", value: "A2" },
      { label: "Days Streak", value: "0" },
      { label: "Sessions", value: "180+" },
    ],
    nextAction: "Resume after race in May — target B1 by end of year",
    startDate: "Mar 2023",
    url: "#",
  },
];

const statusConfig: Record<string, { label: string; dot: string; text: string; border: string }> = {
  active: { label: "Active", dot: "bg-emerald-400", text: "text-emerald-400", border: "border-emerald-500/20" },
  exploring: { label: "Exploring", dot: "bg-indigo-400", text: "text-indigo-400", border: "border-indigo-500/20" },
  recurring: { label: "Recurring", dot: "bg-purple-400", text: "text-purple-400", border: "border-purple-500/20" },
  paused: { label: "Paused", dot: "bg-zinc-500", text: "text-zinc-500", border: "border-zinc-700" },
};

export default function ProjectsSection() {
  const active = projects.filter((p) => p.status === "active" || p.status === "recurring" || p.status === "exploring");
  const paused = projects.filter((p) => p.status === "paused");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xl">🚀</span>
          <h1 className="text-2xl font-bold text-zinc-100">Projects</h1>
        </div>
        <p className="text-zinc-500 text-sm ml-8">Everything I&apos;m building, running, or exploring.</p>
      </div>

      {/* Stats bar */}
      <div className="animate-fade-in stagger-1 grid grid-cols-3 gap-3">
        {[
          { label: "Active", value: active.length, color: "text-emerald-400" },
          { label: "Paused", value: paused.length, color: "text-zinc-500" },
          { label: "Total", value: projects.length, color: "text-zinc-300" },
        ].map((s) => (
          <div key={s.label} className="bg-[#18181b] border border-zinc-800 rounded-xl p-4 text-center">
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[11px] text-zinc-600 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Active projects */}
      <div className="animate-fade-in stagger-2">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Active & Ongoing</h2>
        <div className="space-y-3">
          {active.map((project, i) => {
            const s = statusConfig[project.status];
            return (
              <div key={project.name} className={`card-hover bg-[#18181b] border border-zinc-800 rounded-xl p-5`} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{project.emoji}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-100">{project.name}</h3>
                      <span className="text-[10px] text-zinc-600">{project.startDate}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold flex-shrink-0 ${s.text} ${s.border} bg-zinc-900`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-zinc-900 rounded-lg p-2 text-center">
                      <div className="text-sm font-bold text-zinc-200">{m.value}</div>
                      <div className="text-[10px] text-zinc-600">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 bg-zinc-900 rounded-lg px-3 py-2">
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest mt-0.5 flex-shrink-0">Next →</span>
                  <p className="text-xs text-zinc-400">{project.nextAction}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Paused */}
      {paused.length > 0 && (
        <div className="animate-fade-in stagger-5">
          <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Paused</h2>
          <div className="space-y-3">
            {paused.map((project) => {
              const s = statusConfig[project.status];
              return (
                <div key={project.name} className="bg-[#18181b] border border-zinc-800 rounded-xl p-5 opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl grayscale">{project.emoji}</span>
                      <h3 className="text-sm font-semibold text-zinc-400">{project.name}</h3>
                    </div>
                    <span className={`text-[10px] font-semibold ${s.text}`}>{s.label}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{project.description}</p>
                  <p className="text-xs text-zinc-600 mt-2 italic">↳ {project.nextAction}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
