import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

export default function Member({
  name,
  instrument,
  imageUrl,
  className,
}: {
  name: string;
  instrument: string;
  imageUrl: StaticImageData;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <Image
        width={200}
        height={200}
        className="rounded-[50%] mb-5 mx-auto"
        alt={name}
        src={imageUrl}
      />
      <p className="text-xl font-semibold text-center mb-3">{name}</p>
      <p className="text-center italic">{instrument}</p>
    </div>
  );
}
