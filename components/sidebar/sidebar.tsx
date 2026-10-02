import type { Folder } from "@/lib/types";
import AllButton from "./all-button";
import FolderList from "./folder-list";

type SidebarProps = {
  folders: Folder[];
};

export default function Sidebar({ folders }: SidebarProps) {
  return (
    <aside className="w-60 shrink-0 border-r border-[var(--border)] bg-[var(--card)] px-3 py-6">
      <nav className="flex flex-col gap-6">
        <AllButton />
        <FolderList folders={folders} />
      </nav>
    </aside>
  );
}
