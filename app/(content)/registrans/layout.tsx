import Navbar from '@/app/(main)/_components/Navbar';
import React, { ReactNode } from 'react';

function RegistransLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}

export default RegistransLayout;
