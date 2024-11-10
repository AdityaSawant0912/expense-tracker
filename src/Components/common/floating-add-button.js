import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
function FloatingAdd() {
  return (
    <Button className="h-14 w-14 fixed bottom-8 right-8" asChild>
      <Link href={'/new'}>
        <Plus />
      </Link>
    </Button>
  );
}

export default FloatingAdd;
