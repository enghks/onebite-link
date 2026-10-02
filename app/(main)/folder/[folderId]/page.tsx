import { notFound } from "next/navigation";
import LinkGrid from "@/components/link/link-grid";
import { folders, links } from "@/lib/mock-data";

export function generateStaticParams() {
  return folders.map((folder) => ({ folderId: String(folder.id) }));
}

export default async function FolderPage({
  params,
}: PageProps<"/folder/[folderId]">) {
  const { folderId } = await params;
  const folder = folders.find((folder) => String(folder.id) === folderId);

  if (!folder) {
    notFound();
  }

  const folderLinks = links.filter((link) => link.folderId === folder.id);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-3 text-[30px] leading-[1.2] font-bold text-[var(--text)]">
          <span aria-hidden>📁</span>
          {folder.name}
        </h1>
        <p className="text-sm leading-[1.4] text-[var(--text-sub)]">
          링크 {folderLinks.length}개
        </p>
      </div>
      <LinkGrid links={folderLinks} />
    </section>
  );
}
