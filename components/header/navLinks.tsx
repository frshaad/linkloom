'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const NAV_LNKS = [
  { id: 1, name: 'about' },
  { id: 2, name: 'pricing' },
  { id: 3, name: 'contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <ul className="hidden items-center gap-8 text-gray-500 md:flex dark:text-gray-300">
        {NAV_LNKS.map(link => (
          <li key={link.id}>
            <Link
              href={`/${link.name}`}
              className={cn('capitalize', {
                'text-gray-800 dark:text-gray-100 font-medium':
                  `/${link.name}` === pathname,
              })}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md p-2 md:hidden">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="md:hidden">
          {NAV_LNKS.map(link => (
            <DropdownMenuItem
              key={link.id}
              className={cn('cursor-pointer', {
                'bg-gray-100 rounded': `/${link.name}` === pathname,
              })}
            >
              <Link href={`/${link.name}`} className="capitalize">
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
