import { Quote } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import TextLogo from '@/components/TextLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { auth } from '@/lib/auth';
import { getRandomNum } from '@/lib/utils';

import { REVIEWS } from '../reviews.constant';
import AuthButton from './authButton';

type Props = {
  type: 'login' | 'signup';
  serverAction: (formData: FormData) => Promise<void>;
};

export default async function AuthComponent({ type, serverAction }: Props) {
  const session = await auth();

  if (session?.user) {
    return redirect('/');
  }

  const randNum = getRandomNum(0, 2);
  const randomReview = REVIEWS[randNum];

  return (
    <section className="flex h-screen justify-between">
      <div className="hidden flex-1 flex-col justify-between bg-foreground p-10 text-background lg:flex">
        <TextLogo />
        <div className="relative space-y-6">
          <Quote size={60} />
          <p className="text-lg">{`"${randomReview?.text}"`}</p>
          <p>{randomReview?.author}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-10">
        <div className="flex w-full justify-end">
          <Link
            href={type === 'login' ? '/register' : '/login'}
            className="text-lg"
          >
            <Button variant="ghost" size="lg">
              {type === 'login' ? 'Sign Up' : 'Login'}
            </Button>
          </Link>
        </div>

        <div className="flex h-screen items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {type === 'login' ? 'Log In' : 'Create an account'}
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to{' '}
                {type === 'login' ? 'log in to' : 'create'} your account
              </p>
            </div>

            <div className="grid gap-6">
              <form action={serverAction} className="grid gap-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="**********"
                />
                <Button className="w-full">
                  {type === 'login' ? 'Log In' : 'Sign Up'}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    or continue with
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <AuthButton provider="google" />
                <AuthButton provider="github" />
              </div>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/term"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
