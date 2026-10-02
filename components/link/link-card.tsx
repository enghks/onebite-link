import type { Link } from "@/lib/types";

type LinkCardProps = {
  link: Link;
};

export default function LinkCard({ link }: LinkCardProps) {
  const hostname = new URL(link.url).hostname;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover transition-color flex h-full flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4"
    >
      <h3 className="truncate text-base font-semibold text-[var(--text)]">
        {link.title}
      </h3>
      <p className="line-clamp-2 text-sm leading-[1.4] text-[var(--text-sub)]">
        {link.description}
      </p>
      <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[13px]">
        <span className="truncate rounded bg-[var(--hover-bg)] px-2 py-0.5 text-[var(--text)]">
          {hostname}
        </span>
        <time dateTime={link.createdAt} className="shrink-0 text-[var(--text-sub)]">
          {link.createdAt}
        </time>
      </div>
    </a>
  );
}
