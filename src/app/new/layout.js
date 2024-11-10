import React from 'react';
const AppLayout = ({ children }) => {
  return (
    <>
      <main className="w-full">{children}</main>
    </>
  );
};
export default AppLayout;
