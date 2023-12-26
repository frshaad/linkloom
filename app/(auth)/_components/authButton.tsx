'use client';

import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

type Props = {
  provider: 'google' | 'github';
};

export default function AuthButton({ provider }: Props) {
  return (
    <Button
      variant="outline"
      onClick={() => signIn(provider)}
      className="flex w-full items-center justify-center gap-2 capitalize"
    >
      {provider === 'google' ? <FaGoogle /> : <FaGithub />}
      {provider}
    </Button>
  );
}
