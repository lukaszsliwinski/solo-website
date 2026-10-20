import Link from "next/link";
import SvgIcon from "./SvgIcon";
import { cn } from "@/lib/utils";
import { MENU_ITEMS } from "@/lib/constants";

type NavbarProps = {
  visible: boolean;
};

export default function NavBar({ visible }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex justify-end gap-3 px-2 sm:px-10 py-2 fixed top-0 left-0 z-50 w-full transition-all duration-200 bg-theme-dark/95 shadow backdrop-blur",
        visible ? "translate-y-0" : "-translate-y-full opacity-0"
      )}
    >
      <Link href="#landing" className="mr-auto px-2 rounded-full">
        <SvgIcon src="/icons/logo.svg" className="size-10 stroke-4" />
      </Link>
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="w-22 py-2 text-[15px] text-center rounded-full hover:bg-theme-light/5"
        >{item.label}</Link>
      ))}
    </nav>
  );
} 