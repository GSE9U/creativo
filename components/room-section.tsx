"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Lightbulb, Scale } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MuseumGuide } from "@/components/museum-guide";
import type { Room } from "@/lib/types";
import type { GuideDialogue } from "@/lib/guide-dialogue";
import { cn } from "@/lib/utils";

interface RoomSectionProps {
  room: Room;
  roomIndex: number;
  totalRooms: number;
  sectionRef: (element: HTMLElement | null) => void;
  guideDialogue: GuideDialogue;
  onPrevious: () => void;
  onNext: () => void;
}

function getDilemma(slug: string): { pros: string[]; cons: string[] } {
  const bySlug: Record<string, { pros: string[]; cons: string[] }> = {
    "antes-de-las-tic": {
      pros: ["Curaduria institucional fuerte", "Mayor tiempo de maduracion"],
      cons: ["Acceso limitado", "Difusion lenta"]
    },
    "digitalizacion-creativa": {
      pros: ["Iteracion rapida", "Colaboracion remota"],
      cons: ["Dependencia de software", "Brecha tecnica"]
    },
    "redes-sociales-y-cultura": {
      pros: ["Publicacion global inmediata", "Nuevas comunidades creativas"],
      cons: ["Presion por tendencia", "Volatilidad de alcance"]
    },
    "streaming-y-plataformas": {
      pros: ["Acceso masivo", "Descubrimiento automatizado"],
      cons: ["Burbujas de consumo", "Concentracion de poder"]
    },
    "ia-nft-vr": {
      pros: ["Nuevos lenguajes expresivos", "Economia digital emergente"],
      cons: ["Dudas de autoria", "Riesgos eticos y ambientales"]
    },
    "futuro-hibrido": {
      pros: ["Experiencias enriquecidas", "Mas inclusion y participacion"],
      cons: ["Complejidad de diseno", "Costos de integracion"]
    }
  };
  return bySlug[slug] ?? { pros: ["Innovacion"], cons: ["Desafios de adopcion"] };
}

const storyReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const bulletReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function RoomSection({
  room,
  roomIndex,
  totalRooms,
  sectionRef,
  guideDialogue,
  onPrevious,
  onNext
}: RoomSectionProps): React.JSX.Element {
  const [imgError, setImgError] = useState(false);
  const dilemma = useMemo(() => getDilemma(room.slug), [room.slug]);

  return (
    <section
      id={`room-${room.id}`}
      data-room-id={room.id}
      ref={sectionRef}
      className="museum-wall relative snap-start"
      aria-label={`Sala ${room.id}: ${room.title}`}
    >
      <div className="ceiling-light pointer-events-none absolute inset-x-0 top-0 h-40" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-24 md:gap-20 md:px-8 md:py-32">

        {/* ═══ ACT 1: The guide introduces the room ═══════════ */}
        <motion.div
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Room plate */}
          <div className="mb-8 flex justify-center">
            <div className="room-plate inline-flex items-center gap-3 rounded-sm px-6 py-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--museum-gold)]">
                Sala {room.id} de {totalRooms}
              </span>
              <span className="h-px w-8 bg-[var(--museum-gold-dim)]" />
              <span className={cn("text-xs uppercase tracking-wider", room.theme.accentClass)}>
                {room.slug.replace(/-/g, " ")}
              </span>
            </div>
          </div>

          {/* Title */}
          <header className="mb-10 space-y-3 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              {room.title}
            </h1>
            <p className="text-base text-white/50 md:text-lg">{room.subtitle}</p>
          </header>

          {/* Guide introduces */}
          <div className="mx-auto max-w-xl">
            <MuseumGuide dialogue={guideDialogue.intro} accentClass="text-white/80" />
          </div>
        </motion.div>

        {/* ═══ ACT 2: The main exhibition piece reveals ═══════ */}
        <motion.div
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="spotlight mx-auto max-w-4xl">
            <div className="gallery-frame overflow-hidden rounded-sm">
              {imgError ? (
                <div className={cn(
                  "flex h-72 items-center justify-center bg-gradient-to-br md:h-[420px]",
                  room.theme.bgClass
                )}>
                  <p className="text-sm text-white/50">Obra en preparacion</p>
                </div>
              ) : (
                <div className="relative h-72 w-full md:h-[420px]">
                  <Image
                    src={room.visual.srcPlaceholder}
                    alt={room.visual.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                    priority={roomIndex < 2}
                    onError={() => setImgError(true)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Museum plaque */}
          <div className="museum-plaque mx-auto mt-6 max-w-lg rounded-sm px-6 py-4">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
              Exhibicion permanente
            </p>
            <h3 className="text-lg font-semibold text-neutral-800">
              {room.title}: {room.subtitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {room.body}
            </p>
          </div>
        </motion.div>

        {/* Guide comments on the artwork */}
        <motion.div
          className="mx-auto max-w-xl"
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <MuseumGuide dialogue={guideDialogue.onArtwork} accentClass="text-white/80" />
        </motion.div>

        {/* ═══ ACT 3: Exhibits unfold one by one ═════════════ */}
        <motion.div
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 flex items-center gap-2">
            <span className="h-px flex-1 bg-[var(--museum-gold-dim)] opacity-30" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--museum-gold)]">
              Puntos de la exhibicion
            </span>
            <span className="h-px flex-1 bg-[var(--museum-gold-dim)] opacity-30" />
          </div>

          <motion.div
            className="grid gap-3 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {room.bullets.map((bullet, i) => (
              <motion.div
                key={bullet}
                className="exhibit-label rounded-sm p-4"
                variants={bulletReveal}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--museum-gold)] text-xs font-bold text-black">
                    {i + 1}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <p className="text-sm leading-relaxed text-white/80">{bullet}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Guide comments on exhibits */}
        <motion.div
          className="mx-auto max-w-xl"
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <MuseumGuide dialogue={guideDialogue.onExhibits} accentClass="text-white/80" />
        </motion.div>

        {/* ═══ ACT 4: The dilemma ════════════════════════════ */}
        <motion.div
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <Scale className="h-4 w-4 text-[var(--museum-gold)]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--museum-gold)]">
              Dilema / Impacto
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              className="rounded-sm border border-emerald-400/15 bg-emerald-400/5 p-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-300">Oportunidades</p>
              <ul className="space-y-2">
                {dilemma.pros.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-sm border border-rose-400/15 bg-rose-400/5 p-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-rose-300">Desafios</p>
              <ul className="space-y-2">
                {dilemma.cons.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* ═══ ACT 5: The quote + fun fact ═══════════════════ */}
        <motion.div
          className="text-center"
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative py-8">
            <span className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--museum-gold-dim)] to-transparent" />
            <blockquote className="wall-text text-xl italic leading-relaxed text-white/70 md:text-2xl">
              &quot;{room.quote}&quot;
            </blockquote>
            <span className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--museum-gold-dim)] to-transparent" />
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl"
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex gap-4 rounded-sm border border-[var(--museum-gold-dim)]/20 bg-[var(--museum-gold)]/[0.04] p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--museum-gold)]" />
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[var(--museum-gold)]">
                Dato curioso
              </p>
              <p className="text-sm leading-relaxed text-white/70">{room.funFact}</p>
            </div>
          </div>
        </motion.div>

        {/* ═══ ACT 6: Guide closing + navigation ═════════════ */}
        <motion.div
          className="mx-auto max-w-xl"
          variants={storyReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <MuseumGuide dialogue={guideDialogue.closing} accentClass="text-white/60 italic" />
        </motion.div>

        {/* Doorway navigation */}
        <div className="mx-auto w-full max-w-md pb-8">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              className="gap-2 text-white/50 hover:text-[var(--museum-gold)]"
              onClick={onPrevious}
              disabled={roomIndex === 0}
              aria-label="Sala anterior"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-xs uppercase tracking-wider">Anterior</span>
            </Button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalRooms }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-500",
                    i === roomIndex
                      ? "scale-125 bg-[var(--museum-gold)]"
                      : i < roomIndex
                        ? "bg-[var(--museum-gold-dim)]"
                        : "bg-white/15"
                  )}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              className="gap-2 text-white/50 hover:text-[var(--museum-gold)]"
              onClick={onNext}
              disabled={roomIndex === totalRooms - 1}
              aria-label="Sala siguiente"
            >
              <span className="text-xs uppercase tracking-wider">Siguiente</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floor reflection */}
      <div className="museum-floor-reflection pointer-events-none absolute inset-x-0 bottom-0 h-24" />
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <span className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[var(--museum-gold-dim)] to-transparent opacity-20" />
      </div>
    </section>
  );
}
