import { righteous } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import HeroForm from './_components/heroForm';

export default function HomePage() {
  return (
    <section className="container flex h-dvh items-center justify-between gap-8">
      <div className="flex-1 space-y-10">
        <h1 className={cn('text-7xl leading-tight', righteous.className)}>
          Everything you are. In one, simple link in bio.
        </h1>
        <p className="text-lg">
          Join people using LinkLoom for their link in bio. One link to help you
          share everything you create, curate and sell from your Instagram,
          TikTok, Twitter, YouTube and other social media profiles.
        </p>
        <HeroForm />
      </div>

      <div className="flex-1"></div>
    </section>
  );
}
