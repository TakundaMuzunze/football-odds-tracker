import { MatchPanel } from './MatchPanel';
import type { MatchFixture, MatchOdds } from '../types/match';

interface GroupedMatchesListProps {
  groupedMatches: Record<string, MatchFixture[]>;
  onOddsClick?: (type: keyof MatchOdds, odds: number) => void;
}

export function GroupedMatchesList({ groupedMatches, onOddsClick }: GroupedMatchesListProps) {
  if (Object.keys(groupedMatches).length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(groupedMatches).map(([leagueName, leagueMatches]) => (
        <MatchPanel key={leagueName} leagueName={leagueName} matches={leagueMatches} onOddsClick={onOddsClick} />
      ))}
    </div>
  );
}


