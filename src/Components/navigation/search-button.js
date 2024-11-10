'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
export function SearchButton() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const searchOptions = [
    {
      id: 'category',
      label: 'Category',
    },
    {
      id: 'amount',
      label: 'Amount',
    },
    {
      id: 'notes',
      label: 'Notes',
    },
    {
      id: 'payee/payer',
      label: 'Payee/Payer',
    },
    {
      id: 'paymentMethod',
      label: 'Payment Method',
    },
    {
      id: 'date',
      label: 'Date',
    },
  ];
  function handleChange(checked, selectedId) {
    if (checked) {
      setSelectedOptions((prev) => [...prev, selectedId]);
    } else {
      setSelectedOptions((prev) => prev.filter((id) => id != selectedId));
    }
    console.log(selectedOptions);
  }
  return (
    <Popover >
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="mr-4">
          <Search className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Search</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        {searchOptions.map((opt) => {
          return (
            <div key={opt.id} className="flex justify-between [&:not(:first-child)]:mt-1.5">
              <label
                htmlFor={opt.id}
                className="text-lg font-medium leading-7 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-4"
              >
                {opt.label}
              </label>
              <Checkbox
                id={opt.id}
                className="my-auto mr-4"
                onCheckedChange={(e) => handleChange(e, opt.id)}
              />
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
