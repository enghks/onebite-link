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
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-900">{folder.name}</h1>
      <LinkGrid links={folderLinks} />
    </section>
  );
}
