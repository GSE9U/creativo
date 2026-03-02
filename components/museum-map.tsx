"use client";

import { Map } from "lucide-react";

import type { Room } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MuseumMapProps {
  rooms: Room[];
  activeRoomId: number;
  onSelectRoom: (roomId: number) => void;
}

export function MuseumMap({ rooms, activeRoomId, onSelectRoom }: MuseumMapProps): React.JSX.Element {
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-full w-72 flex-col border-r border-[var(--museum-gold-dim)]/20 bg-[#111115] md:flex">
      {/* Museum branding header */}
      <div className="border-b border-white/5 px-5 py-5">
        <div className="flex items-center gap-2">
          <Map className="h-4 w-4 text-[var(--museum-gold)]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--museum-gold)]">
            Plano del museo
          </p>
        </div>
        <h2 className="mt-2 text-lg font-semibold tracking-tight text-white">
          TIC y Arte
        </h2>
        <p className="text-xs text-white/40">Recorrido en 6 salas</p>
      </div>

      {/* Floor plan room list */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="relative space-y-1">
          {/* Vertical connecting line */}
          <div className="absolute left-[22px] top-4 bottom-4 w-px bg-white/10" />

          {rooms.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                aria-label={`Ir a sala ${room.id}: ${room.title}`}
                className={cn(
                  "group relative flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-all",
                  isActive
                    ? "bg-white/[0.06]"
                    : "hover:bg-white/[0.03]"
                )}
                onClick={() => onSelectRoom(room.id)}
              >
                {/* Room number dot */}
                <div className={cn(
                  "relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all",
                  isActive
                    ? "border-[var(--museum-gold)] bg-[var(--museum-gold)] text-black"
                    : "border-white/20 bg-[#1a1a1f] text-white/50 group-hover:border-white/40"
                )}>
                  {room.id}
                </div>

                {/* Room info */}
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className={cn(
                    "text-sm font-semibold transition-colors",
                    isActive ? room.theme.accentClass : "text-white/70 group-hover:text-white/90"
                  )}>
                    {room.title}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-[11px] text-white/40">
                    {room.subtitle}
                  </p>
                  {isActive && (
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--museum-gold)]" />
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--museum-gold)]">
                        Estas aqui
                      </span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-white/5 px-5 py-4">
        <p className="text-[10px] uppercase tracking-wider text-white/30">
          Museo interactivo
        </p>
        <p className="text-[10px] text-white/20">
          Sala {activeRoomId} de {rooms.length}
        </p>
      </div>
    </aside>
  );
}

/* ── Mobile top bar version ─────────────────────────── */
export function MuseumMapMobile({
  rooms,
  activeRoomId,
  onSelectRoom
}: MuseumMapProps): React.JSX.Element {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 flex items-center gap-2 border-b border-white/5 bg-[#111115]/90 px-3 py-2 backdrop-blur md:hidden">
      <Map className="h-3.5 w-3.5 flex-shrink-0 text-[var(--museum-gold)]" />
      <div className="flex gap-1 overflow-x-auto py-1">
        {rooms.map((room) => {
          const isActive = room.id === activeRoomId;
          return (
            <button
              key={room.id}
              aria-label={`Ir a sala ${room.id}`}
              className={cn(
                "flex-shrink-0 rounded-full px-3 py-1 text-[11px] font-medium transition-all",
                isActive
                  ? "bg-[var(--museum-gold)] text-black"
                  : "bg-white/5 text-white/50"
              )}
              onClick={() => onSelectRoom(room.id)}
            >
              {room.id}. {room.title}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
