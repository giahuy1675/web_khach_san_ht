import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="flex min-h-14 shrink-0 items-center justify-center border-t border-border px-content py-4 text-xs tracking-wide text-muted">
      {siteConfig.footerText}
    </footer>
  );
}
