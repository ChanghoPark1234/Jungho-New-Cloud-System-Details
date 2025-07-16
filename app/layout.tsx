import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "클라우드 시스템 구축계획",
  description: "클라우드 시스템 구축을 위한 상세 계획 문서",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
} 