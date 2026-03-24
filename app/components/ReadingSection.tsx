"use client";

import { useState } from "react";
import { ExternalLink, Star } from "./Icons";

const categories = ["All", "Books", "Articles", "Tools", "Podcasts"];

const resources = [
  // Books
  { type: "Books", title: "Thinking in Systems", author: "Donella Meadows", status: "reading", rating: 5, description: "The definitive introduction to systems thinking. Changed how I see feedback loops everywhere.", tags: ["Systems", "Mental Models"], year: 2008, url: "#" },
  { type: "Books", title: "Zero to One", author: "Peter Thiel", status: "completed", rating: 5, description: "On building companies that create new things rather than competing in existing markets.", tags: ["Business", "Startups"], year: 2014, url: "#" },
  { type: "Books", title: "The Psychology of Money", author: "Morgan Housel", status: "completed", rating: 5, description: "Why how you behave matters more than what you know when it comes to money.", tags: ["Finance", "Psychology"], year: 2020, url: "#" },
  { type: "Books", title: "Essentialism", author: "Greg McKeown", status: "completed", rating: 4, description: "The disciplined pursuit of less — doing fewer things, but doing them better.", tags: ["Productivity", "Focus"], year: 2014, url: "#" },
  { type: "Books", title: "Show Your Work", author: "Austin Kleon", status: "completed", rating: 4, description: "How to share your creativity and get discovered — a manifesto for the internet age.", tags: ["Creativity", "Writing"], year: 2014, url: "#" },
  { type: "Books", title: "Antifragile", author: "Nassim Taleb", status: "queue", rating: 0, description: "Things that gain from disorder. On my list after Thinking in Systems.", tags: ["Philosophy", "Systems"], year: 2012, url: "#" },

  // Articles
  { type: "Articles", title: "The Age of the Essay", author: "Paul Graham", status: "completed", rating: 5, description: "Graham on what essays are really for and how to find what you actually think.", tags: ["Writing", "Thinking"], year: 2004, url: "#" },
  { type: "Articles", title: "Do Things That Don't Scale", author: "Paul Graham", status: "completed", rating: 5, description: "Why founders should do unscalable things early — the counterintuitive key to growth.", tags: ["Startups", "Growth"], year: 2013, url: "#" },
  { type: "Articles", title: "Solitude and Leadership", author: "William Deresiewicz", status: "completed", rating: 5, description: "How real thinking requires being alone with your own thoughts — a case against distraction.", tags: ["Leadership", "Deep Work"], year: 2010, url: "#" },
  { type: "Articles", title: "1000 True Fans", author: "Kevin Kelly", status: "completed", rating: 4, description: "The thesis that spawned a generation of independent creators.", tags: ["Creators", "Business"], year: 2008, url: "#" },

  // Tools
  { type: "Tools", title: "Obsidian", author: "Obsidian.md", status: "using", rating: 5, description: "My second brain. Local-first, Markdown-based note-taking with a graph view.", tags: ["PKM", "Writing"], year: 2020, url: "#" },
  { type: "Tools", title: "Linear", author: "Linear.app", status: "using", rating: 5, description: "Best issue tracker I've used. Fast, opinionated, and built for speed.", tags: ["Project Mgmt", "Dev"], year: 2019, url: "#" },
  { type: "Tools", title: "Raycast", author: "Raycast.com", status: "using", rating: 5, description: "Replaced Spotlight. AI built in, extensions everywhere, blazing fast.", tags: ["Productivity", "Mac"], year: 2020, url: "#" },
  { type: "Tools", title: "Loom", author: "Loom.com", status: "using", rating: 4, description: "Async video messaging. Replaced 30% of my meetings.", tags: ["Communication", "Async"], year: 2015, url: "#" },

  // Podcasts
  { type: "Podcasts", title: "Lex Fridman Podcast", author: "Lex Fridman", status: "following", rating: 4, description: "Long-form conversations with scientists, engineers, artists, and entrepreneurs.", tags: ["Science", "Tech"], year: 2018, url: "#" },
  { type: "Podcasts", title: "How I Built This", author: "Guy Raz / NPR", status: "following", rating: 5, description: "Founder stories — the honest, messy version. Essential listening for builders.", tags: ["Startups", "Stories"], year: 2016, url: "#" },
  { type: "Podcasts", title: "Huberman Lab", author: "Andrew Huberman", status: "occasional", rating: 4, description: "Science-backed protocols for sleep, focus, fitness, and mental health.", tags: ["Health", "Science"], year: 2021, url: "#" },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  reading: { label: "Reading", color: "text-indigo-400" },
  completed: { label: "Completed", color: "text-emerald-400" },
  queue: { label: "In Queue", color: "text-amber-400" },
  using: { label: "Using", color: "text-emerald-400" },
  following: { label: "Following", color: "text-indigo-400" },
  occasional: { label: "Occasional", color: "text-zinc-500" },
};

function StarRating({ rating }: { rating: number }) {
  if (rating === 0) return <span className="text-[10px] text-zinc-600">Not yet rated</span>;
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={10} className={i < rating ? "text-amber-400" : "text-zinc-700"} />
      ))}
    </div>
  );
}

export default function ReadingSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? resources : resources.filter((r) => r.type === activeFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xl">📚</span>
          <h1 className="text-2xl font-bold text-zinc-100">Reading & Resources</h1>
        </div>
        <p className="text-zinc-500 text-sm ml-8">Books, articles, tools, and podcasts that shaped my thinking.</p>
      </div>

      {/* Filter tabs */}
      <div className="animate-fade-in stagger-1 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
              activeFilter === cat
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                : "bg-zinc-900 text-zinc-500 border border-zinc-800 hover:text-zinc-300"
            }`}
          >
            {cat}
            <span className="ml-1.5 text-zinc-600 text-[10px]">
              {cat === "All" ? resources.length : resources.filter((r) => r.type === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Resources grid */}
      <div className="animate-fade-in stagger-2 space-y-3">
        {filtered.map((item, i) => {
          const s = statusConfig[item.status];
          return (
            <div key={i} className="card-hover bg-[#18181b] border border-zinc-800 rounded-xl p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-semibold text-zinc-100 truncate">{item.title}</h3>
                    <a href={item.url} className="text-zinc-600 hover:text-indigo-400 transition-colors flex-shrink-0">
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <p className="text-xs text-zinc-500">{item.author} · {item.year}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className={`text-[10px] font-semibold ${s.color}`}>{s.label}</span>
                  <StarRating rating={item.rating} />
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-2">{item.description}</p>
              <div className="flex gap-1.5 flex-wrap">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
