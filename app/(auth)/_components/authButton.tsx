'use client';

import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

type Props = {
  provider: 'google' | 'github';
};

export default function AuthButton({ provider }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: '/dashboard',
      });
    } catch (error) {
      setIsLoading(false);
      throw new Error(`Cannot log in with ${provider}`);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogin}
      disabled={isLoading}
      className="flex w-full items-center justify-center gap-2 capitalize"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        <>
          {provider === 'google' ? <FaGoogle /> : <FaGithub />}
          {provider}
        </>
      )}
    </Button>
  );
}
