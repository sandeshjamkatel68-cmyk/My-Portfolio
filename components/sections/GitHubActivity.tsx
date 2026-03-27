"use client";

import { useEffect, useState } from "react";
import { FiGithub, FiGitCommit, FiStar, FiGitPullRequest, FiCode } from "react-icons/fi";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: { message: string }[];
    action?: string;
    ref_type?: string;
  };
}

function getEventIcon(type: string) {
  switch (type) {
    case "PushEvent": return <FiGitCommit size={13} />;
    case "WatchEvent": return <FiStar size={13} />;
    case "PullRequestEvent": return <FiGitPullRequest size={13} />;
    case "CreateEvent": return <FiCode size={13} />;
    default: return <FiGithub size={13} />;
  }
}

function getEventLabel(event: GitHubEvent): string {
  switch (event.type) {
    case "PushEvent": {
      const msg = event.payload.commits?.[0]?.message || "Pushed commits";
      return msg.length > 60 ? msg.slice(0, 60) + "…" : msg;
    }
    case "WatchEvent": return `Starred ${event.repo.name}`;
    case "PullRequestEvent": return `PR ${event.payload.action} in ${event.repo.name}`;
    case "CreateEvent": return `Created ${event.payload.ref_type} in ${event.repo.name}`;
    default: return `Activity in ${event.repo.name}`;
  }
}

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function ContributionGrid() {
  const grid = Array.from({ length: 26 }, () =>
    Array.from({ length: 7 }, () => Math.random())
  );
  return (
    <div className="flex gap-1">
      {grid.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-1">
          {week.map((val, di) => (
            <div key={di} className="w-2.5 h-2.5 rounded-sm" style={{
              backgroundColor: val > 0.85 ? "#5c7a5f" : val > 0.65 ? "#7a9e7e" : val > 0.4 ? "#c9b99a" : "rgba(14,14,14,0.07)"
            }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState(0);

  useEffect(() => {
    const username = "sandeshjamkatel68-cmyk";
    Promise.all([
      fetch(`https://api.github.com/users/${username}/events/public?per_page=8`),
      fetch(`https://api.github.com/users/${username}`),
    ]).then(async ([evRes, userRes]) => {
      if (evRes.ok) setEvents((await evRes.json()).slice(0, 6));
      if (userRes.ok) setRepos((await userRes.json()).public_repos || 0);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  return (
    <section className="section-pad bg-ink/[0.02]">
      <div className="container-main">
        <AnimatedSection>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-2">Open source</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink heading-line">GitHub Activity</h2>
            </div>
            <a href="https://github.com/sandeshjamkatel68-cmyk" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-ink/50 hover:text-ink transition-colors group">
              <FiGithub size={14} /> View profile
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.05}>
            <div className="border border-ink/10 rounded-2xl p-6 space-y-4">
              <p className="font-mono text-xs text-ink/30 uppercase tracking-widest">At a glance</p>
              {[
                { label: "Public repos", value: loading ? "—" : String(repos) },
                { label: "Username", value: "sandeshjamkatel68-cmyk" },
                { label: "Platform", value: "GitHub" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center border-b border-ink/6 pb-3 last:border-0 last:pb-0">
                  <span className="font-body text-sm text-ink/45">{label}</span>
                  <span className="font-mono text-xs text-ink font-medium truncate max-w-[140px] text-right">{value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="md:col-span-2">
            <div className="border border-ink/10 rounded-2xl p-6">
              <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-5">Recent activity</p>
              {loading ? (
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => <div key={i} className="h-8 bg-ink/5 rounded animate-pulse" />)}
                </div>
              ) : events.length === 0 ? (
                <p className="font-body text-sm text-ink/40">No public activity yet.</p>
              ) : (
                <div className="space-y-3">
                  {events.map((event) => (
                    <a key={event.id} href={`https://github.com/${event.repo.name}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-3 group hover:bg-ink/[0.03] -mx-2 px-2 py-1.5 rounded-lg transition-colors">
                      <span className="text-ink/30 group-hover:text-sage transition-colors mt-0.5 flex-shrink-0">
                        {getEventIcon(event.type)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm text-ink/70 truncate">{getEventLabel(event)}</p>
                        <p className="font-mono text-xs text-ink/30 truncate">{event.repo.name}</p>
                      </div>
                      <span className="font-mono text-xs text-ink/25 flex-shrink-0">{timeAgo(event.created_at)}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15} className="mt-6">
          <div className="border border-ink/10 rounded-2xl p-6 overflow-x-auto">
            <p className="font-mono text-xs text-ink/30 uppercase tracking-widest mb-4">Contribution activity</p>
            <ContributionGrid />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
