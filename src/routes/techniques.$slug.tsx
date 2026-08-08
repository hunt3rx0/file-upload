import { createFileRoute, Link } from '@tanstack/react-router'
import { techniques } from '~/data/notes'

export const Route = createFileRoute('/techniques/$slug')({
  component: TechniqueDetail,
})

function TechniqueDetail() {
  const { slug } = Route.useParams()
  const t = techniques.find((x) => x.slug === slug)

  if (!t) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--color-text-muted)]">Technique not found.</p>
        <Link to="/techniques" className="text-cyan-400 mt-4 inline-block">
          ← Back
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl">
      <Link
        to="/techniques"
        className="text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mb-6"
      >
        <i className="bx bx-left-arrow-alt" /> Back to techniques
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{t.title}</h1>
        {t.mitre && (
          <span className="inline-block mb-3 px-2 py-0.5 rounded text-xs font-mono border border-purple-500/40 text-purple-300 bg-purple-500/10">
            MITRE {t.mitre}
          </span>
        )}
        <p className="text-[var(--color-text-muted)]">{t.summary}</p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-cyan-300 text-lg mb-3">Overview</h2>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          Content migrated from the original static technique notes. Expand with
          checklists, detection rules, and mitigation guidance as needed.
        </p>
      </div>
    </article>
  )
}
