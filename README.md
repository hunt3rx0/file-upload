# NULLSEC // LAB

Cybersecurity knowledge base rebuilt with **TypeScript + React 19**, **TanStack Start (Vite)**, and **Tailwind CSS v4**.

Matches the provided design (cyan for navigation/tags/stats, green for executable commands).

## Quick start

```bash
cd nullsec-lab
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `src/routes/` — file-based routes (Overview, Writeups, Commands, Techniques)
- `src/data/notes.ts` — content converted from the original static cyber-notes zip
- `src/styles/app.css` — Tailwind v4 + custom cyber theme tokens

## Original content

Source notes were extracted from `cyber-notes.zip` (writeups for Cohort/Paperwork HTB, nmap cheatsheet, linux-privesc, etc.) and mapped into the new UI. Counts on the overview match the sample screenshot feel.

## Colors

- **Cyan** (`#00e5ff`) — navigation, tags, stats, borders that guide the eye
- **Green** (`#00ff9d`) — success / execution (typed command text)

## Deploy

Build with `npm run build`. Output is suitable for Node hosting or static export depending on TanStack Start config.
