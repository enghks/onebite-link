import NextLink from "next/link";

export default function NewLinkButton() {
  return (
    <NextLink
      href="/new"
      className="btn-primary transition-color rounded-[6px] px-4 py-1.5 text-sm font-medium"
    >
      + 새 링크
    </NextLink>
  );
}
