export function decimalToFraction(decimal: number): string {
  if (decimal <= 1) {
    throw new Error('Decimal odds must be greater than 1');
  }

  const numerator = decimal - 1;

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const tolerance = 1e-10;
  let bestNumerator = numerator;
  let bestDenominator = 1;
  let bestError = Infinity;

  for (let d = 1; d <= 1000; d++) {
    const n = Math.round(numerator * d);
    const error = Math.abs(numerator - n / d);

    if (error < bestError) {
      bestError = error;
      bestNumerator = n;
      bestDenominator = d;

      if (error < tolerance) break;
    }
  }

  const divisor = gcd(Math.abs(bestNumerator), bestDenominator);
  const simplifiedNumerator = bestNumerator / divisor;
  const simplifiedDenominator = bestDenominator / divisor;

  if (simplifiedDenominator === 1) {
    return `${simplifiedNumerator}/1`;
  }

  return `${simplifiedNumerator}/${simplifiedDenominator}`;
}

