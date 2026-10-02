import type { Link } from "@/lib/types";
import LinkCard from "./link-card";

type LinkGridProps = {
  links: Link[];
};

export default function LinkGrid({ links }: LinkGridProps) {
  if (links.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-[var(--border)] py-20 text-center">
        <span aria-hidden className="text-3xl">
          📭
        </span>
        <p className="text-sm text-[var(--text-sub)]">등록된 링크가 없습니다.</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} />
        </li>
      ))}
    </ul>
  );
}
