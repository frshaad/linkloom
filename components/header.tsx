import { Menu } from 'lucide-react';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { lobster } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { ThemeSwitch } from './themeSwitch';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="w-full border-b bg-background/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className={cn('text-primary text-3xl', lobster.className)}
          >
            LinkLoom
          </Link>
          <ul className="hidden items-center gap-5 text-gray-500 md:flex dark:text-gray-200">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md border p-2 md:hidden">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden">
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/pricing">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-5 md:gap-10">
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="outline">Log In</Button>
            <Button>Create Account</Button>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
