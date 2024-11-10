import React from 'react';
import NewNavbar from '@/components/navigation/new-navbar';
// import { TransactionList } from '@/components/transaction/transaction-list';
import FloatingDone from '@/components/common/floating-done-button';
export default function New() {
  return (
    <>
      <NewNavbar />
      <FloatingDone/>
    </>
  );
}
