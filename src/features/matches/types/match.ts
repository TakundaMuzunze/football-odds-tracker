export interface MatchFixture {
  fixture: {
    id: number;
    date: string;
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  teams: {
    home: {
      id: number;
      name: string;
    };
    away: {
      id: number;
      name: string;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  league: {
    id: number;
    name: string;
    country: string;
  };
}

export interface ApiResponse {
  response: MatchFixture[];
}

export interface MatchOdds {
  home: number;
  draw: number;
  away: number;
}

