"use client";

const focuses = [
  {
    category: "Building",
    item: "Launching my second SaaS product — a async video feedback tool for remote design teams.",
    since: "Feb 2025",
    intensity: "High",
  },
  {
    category: "Learning",
    item: "Going deep on systems thinking and mental models. Currently working through Thinking in Systems by Donella Meadows.",
    since: "Jan 2025",
    intensity: "Medium",
  },
  {
    category: "Health",
    item: "Training for a half marathon in May. Running 4x/week, building aerobic base.",
    since: "Mar 2025",
    intensity: "High",
  },
  {
    category: "Relationships",
    item: "Investing more in local community — hosting monthly dinners with 8–10 people I genuinely admire.",
    since: "Jan 2025",
    intensity: "Medium",
  },
];

const currentlyReading = "Thinking in Systems — Donella Meadows";
const currentlyListening = "How I Built This — Guy Raz";
const currentlyWatching = "Slow Horses (Season 4)";

const weeklyTheme = "Ship, then improve. Momentum compounds.";

const recentWins = [
  "Shipped v1.2 of feedback tool — first paying customer onboarded",
  "Ran longest ever training run: 15km",
  "Finished reading Zero to One",
  "Had the best dinner party of the year — 10 people, 4 hours, great conversation",
];

const intensityColor: Record<string, string> = {
  High: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  Medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Low: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

export default function NowSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xl">⚡</span>
          <h1 className="text-2xl font-bold text-zinc-100">Now</h1>
        </div>
        <p className="text-zinc-500 text-sm ml-8">What I&apos;m focused on right now — updated monthly.</p>
      </div>

      {/* Weekly theme */}
      <div className="animate-fade-in stagger-1 bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-5 py-4">
        <div className="text-[10px] text-indigo-400 font-semibold uppercase tracking-widest mb-2">Theme this month</div>
        <p className="text-lg font-semibold text-indigo-200 italic">&ldquo;{weeklyTheme}&rdquo;</p>
      </div>

      {/* Current focuses */}
      <div className="animate-fade-in stagger-2">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Current Focuses</h2>
        <div className="space-y-3">
          {focuses.map((focus, i) => (
            <div
              key={i}
              className={`card-hover bg-[#18181b] border border-zinc-800 rounded-xl p-4 stagger-${i + 2}`}
              style={{ animationDelay: `${(i + 2) * 0.05}s` }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-xs font-semibold text-zinc-400">{focus.category}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[10px] text-zinc-600">{focus.since}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${intensityColor[focus.intensity]}`}>
                    {focus.intensity}
                  </span>
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{focus.item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consuming */}
      <div className="animate-fade-in stagger-4">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Consuming</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Reading", value: currentlyReading, icon: "📖" },
            { label: "Listening", value: currentlyListening, icon: "🎧" },
            { label: "Watching", value: currentlyWatching, icon: "📺" },
          ].map((item) => (
            <div key={item.label} className="card-hover bg-[#18181b] border border-zinc-800 rounded-xl p-4">
              <div className="text-lg mb-2">{item.icon}</div>
              <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-1">{item.label}</div>
              <p className="text-xs text-zinc-300 leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent wins */}
      <div className="animate-fade-in stagger-5">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Recent Wins</h2>
        <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-4 space-y-3">
          {recentWins.map((win, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <p className="text-sm text-zinc-300">{win}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
