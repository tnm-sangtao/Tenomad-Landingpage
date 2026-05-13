import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { ArrowUpRight, Globe, Smartphone, Layers, Brain, ShieldCheck, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "web-development",
    number: "01",
    icon: Globe,
    title: "Web Development",
    tagline: "Scalable, high-performance web apps.",
    description: "For startups needing a robust MVP or enterprises modernising legacy systems. React, Node.js, Next.js, and solid architectural principles.",
    highlights: ["React / Next.js", "Node.js / Express", "PostgreSQL"],
  },
  {
    slug: "mobile-development",
    number: "02",
    icon: Smartphone,
    title: "Mobile Development",
    tagline: "Native & cross-platform apps that feel right.",
    description: "iOS and Android apps built with Swift, Kotlin, or React Native. We focus on 60fps performance and intuitive interactions.",
    highlights: ["React Native", "Swift / Kotlin", "Offline-first"],
  },
  {
    slug: "ui-ux-design",
    number: "03",
    icon: Layers,
    title: "UI / UX Design",
    tagline: "Interfaces built to be used, not admired.",
    description: "From wireframes to high-fidelity prototypes. We design systems that users actually enjoy interacting with.",
    highlights: ["Figma prototypes", "Design systems", "Usability testing"],
  },
  {
    slug: "ai-nlp-consulting",
    number: "04",
    icon: Brain,
    title: "AI & NLP Consulting",
    tagline: "Intelligent features woven into your product.",
    description: "Leveraging LLMs, machine learning, and NLP to automate workflows and create meaningful user experiences.",
    highlights: ["LLM integration", "Custom ML models", "Workflow automation"],
  },
  {
    slug: "quality-assurance",
    number: "05",
    icon: ShieldCheck,
    title: "Quality Assurance",
    tagline: "Software that survives contact with reality.",
    description: "Automated test suites, manual edge-case hunting, and performance profiling before a single user sees the build.",
    highlights: ["Automated testing", "Performance profiling", "CI/CD integration"],
  },
  {
    slug: "dedicated-teams",
    number: "06",
    icon: Users,
    title: "Dedicated Offshore Teams",
    tagline: "A seamless extension of your engineering team.",
    description: "Full-time, fully integrated squads based in our Hue City office, operating in your tools and matching your agile cadence.",
    highlights: ["Senior engineers only", "Timezone-flexible", "Your tools & rituals"],
  },
  {
    slug: "startups",
    number: "07",
    icon: Rocket,
    title: "Startups",
    tagline: "Go from concept to market-ready MVP.",
    description: "Rapid prototyping, agile iteration, and technical foundation advice designed specifically for early-stage companies raising capital.",
    highlights: ["Rapid MVP Build", "Tech Architecture", "Pitch Tech Support"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useScrollReveal();
  const Icon = service.icon;

  return (
    <Link href={`/services/${service.slug}`} data-testid={`link-service-${service.slug}`}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`group relative bg-background p-10 md:p-12 flex flex-col gap-8 cursor-pointer hover:bg-foreground transition-colors duration-500 overflow-hidden h-full border-b border-border ${(index + 1) % 3 !== 0 ? "md:border-r border-border" : ""
          }`}
      >
        {/* Number watermark */}
        <span className="absolute top-6 right-8 text-[7rem] font-bold tracking-tighter leading-none text-foreground/[0.03] group-hover:text-background/[0.05] select-none font-mono transition-colors duration-500">
          {service.number}
        </span>

        {/* Top row: icon + arrow */}
        <div className="flex items-start justify-between relative z-10">
          <Icon size={24} strokeWidth={1} className="text-foreground group-hover:text-background transition-colors duration-500" />
          <div className="text-muted-foreground group-hover:text-background transition-all duration-300">
            <ArrowUpRight
              size={20}
              strokeWidth={1}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Title + tagline */}
        <div className="relative z-10 mt-12">
          <h2 className="text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-background mb-3 leading-tight transition-colors duration-500">
            {service.title}
          </h2>
          <p className="text-sm font-bold text-muted-foreground group-hover:text-background/80 leading-relaxed uppercase tracking-widest transition-colors duration-500">
            {service.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground group-hover:text-background/80 leading-relaxed relative z-10 flex-1 font-light transition-colors duration-500">
          {service.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 relative z-10 mt-6">
          {service.highlights.map((h) => (
            <span
              key={h}
              className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 border border-border text-muted-foreground group-hover:text-background group-hover:border-background/30 transition-colors duration-300"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Subtle accent bar — bottom, grows on hover */}
        <div className="absolute bottom-0 left-0 h-[1px] bg-foreground w-0 group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </Link>
  );
}

export default function Services() {
  const headerRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen pt-32 md:pt-40 pb-0">

      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32" ref={headerRef as React.RefObject<HTMLDivElement>}>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">What we do</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[1.05] text-foreground">
            Capabilities<span className="text-accent">.</span>
          </h1>
          <p className="text-[20px] text-muted-foreground max-w-lg leading-relaxed font-light">
            End-to-end product development. We don't just write code — we design, build, and scale entire digital ecosystems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-x border-border">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section
        className="border-b border-border bg-background overflow-hidden"
        ref={statsRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-x border-border">
            {[
              { value: "10+", label: "Years building" },
              { value: "90+", label: "Projects shipped" },
              { value: "7", label: "Core service areas" },
              { value: "100%", label: "Senior-led teams" },
            ].map((s) => (
              <div key={s.label} className="px-10 py-12 md:py-16 text-center md:text-left bg-surface/30">
                <p className="text-4xl md:text-5xl font-medium text-foreground tabular-nums mb-3" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
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
                Not sure where to start?
              </p>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[1.1]">
                Let's figure out what<br />you actually need.
              </h2>
            </div>
            <div className="flex flex-col gap-6 md:items-end">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-none px-10 text-xs uppercase tracking-widest h-14 font-semibold transition-colors inline-flex items-center gap-3"
                >
                  Talk to us <ArrowUpRight size={18} strokeWidth={1.5} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
