import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { OG_IMAGE } from "@/data/site";
import { Header } from "@/components/site/Header";
import { Footer, StickyCallCta } from "@/components/site/Footer";
import { TopBanner } from "@/components/site/TopBanner";
import { Toaster } from "@/components/ui/sonner";
import { Chatbot } from "@/components/site/Chatbot";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: (ctx) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Clean&Fresh" },
      { property: "og:site_name", content: "Clean&Fresh" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Clean&Fresh — nettoyage professionnel Toulouse" },
      { name: "twitter:image", content: OG_IMAGE },
      { title: "Entreprise de nettoyage à Toulouse | Clean&Fresh" },
      { property: "og:title", content: "Entreprise de nettoyage à Toulouse | Clean&Fresh" },
      { name: "twitter:title", content: "Entreprise de nettoyage à Toulouse | Clean&Fresh" },
      { name: "description", content: "Entreprise de nettoyage à Toulouse et dans le 31 — canapé, matelas, tapis, auto, vitres, façade, fin de chantier. À domicile, Résultat soigné. Devis gratuit !" },
      { property: "og:description", content: "Entreprise de nettoyage à Toulouse et dans le 31 — canapé, matelas, tapis, auto, vitres, façade, fin de chantier. À domicile, Résultat soigné. Devis gratuit !" },
      { name: "twitter:description", content: "Entreprise de nettoyage à Toulouse et dans le 31 — canapé, matelas, tapis, auto, vitres, façade, fin de chantier. À domicile, Résultat soigné. Devis gratuit !" },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://cleanetfresh.fr${(ctx as { location?: { pathname?: string } })?.location?.pathname ?? ""}`,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Figtree:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/logo.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Clean&Fresh",
          url: "https://cleanetfresh.fr",
          description:
            "Entreprise de nettoyage à Toulouse pour particuliers et professionnels : canapé, matelas, tapis, auto, vitres, terrasse, toiture, façade, fin de chantier.",
          telephone: "+33767127500",
          email: "nettoyagecleanfresh@gmail.com",
          priceRange: "€€",
          image: "https://cleanetfresh.fr/realisations/photo-01.jpg",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "21:00",
          },
          areaServed: [
            { "@type": "City", name: "Toulouse" },
            { "@type": "City", name: "Blagnac" },
            { "@type": "City", name: "Colomiers" },
            { "@type": "City", name: "Tournefeuille" },
            { "@type": "City", name: "Balma" },
            { "@type": "City", name: "L'Union" },
            { "@type": "City", name: "Muret" },
            { "@type": "City", name: "Cugnaux" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Toulouse",
            addressRegion: "Haute-Garonne",
            postalCode: "31000",
            addressCountry: "FR",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="overflow-x-hidden w-full">
      <head>
        <HeadContent />
        {/* Google Tag — Analytics + Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GT-NBQQP8JN" />
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-NBQQP8JN');
          gtag('config', 'AW-17507775021');
        `}} />
      </head>
      <body className="overflow-x-hidden w-full">
        {children}
        <script dangerouslySetInnerHTML={{__html: `if(window.location.hostname.includes('lovable.app')||window.location.hostname.includes('vercel.app')) { var m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex, nofollow'; document.head.appendChild(m); }`}} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col overflow-x-hidden w-full">
        <TopBanner />
        <Header />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <StickyCallCta />
      <Chatbot />
      <Toaster />
    </QueryClientProvider>
  );
}
