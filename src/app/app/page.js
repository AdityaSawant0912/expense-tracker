import React from 'react';
import Navbar from '@/components/navigation/navbar';
// import { TransactionList } from '@/components/transaction/transaction-list';
import LedgerList from '@/components/ledger/ledger-list';
import FloatingAdd from '@/components/common/floating-add-button';
export default function App() {
  return (
    <>
      <Navbar />
      <LedgerList/>
      <FloatingAdd/>
    </>
  );
}
