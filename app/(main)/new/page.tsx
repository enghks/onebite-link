import NewLinkForm from "@/components/new-link/new-link-form";
import { folders } from "@/lib/mock-data";

export default function NewLinkPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col gap-6">
      <h1 className="text-2xl font-bold text-zinc-900">새 링크</h1>
      <NewLinkForm folders={folders} />
    </section>
  );
}
