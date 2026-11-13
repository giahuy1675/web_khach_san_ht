"use client";

import { homeContent } from "@/config/home";
import { siteConfig } from "@/config/site";
import { useRooms } from "../hooks/useRooms";

export default function RoomList() {
  const { rooms, isLoading, error } = useRooms();

  return (
    <section
      id={siteConfig.sections.rooms}
      className="mx-auto min-h-svh w-full max-w-7xl px-content py-section"
      aria-labelledby="rooms-title"
    >
      <h2 id="rooms-title" className="text-2xl font-medium text-ink">
        {homeContent.rooms.title}
      </h2>

      {isLoading ? (
        <p className="mt-4 text-muted" aria-live="polite">
          {homeContent.rooms.loadingMessage}
        </p>
      ) : error ? (
        <p className="mt-4 text-muted" role="alert">
          {error}
        </p>
      ) : rooms.length === 0 ? (
        <p className="mt-4 text-muted">{homeContent.rooms.emptyMessage}</p>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <li key={room.id} className="rounded border border-border p-6">
              <h3 className="text-lg font-medium text-ink">{room.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{room.description}</p>
              <p className="mt-4 text-sm text-muted">Tối đa {room.maxGuests} khách</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
