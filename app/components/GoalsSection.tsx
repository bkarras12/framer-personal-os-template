"use client";

import { useEffect, useRef, useState } from "react";

const goalCategories = [
  {
    category: "Work & Business",
    icon: "💼",
    goals: [
      { label: "Reach $10k MRR with feedback tool", progress: 34, unit: "$3.4k MRR", target: "$10k", status: "on-track" },
      { label: "Publish 12 long-form essays", progress: 25, unit: "3 / 12", target: "12", status: "behind" },
      { label: "Grow newsletter to 5,000 subscribers", progress: 62, unit: "3,100 / 5,000", target: "5k", status: "on-track" },
    ],
  },
  {
    category: "Health & Body",
    icon: "🏃",
    goals: [
      { label: "Run a half marathon", progress: 60, unit: "Training — May race", target: "May 2025", status: "on-track" },
      { label: "Strength train 3x/week consistently", progress: 78, unit: "78% weeks hit", target: "52 weeks", status: "on-track" },
      { label: "Sleep 7.5+ hrs average", progress: 85, unit: "7.6 hrs avg", target: "7.5 hrs", status: "crushing" },
    ],
  },
  {
    category: "Learning & Mind",
    icon: "🧠",
    goals: [
      { label: "Read 24 books", progress: 21, unit: "5 / 24", target: "24 books", status: "behind" },
      { label: "Learn conversational Spanish", progress: 40, unit: "A2 level", target: "B1 level", status: "behind" },
      { label: "Complete systems thinking course", progress: 70, unit: "7 / 10 modules", target: "10 modules", status: "on-track" },
    ],
  },
  {
    category: "Relationships & Life",
    icon: "❤️",
    goals: [
      { label: "Host 12 dinner parties", progress: 25, unit: "3 / 12", target: "12 dinners", status: "on-track" },
      { label: "Take 2 international trips", progress: 50, unit: "1 / 2", target: "2 trips", status: "on-track" },
      { label: "Call family weekly", progress: 80, unit: "80% weeks", target: "52 weeks", status: "crushing" },
    ],
  },
];

const statusConfig: Record<string, { label: string; color: string; barColor: string }> = {
  crushing: { label: "Crushing it", color: "text-emerald-400", barColor: "bg-emerald-500" },
  "on-track": { label: "On track", color: "text-indigo-400", barColor: "bg-indigo-500" },
  behind: { label: "Behind", color: "text-amber-400", barColor: "bg-amber-500" },
  stalled: { label: "Stalled", color: "text-rose-400", barColor: "bg-rose-500" },
};

function ProgressBar({ progress, barColor }: { progress: number; barColor: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(progress), 100);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div ref={ref} className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full progress-bar ${barColor}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function GoalsSection() {
  const year = 2025;
  const dayOfYear = Math.floor((Date.now() - new Date(`${year}-01-01`).getTime()) / 86400000);
  const yearProgress = Math.min(Math.round((dayOfYear / 365) * 100), 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xl">🎯</span>
          <h1 className="text-2xl font-bold text-zinc-100">Goals</h1>
        </div>
        <p className="text-zinc-500 text-sm ml-8">Annual targets with live progress tracking.</p>
      </div>

      {/* Year progress */}
      <div className="animate-fade-in stagger-1 bg-[#18181b] border border-zinc-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-zinc-300">{year} Progress</span>
          <span className="text-sm font-bold text-indigo-400">{yearProgress}%</span>
        </div>
        <ProgressBar progress={yearProgress} barColor="bg-gradient-to-r from-indigo-500 to-purple-500" />
        <p className="text-xs text-zinc-600 mt-2">Day {dayOfYear} of 365 — {365 - dayOfYear} days remaining</p>
      </div>

      {/* Goal categories */}
      <div className="space-y-5">
        {goalCategories.map((cat, ci) => (
          <div key={cat.category} className={`animate-fade-in stagger-${ci + 2}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">{cat.icon}</span>
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">{cat.category}</h2>
            </div>
            <div className="space-y-3">
              {cat.goals.map((goal, gi) => {
                const s = statusConfig[goal.status];
                return (
                  <div key={gi} className="card-hover bg-[#18181b] border border-zinc-800 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <p className="text-sm text-zinc-300 leading-snug">{goal.label}</p>
                      <span className={`text-[10px] font-semibold whitespace-nowrap flex-shrink-0 ${s.color}`}>
                        {s.label}
                      </span>
                    </div>
                    <ProgressBar progress={goal.progress} barColor={s.barColor} />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] text-zinc-500">{goal.unit}</span>
                      <span className="text-[11px] text-zinc-600">Target: {goal.target}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
