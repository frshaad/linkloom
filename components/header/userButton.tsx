import { LogIn, LogOut, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '../ui/button';

export default function UserButton() {
  return (
    <>
      <div className="hidden items-center gap-2 sm:flex md:gap-3">
        <Button variant="outline">Log In</Button>
        <Button>Create Account</Button>
      </div>
      <div className="flex items-center gap-2 md:hidden md:gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md border p-2 md:hidden">
            <User />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="md:hidden">
            <DropdownMenuItem>
              <LogIn className="mr-4" size={16} />
              Log In
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-4" size={16} />
              Create Account
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
