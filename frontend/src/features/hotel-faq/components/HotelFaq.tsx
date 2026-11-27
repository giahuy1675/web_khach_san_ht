"use client";

import { useState } from "react";
import { faqContent } from "@/config/faq";
import styles from "./HotelFaq.module.css";

export default function HotelFaq() {
  const { title, items } = faqContent;
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) =>
    setOpenIds((current) =>
      current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id],
    );

  return (
    <section id="cau-hoi-thuong-gap" className={styles.faq} aria-labelledby="faq-title">
      <h2 id="faq-title" className={styles.title}>
        {title}
      </h2>

      <div className={styles.list}>
        {items.map((item) => {
          const isOpen = openIds.includes(item.id);
          const panelId = `faq-panel-${item.id}`;

          return (
            <div key={item.id} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
              <h3 className={styles.heading}>
                <button
                  className={styles.trigger}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.question}</span>
                  <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 12h16" />
                    <path className={styles.vertical} d="M12 4v16" />
                  </svg>
                </button>
              </h3>
              <div id={panelId} className={styles.panel} role="region" aria-label={item.question}>
                <div className={styles.panelInner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
