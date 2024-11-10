import React from 'react';
import { getCurrencySymbol, DIRECTIONS } from '@/lib/constants';
function Amount({
  className,
  value,
  direction = 'white',
  currencyCode,
  prefixIcon = null,
}) {
  let valueInString = `${(Math.round(value * 100) / 100).toFixed(2)}`;
  let positive = true;
  if (value < 0) {
    positive = !positive;
    valueInString = valueInString.substring(1);
  }
  // Map directions to specific Tailwind color classes
  const directionClassMap = {
    [DIRECTIONS.credit]: 'text-credit',
    [DIRECTIONS.debit]: 'text-debit',
    [DIRECTIONS.transfer]: 'text-transfer',
  };
  // Default to white if direction is not in the map
  const textColorClass = directionClassMap[direction] || 'text-white';
  return (
    <p className={`${textColorClass} flex gap-2 m-auto ${className}`}>
      {prefixIcon ? prefixIcon : <></>}
      {direction === DIRECTIONS.debit || !positive ? '-' : ''}
      {getCurrencySymbol(currencyCode)}
      {valueInString}
    </p>
  );
}
export default Amount;
