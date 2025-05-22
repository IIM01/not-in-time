import { cn } from '@/lib/utils';
import Container from './container';
export default function Section({
  title,
  children,
  id,
}: {
  title?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="py-10 sm:py-15 md:py-20" id={id}>
      <Container>
        {title && (
          <h2
            className={cn(
              'text-2xl font-medium text-center mb-6',
              'sm:text-3xl',
              'md:text-4xl'
            )}
          >
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}
