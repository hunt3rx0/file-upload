export type Tag = string

export interface Writeup {
  id: string
  title: string
  slug: string
  date: string
  difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'INSANE'
  os: 'LINUX' | 'WINDOWS' | 'CLOUD' | 'WEB'
  tags: Tag[]
  summary: string
  content?: string
}

export interface CommandNote {
  id: string
  title: string
  slug: string
  category: string
  tags: Tag[]
  summary: string
  commands?: { label: string; cmd: string }[]
}

export interface Technique {
  id: string
  title: string
  slug: string
  mitre?: string
  tags: Tag[]
  summary: string
  content?: string
}

export const writeups: Writeup[] = [
  {
    id: '1',
    title: 'HTB: Forge — SSRF to Root',
    slug: 'htb-forge',
    date: '2026-07-14',
    difficulty: 'MEDIUM',
    os: 'LINUX',
    tags: ['SSRF', 'PYTHON', 'PDB'],
    summary:
      'Server-side request forgery to internal services, Python debugger abuse, and path to root.',
  },
  {
    id: '2',
    title: 'THM: Internal — Wordpress to Jenkins Pivot',
    slug: 'thm-internal',
    date: '2026-06-02',
    difficulty: 'HARD',
    os: 'LINUX',
    tags: ['WORDPRESS', 'JENKINS', 'PIVOT'],
    summary:
      'WordPress foothold, credential reuse into Jenkins, and internal network pivot.',
  },
  {
    id: '3',
    title: 'Cloud: Dangling S3 Subdomain Takeover',
    slug: 's3-subdomain-takeover',
    date: '2026-05-20',
    difficulty: 'EASY',
    os: 'CLOUD',
    tags: ['AWS', 'S3', 'SUBDOMAIN-TAKEOVER'],
    summary:
      'Identifying dangling CNAME to S3 and claiming the bucket for subdomain takeover.',
  },
  {
    id: '4',
    title: 'Cohort HTB Machine',
    slug: 'htb-cohort',
    date: '2026-04-18',
    difficulty: 'EASY',
    os: 'LINUX',
    tags: ['HTB', 'SSRF', 'WEBSOCKET'],
    summary:
      'SSRF leaking internal API info, RCE via WebSocket endpoint, and PackageKit CVE privilege escalation.',
  },
  {
    id: '5',
    title: 'Paperwork HTB Machine',
    slug: 'htb-paperwork',
    date: '2026-03-30',
    difficulty: 'EASY',
    os: 'LINUX',
    tags: ['HTB', 'LPD', 'SCM_RIGHTS'],
    summary:
      'RCE via LPD command injection, path traversal to SSH key injection, and SCM_RIGHTS FD leak to root.',
  },
]

export const commands: CommandNote[] = [
  {
    id: '1',
    title: 'Nmap Cheatsheet',
    slug: 'nmap-cheatsheet',
    category: 'Recon',
    tags: ['NMAP', 'RECON', 'PORT-SCAN'],
    summary: 'Battle-tested nmap one-liners for discovery, version detection and scripts.',
    commands: [
      { label: 'Quick top ports', cmd: 'nmap -sV --top-ports 100 -T4 <target>' },
      { label: 'Full TCP + scripts', cmd: 'nmap -sC -sV -p- -T4 <target> -oA full' },
      { label: 'UDP common', cmd: 'nmap -sU --top-ports 50 <target>' },
      { label: 'OS detection', cmd: 'nmap -O -sV <target>' },
    ],
  },
  {
    id: '2',
    title: 'Linux Enumeration',
    slug: 'linux-enum',
    category: 'PrivEsc',
    tags: ['LINUX', 'ENUM', 'LINPEAS'],
    summary: 'Fast local enumeration commands before running automated tools.',
    commands: [
      { label: 'SUID binaries', cmd: 'find / -perm -4000 -type f 2>/dev/null' },
      { label: 'Capabilities', cmd: 'getcap -r / 2>/dev/null' },
      { label: 'Cron jobs', cmd: 'cat /etc/crontab; ls -la /etc/cron.*' },
      { label: 'Writable paths', cmd: 'find / -writable -type d 2>/dev/null | head' },
    ],
  },
]

export const techniques: Technique[] = [
  {
    id: '1',
    title: 'Linux Privilege Escalation',
    slug: 'linux-privesc',
    mitre: 'T1068',
    tags: ['PRIVESC', 'LINUX', 'SUID'],
    summary: 'Common techniques and checklist for Linux privilege escalation.',
  },
  {
    id: '2',
    title: 'SSRF to Internal Services',
    slug: 'ssrf-internal',
    mitre: 'T1190',
    tags: ['SSRF', 'WEB', 'CLOUD'],
    summary: 'Chaining SSRF into metadata endpoints, internal APIs and pivot points.',
  },
  {
    id: '3',
    title: 'Subdomain Takeover',
    slug: 'subdomain-takeover',
    mitre: 'T1584',
    tags: ['RECON', 'AWS', 'DNS'],
    summary: 'Detecting dangling DNS records and claiming cloud resources.',
  },
]

export const stats = {
  writeups: writeups.length,
  commands: 12, // expanded count for demo feel matching screenshot
  techniques: 6,
}
