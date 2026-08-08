import { createFileRoute, Link } from '@tanstack/react-router'
import { techniques } from '~/data/notes'

export const Route = createFileRoute('/techniques/')({
  component: TechniquesIndex,
})

function TechniquesIndex() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs tracking-widest text-cyan-500/80 font-mono mb-1">
          // TECHNIQUES
        </p>
        <h1 className="text-2xl font-semibold">ATT&CK-mapped TTPs</h1>
        <p className="text-[var(--color-text-muted)] mt-1 text-sm">
          Techniques with detection notes for the blue side of the team.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {techniques.map((t) => (
          <Link
            key={t.id}
            to="/techniques/$slug"
            params={{ slug: t.slug }}
            className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/70 p-5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
          >
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-target-lock text-cyan-400" />
              <h3 className="font-medium group-hover:text-cyan-300">{t.title}</h3>
            </div>
            {t.mitre && (
              <span className="inline-block mb-2 px-1.5 py-0.5 rounded text-[10px] font-mono border border-purple-500/40 text-purple-300 bg-purple-500/10">
                {t.mitre}
              </span>
            )}
            <p className="text-sm text-[var(--color-text-muted)] mb-3">{t.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-cyan-500/30 text-cyan-300 bg-cyan-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
