'use client';

import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UserLoginForm() {
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log({ email, password });

  const handleLogin = async () => {
    try {
      setPending(true);
      const signInData = await signIn('credentials', { email, password });
      console.log(signInData);
      redirect('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="grid gap-2">
      <Input
        name="email"
        type="email"
        placeholder="name@example.com"
        required
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder="**********"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          'Log In'
        )}
      </Button>
    </form>
  );
}
