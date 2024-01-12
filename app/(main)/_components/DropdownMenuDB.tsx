import React from 'react';
import { Keyboard, School, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

function DropdownMenuDB() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">Register</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Register</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/">
              <DropdownMenuItem>
                <School className="mr-2 h-4 w-4" />
                <span>Register Now!</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/registrans">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>2024 Registrans</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/">
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>PPDB</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default DropdownMenuDB;
