import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Member({
  name,
  instrument,
  className,
}: {
  name: string;
  instrument: string;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <Image
        width={200}
        height={200}
        className="rounded-[50%] mb-5 mx-auto"
        alt={name}
        src="https://loremflickr.com/250/250"
      />
      <p className="text-xl font-semibold text-center mb-3">{name}</p>
      <p className="text-center italic">{instrument}</p>
    </div>
  );
}
