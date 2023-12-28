import Link from 'next/link';

import { lobster } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export default function TextLogo() {
  return (
    <Link href="/" className={cn('text-xl sm:text-2xl', lobster.className)}>
      LinkLoom
    </Link>
  );
}
