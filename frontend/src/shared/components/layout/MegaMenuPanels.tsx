"use client";

import Image from "next/image";
import { useState } from "react";
import { megaMenuPanels } from "@/config/megaMenu";
import styles from "./MegaMenuPanels.module.css";

type PanelProps = {
  onClose: () => void;
};

export function BrandsPanel({ onClose }: PanelProps) {
  const { filters, items, exploreLabel, exploreHref } = megaMenuPanels.brands;
  const [filter, setFilter] = useState<string>(filters[0].id);
  const visibleItems = filter === "all" ? items : items.filter((item) => item.tier === filter);

  return (
    <div className={styles.brands}>
      <div className={styles.brandsToolbar}>
        <div className={styles.filters} role="tablist">
          {filters.map((item) => (
            <button
              key={item.id}
              className={`${styles.filter} ${filter === item.id ? styles.filterActive : ""}`}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <a className={styles.exploreLink} href={exploreHref} onClick={onClose}>
          {exploreLabel}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </a>
      </div>

      <div className={styles.brandGrid} key={filter}>
        {visibleItems.map((item, index) => (
          <a
            key={item.name}
            className={styles.brandCell}
            href={item.href}
            style={{ animationDelay: `${index * 40}ms` }}
            onClick={onClose}
          >
            <Image
              className={styles.brandImage}
              src={item.image}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 1200px) 25vw, 20vw"
            />
            <span className={styles.brandName}>{item.name}</span>
            <span className={styles.brandCaption}>{item.caption}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function InspirationPanel({ onClose }: PanelProps) {
  const { eyebrow, description, sections } = megaMenuPanels.inspiration;
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const active = sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <div className={styles.inspiration}>
      <aside className={styles.inspirationSidebar}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <p className={styles.description}>{description}</p>
        <nav className={styles.sectionLinks}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={section.id === active.id ? styles.sectionLinkActive : styles.sectionLink}
              type="button"
              aria-pressed={section.id === active.id}
              onClick={() => setActiveId(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className={styles.inspirationBody} key={active.id}>
        <div className={styles.inspirationIntro}>
          <h2>{active.heading}</h2>
          <p className={styles.introLead}>{active.subheading}</p>
          <p className={styles.introText}>{active.text}</p>
        </div>
        <div className={styles.inspirationCards}>
          {active.cards.map((card, index) => (
            <a
              key={card.title}
              className={styles.inspirationCard}
              href={card.href}
              style={{ animationDelay: `${index * 70}ms` }}
              onClick={onClose}
            >
              <span className={styles.cardMedia}>
                <Image
                  src={card.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 1200px) 18vw, 226px"
                />
              </span>
              <span className={styles.cardTitle}>{card.title}</span>
              <span className={styles.cardSubtitle}>{card.subtitle}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RewardsPanel({ onClose }: PanelProps) {
  const { heading, subheading, text, login, register, moreLabel, slides } = megaMenuPanels.rewards;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];

  return (
    <div className={styles.rewards}>
      <div className={styles.rewardsIntro}>
        <h2>{heading}</h2>
        <p className={styles.introLead}>{subheading}</p>
        <p className={styles.introText}>{text}</p>
        <div className={styles.rewardsActions}>
          <a className={styles.outlineButton} href={login.href} onClick={onClose}>
            {login.label}
          </a>
          <a className={styles.solidButton} href={register.href} onClick={onClose}>
            {register.label}
          </a>
        </div>
      </div>

      <div className={styles.rewardsStage}>
        {slides.map((slide, index) => {
          const offset = (index - activeIndex + slides.length) % slides.length;
          const position = offset === 0 ? "center" : offset === 1 ? "right" : "left";

          return (
            <div key={slide.image} className={`${styles.slide} ${styles[`slide-${position}`]}`}>
              <Image src={slide.image} alt="" fill unoptimized sizes="255px" />
            </div>
          );
        })}
      </div>

      <div className={styles.rewardsDetail} key={activeIndex}>
        <h2>{active.heading}</h2>
        <p className={styles.introLead}>{active.subheading}</p>
        <p className={styles.introText}>{active.text}</p>
        <a className={styles.moreLink} href={active.href} onClick={onClose}>
          {moreLabel}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </a>
      </div>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            className={index === activeIndex ? styles.dotActive : styles.dot}
            type="button"
            aria-label={`Slide ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
