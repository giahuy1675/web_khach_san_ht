import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer id="lien-he" className="border-t border-border bg-[#242320] text-white">
      <div className="mx-auto grid min-h-72 w-full max-w-[1398px] gap-12 px-content py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl tracking-[0.12em]">{siteConfig.brandMark}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
            Trải nghiệm nghỉ dưỡng gần gũi ven thành phố Hà Tiên.
          </p>
        </div>
        <div className="text-sm leading-8 text-white/75">
          <p className="mb-3 text-xs tracking-[0.16em] text-white">LIÊN HỆ</p>
          <p>{siteConfig.footer.address}</p>
          <p>{siteConfig.footer.phone}</p>
          <p>{siteConfig.footer.email}</p>
        </div>
        <nav className="flex flex-col gap-3 text-sm text-white/75" aria-label="Liên kết cuối trang">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-content py-5 text-center text-xs tracking-wide text-white/60">
        {siteConfig.footerText}
      </div>
    </footer>
  );
}
