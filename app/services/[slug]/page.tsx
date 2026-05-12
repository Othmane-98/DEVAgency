import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  MonitorSmartphone,
  PlugZap,
  ShoppingCart,
  Users,
} from "lucide-react";
import { getServiceBySlug, serviceDetails, type ServiceIcon } from "@/content/services";

const iconMap: Record<ServiceIcon, typeof Users> = {
  users: Users,
  cpu: Cpu,
  shoppingCart: ShoppingCart,
  monitor: MonitorSmartphone,
  plug: PlugZap,
};

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | DevAgence`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const relatedServices = serviceDetails.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-background pb-24">
      <section className="relative isolate overflow-hidden border-b border-border/50">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),transparent_55%)]" />
        <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 lg:px-8 md:pb-24 md:pt-36">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux services
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Icon className="h-4 w-4" />
                {service.navLabel}
              </div>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
                {service.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {service.heroLead}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Lancer ce projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/processus"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Voir notre méthode
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-card/40 p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Ce que vous obtenez</p>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {service.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-[1.75rem] border border-border/60 bg-card/30 p-6 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-foreground">{highlight.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-border/50 bg-card/20 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Idéal pour</p>
            <ul className="mt-6 space-y-4">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border/50 bg-gradient-to-br from-card/50 via-card/25 to-background p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Livrables clés</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-border/60 bg-background/70 p-5">
                  <p className="text-sm leading-6 text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Notre approche</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Une solution pensée pour durer.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {service.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[2rem] border border-border/60 bg-card/30 p-8 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
        <div className="rounded-[2.5rem] border border-border/60 bg-card/25 p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Stack & intégration</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Un socle solide, documenté et prêt à évoluer.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nous choisissons la stack selon vos contraintes d'équipe, de charge et d'intégration pour garder un produit maintenable dans le temps.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {service.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
        <div className="rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-[#1A1C1C] to-background p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Explorer aussi</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                D'autres expertises complémentaires à ce service.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-white"
            >
              Voir toutes les solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {relatedServices.map((item) => {
              const RelatedIcon = iconMap[item.icon];

              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/50 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <RelatedIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
        <div className="rounded-[2.5rem] border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Prochaine étape</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Parlons de votre besoin et cadrons une feuille de route claire.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Nous vous aidons à prioriser le périmètre, choisir la bonne architecture et estimer un planning réaliste.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/contact?message=${encodeURIComponent(service.ctaMessage)}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Échanger avec l'équipe
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
