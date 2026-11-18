import Link from "next/link";
import { footerContent } from "@/config/footer";
import { siteConfig } from "@/config/site";
import FooterAppBanner from "./footer/FooterAppBanner";
import FooterContactColumn from "./footer/FooterContactColumn";
import FooterLinkColumn from "./footer/FooterLinkColumn";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer id="lien-he" className={styles.footer}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label={`${siteConfig.name} - Trang chủ`}>
          {siteConfig.brandMark}
        </Link>

        <div className={styles.columns}>
          {footerContent.columns.map((column) => (
            <FooterLinkColumn key={column.sections[0].title} sections={column.sections} />
          ))}
          <FooterContactColumn />
        </div>

        <FooterAppBanner />

        <nav className={styles.legal} aria-label="Chính sách">
          {footerContent.legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className={styles.copyright}>{footerContent.copyright}</p>
      </div>
    </footer>
  );
}
