import React from 'react'
import { getCurrencySymbol, DIRECTIONS } from '@/lib/constants';

function Amount({value, direction='neutral', currencyCode, prefixIcon=null}) {
    let valueInString = `${(Math.round(value * 100) / 100).toFixed(2)}`;
    let positive = true;
    if(value < 0){
        positive = !positive;
        valueInString = valueInString.substring(1)
    }
    console.log(direction);
    
  return (
    <p className={`${direction ===  DIRECTIONS.debit || direction === DIRECTIONS.credit || direction === DIRECTIONS.transfer ? `text-${direction.toLowerCase()}`: ''} flex gap-2 m-auto`}>
    {prefixIcon? prefixIcon :<></>}
    {direction === DIRECTIONS.debit || !positive? '-': ''}
    {getCurrencySymbol(currencyCode)}
    {valueInString}
    </p>
  )
}

export default Amount