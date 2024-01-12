import { Button } from '@/components/ui/button';
import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Location
        </Button>
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Term & Condition
        </Button>
      </div>
    </div>
  );
}

export default Footer;
