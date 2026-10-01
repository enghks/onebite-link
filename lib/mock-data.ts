import type { Folder, Link } from "./types";

export const folders: Folder[] = [
  { id: 1, name: "개발" },
  { id: 2, name: "디자인" },
  { id: 3, name: "읽을거리" },
  { id: 4, name: "도구" },
];

export const links: Link[] = [
  {
    id: 1,
    title: "Next.js Docs",
    url: "https://nextjs.org/docs",
    description: "Next.js 공식 문서",
    folderId: 1,
    createdAt: "2026-09-28",
  },
  {
    id: 2,
    title: "React",
    url: "https://react.dev",
    description: "React 공식 문서와 학습 자료",
    folderId: 1,
    createdAt: "2026-09-27",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "유틸리티 우선 CSS 프레임워크",
    folderId: 2,
    createdAt: "2026-09-25",
  },
  {
    id: 4,
    title: "Figma",
    url: "https://www.figma.com",
    description: "협업 디자인 툴",
    folderId: 2,
    createdAt: "2026-09-20",
  },
  {
    id: 5,
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "웹 표준 기술 레퍼런스",
    folderId: 3,
    createdAt: "2026-09-18",
  },
  {
    id: 6,
    title: "GitHub",
    url: "https://github.com",
    description: "코드 호스팅 및 협업 플랫폼",
    folderId: 4,
    createdAt: "2026-09-15",
  },
];
