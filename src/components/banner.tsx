import Image from 'next/image';
import Container from './container';
import muzhiki from '../../public/muzhiki_ch_b.png';
import { cn } from '@/lib/utils';
export default function Banner() {
  return (
    <section className={cn('pt-[44px]', 'md:pt-[76px]', 'xl:h-screen')}>
      <Container>
        <div
          className={cn(
            'flex flex-col justify-between items-center',
            'xl:items-start xl:flex-row'
          )}
        >
          <div className={cn('mb-5', 'xl:mb-0')}>
            <h1
              className={cn(
                'text-xl font-bold mb-7 text-center',
                'sm:text-3xl',
                'lg:text-6xl',
                'xl:text-7xl  xl:text-left'
              )}
            >
              Кавер-группа <span className="lg:block">{`"Не вовремя"`}</span>
            </h1>
            <p
              className={cn(
                'text-base',
                'sm:text-xl',
                'lg:text-3xl',
                'xl:text-4xl xl:max-w-[580px]'
              )}
            >
              Обеспечение веселья и драйва на вашем мероприятии
            </p>
          </div>
          <Image
            className={cn(
              'max-w-xs w-full',
              'md:max-w-lg',
              'lg:max-w-xl',
              'xl:max-w-2xl'
            )}
            src={muzhiki}
            alt={`Кавер-группа "Не вовремя"`}
          />
        </div>
      </Container>
    </section>
  );
}
