import { createFileRoute, Link } from '@tanstack/react-router'
import { writeups } from '~/data/notes'
import * as React from 'react'

export const Route = createFileRoute('/writeups/')({
  component: WriteupsIndex,
})

function WriteupsIndex() {
  const [q, setQ] = React.useState('')
  const filtered = writeups.filter(
    (w) =>
      w.title.toLowerCase().includes(q.toLowerCase()) ||
      w.tags.some((t) => t.toLowerCase().includes(q.toLowerCase())) ||
      w.os.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs tracking-widest text-cyan-500/80 font-mono mb-1">
          // WRITEUPS
        </p>
        <h1 className="text-2xl font-semibold">Post-engagement & CTF notes</h1>
        <p className="text-[var(--color-text-muted)] mt-1 text-sm">
          Tagged by OS and difficulty. Click any card for the full walkthrough.
        </p>
      </div>

      <div className="relative max-w-md">
        <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search writeups, tags, OS..."
          className="w-full pl-9 pr-3 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((w) => (
          <Link
            key={w.id}
            to="/writeups/$slug"
            params={{ slug: w.slug }}
            className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/70 p-5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-medium group-hover:text-cyan-300 transition-colors">
                {w.title}
              </h3>
              <span className="text-[10px] font-mono text-[var(--color-text-muted)] shrink-0">
                {w.date}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mb-3 line-clamp-2">
              {w.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-500/10">
                {w.os}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-amber-500/40 text-amber-300 bg-amber-500/10">
                {w.difficulty}
              </span>
              {w.tags.map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-[var(--color-border)] text-[var(--color-text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-[var(--color-text-muted)] text-sm">No matches.</p>
      )}
    </div>
  )
}
