import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, ChevronDown, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, MENU_BATIMENT, MENU_TEXTILE } from "@/data/site";

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { slug: string; navLabel: string }[];
}) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary">
        {label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-[var(--shadow-card)] transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.slug}
            to={item.slug}
            className="block rounded-xl px-3 py-2.5 text-sm text-popover-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            {item.navLabel}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur"
          : "bg-background/80 backdrop-blur"
      }`}
    >
      {/* Accent top bar */}
      <div className="h-1 w-full bg-primary-gradient" />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Clean<span className="text-primary">&amp;</span>Fresh
          </span>
          <span className="hidden rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary sm:inline">
            Toulouse
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
          >
            Accueil
          </Link>
          <Dropdown label="Textile & auto" items={MENU_TEXTILE} />
          <Dropdown label="Nettoyage bâtiment" items={MENU_BATIMENT} />
          <Link
            to="/formules"
            className="px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
          >
            Tarifs
          </Link>
          <Link
            to="/contactez-nous"
            className="px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm" className="text-foreground/75 hover:text-primary">
            <a href={COMPANY.phoneHref}>
              <Phone className="size-4" />
              {COMPANY.phone}
            </a>
          </Button>
          <Button asChild size="sm" className="bg-accent-gradient text-accent-foreground font-semibold shadow-[var(--shadow-soft)] hover:opacity-90">
            <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="size-4" />
              Réserver en ligne
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="rounded-lg p-2 text-foreground/70 hover:bg-secondary lg:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-4 py-5 lg:hidden">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block rounded-lg py-2.5 font-medium text-foreground hover:text-primary"
          >
            Accueil
          </Link>

          <p className="mt-4 mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Textile & auto
          </p>
          {MENU_TEXTILE.map((s) => (
            <Link
              key={s.slug}
              to={s.slug}
              onClick={() => setOpen(false)}
              className="block rounded-lg py-2 pl-2 text-sm text-foreground/80 hover:text-primary"
            >
              {s.navLabel}
            </Link>
          ))}

          <p className="mt-4 mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Nettoyage bâtiment
          </p>
          {MENU_BATIMENT.map((s) => (
            <Link
              key={s.slug}
              to={s.slug}
              onClick={() => setOpen(false)}
              className="block rounded-lg py-2 pl-2 text-sm text-foreground/80 hover:text-primary"
            >
              {s.navLabel}
            </Link>
          ))}

          <Link
            to="/formules"
            onClick={() => setOpen(false)}
            className="block rounded-lg py-2.5 font-medium text-foreground hover:text-primary"
          >
            Tarifs & Formules
          </Link>
          <Link
            to="/contactez-nous"
            onClick={() => setOpen(false)}
            className="block rounded-lg py-2.5 font-medium text-foreground hover:text-primary"
          >
            Contact
          </Link>

          <div className="mt-5 grid gap-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/contactez-nous" onClick={() => setOpen(false)}>
                Demander un devis gratuit
              </Link>
            </Button>
            <Button asChild className="w-full bg-accent-gradient text-accent-foreground font-semibold hover:opacity-90">
              <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                <CalendarCheck className="size-4" />
                Réserver en ligne
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
