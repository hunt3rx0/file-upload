import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { writeups } from '~/data/notes'

export const Route = createFileRoute('/writeups')({
  component: WriteupsLayout,
})

function WriteupsLayout() {
  return <Outlet />
}
