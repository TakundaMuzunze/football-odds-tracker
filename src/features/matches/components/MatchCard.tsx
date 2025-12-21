import { decimalToFraction } from '../../../shared/helpers/convertDecimal';
import type { MatchFixture, MatchOdds } from '../types/match';

type OddsType = 'home' | 'draw' | 'away';

interface OddsButtonProps {
  odds: number;
  type: OddsType;
  onClick?: (type: OddsType, odds: number) => void;
}

interface MatchCardProps {
  fixture: MatchFixture;
  odds?: MatchOdds;
  onOddsClick?: (type: keyof MatchOdds, odds: number) => void;
}

function OddsButton({ odds, type, onClick }: OddsButtonProps) {
  const handleClick = () => {
    onClick?.(type, odds);
  };

  return (
    <div className="flex min-w-32 flex-col items-center gap-4">
      <button
        type="button"
        onClick={handleClick}
        className="bg-primary hover:bg-primary/80 w-full cursor-pointer rounded-lg px-8 py-2 text-center font-medium text-black transition-colors"
        aria-label={`odds: ${decimalToFraction(odds)}`}
      >
        {decimalToFraction(odds)}
      </button>
    </div>
  );
}

export function MatchCard({ fixture, odds, onOddsClick }: MatchCardProps) {
  const { teams, goals, fixture: fixtureData } = fixture;
  const matchTime = fixtureData.status.elapsed !== null ? `${fixtureData.status.elapsed}'` : fixtureData.status.short;

  // TODO: change default odds
  const defaultOdds: MatchOdds = { home: 2.0, draw: 3.0, away: 2.5 };
  const matchOdds = odds || defaultOdds;

  return (
    <article data-testid="match-score-card" className="grid w-full grid-cols-2 flex-row items-center justify-evenly gap-10 text-white">
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-start justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-normal">{goals.home ?? 0}</span>
              <span className="text-xl font-normal">{goals.away ?? 0}</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-normal">{teams.home.name}</span>
              <span className="font-normal">{teams.away.name}</span>
            </div>
          </div>
        </div>
        <div className="text-left text-sm text-gray-300">
          <p className="">{matchTime}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center gap-10">
        <OddsButton odds={matchOdds.home} type="home" onClick={onOddsClick} />
        <OddsButton odds={matchOdds.draw} type="draw" onClick={onOddsClick} />
        <OddsButton odds={matchOdds.away} type="away" onClick={onOddsClick} />
      </div>
    </article>
  );
}

