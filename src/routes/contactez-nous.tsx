import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
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

const SERVICES_LIST = [
  "Nettoyage canapé",
  "Nettoyage matelas",
  "Nettoyage tapis",
  "Nettoyage auto (intérieur)",
  "Nettoyage de vitres",
  "Nettoyage terrasse",
  "Nettoyage toiture",
  "Nettoyage façade",
  "Nettoyage appartement / maison",
  "Nettoyage fin de chantier",
  "Nettoyage extrême",
  "Autre",
];

const schema = z.object({
  nom: z.string().trim().min(2, "Merci d'indiquer votre nom").max(100),
  telephone: z.string().trim().min(6, "Numéro invalide").max(20),
  email: z.string().trim().email("Adresse email invalide").max(255),
  service: z.string().min(1, "Veuillez sélectionner un service"),
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
    const body = `Nom : ${result.data.nom}\nTéléphone : ${result.data.telephone}\nEmail : ${result.data.email}\nPrestation : ${result.data.service}\n\n${result.data.message}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      "Demande de devis — Clean&Fresh",
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Votre message est prêt à être envoyé. Nous répondons sous 24h.");
    form.reset();
  };

  return (
    <div className="pb-24 lg:pb-0">
      {/* ── TITLE ── */}
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Demander un Devis Gratuit
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Confiez-nous l'entretien de votre intérieur. Remplissez le formulaire ci-dessous et
          recevez une proposition sur-mesure sous 24 heures, garantie.
        </p>
      </div>

      {/* ── FORM + SIDEBAR ── */}
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 md:grid-cols-[1.4fr_1fr] items-start">

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
        >
          {/* Nom + Téléphone side by side */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="nom">Nom complet</Label>
              <Input id="nom" name="nom" maxLength={100} placeholder="Jean Dupont" />
              {errors.nom && <p className="text-xs text-destructive">{errors.nom}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="telephone">Téléphone</Label>
              <Input id="telephone" name="telephone" maxLength={20} placeholder="07 67 12 75 00" />
              {errors.telephone && <p className="text-xs text-destructive">{errors.telephone}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="mt-4 grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" maxLength={255} placeholder="jean.dupont@email.com" />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          {/* Service select */}
          <div className="mt-4 grid gap-2">
            <Label htmlFor="service">Type de prestation</Label>
            <div className="relative">
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full appearance-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
              >
                <option value="" disabled>Sélectionnez un service...</option>
                {SERVICES_LIST.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {/* Chevron */}
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
          </div>

          {/* Message */}
          <div className="mt-4 grid gap-2">
            <Label htmlFor="message">Détails de votre demande</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Décrivez l'état actuel, la surface estimée, ou toute information utile..."
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="xl"
            className="mt-6 w-full bg-accent-gradient text-accent-foreground font-bold hover:opacity-90"
          >
            Demander un devis <ArrowRight className="size-4" />
          </Button>
        </form>

        {/* Sidebar */}
        <aside className="space-y-4">
          {/* Contact direct — dark card */}
          <div className="rounded-2xl bg-ink p-6 text-ink-foreground shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-bold">Contact Direct</h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="size-4 text-ink-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink-foreground/50">Téléphone</p>
                  <a href={COMPANY.phoneHref} className="text-base font-bold text-ink-foreground hover:text-accent transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="size-4 text-ink-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink-foreground/50">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-sm font-medium text-ink-foreground/80 hover:text-ink-foreground break-all transition-colors">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Clock className="size-4 text-ink-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink-foreground/50">Engagement</p>
                  <p className="text-base font-bold text-accent">Devis garanti sous 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zones */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h2 className="flex items-center gap-2 text-base font-bold">
              <MapPin className="size-4 text-primary" /> Zones d'Intervention
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Nous nous déplaçons directement chez vous avec notre matériel professionnel dans toute l'agglomération toulousaine.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {COMMUNES.map((c) => (
                <li key={c} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
