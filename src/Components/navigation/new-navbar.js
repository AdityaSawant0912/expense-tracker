import LedgerTitle from './ledger-title';
import React from 'react';
import { CancelButton } from './cancel-button';
import { NewButton } from './new-button';
import TemplateDropdown from './template-dropdown';
function NewNavbar() {
  return (
    <nav className="sticky top-0 z-10 bg-background text-foreground shadow dark:shadow-dark inset-x-0">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center h-20 px-4 md:px-6">
          <CancelButton/>
          <LedgerTitle />
          <div className="flex-1" />
          <NewButton/>
          <TemplateDropdown/>
        </div>
      </div>
    </nav>
  );
}
export default NewNavbar;
