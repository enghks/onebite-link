import type { Folder } from "@/lib/types";
import FolderItem from "./folder-item";

type FolderListProps = {
  folders: Folder[];
};

export default function FolderList({ folders }: FolderListProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="px-2 pb-1 text-xs font-medium text-[var(--text-sub)]">폴더</h2>
      <ul className="flex flex-col gap-0.5">
        {folders.map((folder) => (
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </ul>
    </div>
  );
}
