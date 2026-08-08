import { createFileRoute, Link } from '@tanstack/react-router'
import { commands } from '~/data/notes'
import * as React from 'react'

export const Route = createFileRoute('/commands/')({
  component: CommandsIndex,
})

function CommandsIndex() {
  const [q, setQ] = React.useState('')
  const filtered = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(q.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(q.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs tracking-widest text-cyan-500/80 font-mono mb-1">
          // COMMANDS
        </p>
        <h1 className="text-2xl font-semibold">Battle-tested one-liners</h1>
        <p className="text-[var(--color-text-muted)] mt-1 text-sm">
          Recon, AD, web, priv-esc and pivoting. Copy-paste ready.
        </p>
      </div>

      <div className="relative max-w-md">
        <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search commands..."
          className="w-full pl-9 pr-3 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-sm focus:outline-none focus:border-cyan-500/50"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((c) => (
          <Link
            key={c.id}
            to="/commands/$slug"
            params={{ slug: c.slug }}
            className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/70 p-5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
          >
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-code-alt text-cyan-400" />
              <h3 className="font-medium group-hover:text-cyan-300">{c.title}</h3>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">{c.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-500/10">
                {c.category}
              </span>
              {c.tags.map((t) => (
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
    </div>
  )
}
