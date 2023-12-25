import TextLogo from '../TextLogo';
import { ThemeSwitch } from '../themeSwitch';
import NavLinks from './navLinks';
import UserButton from './userButton';

export default function Header() {
  return (
    <header className="absolute w-full border-b bg-background/95">
      <div className="mx-auto flex h-16 w-11/12 items-center justify-between md:container md:w-full">
        <div className="flex items-center gap-4 md:gap-10">
          <TextLogo />
          <NavLinks />
        </div>

        <div className="flex items-center gap-5 md:gap-10">
          <UserButton />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
