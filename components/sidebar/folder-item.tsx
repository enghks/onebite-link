import type { Folder } from "@/lib/types";
import NavLink from "./nav-link";

type FolderItemProps = {
  folder: Folder;
};

export default function FolderItem({ folder }: FolderItemProps) {
  return (
    <li>
      <NavLink href={`/folder/${folder.id}`}>
        <span aria-hidden>📁</span>
        <span className="truncate">{folder.name}</span>
      </NavLink>
    </li>
  );
}
