"use client";

import { useState } from "react";
import styles from "./FooterLinkColumn.module.css";

type FooterSection = {
  title: string;
  links: readonly { label: string; href: string }[];
};

export default function FooterLinkColumn({ sections }: { sections: readonly FooterSection[] }) {
  const [openTitles, setOpenTitles] = useState<string[]>([]);

  const toggle = (title: string) =>
    setOpenTitles((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title],
    );

  return (
    <div className={styles.column}>
      {sections.map((section) => {
        const isOpen = openTitles.includes(section.title);

        return (
          <section
            key={section.title}
            className={`${styles.section} ${isOpen ? styles.open : ""}`}
          >
            <h2 className={styles.title}>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                onClick={() => toggle(section.title)}
              >
                <span>{section.title}</span>
                <svg className={styles.chevron} viewBox="0 0 16 16" aria-hidden="true">
                  <path d="m3 6 5 5 5-5" />
                </svg>
              </button>
            </h2>
            <div className={styles.panel}>
              <div className={styles.panelInner}>
                <ul className={styles.list}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
