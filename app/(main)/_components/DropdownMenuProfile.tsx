import React from 'react';
import { CreditCard, Keyboard, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

function DropdownMenuProfile() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">School</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>School</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile School</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/">
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Price and benefit</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>School Rules</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/">
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Vision and Mission</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default DropdownMenuProfile;
