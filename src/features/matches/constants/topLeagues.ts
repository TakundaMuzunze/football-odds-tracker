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

export function isTopLeague(leagueName: string, country: string): boolean {
  return TOP_LEAGUES.some((league) => league.name === leagueName && league.countries.includes(country));
}

