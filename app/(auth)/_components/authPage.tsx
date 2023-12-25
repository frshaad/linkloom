import { Quote } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import TextLogo from '@/components/TextLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getRandomNum } from '@/lib/utils';

import { REVIEWS } from '../reviews.constant';

export default function AuthComponents() {
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
          <Button variant="ghost" size="lg">
            <Link href="/login" className="text-lg">
              Login
            </Link>
          </Button>
        </div>

        <div className="flex h-screen items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>

            <div className="grid gap-6">
              <form className="grid gap-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                />
                <Button className="w-full">Sign In with Email</Button>
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
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-center gap-2"
                >
                  <FaGoogle />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="flex w-full items-center justify-center gap-2"
                >
                  <FaGithub />
                  Github
                </Button>
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
