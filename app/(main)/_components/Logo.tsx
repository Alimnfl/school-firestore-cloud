import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Button variant="ghost">
        <Link href="/" className={cn('font-bold', font.className)}>
          DREAMER
        </Link>
      </Button>
    </div>
  );
}

export default Logo;
