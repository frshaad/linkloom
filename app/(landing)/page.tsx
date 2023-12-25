import Image from 'next/image';

import { righteous } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Phones from '@/public/phones.webp';

import HeroForm from './_components/heroForm';

export default function HomePage() {
  return (
    <section className="flex h-screen flex-col items-center justify-between overflow-y-hidden pt-32 text-center lg:container lg:pt-28">
      <div className="container flex flex-col items-center space-y-10 md:max-w-3xl lg:space-y-10 xl:max-w-5xl">
        <h1
          className={cn(
            'text-3xl md:text-5xl lg:text-7xl',
            righteous.className,
          )}
        >
          Everything you are. In one, simple link in bio.
        </h1>
        <p className="max-w-lg text-sm md:text-base lg:max-w-3xl lg:text-xl">
          Join people using LinkLoom for their link in bio. One link to help you
          share everything you create, curate and sell from your Instagram,
          TikTok, Twitter, YouTube and other social media profiles.
        </p>
        <HeroForm />
      </div>

      <div className="hidden md:block md:max-w-5xl">
        <Image alt="landing page phones pic" src={Phones} priority />
      </div>
    </section>
  );
}
