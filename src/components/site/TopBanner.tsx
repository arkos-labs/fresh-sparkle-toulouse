import { useState } from "react";
import { CalendarCheck, X } from "lucide-react";
import { COMPANY } from "@/data/site";

export function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative z-50 flex items-center justify-center gap-3 bg-accent-gradient px-4 py-2.5 text-accent-foreground">
      <CalendarCheck className="size-4 shrink-0" />
      <p className="text-sm font-semibold">
        Disponible dès demain — réservez votre nettoyage en ligne en 2 minutes
      </p>
      <a
        href={COMPANY.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden shrink-0 rounded-full border border-accent-foreground/30 bg-accent-foreground/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wider hover:bg-accent-foreground/25 transition-colors sm:inline-block"
      >
        Réserver ici →
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Fermer"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 opacity-70 hover:opacity-100 transition-opacity"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
