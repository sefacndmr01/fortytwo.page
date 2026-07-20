export interface AppInfo {
  slug: string
  name: string
  platforms: string
  description: string
  to: string
  icon?: string
  status?: string
  year?: string
}

export const APPS: AppInfo[] = [
  {
    slug: 'avo',
    name: 'Avo',
    platforms: 'iOS · Android',
    description:
      'An AI nutrition assistant. Describe a meal in plain language; Avo returns macros, micronutrients, and allergen-aware analysis.',
    to: '/avo',
    icon: '/avo/icon.png',
    status: 'Coming 2026',
  },
  {
    slug: 'nyxclock',
    name: 'Nyx Clock',
    platforms: 'Android',
    description:
      'A bedside clock for nightstands and desks. Dozens of customizable faces, AMOLED-friendly, one-time purchase.',
    to: '/nyxclock',
    year: '2025',
  },
  {
    slug: 'retrace',
    name: 'Retrace',
    platforms: 'Android',
    description:
      'A spatial memory puzzle. Watch a path light up across the grid, then retrace it from memory before the signal fades.',
    to: '/retrace',
    icon: '/retrace/icon.png',
    year: '2026',
  },
]
