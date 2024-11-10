import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { TransactionList } from '@/components/transaction/transaction-list';

function LedgerList() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem><TransactionList/></CarouselItem>
        <CarouselItem><TransactionList/></CarouselItem>
        <CarouselItem><TransactionList/></CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default LedgerList;
