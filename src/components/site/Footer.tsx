import { Link } from "@tanstack/react-router";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { COMPANY, MENU_BATIMENT, MENU_TEXTILE } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 bg-ink text-ink-foreground">
      {/* Top accent */}
      <div className="h-1 w-full bg-primary-gradient" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            Clean<span className="text-primary-glow">&amp;</span>Fresh
          </p>
          <p className="mt-3 text-sm text-ink-foreground/70 leading-relaxed">{COMPANY.slogan}</p>
          <p className="mt-4 text-sm text-ink-foreground/50 leading-relaxed">
            Entreprise de nettoyage à Toulouse et dans toute la Haute-Garonne, pour les particuliers
            et les professionnels.
          </p>
          <Link
            to="/reserver"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent-gradient px-4 py-2.5 text-sm font-bold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            <CalendarCheck className="size-4" /> Réserver en ligne
          </Link>
        </div>

        {/* Textile & auto */}
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-ink-foreground/50">
            Textile & auto
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/65">
            {MENU_TEXTILE.map((s) => (
              <li key={s.slug}>
                <Link to={s.slug} className="hover:text-ink-foreground transition-colors">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bâtiment */}
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-ink-foreground/50">
            Nettoyage bâtiment
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/65">
            {MENU_BATIMENT.map((s) => (
              <li key={s.slug}>
                <Link to={s.slug} className="hover:text-ink-foreground transition-colors">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-ink-foreground/50">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/65">
            <li>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 hover:text-ink-foreground transition-colors font-semibold"
              >
                <Phone className="size-4" /> {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 break-all hover:text-ink-foreground transition-colors"
              >
                <Mail className="size-4 shrink-0" /> {COMPANY.email}
              </a>
            </li>
            <li className="text-ink-foreground/45">Toulouse & agglomération (31)</li>
            <li>
              <Link
                to="/formules"
                className="hover:text-ink-foreground transition-colors font-medium"
              >
                → Tarifs & formules
              </Link>
            </li>
            <li>
              <Link
                to="/contactez-nous"
                className="hover:text-ink-foreground transition-colors font-medium"
              >
                → Devis gratuit sous 24h
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs text-ink-foreground/40 space-y-2">
        <p>© 2026 Clean&Fresh — Tous droits réservés — Toulouse, Haute-Garonne</p>
        <div className="flex flex-wrap justify-center gap-4 text-ink-foreground/50">
          <Link to="/a-propos" className="hover:text-ink-foreground transition-colors">À Propos</Link>
          <Link to="/mentions-legales" className="hover:text-ink-foreground transition-colors">Mentions Légales</Link>
          <Link to="/politique-confidentialite" className="hover:text-ink-foreground transition-colors">Confidentialité</Link>
          <Link to="/cgv" className="hover:text-ink-foreground transition-colors">CGV</Link>
        </div>
      </div>
    </footer>
  );
}

export function StickyCallCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/97 p-3 backdrop-blur lg:hidden">
      <div className="flex gap-2">
        <a
          href={COMPANY.phoneHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary-gradient text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)]"
        >
          <Phone className="size-4" /> {COMPANY.phone}
        </a>
        <Link
          to="/reserver"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent-gradient px-4 text-sm font-bold text-accent-foreground shadow-[var(--shadow-soft)]"
        >
          <CalendarCheck className="size-4" /> Je réserve
        </Link>
      </div>
    </div>
  );
}
