"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import styles from "./MegaMenu.module.css";

type MegaMenuProps = {
  onClose: () => void;
};

export default function MegaMenu({ onClose }: MegaMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop}>
      <section
        id="river-hotel-mega-menu"
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={siteConfig.megaMenuLabel}
      >
        <header className={styles.topBar}>
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            type="button"
            aria-label={siteConfig.closeMenuLabel}
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 5 14 14M19 5 5 19" />
            </svg>
          </button>

          <Link className={styles.brand} href="/" onClick={onClose}>
            {siteConfig.brandMark}
          </Link>

          <nav className={styles.topNavigation} aria-label={siteConfig.quickNavigationLabel}>
            {siteConfig.megaMenu.tabs.map((tab) => (
              <a
                key={tab.label}
                className={`${styles.topNavigationLink} ${tab.active ? styles.active : ""}`}
                href={tab.href}
                aria-current={tab.active ? "page" : undefined}
                onClick={onClose}
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </header>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <div>
              <p className={styles.eyebrow}>{siteConfig.megaMenu.sidebar.eyebrow}</p>
              <p className={styles.description}>{siteConfig.megaMenu.sidebar.description}</p>
              <h2 className={styles.sidebarHeading}>{siteConfig.megaMenu.sidebar.heading}</h2>
              <nav className={styles.sidebarLinks} aria-label={siteConfig.primaryNavigationLabel}>
                {siteConfig.megaMenu.sidebar.links.map((item, index) => (
                  <a
                    key={item.href}
                    className={index === 0 ? styles.currentSidebarLink : styles.sidebarLink}
                    href={item.href}
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <a
              className={styles.contactLink}
              href={siteConfig.megaMenu.sidebar.contactHref}
              onClick={onClose}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="3" width="16" height="18" rx="1" />
                <path d="M8 7h8M8 11h8M8 15h5" />
              </svg>
              {siteConfig.megaMenu.sidebar.contactLabel}
            </a>
          </aside>

          <nav className={styles.cards} aria-label={siteConfig.quickNavigationLabel}>
            {siteConfig.megaMenu.cards.map((card) => (
              <a
                key={card.label}
                className={styles.card}
                href={card.href}
                onClick={onClose}
              >
                <Image
                  className={styles.cardImage}
                  src={card.image}
                  alt=""
                  fill
                  loading="eager"
                  unoptimized
                  sizes="(max-width: 600px) 50vw, (max-width: 900px) 34vw, 247px"
                />
                <span>{card.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
