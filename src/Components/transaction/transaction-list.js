import { Table, TableBody, TableRow } from '@/components/ui/table';
import Amount from '../common/amount';
import { CirclePlus, CircleMinus, ArrowRightLeft } from 'lucide-react';
import TransactionRow from './transaction-row';

const transactions = [
  {
    _id: '64bfa12345abc123de678810',
    userId: '64bfa12345abc123de678910',
    typeOfTransaction: 'TRANSACTION',
    ledgerId: '64bfa12345abc123de678911',
    direction: 'DEBIT',
    amount: 150.75,
    datetime: '2024-11-15T14:30:00Z',
    otherParty: 'John Doe',
    category: {
      _id: '64bfa12345abc123de678913',
      userId: '64bfa12345abc123de678910',
      icon: 'household_icon',
      parent: '64bfa12345abc123de678912',
      label: 'Household Supplies',
    },
    tags: [
      {
        _id: '64bfa12345abc123de678914',
        userId: '64bfa12345abc123de678910',
        label: 'Weekly Expenses',
      },
    ],
    notes: 'Grocery shopping at SuperMart',
    paymentMethod: 'Credit Card',
  },
  {
    _id: '64bfa12345abc123de678811',
    userId: '64bfa12345abc123de678910',
    typeOfTransaction: 'TRANSACTION',
    ledgerId: '64bfa12345abc123de678911',
    direction: 'CREDIT',
    amount: 1200.0,
    datetime: '2024-11-16T09:00:00Z',
    otherParty: 'Jane Smith',
    category: {
      _id: '64bfa12345abc123de678915',
      userId: '64bfa12345abc123de678910',
      icon: 'salary_icon',
      parent: null,
      label: 'Income',
    },
    tags: [
      {
        _id: '64bfa12345abc123de678916',
        userId: '64bfa12345abc123de678910',
        label: 'Salary',
      },
      {
        _id: '64bfa12345abc123de678917',
        userId: '64bfa12345abc123de678910',
        label: 'November',
      },
    ],
    notes: 'Salary for November',
    paymentMethod: 'Bank Transfer',
  },
  {
    _id: '64bfa12345abc123de678812',
    userId: '64bfa12345abc123de678910',
    typeOfTransaction: 'TRANSFER',
    fromLedger: '64bfa12345abc123de678911',
    toLedger: '64bfa12345abc123de678918',
    direction: 'TRANSFER',
    amount: 500.0,
    datetime: '2024-11-17T18:45:00Z',
    otherParty: 'Self',
    category: {
      _id: '64bfa12345abc123de678919',
      userId: '64bfa12345abc123de678910',
      icon: 'savings_icon',
      parent: null,
      label: 'Savings',
    },
    tags: [
      {
        _id: '64bfa12345abc123de678920',
        userId: '64bfa12345abc123de678910',
        label: 'Monthly Savings',
      },
    ],
    notes: 'Transfer to savings account',
    paymentMethod: 'Mobile App',
  },
  {
    _id: '64bfa12345abc123de678813',
    userId: '64bfa12345abc123de678910',
    typeOfTransaction: 'TRANSFER',
    fromLedger: '64bfa12345abc123de678911',
    toLedger: '64bfa12345abc123de678918',
    direction: 'TRANSFER',
    amount: 500.0,
    datetime: '2024-11-17T18:45:00Z',
    otherParty: 'Self',
    category: {
      _id: '64bfa12345abc123de678919',
      userId: '64bfa12345abc123de678910',
      icon: 'savings_icon',
      parent: null,
      label: 'Savings',
    },
    tags: [
      {
        _id: '64bfa12345abc123de678920',
        userId: '64bfa12345abc123de678910',
        label: 'Monthly Savings',
      },
    ],
    notes: 'Transfer to savings account',
    paymentMethod: 'Mobile App',
  },
  {
    _id: '64bfa12345abc123de678814',
    userId: '64bfa12345abc123de678910',
    typeOfTransaction: 'TRANSFER',
    fromLedger: '64bfa12345abc123de678911',
    toLedger: '64bfa12345abc123de678918',
    direction: 'TRANSFER',
    amount: 500.0,
    datetime: '2024-11-17T18:45:00Z',
    otherParty: 'Self',
    category: {
      _id: '64bfa12345abc123de678919',
      userId: '64bfa12345abc123de678910',
      icon: 'savings_icon',
      parent: null,
      label: 'Savings',
    },
    tags: [
      {
        _id: '64bfa12345abc123de678920',
        userId: '64bfa12345abc123de678910',
        label: 'Monthly Savings',
      },
    ],
    notes: 'Transfer to savings account',
    paymentMethod: 'Mobile App',
  },
];
const openingBalance = 348.0;
const totalExpense = 2040.0;
const totalIncome = 0.0;
const totalTransfer = 0.0;
const currencyCode = 'INR';
export function TransactionList() {
  return (
    <div className="border-t pb-24">
      <div className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted flex flex-col">
        <h1 className="m-auto text-xl">Total</h1>
        <span className="m-auto flex gap-2">
          <Amount value={openingBalance} currencyCode={currencyCode} /> -{' '}
          <Amount value={totalExpense} currencyCode={currencyCode} /> ={' '}
          <Amount
            value={openingBalance - totalExpense}
            currencyCode={currencyCode}
          />
        </span>
        <span className="m-auto flex gap-6">
          <Amount
            value={totalIncome}
            direction="CREDIT"
            currencyCode={currencyCode}
            prefixIcon={<CirclePlus className="w-5 h-5 my-auto" />}
          />{' '}
          <Amount
            value={totalExpense}
            direction="DEBIT"
            currencyCode={currencyCode}
            prefixIcon={<CircleMinus className="w-5 h-5 my-auto" />}
          />{' '}
          <Amount
            value={totalTransfer}
            direction="TRANSFER"
            currencyCode={currencyCode}
            prefixIcon={<ArrowRightLeft className="w-5 h-5 my-auto" />}
          />
        </span>
      </div>
      <Table>
        <TableBody className="border-b">
          {transactions.map((transaction) => (
            <TransactionRow transaction={transaction} key={transaction._id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
