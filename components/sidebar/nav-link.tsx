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
      className={`transition-color flex w-full items-center gap-2 rounded-[6px] px-2 py-1.5 text-left text-sm ${
        isActive
          ? "bg-[var(--hover-bg)] font-semibold text-[var(--text)]"
          : "nav-item text-[var(--text-sub)]"
      } ${className}`}
    >
      {children}
    </NextLink>
  );
}
