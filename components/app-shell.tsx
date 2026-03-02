"use client";

import { useCallback, useEffect, useMemo } from "react";

import { MuseumMap, MuseumMapMobile } from "@/components/museum-map";
import { ProgressIndicator } from "@/components/progress-indicator";
import { RoomSection } from "@/components/room-section";
import { CorridorTransition } from "@/components/corridor-transition";
import { GuideIntro } from "@/components/museum-guide";
import { useActiveSection } from "@/hooks/use-active-section";
import type { Room } from "@/lib/types";
import { guideDialogues } from "@/lib/guide-dialogue";

interface AppShellProps {
  rooms: Room[];
}

export function AppShell({ rooms }: AppShellProps): React.JSX.Element {
  const roomIds = useMemo(() => rooms.map((room) => room.id), [rooms]);
  const { activeRoomId, setActiveById, registerRef } = useActiveSection(roomIds);

  const activeIndex = useMemo(
    () => Math.max(0, rooms.findIndex((room) => room.id === activeRoomId)),
    [activeRoomId, rooms]
  );

  const scrollToRoom = useCallback(
    (roomId: number) => {
      const section = document.getElementById(`room-${roomId}`);
      if (!section) return;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveById(roomId);
    },
    [setActiveById]
  );

  const goPrevious = useCallback(() => {
    const previous = rooms[activeIndex - 1];
    if (previous) scrollToRoom(previous.id);
  }, [activeIndex, rooms, scrollToRoom]);

  const goNext = useCallback(() => {
    const next = rooms[activeIndex + 1];
    if (next) scrollToRoom(next.id);
  }, [activeIndex, rooms, scrollToRoom]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        goNext();
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        goPrevious();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrevious]);

  return (
    <div className="relative min-h-screen bg-[var(--museum-floor)]">
      <MuseumMap rooms={rooms} activeRoomId={activeRoomId} onSelectRoom={scrollToRoom} />
      <MuseumMapMobile rooms={rooms} activeRoomId={activeRoomId} onSelectRoom={scrollToRoom} />
      <ProgressIndicator current={activeIndex + 1} total={rooms.length} />

      <main className="pt-12 md:pl-72 md:pt-0">
        {/* Museum entrance with guide introduction */}
        <div className="museum-wall flex min-h-[60vh] items-center justify-center">
          <div className="flex flex-col items-center gap-8 px-4 text-center">
            <GuideIntro />
            <p className="max-w-md text-sm leading-relaxed text-white/40">
              Desplazate hacia abajo para comenzar el recorrido por las 6 salas del museo interactivo sobre TIC y Arte.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--museum-gold-dim)]">
                Comenzar recorrido
              </span>
              <span className="h-8 w-px animate-pulse bg-gradient-to-b from-[var(--museum-gold)] to-transparent" />
            </div>
          </div>
        </div>

        {/* Rooms with corridor transitions between them */}
        {rooms.map((room, index) => (
          <div key={room.id}>
            {index > 0 && (
              <CorridorTransition
                fromTitle={rooms[index - 1].title}
                toTitle={room.title}
                toRoomNumber={room.id}
              />
            )}
            <RoomSection
              room={room}
              roomIndex={index}
              totalRooms={rooms.length}
              sectionRef={registerRef(room.id)}
              guideDialogue={guideDialogues[room.id]}
              onPrevious={goPrevious}
              onNext={goNext}
            />
          </div>
        ))}

        {/* Museum exit */}
        <div className="museum-wall flex min-h-[40vh] items-center justify-center">
          <div className="flex flex-col items-center gap-4 px-4 text-center">
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--museum-gold-dim)] to-transparent" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--museum-gold)]">
              Fin del recorrido
            </p>
            <p className="max-w-sm text-sm text-white/40">
              Gracias por visitar el Museo interactivo TIC y Arte. La tecnologia transforma, pero el arte siempre sera humano.
            </p>
            <span className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--museum-gold-dim)] to-transparent" />
          </div>
        </div>
      </main>
    </div>
  );
}
