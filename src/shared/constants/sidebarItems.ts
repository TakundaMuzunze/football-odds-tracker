import type { IconName } from '../ui/icons/iconData';

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon?: IconName;
  isActive?: boolean;
}

export interface SidebarGroup {
  title?: string;
  items: SidebarItem[];
}

export const SIDEBAR_GROUPS: SidebarGroup[] = [
  {
    title: 'Overview',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/',
        icon: 'dashboard',
      },
      {
        id: 'live-matches',
        label: 'Live Matches',
        href: '/live-matches',
        icon: 'activity',
      },
      {
        id: 'markets',
        label: 'Markets',
        href: '/market',
        icon: 'market',
      },
    ],
  },
  {
    title: 'Analytics',
    items: [
      {
        id: 'insights',
        label: 'Insights',
        href: 'insights',
        icon: 'insights',
      },
      {
        id: 'alerts',
        label: 'Alerts',
        href: '/alerts',
        icon: 'notification',
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        href: '/portfolio',
        icon: 'portfolio',
      },
    ],
  },
  {
    title: 'Leagues',
    items: [
      {
        id: 'premier-league',
        label: 'Premier League',
        href: '/leagues/premier-league',
      },
      {
        id: 'champions-league',
        label: 'Champions League',
        href: '/leagues/champions-league',
      },
      {
        id: 'la-liga',
        label: 'La Liga',
        href: '/leagues/la-liga',
      },
      {
        id: 'serie-a',
        label: 'Serie A',
        href: '/leagues/serie-a',
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        id: 'preferences',
        label: 'Preferences',
        href: '/preferences',
        icon: 'cog',
      },
      {
        id: 'account',
        label: 'Account',
        href: '/account',
        icon: 'account',
      },
    ],
  },
];

