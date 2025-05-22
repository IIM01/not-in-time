import Link from 'next/link';
import { Vk, Youtube } from './svg';
import { cn } from '@/lib/utils';
export default function Social() {
  return (
    <div className={cn('flex gap-5 justify-center', 'md:justify-normal')}>
      <Link
        className="bg-white p-1"
        href="https://vk.com/notintime74?from=groups"
      >
        <Vk className="w-5 h-5" />
      </Link>
      <Link
        className="bg-white p-1"
        href="https://www.youtube.com/@notintime74/featured"
      >
        <Youtube className="w-5 h-5" />
      </Link>
    </div>
  );
}
