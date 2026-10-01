import type { Folder } from "@/lib/types";
import AllButton from "./all-button";
import FolderList from "./folder-list";

type SidebarProps = {
  folders: Folder[];
};

export default function Sidebar({ folders }: SidebarProps) {
  return (
    <aside className="w-60 shrink-0 border-r border-zinc-200 bg-zinc-50 p-4">
      <nav className="flex flex-col gap-4">
        <AllButton />
        <FolderList folders={folders} />
      </nav>
    </aside>
  );
}
