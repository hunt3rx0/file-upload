import { createFileRoute, Link } from '@tanstack/react-router'
import { commands } from '~/data/notes'
import * as React from 'react'

export const Route = createFileRoute('/commands/$slug')({
  component: CommandDetail,
})

function CommandDetail() {
  const { slug } = Route.useParams()
  const c = commands.find((x) => x.slug === slug)

  if (!c) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--color-text-muted)]">Command note not found.</p>
        <Link to="/commands" className="text-cyan-400 mt-4 inline-block">
          ← Back
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl">
      <Link
        to="/commands"
        className="text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 mb-6"
      >
        <i className="bx bx-left-arrow-alt" /> Back to commands
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{c.title}</h1>
        <p className="text-[var(--color-text-muted)]">{c.summary}</p>
      </header>

      <div className="space-y-4">
        {(c.commands || []).map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden"
          >
            <div className="px-4 py-2 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)] font-mono">
              {item.label}
            </div>
            <div className="p-4 font-mono text-sm flex items-start gap-2">
              <span className="text-green-400 select-none">$</span>
              <code className="text-green-300 glow-green flex-1 break-all">
                {item.cmd}
              </code>
              <CopyButton text={item.cmd} />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className="text-[var(--color-text-muted)] hover:text-cyan-400 shrink-0"
      title="Copy"
    >
      <i className={`bx ${copied ? 'bx-check text-green-400' : 'bx-copy'}`} />
    </button>
  )
}
