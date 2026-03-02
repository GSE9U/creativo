"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MuseumGuideProps {
  dialogue: string;
  accentClass: string;
}

export function MuseumGuide({ dialogue, accentClass }: MuseumGuideProps): React.JSX.Element {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={dialogue}
        className="flex items-end gap-3"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Guide avatar */}
        <div className="guide-avatar relative flex-shrink-0">
          <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[var(--museum-gold)] shadow-lg shadow-black/50 md:h-20 md:w-20">
            <Image
              src="/images/guide-guillermo.png"
              alt="Guillermo, guia del museo"
              width={80}
              height={80}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--museum-gold)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black">
            Guillermo
          </span>
        </div>

        {/* Speech bubble */}
        <div className="guide-bubble relative max-w-md">
          <div className="guide-bubble-arrow" />
          <p className={`text-sm leading-relaxed md:text-base ${accentClass}`}>
            {dialogue}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function GuideIntro(): React.JSX.Element {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--museum-gold)] shadow-xl shadow-black/50 md:h-32 md:w-32">
        <Image
          src="/images/guide-guillermo.png"
          alt="Guillermo, guia del museo"
          width={128}
          height={128}
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--museum-gold)]">
          Tu guia
        </p>
        <p className="mt-1 text-xl font-semibold text-white md:text-2xl">Guillermo</p>
        <p className="mt-1 text-sm text-white/50">
          Te acompanare por las 6 salas de este museo
        </p>
      </div>
    </motion.div>
  );
}
