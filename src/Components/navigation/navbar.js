import SidebarToggle from "../sidebar/sidebar-toggle-button";
import LedgerTitle from "./ledger-title";
import { ModeToggle } from "@/components/theme/theme-button";
import React from "react";
import { SearchButton } from "./search-button";
import TemplateButton from "./template-button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-background text-foreground shadow dark:shadow-dark inset-x-0">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center h-20 px-4 md:px-6">
          <SidebarToggle />
          <LedgerTitle />
          <div className="flex-1" />
          <SearchButton/>
          <TemplateButton/>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
