import { createFileRoute, Link } from '@tanstack/react-router'
import { writeups } from '~/data/notes'

export const Route = createFileRoute('/writeups/$slug')({
  component: WriteupDetail,
})

function WriteupDetail() {
  const { slug } = Route.useParams()
  const w = writeups.find((x) => x.slug === slug)

  if (!w) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--color-text-muted)]">Writeup not found.</p>
        <Link to="/writeups" className="text-cyan-400 mt-4 inline-block">
          ← Back to writeups
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl">
      <Link
        to="/writeups"
        className="text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mb-6"
      >
        <i className="bx bx-left-arrow-alt" /> Back to writeups
      </Link>

      <header className="mb-8">
        <p className="text-xs font-mono text-[var(--color-text-muted)] mb-2">
          {w.date}
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">{w.title}</h1>
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="px-2 py-0.5 rounded text-xs font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-500/10">
            {w.os}
          </span>
          <span className="px-2 py-0.5 rounded text-xs font-mono border border-amber-500/40 text-amber-300 bg-amber-500/10">
            {w.difficulty}
          </span>
          {w.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs font-mono border border-[var(--color-border)] text-[var(--color-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-[var(--color-text-muted)]">{w.summary}</p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 prose prose-invert max-w-none">
        <h2 className="text-cyan-300 text-lg mb-3">Notes</h2>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          This is a converted entry from the original static Cyber Notes collection.
          Full detailed steps (enumeration, exploit chain, privilege escalation) live
          in the source HTML writeups and can be expanded here as markdown content.
        </p>
        <div className="mt-6 font-mono text-sm bg-black/40 rounded-lg p-4 border border-[var(--color-border)]">
          <div className="text-green-400 mb-1">$ cat writeups/{w.slug}.md</div>
          <div className="text-[var(--color-text-muted)]">
            # {w.title}
            <br />
            <br />
            ## Summary
            <br />
            {w.summary}
            <br />
            <br />
            ## Tags
            <br />
            {w.tags.join(', ')}
          </div>
        </div>
      </div>
    </article>
  )
}
