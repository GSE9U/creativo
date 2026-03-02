"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface CorridorTransitionProps {
  fromTitle: string;
  toTitle: string;
  toRoomNumber: number;
}

export function CorridorTransition({
  fromTitle,
  toTitle,
  toRoomNumber
}: CorridorTransitionProps): React.JSX.Element {
  return (
    <div className="corridor-section relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      {/* Corridor walls */}
      <div className="corridor-walls pointer-events-none absolute inset-0" />

      {/* Corridor floor perspective lines */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Dejando: {fromTitle}
        </p>

        {/* Archway icon */}
        <div className="corridor-arch flex h-32 w-24 items-end justify-center pb-4 md:h-40 md:w-32">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-[var(--museum-gold)]" />
          </motion.div>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--museum-gold)]">
            Sala {toRoomNumber}
          </p>
          <p className="mt-1 text-lg font-semibold text-white/80 md:text-xl">
            {toTitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
