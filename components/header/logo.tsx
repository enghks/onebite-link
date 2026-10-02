import NextLink from "next/link";

export default function Logo() {
  return (
    <NextLink
      href="/"
      className="flex items-center gap-2 text-base font-semibold text-[var(--text)]"
    >
      <span aria-hidden>🔗</span>
      한입 링크
    </NextLink>
  );
}
