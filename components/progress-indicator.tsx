interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps): React.JSX.Element {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="fixed right-4 top-4 z-40 rounded-sm border border-[var(--museum-gold-dim)]/30 bg-[#111115]/90 px-4 py-3 text-white backdrop-blur-md md:right-6 md:top-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--museum-gold)]">
        Recorrido
      </p>
      <p className="mt-1 text-sm font-semibold tracking-tight">
        Sala {current}
        <span className="text-white/40"> / {total}</span>
      </p>
      <div className="mt-2 h-1 w-28 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[var(--museum-gold)] transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
