import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMMUNES, COMPANY, SITE_URL } from "@/data/site";
import { sendContactMessage } from "@/lib/emailService";

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
    links: [{ rel: "canonical", href: `${SITE_URL}/contactez-nous` }],
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    
    // Remove photo logic

    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      await sendContactMessage({
        nom: result.data.nom,
        telephone: result.data.telephone,
        email: result.data.email,
        service: result.data.service,
        message: result.data.message,
      });
      toast.success("Votre message a été envoyé avec succès. Nous vous répondons sous 24h.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Une erreur s'est produite lors de l'envoi de votre message.");
    } finally {
      setIsSubmitting(false);
    }
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
          recevez une proposition sur-mesure sous 24 heures, assurée.
        </p>
      </div>

      {/* ── FORM + SIDEBAR ── */}
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 md:grid-cols-[1.4fr_1fr] items-start">

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card p-7 shadow-sm space-y-6"
        >
          {/* Nom + Téléphone side by side */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="grid gap-1">
              <Label htmlFor="nom" className="text-[11px] text-muted-foreground font-normal">Nom complet</Label>
              <Input id="nom" name="nom" maxLength={100} placeholder="" className="rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm shadow-none focus-visible:ring-0 focus-visible:border-primary transition-colors" />
              {errors["nom"] && <p className="text-xs text-destructive">{errors["nom"]}</p>}
            </div>
            <div className="grid gap-1">
              <Label htmlFor="telephone" className="text-[11px] text-muted-foreground font-normal">Téléphone</Label>
              <Input id="telephone" name="telephone" maxLength={20} placeholder="" className="rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm shadow-none focus-visible:ring-0 focus-visible:border-primary transition-colors" />
              {errors["telephone"] && <p className="text-xs text-destructive">{errors["telephone"]}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="grid gap-1">
            <Label htmlFor="email" className="text-[11px] text-muted-foreground font-normal">Email</Label>
            <Input id="email" name="email" type="email" maxLength={255} placeholder="" className="rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm shadow-none focus-visible:ring-0 focus-visible:border-primary transition-colors" />
            {errors["email"] && <p className="text-xs text-destructive">{errors["email"]}</p>}
          </div>

          {/* Service select */}
          <div className="grid gap-1">
            <Label htmlFor="service" className="text-[11px] text-muted-foreground font-normal">Type de prestation</Label>
            <div className="relative">
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full appearance-none rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm text-foreground shadow-none outline-none focus:border-primary focus:ring-0 transition-colors"
              >
                <option value="" disabled>Sélectionnez un service...</option>
                {SERVICES_LIST.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {/* Chevron */}
              <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {errors["service"] && <p className="text-xs text-destructive">{errors["service"]}</p>}
          </div>

          {/* Message */}
          <div className="grid gap-1">
            <Label htmlFor="message" className="text-[11px] text-muted-foreground font-normal">Détails de votre demande</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1000}
              placeholder=""
              className="rounded-none border-0 border-b border-border bg-transparent px-0 py-2 text-sm shadow-none focus-visible:ring-0 focus-visible:border-primary resize-none transition-colors"
            />
            {errors["message"] && <p className="text-xs text-destructive">{errors["message"]}</p>}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="w-full rounded-sm bg-black hover:bg-black/90 text-white font-bold uppercase tracking-widest text-xs disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? "Envoi en cours..." : "Demander un devis"}
            </Button>
          </div>
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
                  <p className="text-base font-bold text-accent">Devis sous 24h</p>
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
              {COMMUNES.map((c) => {
                const slug = c.toLowerCase().replace(/['\s]/g, "-");
                const hasPage = ["colomiers", "blagnac", "tournefeuille", "balma", "l-union"].includes(slug);
                return (
                  <li key={c} className="rounded-full border border-border bg-secondary text-xs font-semibold uppercase tracking-wide text-muted-foreground overflow-hidden">
                    {hasPage ? (
                      <a href={`/nettoyage-${slug}`} className="block px-3 py-1 hover:text-primary transition-colors">
                        {c}
                      </a>
                    ) : (
                      <span className="block px-3 py-1">{c}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
