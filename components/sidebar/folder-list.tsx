import type { Folder } from "@/lib/types";
import FolderItem from "./folder-item";

type FolderListProps = {
  folders: Folder[];
};

export default function FolderList({ folders }: FolderListProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="px-3 text-xs font-medium uppercase text-zinc-400">폴더</h2>
      <ul className="flex flex-col gap-1">
        {folders.map((folder) => (
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </ul>
    </div>
  );
}
