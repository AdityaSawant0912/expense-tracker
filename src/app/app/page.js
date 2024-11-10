import React from 'react';
import Navbar from '@/components/navigation/navbar';
import { TransactionList } from '@/components/transaction/transaction-list';
export default function App() {
  return (
    <>
      <Navbar />
      <TransactionList/>
    </>
  );
}
