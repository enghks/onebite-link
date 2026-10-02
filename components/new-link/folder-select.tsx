import type { Folder } from "@/lib/types";

type FolderSelectProps = {
  folders: Folder[];
};

export default function FolderSelect({ folders }: FolderSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="folderId" className="text-sm font-medium text-[var(--text)]">
        폴더
      </label>
      <select
        id="folderId"
        name="folderId"
        required
        defaultValue=""
        className="field select-field transition-color rounded-[6px] px-3 py-2 text-base"
      >
        <option value="" disabled>
          폴더를 선택하세요
        </option>
        {folders.map((folder) => (
          <option key={folder.id} value={folder.id}>
            {folder.name}
          </option>
        ))}
      </select>
    </div>
  );
}
