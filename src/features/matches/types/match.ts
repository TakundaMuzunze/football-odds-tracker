export interface MatchOdds {
  home: number;
  draw: number;
  away: number;
}

export interface Match {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchTime: string;
  league?: string;
  odds: MatchOdds;
}

