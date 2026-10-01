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
      className="flex h-full flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md"
    >
      <h3 className="truncate font-semibold text-zinc-900">{link.title}</h3>
      <p className="line-clamp-2 text-sm text-zinc-600">{link.description}</p>
      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-zinc-400">
        <span className="truncate">{hostname}</span>
        <time dateTime={link.createdAt}>{link.createdAt}</time>
      </div>
    </a>
  );
}
