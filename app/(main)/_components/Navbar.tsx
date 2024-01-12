'use client';

import useScrollTop from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react';
import Logo from './Logo';
import DropdownMenuProfile from './DropdownMenuProfile';
import DropdownMenuDB from './DropdownMenuDB';

function Navbar() {
  const scrolled = useScrollTop();

  return (
    <div className={cn('z-50 bg-background fixed top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-sm')}>
      <Logo />
      <div className="flex md:ml-auto md:justify-end justify-between items-center gap-x-2 w-full ">
        <DropdownMenuProfile />
        <DropdownMenuDB />
      </div>
    </div>
  );
}

export default Navbar;
