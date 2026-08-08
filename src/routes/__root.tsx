/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'NULLSEC // LAB — Cyber Notes' },
      {
        name: 'description',
        content:
          'Personal & team knowledge base. Writeups from CTFs and engagements, copy-pasteable command references, and ATT&CK-tagged techniques.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function NavLink({
  to,
  children,
  icon,
  exact = false,
}: {
  to: string
  children: React.ReactNode
  icon?: string
  exact?: boolean
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isActive = exact
    ? pathname === to
    : to === '/'
      ? pathname === '/'
      : pathname === to || pathname.startsWith(to + '/')

  return (
    <Link
      to={to}
      className={`group flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-all relative ${
        isActive
          ? 'bg-cyan-500/10 text-cyan-300'
          : 'text-[var(--color-text-muted)] hover:text-cyan-300 hover:bg-cyan-500/5'
      }`}
    >
      {isActive && (
        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
      )}
      {icon && (
        <i
          className={`bx ${icon} text-lg ${
            isActive ? 'text-cyan-400' : 'text-[var(--color-text-muted)] group-hover:text-cyan-400'
          }`}
        />
      )}
      <span className="tracking-wide">{children}</span>
    </Link>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside
            className={`shrink-0 flex flex-col border-r border-[var(--color-border)] bg-[#05080e] transition-all duration-200 ${
              collapsed ? 'w-[64px]' : 'w-[220px]'
            }`}
          >
            {/* Logo */}
            <div className="h-14 flex items-center gap-2 px-4 border-b border-[var(--color-border)]">
              <div className="w-7 h-7 rounded-md bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <i className="bx bx-terminal text-lg glow-cyan" />
              </div>
              {!collapsed && (
                <span className="font-semibold tracking-wide text-sm truncate">
                  <span className="text-cyan-400">NULLSEC</span>
                  <span className="text-[var(--color-text-muted)]">//</span>
                  <span className="text-[var(--color-text)]">LAB</span>
                </span>
              )}
            </div>

            {/* Nav */}
            <nav className="flex-1 py-3 overflow-y-auto">
              {!collapsed && (
                <p className="px-4 mb-2 text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] font-mono">
                  // INDEX
                </p>
              )}
              <NavLink to="/" icon="bx-terminal" exact>
                {collapsed ? '' : 'OVERVIEW'}
              </NavLink>
              <NavLink to="/writeups" icon="bx-file">
                {collapsed ? '' : 'WRITEUPS'}
              </NavLink>
              <NavLink to="/commands" icon="bx-code-alt">
                {collapsed ? '' : 'COMMANDS'}
              </NavLink>
              <NavLink to="/techniques" icon="bx-target-lock">
                {collapsed ? '' : 'TECHNIQUES'}
              </NavLink>
            </nav>

            {/* Footer of sidebar */}
            <div className="border-t border-[var(--color-border)] p-3 space-y-2">
              <div className="flex items-center gap-2 px-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#00ff9d] shrink-0" />
                {!collapsed && (
                  <span className="text-[10px] tracking-wider text-[var(--color-text-muted)] font-mono">
                    SESSION ACTIVE
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setCollapsed((c) => !c)}
                className="w-full flex items-center gap-2 px-1 py-1.5 text-[var(--color-text-muted)] hover:text-cyan-300 transition-colors text-xs"
                title={collapsed ? 'Expand' : 'Collapse'}
              >
                <i className={`bx ${collapsed ? 'bx-right-arrow-alt' : 'bx-left-arrow-alt'} text-base`} />
                {!collapsed && <span className="font-mono tracking-wide">collapse</span>}
              </button>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 flex flex-col min-w-0">
            <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
              {children}
            </main>
            <footer className="border-t border-[var(--color-border)] py-3 px-6 text-center text-[10px] tracking-wider text-[var(--color-text-muted)] font-mono">
              // NOTES ARE STATIC, VERSIONED IN GIT — EDIT SRC/DATA/*.TS AND PUSH
            </footer>
          </div>
        </div>

        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
