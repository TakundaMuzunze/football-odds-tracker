interface League {
  name: string;
  countries: string[];
  id: number;
}

export const TOP_LEAGUE_IDS = [39, 140, 78, 61, 135] as const;

export const TOP_LEAGUES: League[] = [
  { name: 'Premier League', countries: ['England', 'UK', 'United Kingdom'], id: 39 },
  { name: 'La Liga', countries: ['Spain'], id: 140 },
  { name: 'Bundesliga', countries: ['Germany'], id: 78 },
  { name: 'Ligue 1', countries: ['France'], id: 61 },
  { name: 'Serie A', countries: ['Italy'], id: 135 },
] as const;

export const DOMESTIC_CUPS: League[] = [
  { name: 'FA Cup', countries: ['England', 'UK', 'United Kingdom'], id: 45 },
  { name: 'League Cup', countries: ['England', 'UK', 'United Kingdom'], id: 48 },
  { name: 'Copa del Rey', countries: ['Spain'], id: 143 },
  { name: 'DFB-Pokal', countries: ['Germany'], id: 81 },
  { name: 'Coupe de France', countries: ['France'], id: 66 },
  { name: 'Coppa Italia', countries: ['Italy'], id: 137 },
] as const;

export const ALL_TOP_COMPETITIONS = [...TOP_LEAGUES, ...DOMESTIC_CUPS] as const;

export function isTopLeague(leagueName: string, country: string): boolean {
  return ALL_TOP_COMPETITIONS.some((league) => league.name === leagueName && league.countries.includes(country));
}

