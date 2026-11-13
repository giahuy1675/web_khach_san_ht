"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import MegaMenu from "./MegaMenu";
import styles from "./SiteHeader.module.css";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      triggerRef.current?.focus();
    }

    wasOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <>
      <div className={styles.menu}>
        <button
          ref={triggerRef}
          className={styles.menuToggle}
          type="button"
          aria-label={siteConfig.menuLabel}
          aria-expanded={isOpen}
          aria-controls={isOpen ? "river-hotel-mega-menu" : undefined}
          onClick={() => setIsOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {isOpen && <MegaMenu onClose={closeMenu} />}
    </>
  );
}
