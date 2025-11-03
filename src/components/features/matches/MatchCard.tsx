import { decimalToFraction } from '../../../helpers/convertDecimal';
import type { Match, MatchOdds } from '../../../types/match';

type OddsType = 'home' | 'draw' | 'away';

interface OddsButtonProps {
  label: string;
  odds: number;
  type: OddsType;
  onClick?: (type: OddsType, odds: number) => void;
}

interface MatchCardProps extends Match {
  onOddsClick?: (type: keyof MatchOdds, odds: number) => void;
}

function OddsButton({ label, odds, type, onClick }: OddsButtonProps) {
  const handleClick = () => {
    onClick?.(type, odds);
  };

  return (
    <div className="flex min-w-32 flex-col items-center gap-4">
      <p className="text-sm tracking-wide text-gray-400">{label}</p>
      <button
        type="button"
        onClick={handleClick}
        className="bg-primary hover:bg-primary/80 w-full cursor-pointer rounded-lg px-8 py-2 text-center font-medium text-black transition-colors"
        aria-label={`${label} odds: ${decimalToFraction(odds)}`}
      >
        {decimalToFraction(odds)}
      </button>
    </div>
  );
}

export function MatchCard({ homeTeam, awayTeam, homeScore, awayScore, matchTime, league, odds, onOddsClick }: MatchCardProps) {
  return (
    <article data-testid="match-score-card" className="flex w-full flex-row justify-evenly gap-10 rounded-lg bg-[#0D1A2A] p-6 text-white">
      <div className="flex flex-col gap-3">
        {league && <p className="text-sm tracking-wide text-gray-400">{league}</p>}
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold">{homeScore}</span>
              <span className="text-xl font-bold">{awayScore}</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-semibold">{homeTeam}</span>
              <span className="font-semibold">{awayTeam}</span>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-300">{matchTime}</div>
      </div>

      <OddsButton label="Home" odds={odds.home} type="home" onClick={onOddsClick} />
      <OddsButton label="Draw" odds={odds.draw} type="draw" onClick={onOddsClick} />
      <OddsButton label="Away" odds={odds.away} type="away" onClick={onOddsClick} />
    </article>
  );
}

