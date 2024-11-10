import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
const AppLayout = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};
export default AppLayout;
