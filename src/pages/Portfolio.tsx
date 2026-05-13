import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Website", "Mobile", "Ecommerce", "Hybrid App", "Startup", "Design"];

/* ─── Premium UI Mockup Previews mapping ─────────────────────────────── */

const projectImages: Record<string, string> = {
  "tago": "/portfolio_tago.png",
  "valley-sierra": "/portfolio_valley.png",
  "sqoop": "/portfolio_sqoop.png",
  "swolematch": "/portfolio_sqoop.png",
  "leed-pop": "/portfolio_tago.png",
  "xeke": "/portfolio_tago.png",
  "my-calsigns": "/portfolio_valley.png",
  "vespa-safari": "/portfolio_vespa.png",
};

const projects = [
  { slug: "tago", title: "Tago", subtitle: "Delivery Management System", description: "Real-time fleet tracking, route optimization, and driver management — built for a logistics operator scaling across Vietnam.", tags: ["Website", "Mobile"], tech: ["React", "Node.js", "React Native"], year: "2023", accent: "#ffffff" },
  { slug: "valley-sierra", title: "Valley Sierra", subtitle: "E-Commerce Platform", description: "Full-featured online store with custom product configurator, inventory sync, and a conversion-optimized checkout.", tags: ["Ecommerce", "Website"], tech: ["WooCommerce", "React", "PHP"], year: "2022", accent: "#ffffff" },
  { slug: "sqoop", title: "Sqoop", subtitle: "Mobile Data Platform", description: "A field data collection tool letting teams capture, validate, and visualize structured data on mobile — offline-first.", tags: ["Mobile", "Startup"], tech: ["React Native", "Python", "Django"], year: "2023", accent: "#ffffff" },
  { slug: "swolematch", title: "Swolematch", subtitle: "Fitness & Coaching App", description: "Athletes matched with elite trainers. Booking, live video sessions, and habit progress — in one native app.", tags: ["Mobile", "Startup"], tech: ["Swift", "Kotlin", "Firebase"], year: "2022", accent: "#ffffff" },
  { slug: "leed-pop", title: "Leed Pop", subtitle: "Lead Generation Platform", description: "Hybrid mobile + web dashboard for qualifying and converting leads at enterprise scale. Built for high-volume sales teams.", tags: ["Hybrid App", "Mobile", "Startup"], tech: ["Ionic", "Angular", "Node.js"], year: "2021", accent: "#ffffff" },
  { slug: "xeke", title: "XEKE", subtitle: "Mobility Startup", description: "On-demand vehicle service for Southeast Asia — real-time tracking, in-app payments, and surge-resilient architecture.", tags: ["Mobile", "Startup", "Website"], tech: ["React Native", "Laravel", "MySQL"], year: "2022", accent: "#ffffff" },
  { slug: "my-calsigns", title: "My CalSigns", subtitle: "Astrology & Wellness App", description: "Personalized wellness insights powered by astrology data — daily habit tracking and zodiac-driven recommendations.", tags: ["Startup", "Website"], tech: ["React", "Node.js", "PostgreSQL"], year: "2023", accent: "#ffffff" },
  { slug: "vespa-safari", title: "Vespa Safari", subtitle: "Travel Experience Website", description: "Award-winning booking platform for guided Vespa tours through Hue & Central Vietnam. Custom CMS, reservations, and map tours.", tags: ["Website", "Design"], tech: ["WordPress", "PHP", "JavaScript"], year: "2021", accent: "#ffffff" },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useScrollReveal();
  const imgUrl = projectImages[project.slug] || "/portfolio_tago.png";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group relative bg-background border-b md:border-b-0 md:border-r border-border last:border-r-0 flex flex-col hover:bg-foreground transition-colors duration-300 overflow-hidden"
      data-testid={`card-project-${project.slug}`}
    >
      {/* Image / Preview */}
      <div className="relative border-b border-border overflow-hidden bg-[#050505]" style={{ aspectRatio: "16/9" }}>
        <div className="absolute inset-0">
          <img
            src={imgUrl}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>
        <div className="absolute inset-0 bg-background/80 group-hover:bg-transparent transition-colors duration-500" />

        {/* Year watermark */}
        <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-500">
          {project.year}
        </div>
      </div>

      {/* Info strip */}
      <div className="p-8 flex flex-col flex-1">
        <span className="self-start text-[10px] font-bold uppercase tracking-[0.3em] border border-border text-foreground px-3 py-1 rounded-none mb-6 group-hover:border-background/30 group-hover:text-background transition-colors">
          {project.tags[0]}
        </span>
        <h3 className="font-bold text-2xl uppercase tracking-tighter text-foreground leading-tight mb-2 group-hover:text-background transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest mb-6 group-hover:text-background/70 transition-colors">
          {project.subtitle}
        </p>
        <p className="text-sm text-foreground/80 font-light leading-relaxed mb-6 flex-1 group-hover:text-background/90 transition-colors">
          {project.description}
        </p>
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-foreground mt-auto group-hover:text-background transition-colors">
          <span>View Project</span>
          <ArrowUpRight size={14} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useScrollReveal();
  const filterRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 container mx-auto px-6 md:px-12" ref={headerRef as React.RefObject<HTMLDivElement>}>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">
          Selected Work
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tighter uppercase leading-[1.05]">
            Built for <span className="text-accent italic font-light lowercase">real</span><br />
            businesses<span className="text-accent">.</span>
          </h1>
          <p className="text-[20px] text-muted-foreground font-light max-w-sm leading-relaxed mb-2">
            A selection of architectures spanning web, mobile, and enterprise platforms.
          </p>
        </div>
      </section>

      {/* Filter Grid */}
      <section className="border-t border-border overflow-hidden" ref={filterRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-6 md:px-12 py-8 flex flex-wrap gap-x-10 gap-y-6 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-bold uppercase tracking-[0.2em] pb-2 border-b-2 transition-colors ${activeFilter === cat
                ? "border-foreground text-foreground"
                : "border-transparent text-foreground/50 hover:text-foreground hover:border-foreground/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid — Bordered cells in container */}
      <section className="border-t border-border border-b mb-32">
        {filtered.length === 0 ? (
          <div className="text-center py-32 container mx-auto">
            <p className="text-4xl mb-4 text-muted-foreground/30">—</p>
            <p className="text-muted-foreground text-lg font-light">No records found for this index.</p>
          </div>
        ) : (
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-border">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden bg-background py-32 md:py-40"
        ref={ctaRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">
                Initiate Project
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-foreground leading-[1.1]">
                Ready to build<br />your system?
              </h2>
            </div>
            <div className="flex flex-col gap-6 md:items-end">
              <p className="text-lg text-muted-foreground font-light md:text-right max-w-sm">
                From architectural review to full-scale deployment, our team is ready to build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-none px-10 text-xs h-14 transition-colors uppercase tracking-[0.3em] font-bold"
                  >
                    Start Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
