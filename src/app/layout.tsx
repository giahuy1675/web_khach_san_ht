import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import SiteLayout from "@/shared/components/layout/SiteLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
