import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Amount from "../amount";
import {CirclePlus, CircleMinus, ArrowRightLeft } from "lucide-react";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const openingBalance = 348.0;
const totalExpense = 2040.0;
const totalIncome = 0.0;
const totalTransfer = 0.0;
const currencyCode = 'INR'

export function TransactionList() {
  return (
    <div className="border-t">
      <div className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted flex flex-col">
        <h1 className="m-auto text-xl">Total</h1>
        <span className="m-auto flex gap-2">
          <Amount value={openingBalance} currencyCode={currencyCode}/> - <Amount value={totalExpense} currencyCode={currencyCode}/> = <Amount value={openingBalance - totalExpense} currencyCode={currencyCode}/>
        </span>
        <span className="m-auto flex gap-6">
        <Amount value={totalIncome} direction="CREDIT" currencyCode={currencyCode} prefixIcon={<CirclePlus className="w-5 h-5 my-auto"/>}/> <Amount value={totalExpense} direction="DEBIT" currencyCode={currencyCode} prefixIcon={<CircleMinus className="w-5 h-5 my-auto"/>}/> <Amount value={totalTransfer} direction="TRANSFER" currencyCode={currencyCode} prefixIcon={<ArrowRightLeft className="w-5 h-5 my-auto"/>}/>
        </span>
      </div>
      <Table>
        <TableBody className='border-b'>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
