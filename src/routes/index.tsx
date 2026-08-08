import { createFileRoute, Link } from '@tanstack/react-router'
import { writeups, stats } from '~/data/notes'

export const Route = createFileRoute('/')({
  component: OverviewPage,
})

function OverviewPage() {
  const recent = [...writeups].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  ).slice(0, 5)

  return (
    <div className="space-y-8">
      {/* Briefing card */}
      <section className="rounded-xl border border-cyan-500/25 bg-[var(--color-bg-card)]/80 border-glow-cyan p-5 sm:p-6">
        <p className="text-xs tracking-widest text-cyan-500/80 mb-2 font-mono">
          // BRIEFING
        </p>
        <div className="font-mono text-lg sm:text-2xl mb-3 flex flex-wrap items-baseline gap-2">
          <span className="text-[var(--color-text-muted)]">$</span>
          <span className="text-green-400 glow-green">tail -f lab/notes</span>
          <span className="inline-block w-2.5 h-5 bg-cyan-400 animate-pulse align-middle" />
        </div>
        <p className="text-[var(--color-text-muted)] text-sm sm:text-base max-w-2xl leading-relaxed">
          Personal & team knowledge base. Writeups from CTFs and engagements,
          copy-pasteable command references, and ATT&CK-tagged techniques — all
          versioned in git and deployed to your domain.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
          <StatBox label="WRITEUPS" value={String(stats.writeups).padStart(3, '0')} />
          <StatBox label="COMMANDS" value={String(stats.commands).padStart(3, '0')} />
          <StatBox label="TECHNIQUES" value={String(stats.techniques).padStart(3, '0')} />
        </div>
      </section>

      {/* Three category cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <CategoryCard
          to="/writeups"
          icon="bx-file"
          title="WRITEUPS"
          desc="Post-engagement reports and CTF walkthroughs, tagged by OS and difficulty."
        />
        <CategoryCard
          to="/commands"
          icon="bx-code-alt"
          title="COMMANDS"
          desc="Battle-tested one-liners for recon, AD, web, priv-esc and pivoting."
        />
        <CategoryCard
          to="/techniques"
          icon="bx-target-lock"
          title="TECHNIQUES"
          desc="ATT&CK-mapped TTPs with detection notes for the blue side of the team."
        />
      </div>

      {/* Recent writeups */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs tracking-widest text-cyan-500/80 font-mono">
            // RECENT WRITEUPS
          </h2>
          <Link
            to="/writeups"
            className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            VIEW ALL <i className="bx bx-right-arrow-alt" />
          </Link>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 overflow-hidden divide-y divide-[var(--color-border)]">
          {recent.map((w) => (
            <Link
              key={w.id}
              to="/writeups/$slug"
              params={{ slug: w.slug }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-3.5 hover:bg-cyan-500/5 transition-colors group"
            >
              <span className="text-xs font-mono text-[var(--color-text-muted)] w-24 shrink-0">
                {w.date}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm sm:text-base group-hover:text-cyan-300 transition-colors truncate">
                  {w.title}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  <Tag>{w.os}</Tag>
                  <Tag tone="difficulty">{w.difficulty}</Tag>
                  {w.tags.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <i className="bx bx-right-arrow-alt text-xl text-[var(--color-text-muted)] group-hover:text-cyan-400 transition-colors hidden sm:block" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2.5 text-center">
      <div className="text-[10px] tracking-wider text-[var(--color-text-muted)] mb-0.5">
        {label}
      </div>
      <div className="text-xl font-mono font-semibold text-cyan-300 glow-cyan">
        {value}
      </div>
    </div>
  )
}

function CategoryCard({
  to,
  icon,
  title,
  desc,
}: {
  to: string
  icon: string
  title: string
  desc: string
}) {
  return (
    <Link
      to={to}
      className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/70 p-5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all border-glow-cyan"
    >
      <div className="flex items-center gap-2 mb-2">
        <i className={`bx ${icon} text-cyan-400 text-xl`} />
        <h3 className="font-semibold tracking-wide text-sm text-cyan-300">
          {title}
        </h3>
      </div>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
        {desc}
      </p>
      <span className="text-xs text-cyan-400/80 group-hover:text-cyan-300 flex items-center gap-1">
        OPEN <i className="bx bx-right-arrow-alt" />
      </span>
    </Link>
  )
}

function Tag({
  children,
  tone = 'default',
}: {
  children: React.ReactNode
  tone?: 'default' | 'difficulty'
}) {
  const base =
    'inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono tracking-wide border'
  if (tone === 'difficulty') {
    return (
      <span
        className={`${base} border-amber-500/40 text-amber-300/90 bg-amber-500/10`}
      >
        {children}
      </span>
    )
  }
  return (
    <span
      className={`${base} border-cyan-500/30 text-cyan-300/90 bg-cyan-500/10`}
    >
      {children}
    </span>
  )
}
