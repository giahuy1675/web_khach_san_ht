"use client";

import { useState } from "react";
import { roomsPageContent } from "@/config/roomsPage";
import AmenityIcon from "./AmenityIcon";
import styles from "./RoomAmenities.module.css";

export default function RoomAmenities() {
  const { amenitiesTitle, amenityGroups } = roomsPageContent.detail;
  const [openIds, setOpenIds] = useState<string[]>(
    amenityGroups.filter((group) => group.defaultOpen).map((group) => group.id),
  );

  const toggle = (id: string) =>
    setOpenIds((current) =>
      current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id],
    );

  return (
    <section className={styles.amenities} aria-labelledby="room-amenities-title">
      <h2 id="room-amenities-title" className={styles.title}>
        {amenitiesTitle}
      </h2>

      <div className={styles.list}>
        {amenityGroups.map((group) => {
          const isOpen = openIds.includes(group.id);
          const panelId = `amenity-panel-${group.id}`;

          return (
            <div key={group.id} className={`${styles.group} ${isOpen ? styles.open : ""}`}>
              <h3 className={styles.heading}>
                <button
                  className={styles.trigger}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(group.id)}
                >
                  <AmenityIcon name={group.icon} />
                  <span>{group.label}</span>
                  <svg className={styles.chevron} viewBox="0 0 16 16" aria-hidden="true">
                    <path d="m3 6 5 5 5-5" />
                  </svg>
                </button>
              </h3>
              <div id={panelId} className={styles.panel} role="region" aria-label={group.label}>
                <div className={styles.panelInner}>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
