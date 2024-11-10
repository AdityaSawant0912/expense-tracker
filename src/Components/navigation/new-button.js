'use client';
import React, { useState } from 'react';
import { FilePlus2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function NewButton() {
  const [selected, setSelected] = useState(false);

  // setSelected((prev) => !prev);
  return (
    <Button
      variant="outline"
      size="icon"
      className="mr-4"
      onClick={() => setSelected((prev) => !prev)}
    >
      <FilePlus2 className={`h-[1.2rem] w-[1.2rem] ${selected ? 'text-green-500' : ''}`} />
      <span className="sr-only">
        New Transaction after completion
      </span>
    </Button>
  );
}
