import React from 'react';
import { getCurrencySymbol, DIRECTIONS } from '@/lib/constants';
function Amount({value, direction='white', currencyCode, prefixIcon=null}) {
  let valueInString = `${(Math.round(value * 100) / 100).toFixed(2)}`;
  let positive = true;
  if(value < 0){
    positive = !positive;
    valueInString = valueInString.substring(1);
  }
  return (
    <p className={`text-${direction.toLowerCase()} flex gap-2 m-auto`}>
      {prefixIcon? prefixIcon :<></>}
      {direction === DIRECTIONS.debit || !positive? '-': ''}
      {getCurrencySymbol(currencyCode)}
      {valueInString}
    </p>
  );
}
export default Amount;
