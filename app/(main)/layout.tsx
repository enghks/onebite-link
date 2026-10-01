import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import { folders } from "@/lib/mock-data";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar folders={folders} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
