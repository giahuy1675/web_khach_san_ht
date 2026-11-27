"use client";

import { useEffect, useState } from "react";
import { homeContent } from "@/config/home";
import { getRooms } from "../services/roomsService";
import type { Room } from "../types";

type UseRoomsResult = {
  rooms: Room[];
  isLoading: boolean;
  error: string | null;
};

export function useRooms(): UseRoomsResult {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    getRooms()
      .then((result) => {
        if (isActive) {
          setRooms(result);
        }
      })
      .catch((reason: unknown) => {
        if (isActive) {
          setError(reason instanceof Error ? reason.message : homeContent.rooms.errorMessage);
        }
      })
      .finally(() => {
        if (isActive) {
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  return { rooms, isLoading, error };
}
