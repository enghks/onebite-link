"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function NavLink({ href, className = "", children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
        isActive ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-200"
      } ${className}`}
    >
      {children}
    </NextLink>
  );
}
