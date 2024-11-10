import React from 'react';
import { TableRow, TableCell } from '../ui/table';
import { ChartBarStacked } from 'lucide-react';
import Amount from '../common/amount';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
function TransactionRow({ transaction }) {
  return (
    <>
      <TableRow key={transaction._id}>
        <TableCell className="font-medium p-2">
          <TransactionIcon category={transaction.category} />
        </TableCell>
        <TableCell className="font-medium pl-2">
          <TransactionBody transaction={transaction} />
        </TableCell>
        <TableCell className="font-medium px-2">
          <TransactionAmount
            transaction={transaction}
          />
        </TableCell>
      </TableRow>
    </>
  );
}

function TransactionIcon(category) {
  // TODO: Load Icon based on category.icon
  return (
    <>
      <ChartBarStacked />
    </>
  );
}

function TransactionBody({
  transaction: { category, tags, notes, otherParty },
}) {
  return (
    <span className="flex flex-col gap-1">
      <h3 className="font-semibold text-base">{category.label}</h3>
      <span className="flex flex-wrap items-center gap-1">
        <span className="italic whitespace-nowrap">{notes}</span>
        <span>{' / '}</span>
        <span className="underline whitespace-nowrap">{otherParty}</span>
      </span>
      <span className="flex flex-wrap gap-2">
        {tags &&
          tags.map((tag) => (
            <Badge variant="outline" key={tag._id}>
              {tag.label}
            </Badge>
          ))}
      </span>
    </span>
  );
}

function TransactionAmount({transaction:{ amount, direction, datetime }}) {
  return (
    <span>
      <Amount
        value={amount}
        direction={direction}
        currencyCode="INR"
        className="text-lg w-max mx-auto"
      />
      <p className="text-nowrap">{formatDate(datetime)}</p>
    </span>
  );
}

export default TransactionRow;
