import Link from "next/link";
import { roomsPageContent } from "@/config/roomsPage";
import type { Room } from "../types";
import styles from "./RoomLinkList.module.css";

export default function RoomLinkList({ rooms }: { rooms: Room[] }) {
  return (
    <section className={styles.section} aria-labelledby="rooms-page-title">
      <h1 id="rooms-page-title">{roomsPageContent.title}</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link href={`${roomsPageContent.href}/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
