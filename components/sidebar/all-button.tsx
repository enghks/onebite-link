import NavLink from "./nav-link";

export default function AllButton() {
  return (
    <NavLink href="/">
      <span aria-hidden>🗂️</span>
      <span>전체</span>
    </NavLink>
  );
}
