import NewLinkForm from "@/components/new-link/new-link-form";
import { folders } from "@/lib/mock-data";

export default function NewLinkPage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-[30px] leading-[1.2] font-bold text-[var(--text)]">
          새 링크
        </h1>
        <p className="text-sm leading-[1.4] text-[var(--text-sub)]">
          저장할 링크와 폴더를 선택하세요.
        </p>
      </div>
      <NewLinkForm folders={folders} />
    </section>
  );
}
