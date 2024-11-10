import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

function SidebarToggle() {
  return (
    <>
      <SidebarTrigger className="w-4 h-4" />
      <span className="sr-only">Toggle navigation menu</span>
    </>
  );
}

export default SidebarToggle;
