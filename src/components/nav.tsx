import { MENU } from "@/app/data/menu";
import Link from "next/link";

export default function Nav({ className }: { className: string }) {
  return (
    <nav>
      <ul className={className}>
        {MENU.map((item) => (
          <li className="text-lg" key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
