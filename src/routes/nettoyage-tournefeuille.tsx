import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_URL, COMPANY } from "@/data/site";
import { FadeIn } from "@/components/ui/fade-in";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";

const TITLE = "Entreprise de nettoyage à Tournefeuille — Clean&Fresh";
const DESC = "Nettoyage canapé, matelas, tapis et auto à Tournefeuille dès 49 €. Déplacement à domicile, produits certifiés, résultat garanti. Devis gratuit sous 24h.";

export const Route = createFileRoute("/nettoyage-tournefeuille")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/nettoyage-tournefeuille` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/nettoyage-tournefeuille` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://cleanetfresh.fr" },
            { "@type": "ListItem", position: 2, name: "Nettoyage Tournefeuille", item: "https://cleanetfresh.fr/nettoyage-tournefeuille" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Clean&Fresh",
          url: "https://cleanetfresh.fr/nettoyage-tournefeuille",
          telephone: "+33767127500",
          areaServed: { "@type": "City", name: "Tournefeuille" },
          address: { "@type": "PostalAddress", addressLocality: "Toulouse", addressRegion: "Haute-Garonne", postalCode: "31000", addressCountry: "FR" },
          priceRange: "€€",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "102" },
        }),
      },
    ],
  }),
  component: LocalPage,
});

function LocalPage() {
  return (
    <div className="pb-24 lg:pb-0">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-hero-gradient text-ink-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-8 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur">
            <MapPin className="size-3" /> Intervention à Tournefeuille
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:mt-5 md:text-6xl">
            Entreprise de nettoyage à Tournefeuille
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-foreground/80 md:mt-5 md:text-base">
            Votre partenaire nettoyage à Tournefeuille. Nous nous déplaçons directement à votre domicile pour nettoyer vos canapés, matelas et véhicules. Nos techniciens se déploient avec le matériel professionnel pour un résultat optimal.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5 md:mt-8">
            <Button asChild size="xl" className="bg-accent-gradient text-accent-foreground font-bold shadow-[var(--shadow-card)] hover:opacity-90 px-4 md:px-6 h-10 md:h-12 text-xs md:text-sm">
              <Link to="/formules">Réserver en ligne</Link>
            </Button>
            <Button asChild variant="onDark" size="xl" className="px-4 md:px-6 h-10 md:h-12 text-xs md:text-sm">
              <Link to="/contactez-nous">Demander un devis</Link>
            </Button>
          </div>
          <div className="hidden md:flex mt-6 flex-wrap justify-center gap-4 text-xs text-ink-foreground/60">
            <span className="inline-flex items-center gap-1"><Clock className="size-3" /> Devis sous 24h</span>
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="size-3" /> Séchage rapide</span>
            <span className="inline-flex items-center gap-1"><Shield className="size-3" /> Produits Écolabel</span>
          </div>
        </div>
      </section>

      {/* ── CONTENU SEO ── */}
      <FadeIn delay={0.1}>
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground [&>p]:mb-5 [&>ul]:mb-5 [&>h2]:mt-10 [&>h2]:mb-4">
            <h2>Nos prestations de nettoyage à Tournefeuille</h2>
            <p>
              Tournefeuille, 30 000 habitants à 10 km à l'ouest de Toulouse, est une ville essentiellement résidentielle et familiale. Ses quartiers de maisons individuelles (Belbèze, Pin Vert, la Ramette) abritent de nombreux canapés, tapis et literies qui accumulent au fil du temps taches, acariens et odeurs difficiles à éliminer sans matériel professionnel.
            </p>
            <ul>
              <li><strong>Nettoyage de canapés et fauteuils :</strong> Traitement des taches, ravivement des couleurs et traitement anti-odeur pour vos salons en tissu, cuir ou velours.</li>
              <li><strong>Entretien de matelas :</strong> Désinfection approfondie, traitement anti-acariens (traitement professionnel) et traitement des auréoles.</li>
              <li><strong>Shampouinage de tapis et moquettes :</strong> Nettoyage recto-verso et extraction des salissures incrustées au cœur des fibres.</li>
              <li><strong>Nettoyage automobile à domicile :</strong> Lavage intérieur complet de votre véhicule directement chez vous à Tournefeuille.</li>
              <li><strong>Prestations pour le bâtiment :</strong> Nettoyage de fin de chantier, fin de bail, vitrerie, terrasses et façades.</li>
            </ul>

            <h2>Pourquoi faire appel à notre entreprise ?</h2>
            <p>Nos techniciens interviennent à Tournefeuille plusieurs fois par mois, dans tous les quartiers de la ville. La demande y est forte pour le nettoyage de canapés à poils courts ou velours, le traitement anti-acariens de matelas et le shampouinage de grands tapis de salon. Déplacement offert depuis Toulouse.</p>
            <p>À Tournefeuille, les foyers avec enfants et animaux représentent une grande partie de notre clientèle. Nos produits Écolabel sont sans danger pour les plus jeunes et les animaux domestiques. Le résultat est immédiat et le séchage garanti en 2 à 4h. Réservation en ligne possible en 2 minutes.</p>
            
            <h2>Comment se déroule notre intervention ?</h2>
            <p>
              Le processus est simple : vous prenez rendez-vous en ligne ou par téléphone. À la date convenue, notre technicien se présente à votre adresse à Tournefeuille avec son équipement complet. 
              Nous protégeons les zones environnantes, puis procédons au traitement : aspiration minutieuse, application des produits détachants, brossage, et enfin injection-extraction.
            </p>

            <h2>Nos services de nettoyage à Tournefeuille</h2>
            <p>
              Clean&Fresh intervient à Tournefeuille pour l'ensemble de ses prestations :{" "}
              <Link to="/nettoyage-canape-toulouse" className="text-primary font-medium hover:underline">nettoyage de canapé</Link>,{" "}
              <Link to="/nettoyage-matelas-toulouse" className="text-primary font-medium hover:underline">nettoyage de matelas</Link>,{" "}
              <Link to="/nettoyage-tapis-toulouse" className="text-primary font-medium hover:underline">shampouinage de tapis</Link>{" "}
              et <Link to="/nettoyage-auto-a-domicile-toulouse" className="text-primary font-medium hover:underline">nettoyage intérieur auto à domicile</Link>.
              Mêmes tarifs, même qualité et même équipement professionnel que dans toute l'agglomération toulousaine.
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
            <h2 className="text-2xl font-bold">Besoin d'une intervention à Tournefeuille ?</h2>
            <p className="mt-2 text-muted-foreground">
              Obtenez un devis gratuit sous 24h ou réservez directement votre créneau.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
                <Link to="/formules">Réserver en ligne</Link>
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
