'use client';
import Link from 'next/link';
import Container from './container';
import { cn } from '@/lib/utils';
import { MENU } from '@/app/data/menu';
import { useEffect, useState } from 'react';
import Social from './social';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileNavOpen]);
  return (
    <header className="py-3 absolute top-0 left-0 right-0">
      <Container className="flex justify-end md:block">
        <div
          className={cn(
            'fixed -top-[120%] left-0 right-0 bg-background h-screen overflow-auto transition-[top] duration-300',
            'md:static md:h-auto',
            isMobileNavOpen && 'top-0'
          )}
        >
          <nav
            className={cn(
              'py-2.5 flex flex-col justify-center',
              'md:flex-row md:justify-between md:items-center'
            )}
          >
            <ul className={cn('text-center mb-5', 'md:flex md:gap-5 md:mb-0')}>
              {MENU.map((item) => (
                <li className={cn('text-2xl mb-8', 'md:mb-0')} key={item.href}>
                  <Link
                    onClick={() => setIsMobileNavOpen(false)}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Social />
          </nav>
        </div>
        <button
          className={cn('w-8 h-5 flex flex-col justify-between', 'md:hidden')}
          type="button"
          onClick={() => {
            setIsMobileNavOpen(!isMobileNavOpen);
          }}
        >
          <div
            className={cn(
              'w-full h-[3px] bg-white relative transition-all duration-300 top-0',
              isMobileNavOpen && 'rotate-45 top-[9px]'
            )}
          ></div>
          <div
            className={cn(
              'w-full h-[3px] bg-white transition-all duration-300',
              isMobileNavOpen && 'scale-0'
            )}
          ></div>
          <div
            className={cn(
              'w-full h-[3px] bg-white relative transition-all duration-300 bottom-0',
              isMobileNavOpen && '-rotate-45 bottom-[8px]'
            )}
          ></div>
        </button>
      </Container>
    </header>
  );
}
