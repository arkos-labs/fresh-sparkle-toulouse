import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMMUNES, COMPANY } from "@/data/site";

const TITLE = "Contact — Clean&Fresh, nettoyage à Toulouse";
const DESC =
  "Contactez Clean&Fresh à Toulouse : 07 67 12 75 00 ou formulaire en ligne. Devis gratuit sous 24h pour tous vos besoins de nettoyage, particuliers et professionnels.";

export const Route = createFileRoute("/contactez-nous")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contactez-nous" },
    ],
    links: [{ rel: "canonical", href: "/contactez-nous" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  nom: z.string().trim().min(2, "Merci d'indiquer votre nom").max(100),
  telephone: z
    .string()
    .trim()
    .min(6, "Numéro de téléphone invalide")
    .max(20, "Numéro de téléphone invalide"),
  email: z.string().trim().email("Adresse email invalide").max(255),
  message: z.string().trim().min(10, "Merci de détailler votre demande").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const body = `Nom : ${result.data.nom}\nTéléphone : ${result.data.telephone}\nEmail : ${result.data.email}\n\n${result.data.message}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      "Demande de devis — Clean&Fresh",
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Votre message est prêt à être envoyé. Nous répondons sous 24h.");
    form.reset();
  };

  return (
    <div className="pb-24 lg:pb-0">
      <section className="bg-hero-gradient text-ink-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Contactez Clean&Fresh</h1>
          <p className="mt-4 text-ink-foreground/80">
            Un devis gratuit sous 24h pour toutes vos demandes de nettoyage à Toulouse.
          </p>
          <Button asChild variant="cta" size="xl" className="mt-8">
            <a href={COMPANY.phoneHref}>
              <Phone /> {COMPANY.phone}
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <h2 className="text-2xl font-bold">Votre demande</h2>
          <div className="mt-6 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" name="nom" maxLength={100} placeholder="Votre nom" />
              {errors['nom'] && <p className="text-sm text-destructive">{errors['nom']}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="telephone">Téléphone</Label>
              <Input id="telephone" name="telephone" maxLength={20} placeholder="06 12 34 56 78" />
              {errors['telephone'] && <p className="text-sm text-destructive">{errors['telephone']}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                maxLength={255}
                placeholder="vous@exemple.fr"
              />
              {errors['email'] && <p className="text-sm text-destructive">{errors['email']}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Décrivez votre besoin : type de prestation, surface, commune…"
              />
              {errors['message'] && <p className="text-sm text-destructive">{errors['message']}</p>}
            </div>
            <Button type="submit" variant="hero" size="xl">
              Envoyer
            </Button>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-lg font-semibold">Nous joindre directement</h2>
            <a
              href={COMPANY.phoneHref}
              className="mt-4 flex items-center gap-2 font-semibold text-primary"
            >
              <Phone className="size-4" /> {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-3 flex items-center gap-2 break-all text-sm text-muted-foreground"
            >
              <Mail className="size-4 shrink-0" /> {COMPANY.email}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h2 className="text-lg font-semibold">Zone d'intervention</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {COMMUNES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-hero-gradient p-6 text-ink-foreground">
            <h2 className="text-lg font-semibold">Réservation en ligne</h2>
            <p className="mt-2 text-sm text-ink-foreground/80">
              Canapé, matelas, tapis, intérieur auto : choisissez votre créneau directement en 2 minutes, sans appel.
            </p>
            <Button asChild className="mt-4 w-full bg-accent-gradient text-accent-foreground font-bold hover:opacity-90">
              <a href={COMPANY.booking} target="_blank" rel="noopener noreferrer">
                Réserver un créneau
              </a>
            </Button>
          </div>
        </aside>
      </section>
    </div>
  );
}