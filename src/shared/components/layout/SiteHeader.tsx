import Link from "next/link";
import { siteConfig } from "@/config/site";
import MainMenu from "./MainMenu";
import styles from "./SiteHeader.module.css";

function NavigationLinks() {
  return siteConfig.navigation.map((item) => (
    <a key={item.href} href={item.href}>
      {item.label}
    </a>
  ));
}

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <MainMenu />

        <Link className={styles.logo} href="/" aria-label={`${siteConfig.name} - Trang chủ`}>
          <span className={styles.logoName}>{siteConfig.brandMark}</span>
          <span className={styles.logoCaption}>{siteConfig.brandCaption}</span>
        </Link>

        <nav className={styles.primaryNav} aria-label={siteConfig.primaryNavigationLabel}>
          <NavigationLinks />
        </nav>

        <div className={styles.actions}>
          <a
            className={`${styles.action} ${styles.contact}`}
            href={siteConfig.contact.href}
            aria-label={siteConfig.contact.label}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.2 3.8 8 3.2l2.1 4.9-2 1.5a15 15 0 0 0 6.3 6.3l1.5-2 4.9 2.1-.6 2.8a2 2 0 0 1-2.2 1.6A17.5 17.5 0 0 1 3.6 6a2 2 0 0 1 1.6-2.2Z" />
              <path d="M14.5 4.5a5 5 0 0 1 5 5M14.5 1.5a8 8 0 0 1 8 8" />
            </svg>
            <span>{siteConfig.contact.label}</span>
          </a>
          <button
            className={`${styles.action} ${styles.language}`}
            type="button"
            aria-label={siteConfig.language.ariaLabel}
          >
            <span>{siteConfig.language.label}</span>
            <svg className={styles.chevron} viewBox="0 0 16 16" aria-hidden="true">
              <path d="m3 6 5 5 5-5" />
            </svg>
          </button>
          <a
            className={`${styles.action} ${styles.login}`}
            href={siteConfig.login.href}
            aria-label={siteConfig.login.label}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="7.5" r="4" />
              <path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2" />
            </svg>
            <span>{siteConfig.login.label}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
