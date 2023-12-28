'use client';

import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';

type Props = {
  type: 'login' | 'signup';
};

export default function CredentialsSubmitButton({ type }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : type === 'login' ? (
        'Log In'
      ) : (
        'Sign Up'
      )}
    </Button>
  );
}
