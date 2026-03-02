"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseActiveSectionResult {
  activeRoomId: number;
  setActiveById: (roomId: number) => void;
  registerRef: (roomId: number) => (element: HTMLElement | null) => void;
}

export function useActiveSection(roomIds: number[]): UseActiveSectionResult {
  const [activeRoomId, setActiveRoomId] = useState<number>(roomIds[0] ?? 1);
  const sectionsRef = useRef<Record<number, HTMLElement | null>>({});
  const callbacksRef = useRef<Record<number, (element: HTMLElement | null) => void>>({});

  const registerRef = useCallback(
    (roomId: number) => {
      if (!callbacksRef.current[roomId]) {
        callbacksRef.current[roomId] = (element: HTMLElement | null) => {
          sectionsRef.current[roomId] = element;
        };
      }
      return callbacksRef.current[roomId];
    },
    []
  );

  useEffect(() => {
    const availableSections = Object.entries(sectionsRef.current).filter(
      (entry): entry is [string, HTMLElement] => Boolean(entry[1])
    );
    if (availableSections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.55)
          .map((entry) => ({
            roomId: Number((entry.target as HTMLElement).dataset.roomId),
            ratio: entry.intersectionRatio
          }))
          .filter((item) => Number.isFinite(item.roomId));

        if (visible.length > 0) {
          visible.sort((a, b) => b.ratio - a.ratio);
          setActiveRoomId((prev) => (prev === visible[0].roomId ? prev : visible[0].roomId));
        }
      },
      { threshold: [0.55] }
    );

    for (const [, section] of availableSections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [roomIds]);

  const setActiveById = useCallback(
    (roomId: number) => {
      if (roomIds.includes(roomId)) {
        setActiveRoomId(roomId);
      }
    },
    [roomIds]
  );

  const stable = useMemo(
    () => ({
      activeRoomId,
      setActiveById,
      registerRef
    }),
    [activeRoomId, registerRef, setActiveById]
  );

  return stable;
}
