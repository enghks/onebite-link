import type { Folder } from "@/lib/types";
import UrlInput from "./url-input";
import FolderSelect from "./folder-select";
import SaveButton from "./save-button";

type NewLinkFormProps = {
  folders: Folder[];
};

export default function NewLinkForm({ folders }: NewLinkFormProps) {
  return (
    <form className="flex flex-col gap-5 rounded-xl border border-zinc-200 bg-white p-6">
      <UrlInput />
      <FolderSelect folders={folders} />
      <SaveButton />
    </form>
  );
}
