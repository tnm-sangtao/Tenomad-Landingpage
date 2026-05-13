import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { ArrowUpRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "They delivered beyond our expectations — and I've worked with development teams across three continents. Tenomad operates at a different caliber entirely.",
    author: "James Sterling",
    initials: "JS",
    role: "Vice Chairman",
    company: "Nasdaq-listed company",
    location: "New York, USA",
    stars: 5,
    featured: true,
  },
  {
    quote: "Finding an offshore team that pushes back on bad ideas is rare. Tenomad doesn't just build what you ask for — they build what the product actually needs.",
    author: "Sarah Chen",
    initials: "SC",
    role: "Founder & CEO",
    company: "Aura Health",
    location: "New York, USA",
    stars: 5,
    featured: false,
  },
  {
    quote: "The technical architecture they designed allowed us to scale from 10k to 500k users without a single infrastructure rewrite.",
    author: "Nguyen Van Binh",
    initials: "NB",
    role: "CTO",
    company: "Vanguard Logistics",
    location: "Ho Chi Minh City",
    stars: 5,
    featured: false,
  },
  {
    quote: "Their React Native team shipped our iOS and Android apps simultaneously, cutting our time-to-market in half without sacrificing quality.",
    author: "Marcus T.",
    initials: "MT",
    role: "Product Lead",
    company: "Altitude FinTech",
    location: "Sydney, AU",
    stars: 5,
    featured: false,
  },
  {
    quote: "We brought them in to salvage a failing AI integration. Within three weeks, they refactored the pipeline and had a working prototype in production.",
    author: "David Ross",
    initials: "DR",
    role: "VP Engineering",
    company: "Nexus AI",
    location: "San Francisco, USA",
    stars: 5,
    featured: false,
  },
  {
    quote: "Professionalism, transparency, and elite code quality. They are now a core part of our digital transformation strategy going into 2025.",
    author: "Le Thi Mai",
    initials: "LM",
    role: "Director of Innovation",
    company: "VietRetail Group",
    location: "Hanoi, Vietnam",
    stars: 5,
    featured: false,
  },
];

function Stars({ count, light = false }: { count: number; light?: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill={i < count ? "currentColor" : "none"}
          className={light ? "text-background" : "text-foreground"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 1l1.854 3.756 4.146.602-3 2.924.708 4.128L8 10.25l-3.708 1.96.708-4.128-3-2.924 4.146-.602z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, isLast }: { t: typeof TESTIMONIALS[0]; isLast: boolean }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative bg-card border-b border-border p-10 flex flex-col gap-8 hover:bg-surface transition-colors duration-500 overflow-hidden h-full ${isLast ? "border-b-0" : ""
        }`}
    >
      {/* Sharp accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-foreground scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

      {/* Stars */}
      <Stars count={t.stars} />

      {/* Quote */}
      <p className="text-xl leading-tight text-foreground font-bold uppercase tracking-tighter flex-1">
        "{t.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <div className="w-10 h-10 bg-foreground flex items-center justify-center text-xs font-medium text-background shrink-0 rounded-none tracking-wider">
          {t.initials}
        </div>
        <div className="min-w-0">
          <p className="font-medium text-sm text-foreground uppercase tracking-wider truncate">{t.author}</p>
          <p className="text-xs text-muted-foreground font-light truncate mt-1">
            {t.role}, {t.company}
          </p>
        </div>
        <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground shrink-0 hidden sm:block">
          {t.location}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const featuredRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Header ── */}
      <section
        className="pt-40 pb-24 md:pt-48 md:pb-28 px-6 md:px-12 container mx-auto border-b border-border"
        ref={headerRef as React.RefObject<HTMLDivElement>}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">
              THE PROOF
            </p>
            <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase leading-[1.05] tracking-tighter text-foreground">
              In their<br />own words<span className="text-accent">.</span>
            </h1>
          </div>
          <div className="md:text-right max-w-sm pb-2">
            <p className="text-[20px] text-muted-foreground leading-relaxed font-light">
              We let the work speak for itself — but occasionally, our clients say it better.
            </p>
            {/* Quick trust metrics */}
            <div className="flex gap-10 md:justify-end mt-12 border-t border-border pt-6">
              {[["90+", "Projects"], ["5★", "Avg rating"], ["3", "Continents"]].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl font-medium text-foreground tracking-tighter">{v}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured quote — full-width stark card ── */}
      <section
        className="border-b border-border bg-foreground"
        ref={featuredRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Giant quote mark */}
            <div className="md:col-span-1 hidden md:block">
              <span className="text-[8rem] leading-none font-serif text-background/20 select-none">"</span>
            </div>

            {/* Quote body */}
            <div className="md:col-span-8 flex flex-col gap-8">
              <Stars count={featured.stars} light />
              <blockquote className="text-3xl md:text-5xl font-bold uppercase text-background leading-[1.1] tracking-tighter">
                {featured.quote}
              </blockquote>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 bg-background flex items-center justify-center text-sm font-medium text-foreground shrink-0 rounded-none tracking-widest">
                  {featured.initials}
                </div>
                <div>
                  <p className="font-medium uppercase tracking-wider text-background">{featured.author}</p>
                  <p className="text-xs font-light text-background/60 mt-1">{featured.role}, {featured.company}</p>
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className="md:col-span-3 md:text-right self-end">
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-background/50 border border-background/20 px-4 py-2 rounded-none">
                {featured.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cards grid ── */}
      <section
        className="container mx-auto px-6 md:px-12"
        ref={gridRef as React.RefObject<HTMLDivElement>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-x border-b border-border">
          {rest.map((t, index) => (
            <TestimonialCard key={t.author} t={t} isLast={index === rest.length - 1} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="container mx-auto px-6 md:px-12 py-32 md:py-40 bg-background"
        ref={ctaRef as React.RefObject<HTMLDivElement>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Ready to be next?</p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[1.1]">
              Let's write your<br />success story.
            </h2>
          </div>
          <div className="md:flex md:justify-end">
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-3 bg-foreground hover:bg-foreground/90 text-background font-medium px-10 h-16 rounded-none text-base transition-colors duration-300 cursor-pointer uppercase tracking-wider">
                Start a project <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

