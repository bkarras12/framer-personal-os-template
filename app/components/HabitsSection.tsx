"use client";

const habits = [
  {
    category: "Morning Stack",
    time: "6:00–7:30 AM",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
    items: [
      { habit: "No phone for first 30 mins", streak: 18, target: 30, icon: "📵" },
      { habit: "10 min meditation (Waking Up app)", streak: 45, target: 30, icon: "🧘" },
      { habit: "Morning pages — 3 pages freewrite", streak: 12, target: 30, icon: "✍️" },
      { habit: "Cold shower", streak: 8, target: 30, icon: "🚿" },
    ],
  },
  {
    category: "Work Systems",
    time: "9:00 AM onwards",
    color: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/20",
    items: [
      { habit: "Weekly review every Sunday", streak: 10, target: 12, icon: "📋" },
      { habit: "Time-block calendar before 9am", streak: 22, target: 30, icon: "🗓️" },
      { habit: "2-minute rule — do it now", streak: 34, target: 30, icon: "⚡" },
      { habit: "One deep work block (3hr min)", streak: 17, target: 30, icon: "🎯" },
    ],
  },
  {
    category: "Physical",
    time: "5:30 PM / Flexible",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    items: [
      { habit: "Run (marathon training plan)", streak: 14, target: 20, icon: "🏃" },
      { habit: "Strength training 3x/week", streak: 9, target: 13, icon: "💪" },
      { habit: "10k steps minimum", streak: 26, target: 30, icon: "👟" },
      { habit: "In bed by 10:30 PM", streak: 20, target: 30, icon: "😴" },
    ],
  },
  {
    category: "Mind & Relationships",
    time: "Evening / Flexible",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    items: [
      { habit: "Read for 30+ minutes", streak: 22, target: 30, icon: "📚" },
      { habit: "Spanish practice (15 min)", streak: 0, target: 30, icon: "🇪🇸" },
      { habit: "Gratitude — 3 things written", streak: 31, target: 30, icon: "🙏" },
      { habit: "Call a friend or family member", streak: 5, target: 7, icon: "📞" },
    ],
  },
];

const systemRules = [
  { rule: "Never miss twice", description: "One missed day is human. Two in a row is the start of a new habit — a bad one." },
  { rule: "Environment first", description: "Design your environment so the right choice is the easy choice. Friction is the enemy." },
  { rule: "Track what matters, ignore the rest", description: "Only track habits that align with your current goals. More trackers = more guilt, not more progress." },
  { rule: "Habit stacking", description: "Attach new habits to existing anchors. After [current habit], I will [new habit]." },
];

function HabitRow({ habit, streak, target, icon }: { habit: string; streak: number; target: number; icon: string }) {
  const pct = Math.min((streak / target) * 100, 100);
  const isHit = streak >= target;

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-zinc-800 last:border-0">
      <span className="text-base w-6 text-center">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs text-zinc-300 truncate">{habit}</p>
          <span className={`text-[10px] font-bold ml-2 flex-shrink-0 ${isHit ? "text-emerald-400" : "text-zinc-500"}`}>
            {streak}/{target}d
          </span>
        </div>
        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full progress-bar ${isHit ? "bg-emerald-500" : pct > 60 ? "bg-indigo-500" : pct > 30 ? "bg-amber-500" : "bg-rose-500"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function HabitsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xl">🔁</span>
          <h1 className="text-2xl font-bold text-zinc-100">Habits & Systems</h1>
        </div>
        <p className="text-zinc-500 text-sm ml-8">The daily and weekly routines I&apos;m building and protecting.</p>
      </div>

      {/* Habit stacks */}
      <div className="space-y-4">
        {habits.map((stack, i) => (
          <div
            key={stack.category}
            className={`animate-fade-in stagger-${i + 1} bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden`}
          >
            <div className={`px-5 py-3 bg-gradient-to-r ${stack.color} border-b ${stack.border}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-zinc-200">{stack.category}</h2>
                <span className="text-[11px] text-zinc-500">{stack.time}</span>
              </div>
            </div>
            <div className="px-5 py-1">
              {stack.items.map((item, j) => (
                <HabitRow key={j} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* System rules */}
      <div className="animate-fade-in stagger-5">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">My Habit Rules</h2>
        <div className="space-y-2">
          {systemRules.map((rule, i) => (
            <div key={i} className="card-hover bg-[#18181b] border border-zinc-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-zinc-200 mb-1">{rule.rule}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
