import type { Folder } from "@/lib/types";
import UrlInput from "./url-input";
import FolderSelect from "./folder-select";
import SaveButton from "./save-button";

type NewLinkFormProps = {
  folders: Folder[];
};

export default function NewLinkForm({ folders }: NewLinkFormProps) {
  return (
    <form className="flex flex-col gap-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
      <UrlInput />
      <FolderSelect folders={folders} />
      <SaveButton />
    </form>
  );
}
