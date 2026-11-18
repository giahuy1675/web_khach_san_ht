import Link from "next/link";
import { roomsPageContent } from "@/config/roomsPage";
import type { Room } from "../types";
import RoomFeatureIcon, { type RoomFeatureIconName } from "./RoomFeatureIcon";
import styles from "./RoomDetailIntro.module.css";

export default function RoomDetailIntro({ room }: { room: Room }) {
  const [view, bed, area] = room.highlights;
  const features: { icon: RoomFeatureIconName; label: string }[] = [
    { icon: "bed", label: bed },
    { icon: "view", label: view },
    { icon: "area", label: area },
  ];
  const { bookLabel, bookHref } = roomsPageContent.detail;

  return (
    <section className={styles.intro} aria-labelledby="room-title">
      <h1 id="room-title" className={styles.title}>
        {room.name}
      </h1>
      <p className={styles.description}>{room.description}</p>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature.icon} className={styles.feature}>
            <RoomFeatureIcon name={feature.icon} />
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>

      <Link className={styles.book} href={bookHref}>
        {bookLabel}
      </Link>
    </section>
  );
}
