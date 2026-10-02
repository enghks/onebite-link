import Logo from "./logo";
import NewLinkButton from "./new-link-button";

export default function Header() {
  return (
    <header className="header-blur sticky top-0 z-10 flex h-12 items-center justify-between border-b border-[var(--border)] px-4">
      <Logo />
      <NewLinkButton />
    </header>
  );
}
