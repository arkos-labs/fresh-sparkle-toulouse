import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_URL, COMPANY } from "@/data/site";
import { FadeIn } from "@/components/ui/fade-in";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";

const TITLE = "Entreprise de nettoyage à L'Union — Clean&Fresh";
const DESC = "Pour un intérieur sain et impeccable à L'Union, faites appel à notre équipe de techniciens spécialisés dans le nettoyage de textiles et surfaces. Devis gratuit sous 24h.";

export const Route = createFileRoute("/nettoyage-l-union")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/nettoyage-l-union` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/nettoyage-l-union` }],
  }),
  component: LocalPage,
});

function LocalPage() {
  return (
    <div className="pb-24 lg:pb-0">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-hero-gradient text-ink-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <MapPin className="size-3" /> Intervention à L'Union
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Entreprise de nettoyage à L'Union
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-foreground/80">
            Pour un intérieur sain et impeccable à L'Union, faites appel à notre équipe de techniciens spécialisés dans le nettoyage de textiles et surfaces. Nos techniciens se déploient avec le matériel professionnel pour un résultat optimal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="xl" className="bg-accent-gradient text-accent-foreground font-bold shadow-[var(--shadow-card)] hover:opacity-90">
              <Link to="/reserver">Réserver en ligne</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/contactez-nous">Demander un devis</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-ink-foreground/60">
            <span className="inline-flex items-center gap-1"><Clock className="size-3" /> Devis sous 24h</span>
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="size-3" /> Séchage rapide</span>
            <span className="inline-flex items-center gap-1"><Shield className="size-3" /> Produits Écolabel</span>
          </div>
        </div>
      </section>

      {/* ── CONTENU SEO ── */}
      <FadeIn delay={0.1}>
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground">
            <h2>Nos prestations de nettoyage à L'Union</h2>
            <p>
              Située à proximité, l'équipe Clean&Fresh intervient rapidement sur l'ensemble de la commune de L'Union. 
              Nous sommes spécialisés dans le nettoyage en profondeur de tous vos textiles d'ameublement ainsi que l'entretien de vos espaces.
            </p>
            <ul>
              <li><strong>Nettoyage de canapés et fauteuils :</strong> Traitement des taches, ravivement des couleurs et traitement anti-odeur pour vos salons en tissu, cuir ou velours.</li>
              <li><strong>Entretien de matelas :</strong> Désinfection approfondie, traitement anti-acariens (traitement professionnel) et traitement des auréoles.</li>
              <li><strong>Shampouinage de tapis et moquettes :</strong> Nettoyage recto-verso et extraction des salissures incrustées au cœur des fibres.</li>
              <li><strong>Nettoyage automobile à domicile :</strong> Lavage intérieur complet de votre véhicule directement chez vous à L'Union.</li>
              <li><strong>Prestations pour le bâtiment :</strong> Nettoyage de fin de chantier, fin de bail, vitrerie, terrasses et façades.</li>
            </ul>

            <h2>Pourquoi faire appel à notre entreprise ?</h2>
            <p>
              Faire intervenir Clean&Fresh à L'Union, c'est faire le choix de la transparence et de l'efficacité. 
              Contrairement aux offres opaques, nous affichons clairement nos tarifs. Nos devis sont gratuits et envoyés sous 24h.
            </p>
            <p>
              Nous utilisons des machines d'injection-extraction professionnelles de haute puissance, garantissant un nettoyage en profondeur et un temps de séchage extrêmement réduit. De plus, nos produits sont sélectionnés pour leur efficacité tout en étant certifiés Écolabel européen, utilisés conformément aux recommandations du fabricant dans le respect de votre santé et de l'environnement.
            </p>
            
            <h2>Comment se déroule notre intervention ?</h2>
            <p>
              Le processus est simple : vous prenez rendez-vous en ligne ou par téléphone. À la date convenue, notre technicien se présente à votre adresse à L'Union avec son équipement complet. 
              Nous protégeons les zones environnantes, puis procédons au traitement : aspiration minutieuse, application des produits détachants, brossage, et enfin injection-extraction.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── AVIS ── */}
      <ReviewsCarousel />

      {/* ── CTA ── */}
      <FadeIn delay={0.2}>
        <section className="mx-auto max-w-4xl px-4 pb-16">
          <div className="rounded-3xl border border-primary/20 bg-card p-8 text-center shadow-[var(--shadow-soft)]">
            <Sparkles className="mx-auto mb-4 size-10 text-primary" />
            <h2 className="text-2xl font-bold">Besoin d'une intervention à L'Union ?</h2>
            <p className="mt-2 text-muted-foreground">
              Obtenez un devis gratuit sous 24h ou réservez directement votre créneau.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
                <Link to="/reserver">Réserver en ligne</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={COMPANY.phoneHref}>Appeler le {COMPANY.phone}</a>
              </Button>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
