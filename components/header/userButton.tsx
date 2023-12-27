'use client';

import { LogOut, UserCog } from 'lucide-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '@/public/user.svg';

import UserAuthButton from './userAuthButton';
import UserButtonSkeleton from './userButton.skeleton';

export default function UserButton() {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <UserButtonSkeleton />;
  }

  if (status === 'unauthenticated') {
    return <UserAuthButton />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={data?.user?.image || UserAvatar} />
          <AvatarFallback className="uppercase">
            {data?.user?.name?.slice(0, 2) || 'un'}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex cursor-pointer items-center" asChild>
          <Link href="/dashboard">
            <UserCog size={16} className="mr-4" />
            My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer items-center text-destructive"
          onClick={() => signOut()}
        >
          <LogOut size={16} className="mr-4" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
