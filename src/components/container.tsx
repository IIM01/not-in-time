import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container my-0 mx-auto px-2.5", className)}>
      {children}
    </div>
  );
}
