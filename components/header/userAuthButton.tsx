import { LogIn, LogOut, User } from 'lucide-react';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '../ui/button';

export default function UserAuthButton() {
  return (
    <>
      <div className="hidden items-center gap-2 sm:flex md:gap-3">
        <Link href="/login">
          <Button variant="outline">Log In</Button>
        </Link>
        <Link href="/register">
          <Button>Create Account</Button>
        </Link>
      </div>
      <div className="flex items-center gap-2 md:hidden md:gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md border p-2 md:hidden">
            <User />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="md:hidden">
            <DropdownMenuItem>
              <Link href="/login">
                <LogIn className="mr-4" size={16} />
                Log In
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/register">
                <LogOut className="mr-4" size={16} />
                Create Account
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
