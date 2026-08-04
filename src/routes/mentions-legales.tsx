import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/data/site";
import { FadeIn } from "@/components/ui/fade-in";

const TITLE = "Mentions Légales — Clean&Fresh";
const DESC = "Mentions légales de Clean&Fresh, entreprise de nettoyage à Toulouse.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/mentions-legales` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/mentions-legales` }],
  }),
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  return (
    <div className="pb-24 lg:pb-0">
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl text-center mb-8">
          Mentions Légales
        </h1>
        
        <FadeIn delay={0.1}>
          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground bg-card p-8 rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>Clean&Fresh</strong> est édité par :<br />
              <strong>Clean&Fresh</strong><br />
              [Adresse de l'entreprise - à compléter]<br />
              31000 Toulouse, France<br />
              Numéro SIRET : [Numéro SIRET - à compléter]<br />
              Email : contact@cleanetfresh.fr<br />
              Téléphone : 07 67 12 75 00
            </p>

            <h2>2. Directeur de la publication</h2>
            <p>
              Le Directeur de la publication est [Nom du dirigeant - à compléter].
            </p>

            <h2>3. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>[Nom de l'hébergeur]</strong><br />
              [Adresse de l'hébergeur]
            </p>

            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>

            <h2>5. Limite de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour. Toutefois, Clean&Fresh ne saurait être tenu pour responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
