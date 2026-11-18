"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { megaMenuPanels } from "@/config/megaMenu";
import { siteConfig } from "@/config/site";
import { BrandsPanel, InspirationPanel, RewardsPanel } from "./MegaMenuPanels";
import styles from "./MegaMenu.module.css";

type MegaMenuProps = {
  onClose: () => void;
};

export default function MegaMenu({ onClose }: MegaMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<string>(siteConfig.megaMenu.tabs[0].id);
  const [openId, setOpenId] = useState<string | null>(siteConfig.megaMenu.tabs[0].id);
  const { tabs, sidebar } = siteConfig.megaMenu;
  const mobileLinks: Record<string, { label: string; href: string }[]> = {
    hotels: [
      { label: sidebar.heading, href: sidebar.links[0].href },
      ...sidebar.links,
      { label: sidebar.contactLabel, href: sidebar.contactHref },
    ],
    brands: megaMenuPanels.brands.items.map((item) => ({ label: item.name, href: item.href })),
    inspiration: megaMenuPanels.inspiration.sections.map((section) => ({
      label: section.label,
      href: section.cards[0].href,
    })),
    rewards: [megaMenuPanels.rewards.login, megaMenuPanels.rewards.register],
  };

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
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
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
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.topNavigationLink} ${tab.id === activeTab ? styles.active : ""}`}
                type="button"
                aria-pressed={tab.id === activeTab}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </header>

        <div className={styles.desktopPanels} key={activeTab}>
          {activeTab === "brands" && <BrandsPanel onClose={onClose} />}
          {activeTab === "inspiration" && <InspirationPanel onClose={onClose} />}
          {activeTab === "rewards" && <RewardsPanel onClose={onClose} />}
          {activeTab === "hotels" && (
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <div>
              <p className={styles.eyebrow}>{siteConfig.megaMenu.sidebar.eyebrow}</p>
              <p className={styles.description}>{siteConfig.megaMenu.sidebar.description}</p>
              <h2 className={styles.sidebarHeading}>{siteConfig.megaMenu.sidebar.heading}</h2>
              <nav className={styles.sidebarLinks} aria-label={siteConfig.primaryNavigationLabel}>
                {siteConfig.megaMenu.sidebar.links.map((item) => (
                  <a
                    key={item.href}
                    className={styles.sidebarLink}
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
          )}
        </div>

        <nav className={styles.accordion} aria-label={siteConfig.primaryNavigationLabel}>
          {tabs.map((tab) => {
            const expanded = openId === tab.id;

            return (
              <div key={tab.id} className={styles.accordionItem}>
                <button
                  className={styles.accordionTrigger}
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpenId(expanded ? null : tab.id)}
                >
                  {tab.label}
                  <svg
                    className={`${styles.chevron} ${expanded ? styles.chevronOpen : ""}`}
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="m3 10 5-5 5 5" />
                  </svg>
                </button>
                <div className={`${styles.accordionPanel} ${expanded ? styles.panelOpen : ""}`}>
                  <div className={styles.accordionPanelInner}>
                    {mobileLinks[tab.id].map((item) => (
                      <a key={item.label} href={item.href} onClick={onClose}>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </section>
    </div>
  );
}
