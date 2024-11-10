import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';
function FloatingDone() {
  return (
    <Button className="h-14 w-14 fixed bottom-8 right-8" asChild>
      <Link href={'/app'}>
        <Check />
      </Link>
    </Button>
  );
}

export default FloatingDone;
