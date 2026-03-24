"use client";

const entries = [
  {
    date: "March 20, 2025",
    title: "On momentum and inertia",
    mood: "🧠",
    tags: ["Reflection", "Work"],
    body: `I've been thinking a lot about momentum lately. Not in the physics sense — in the creative and professional sense. The hardest part of any project isn't the middle, and it's rarely the end. It's the beginning, before you have any momentum at all.

Once you're moving, the work gets easier. Not because it's objectively easier — but because you have evidence. You've shipped before. You've figured things out before. You can trust that the fog will clear.

The implication: protect your first hour ruthlessly. It sets the tone for everything that follows.`,
    wordCount: 96,
  },
  {
    date: "March 14, 2025",
    title: "First paying customer",
    mood: "🎉",
    tags: ["Milestone", "SaaS"],
    body: `Got the notification at 2:17 AM. Woke up and just stared at it for a while.

Someone I've never met decided that the thing I built was worth paying for. That never gets old. No matter how many times it might happen in the future, this first one will always mean something different.

The product is rough. There are bugs I know about. The UX has friction. But someone looked at it and said "yes, this solves a real problem for me" and that's everything.

Time to make it worthy of their trust.`,
    wordCount: 92,
  },
  {
    date: "March 8, 2025",
    title: "Weekly review — Week 10",
    mood: "📋",
    tags: ["Review", "Habits"],
    body: `What went well:
Ran 3 times this week, hit all planned sessions. Sleep averaged 7.8 hours — best week this year. Had a genuinely great dinner with 8 people on Saturday.

What didn't:
Got sucked into optimizing the dashboard instead of talking to users. Classic mistake. The product doesn't need to be prettier — it needs to be more useful.

Focus for next week:
5 customer discovery calls. No new features until I have them. Ship referral program.`,
    wordCount: 83,
  },
  {
    date: "February 28, 2025",
    title: "What I learned from reading Zero to One",
    mood: "📚",
    tags: ["Books", "Business"],
    body: `Thiel's central argument: competition is for losers. Real value is created in monopoly — doing something so uniquely well that you have no meaningful competitors.

This hit differently as someone building SaaS. I've been thinking about my competitive advantage all wrong — trying to match features rather than defining a fundamentally different space.

What's the version of my feedback tool that's 10x better than everything else in a specific, well-defined way? That's the question I should be obsessing over.`,
    wordCount: 81,
  },
  {
    date: "February 19, 2025",
    title: "The cost of saying yes",
    mood: "😤",
    tags: ["Focus", "Decisions"],
    body: `I said yes to four things this week that I should have said no to. Podcast appearance (not aligned with current goals), advisory intro call (no fit), feature request that would take a week (one customer asked), a social thing I didn't want to go to.

Result: the week felt full but hollow. No deep work, no meaningful progress on the things that actually matter.

The lesson I keep having to relearn: every yes is a no to something else. The question is always "what am I saying no to?"`,
    wordCount: 88,
  },
  {
    date: "February 10, 2025",
    title: "The dinner party experiment",
    mood: "🍽️",
    tags: ["Community", "Life"],
    body: `Hosted the first dinner of the year. 8 people, four hours, one rule: no talking about what you do for the first hour.

It worked. By the time we got to work/projects, everyone was already a full human being to each other, not just a job title.

Three unexpected conversations that I'll be thinking about for weeks. Two potential collaborations. One friendship that I can already tell will matter.

Doing this monthly. Already planning the April dinner.`,
    wordCount: 86,
  },
];

const moodColors: Record<string, string> = {
  "🧠": "bg-violet-500/10 border-violet-500/20",
  "🎉": "bg-emerald-500/10 border-emerald-500/20",
  "📋": "bg-indigo-500/10 border-indigo-500/20",
  "📚": "bg-amber-500/10 border-amber-500/20",
  "😤": "bg-rose-500/10 border-rose-500/20",
  "🍽️": "bg-purple-500/10 border-purple-500/20",
};

const prompts = [
  "What's one belief you held five years ago that you no longer hold?",
  "What would you do differently if you knew you couldn't fail?",
  "What are you tolerating right now that you shouldn't be?",
  "Who shaped how you think, and how?",
  "What does your ideal week actually look like?",
  "What problem do you keep solving that shouldn't need solving?",
];

export default function JournalSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xl">✍️</span>
          <h1 className="text-2xl font-bold text-zinc-100">Journal</h1>
        </div>
        <p className="text-zinc-500 text-sm ml-8">Reflections, reviews, and things I&apos;m thinking through.</p>
      </div>

      {/* Stats */}
      <div className="animate-fade-in stagger-1 grid grid-cols-3 gap-3">
        {[
          { label: "Entries", value: entries.length + "+" },
          { label: "Words", value: "12k+" },
          { label: "Streak", value: "31d" },
        ].map((s) => (
          <div key={s.label} className="bg-[#18181b] border border-zinc-800 rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-indigo-400">{s.value}</div>
            <div className="text-[11px] text-zinc-600 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Entries */}
      <div className="space-y-4">
        {entries.map((entry, i) => (
          <div
            key={i}
            className={`card-hover animate-fade-in bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {/* Entry header */}
            <div className={`px-5 py-3 border-b border-zinc-800 flex items-center justify-between ${moodColors[entry.mood]}`}>
              <div className="flex items-center gap-3">
                <span className="text-base">{entry.mood}</span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">{entry.title}</h3>
                  <p className="text-[10px] text-zinc-500">{entry.date}</p>
                </div>
              </div>
              <div className="flex gap-1.5 flex-wrap justify-end">
                {entry.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Entry body */}
            <div className="px-5 py-4">
              <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-line">{entry.body}</p>
              <p className="text-[10px] text-zinc-700 mt-3">{entry.wordCount} words</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reflection prompts */}
      <div className="animate-fade-in">
        <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Prompts I Return To</h2>
        <div className="bg-[#18181b] border border-zinc-800 rounded-xl p-5 space-y-3">
          {prompts.map((prompt, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-indigo-500 font-semibold text-xs flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-sm text-zinc-300 italic">&ldquo;{prompt}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
