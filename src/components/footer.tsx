import { MENU } from "@/app/data/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Vk, Youtube } from "./svg";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-white">
      <Container>
        <nav
          className={cn(
            "py-2.5 flex flex-col justify-center",
            "md:flex-row md:justify-between md:items-center"
          )}
        >
          <ul className={cn("text-center mb-5", "md:flex md:gap-5 md:mb-0")}>
            {MENU.map((item) => (
              <li className={cn("text-2xl mb-8", "md:mb-0")} key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className={cn("flex gap-5 justify-center", "md:justify-normal")}>
            <Link className="bg-white p-1" href="/">
              <Vk className="w-5 h-5" />
            </Link>
            <Link className="bg-white p-1" href="/">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </Container>
    </footer>
  );
}
