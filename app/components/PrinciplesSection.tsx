"use client";

const principles = [
  {
    number: "01",
    title: "Default to action",
    body: "Most decisions are reversible. Waiting for perfect information is a decision to do nothing. Ship, gather data, iterate. The loop is the strategy.",
    category: "Work",
  },
  {
    number: "02",
    title: "Protect your attention like it's your most valuable asset",
    body: "It is. Every notification, every open tab, every meeting without a clear agenda is a small theft. Guard your deep work time ferociously.",
    category: "Focus",
  },
  {
    number: "03",
    title: "Systems over goals",
    body: "Goals tell you where you want to go. Systems determine whether you get there. A good system run consistently beats a great goal pursued intermittently.",
    category: "Systems",
  },
  {
    number: "04",
    title: "Compounding is the only magic",
    body: "A 1% improvement every day is 37x better in a year. This applies to skills, relationships, writing, money, and health. Start early, stay consistent, don't interrupt the compounding.",
    category: "Growth",
  },
  {
    number: "05",
    title: "Optimize for interesting over comfortable",
    body: "Comfort is the enemy of growth. Take the meeting, give the talk, start the thing. The interesting choice is almost always the right one, even when it's scary.",
    category: "Life",
  },
  {
    number: "06",
    title: "Be generous with credit, strict with blame",
    body: "Celebrate others' wins loudly. Take responsibility for failures privately. This is not just ethics — it's how you build the kind of reputation people trust.",
    category: "Relationships",
  },
  {
    number: "07",
    title: "Seek disconfirming evidence",
    body: "The most dangerous belief is the one you're most certain about. Actively look for reasons you're wrong. Steel-man opposing views. Truth is not something you possess — it's something you pursue.",
    category: "Thinking",
  },
  {
    number: "08",
    title: "Relationships are the only real ROI",
    body: "No achievement stands alone. Every meaningful thing was built with, for, or because of someone else. Invest in people the way you invest in your craft.",
    category: "Life",
  },
  {
    number: "09",
    title: "Long-form thinking is a superpower",
    body: "Writing is thinking. The person who can write clearly, at length, and persuasively has an enormous advantage. Don't just consume — create. Don't just note — synthesize.",
    category: "Thinking",
  },
  {
    number: "10",
    title: "Rest is not the absence of work — it's part of it",
    body: "Recovery, play, and sleep are inputs, not rewards. You can't sustain high output without high-quality rest. Protect it the same way you protect deep work.",
    category: "Health",
  },
];

const categoryColor: Record<string, string> = {
  Work: "text-indigo-400",
  Focus: "text-purple-400",
  Systems: "text-cyan-400",
  Growth: "text-emerald-400",
  Life: "text-amber-400",
  Relationships: "text-rose-400",
  Thinking: "text-violet-400",
  Health: "text-teal-400",
};

const beliefs = [
  "Good defaults beat good decisions.",
  "Most people are doing their best with what they have.",
  "Clarity comes from action, not thought.",
  "The enemy of great is not bad — it's 'pretty good'.",
  "Every expert was once a beginner who didn't quit.",
  "The quality of your questions determines the quality of your life.",
];

export default function PrinciplesSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xl">🧭</span>
          <h1 className="text-2xl font-bold text-zinc-100">Life Principles</h1>
        </div>
        <p className="text-zinc-500 text-sm ml-8">The beliefs and rules I try to live and work by.</p>
      </div>

      {/* Principles */}
      <div className="space-y-3">
        {principles.map((p, i) => (
          <div
            key={p.number}
            className={`card-hover animate-fade-in bg-[#18181b] border border-zinc-800 rounded-xl p-5`}
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-mono text-zinc-700 mt-0.5 flex-shrink-0">{p.number}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-zinc-100 leading-snug">{p.title}</h3>
                  <span className={`text-[10px] font-semibold flex-shrink-0 ${categoryColor[p.category] ?? "text-zinc-500"}`}>
                    {p.category}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Core beliefs */}
      <div className="animate-fade-in">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Quick Beliefs</h2>
        <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-5 space-y-3">
          {beliefs.map((belief, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-indigo-500 text-sm flex-shrink-0 mt-0.5">→</span>
              <p className="text-sm text-zinc-300">{belief}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
