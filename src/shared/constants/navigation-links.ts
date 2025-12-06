export interface NavigationLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: 'Matches', href: '/matches' },
  { label: 'Live Scores', href: '/live-scores' },
  { label: 'Statistics', href: '/statistics' },
  { label: 'Analytics', href: '/analytics' },
];

