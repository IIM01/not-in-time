import { MENU } from '@/app/data/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Container from './container';
import Social from './social';

export default function Footer() {
  return (
    <footer className="border-t border-white">
      <Container>
        <nav
          className={cn(
            'py-2.5 flex flex-col justify-center',
            'md:flex-row md:justify-between md:items-center'
          )}
        >
          <ul className={cn('text-center mb-5', 'md:flex md:gap-5 md:mb-0')}>
            {MENU.map((item) => (
              <li className={cn('text-2xl mb-8', 'md:mb-0')} key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Social />
        </nav>
      </Container>
    </footer>
  );
}
