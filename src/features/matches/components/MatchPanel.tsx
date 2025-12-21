import { MatchCard } from './MatchCard';
import type { MatchFixture, MatchOdds } from '../types/match';

interface MatchPanelProps {
  leagueName: string;
  matches: MatchFixture[];
  onOddsClick?: (type: keyof MatchOdds, odds: number) => void;
}

export function MatchPanel({ leagueName, matches, onOddsClick }: MatchPanelProps) {
  return (
    <article className="flex w-full flex-col justify-center rounded-lg bg-[#0D1A2A] text-white">
      <div className="grid w-full grid-cols-2 items-start justify-evenly gap-10 p-4">
        <h3 className="text-left text-lg font-semibold">{leagueName}</h3>
        <div className="grid grid-cols-3 gap-10 text-center">
          <p className="w-full">Home</p>
          <p className="w-full">Draw</p>
          <p className="w-full">Away</p>
        </div>
      </div>

      <div className="flex w-full flex-col">
        {matches.map((match, index) => (
          <div key={match.fixture.id} className="w-full">
            {index !== 0 && <div className="w-full border-t border-gray-400/40" />}

            <div className="p-4">
              <MatchCard fixture={match} onOddsClick={onOddsClick} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

