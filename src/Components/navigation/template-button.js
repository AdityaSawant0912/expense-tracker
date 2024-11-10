import React from 'react';
import { BookMarked } from 'lucide-react';
import { Button } from '../ui/button';
function TemplateButton() {
  return (
    <Button variant="outline" size="icon" className="mr-4">
      <BookMarked />
    </Button>
  );
}
export default TemplateButton;
