import { registerUsername } from '@/actions/registerUsername';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function HeroForm() {
  return (
    <form action={registerUsername}>
      <div className="flex w-full max-w-sm items-center space-x-4">
        <div className="relative">
          <p className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-primary/60">
            linkloom.com/
          </p>
          <Input
            name="username"
            type="text"
            placeholder="username"
            className="w-full pl-[104px] text-primary"
          />
        </div>
        <Button type="submit" className="rounded-full">
          Claim your LinkLoom
        </Button>
      </div>
    </form>
  );
}
