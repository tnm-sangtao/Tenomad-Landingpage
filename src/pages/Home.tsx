import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import HeroIllustration from "@/components/HeroIllustration";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Luxury Partner Brand Logos (SVG Vector Minimalist Designs)
const AuraIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="12" strokeDasharray="3 3" />
    <circle cx="16" cy="16" r="6" className="fill-current/5" />
    <path d="M16 4v4M16 24v4M4 16h4M24 16h4" strokeLinecap="round" />
  </svg>
);

const NexusIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 9l14 14M23 9L9 23" />
    <circle cx="9" cy="9" r="2.5" fill="currentColor" />
    <circle cx="23" cy="9" r="2.5" fill="currentColor" />
    <circle cx="9" cy="23" r="2.5" fill="currentColor" />
    <circle cx="23" cy="23" r="2.5" fill="currentColor" />
    <circle cx="16" cy="16" r="4.5" strokeWidth="1" />
  </svg>
);

const VanguardIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M16 3L6 8v10l10 7 10-7V8L16 3z" />
    <path d="M16 3v22" strokeDasharray="2 2" />
    <path d="M12 13l4-2.5 4 2.5-4 5.5-4-5.5z" className="fill-current/5" />
  </svg>
);

const AltitudeIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4L4 26h24L16 4z" />
    <path d="M16 10l-7 11h14l-7-11z" className="fill-current/5" />
    <path d="M12 26v-4h8v4" />
  </svg>
);

const LeedPopIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="20" height="20" rx="3" />
    <path d="M12 12h8v8h-8z" strokeDasharray="2 2" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
  </svg>
);

const ValleyIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8l12 18L28 8" />
    <path d="M8 8l8 12 8-12" strokeDasharray="3 3" />
    <path d="M12 8l4 6 4-6" />
  </svg>
);

const sampleLogos = [
  { name: "AURA CORE", icon: <AuraIcon /> },
  { name: "NEXUS LABS", icon: <NexusIcon /> },
  { name: "VANGUARD", icon: <VanguardIcon /> },
  { name: "ALTITUDE", icon: <AltitudeIcon /> },
  { name: "LEED POP", icon: <LeedPopIcon /> },
  { name: "VALLEY OS", icon: <ValleyIcon /> },
];

const showcaseItems = [
  {
    id: 1,
    title: "The Digital Sanctuary",
    subtitle: "Our peaceful & productive workspace in Hue City, built to inspire focus.",
    category: "LABORATORY",
    image: "/hue_studio.png",
  },
  {
    id: 2,
    title: "Vespa FinTech Evolution",
    subtitle: "High-performance dashboard & digital asset tracking for European markets.",
    category: "FINTECH",
    image: "/portfolio_vespa.png",
  },
  {
    id: 3,
    title: "Sqoop Analytics Console",
    subtitle: "Enterprise data visualization and real-time query builder.",
    category: "DATA SYSTEMS",
    image: "/portfolio_sqoop.png",
  },
  {
    id: 4,
    title: "Tago Smart Mobility",
    subtitle: "IoT dashboard & fleet management interface for electric vehicles.",
    category: "INTERNET OF THINGS",
    image: "/portfolio_tago.png",
  },
  {
    id: 5,
    title: "Valley Cloud Infrastructure",
    subtitle: "SaaS system manager with automated deployment & server metrics.",
    category: "SAAS PLATFORM",
    image: "/portfolio_valley.png",
  },
];


function AnimatedCounter({ end, duration = 1200 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (prefersReducedMotion) { setCount(end); return; }
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, hasTriggered]);

  return <span ref={ref}>{count}</span>;
}

export default function Home() {
  const heroRef = useScrollReveal();
  const problemRef = useScrollReveal();
  const solutionRef = useScrollReveal();
  const showcaseRef = useScrollReveal();
  const statRef = useScrollReveal();
  const processRef = useScrollReveal();
  const proofRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Delay YouTube iframe initialization to prevent blocking the main thread during initial page load
    const timer = setTimeout(() => setIsVideoLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  return (
    <div className="flex flex-col min-h-screen pt-32 md:pt-40">

      {/* ── Hero ── */}
      <section
        className="pb-12 md:pb-16 overflow-hidden flex flex-col items-center text-center w-full"
        ref={heroRef as React.RefObject<HTMLDivElement>}
      >
        <motion.div
          className="container mx-auto px-6 md:px-12 max-w-3xl mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-tighter text-foreground mb-4">
            Engineering with <br className="hidden md:block" />
            absolute <span className="text-accent italic lowercase font-normal">precision</span>.
          </h1>
          <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed mb-6 font-light max-w-2xl mx-auto">
            High-end product engineering for global innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-none px-8 font-semibold uppercase tracking-widest text-xs h-14 transition-colors" data-testid="button-hero-start-project">
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-none px-8 font-semibold uppercase tracking-widest text-xs h-14 bg-transparent hover:bg-foreground hover:text-background border-border text-foreground transition-colors" data-testid="button-hero-view-services">
                View Our Services
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="w-full opacity-95 px-0"
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          animate={{ opacity: 0.95, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full relative overflow-hidden bg-black aspect-video md:aspect-[21/9]">
            {isVideoLoaded && (
              <iframe
                className="absolute top-0 left-0 w-full h-full pointer-events-none scale-[1.02]"
                src="https://www.youtube.com/embed/FPhg_ZjrPtU?autoplay=1&mute=1&loop=1&playlist=FPhg_ZjrPtU&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1"
                title="Tenomad Hero Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </motion.div>
      </section>

      {/* ── Problem ── */}
      <section
        className="py-0 overflow-hidden"
        ref={problemRef as React.RefObject<HTMLDivElement>}
      >
        {/* Label row */}
        <div className="container mx-auto px-6 md:px-12 pb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground">
            The problem
          </p>
        </div>

        {/* Full-bleed heading */}
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[1.1] max-w-3xl">
            Finding a partner you can <span className="italic lowercase font-normal text-accent">actually</span> trust is exhausting.
          </h2>
        </div>

        {/* Pain cards — grid with container padding */}
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-x border-border">
            {[
              {
                num: "01",
                title: "The Communication Chasm",
                body: "Timezone mismatches, language barriers, and endless games of telephone turn simple features into week-long debates.",
                tag: "Communication",
              },
              {
                num: "02",
                title: "The Quality Drop-off",
                body: "The senior engineers who pitched you are replaced by juniors the day the contract is signed. Tech debt quietly mounts.",
                tag: "Quality",
              },
              {
                num: "03",
                title: "The Black Box",
                body: "You throw requirements over the wall and wait weeks for a build that misses the mark — then the cycle repeats.",
                tag: "Transparency",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`group relative bg-card p-10 md:p-12 flex flex-col gap-10 border-border ${i < 2 ? "md:border-r" : ""
                  } border-b md:border-b-0 hover:bg-foreground transition-colors duration-500`}
                data-testid={`card-pain-${i + 1}`}
              >
                {/* Number watermark */}
                <span className="text-[7rem] font-bold tracking-tighter leading-none text-foreground/[0.03] group-hover:text-background/[0.05] absolute top-6 right-8 select-none transition-colors duration-500">
                  {item.num}
                </span>

                {/* Tag */}
                <span className="self-start text-[10px] font-bold uppercase tracking-[0.2em] border border-border group-hover:border-background/30 text-muted-foreground group-hover:text-background px-3 py-1 rounded-none transition-colors duration-500">
                  {item.tag}
                </span>

                <div className="flex-1 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-background mb-4 leading-tight transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-background/80 text-base leading-relaxed font-light transition-colors duration-500">{item.body}</p>
                </div>

                {/* Subtle accent bar — bottom, grows on hover */}
                <div className="h-[1px] bg-border group-hover:bg-background transition-colors duration-500 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section
        className="py-32 container mx-auto px-6 md:px-12"
        ref={solutionRef as React.RefObject<HTMLDivElement>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">
              The Tenomad difference
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[1.1] mb-0">
              Offshore quality.<br />
              <span className="text-accent font-light italic lowercase">Without</span> the offshore risk.
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 pt-2 md:pt-16">
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Based in Hue City, Vietnam — where lower overhead meets world-class engineering talent. We merge the best of both worlds: competitive offshore pricing with the communication standards, transparency, and craftsmanship of a top-tier Western agency.
            </p>
            <div className="flex flex-col gap-6">
              {[
                "Senior engineers on every project — no bait and switch",
                "Async-first, overlap-friendly, with weekly live demos",
                "Direct access to your lead engineer, always",
              ].map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <span className="w-4 h-[1px] bg-foreground shrink-0" />
                  <p className="text-base text-foreground/80 font-light">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Showcase Carousel Section ── */}
      <section
        className="py-24 border-t border-border overflow-hidden bg-background"
        ref={showcaseRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">
              The Digital Lab & Shipped Products
            </p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[1.1] mb-6">
              Where vision meets <span className="italic lowercase font-normal text-accent">flawless</span> execution.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              A glimpse into our sanctuary in Hue City and the premium digital systems we design and engineer for clients worldwide.
            </p>
          </div>

          {/* Interactive Carousel */}
          <div
            className="relative w-full mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Aspect Frame */}
            <div className="relative overflow-hidden aspect-[16/9] w-full bg-black border border-border group/carousel">
              {/* Track */}
              <motion.div
                className="flex h-full w-full cursor-grab active:cursor-grabbing"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(e, info) => {
                  const threshold = 50;
                  if (info.offset.x < -threshold) {
                    handleNext();
                  } else if (info.offset.x > threshold) {
                    handlePrev();
                  }
                }}
              >
                {showcaseItems.map((item, index) => (
                  <div key={item.id} className="relative w-full min-w-full h-full shrink-0 select-none overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {/* Overlay vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10 pointer-events-none" />
                  </div>
                ))}
              </motion.div>

              {/* Floating Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-none bg-black/70 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-primary hover:text-black focus:outline-none cursor-pointer z-20"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-none bg-black/70 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-primary hover:text-black focus:outline-none cursor-pointer z-20"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Description Card Overlay */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-auto z-10 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="backdrop-blur-md bg-black/50 border border-white/10 p-6 md:p-8 max-w-md pointer-events-auto"
                  >
                    <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-primary uppercase mb-3">
                      {showcaseItems[activeIndex].category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-3 leading-tight">
                      {showcaseItems[activeIndex].title}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                      {showcaseItems[activeIndex].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dynamic Indicators */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {showcaseItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="relative py-3 focus:outline-none cursor-pointer group/dot"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className="w-10 h-[2px] bg-zinc-800 transition-colors duration-300 group-hover/dot:bg-zinc-600" />
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute top-3 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Singular Moment — Stats wall ── */}
      <section
        className="bg-background border-y border-border overflow-hidden"
        ref={statRef as React.RefObject<HTMLDivElement>}
      >
        {/* Main counter */}
        <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 text-center">
          <div
            className="font-medium text-foreground leading-none tracking-tighter tabular-nums"
            style={{ fontSize: "clamp(6rem, 22vw, 16rem)" }}
          >
            <AnimatedCounter end={90} />+
          </div>
          <p className="text-m tracking-[0.3em] uppercase text-foreground font-bold mt-5">
            Completed Projects
          </p>
        </div>

        {/* Three sub-stats — divider row in container */}
        <div className="container mx-auto px-6 md:px-12">
          <div className="border-t border-border grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-x border-border">
            {[
              { value: "10+", label: "Years of experience", sub: "Since 2014, Hue City" },
              { value: "3", label: "Continents served", sub: "US · Europe · Asia-Pacific" },
              { value: "100%", label: "Senior-led projects", sub: "No juniors hidden post-contract" },
            ].map((stat) => (
              <div key={stat.value} className="px-10 py-12 md:py-16 text-center md:text-left bg-surface/30">
                <p
                  className="text-5xl md:text-6xl font-medium text-foreground tabular-nums mb-3"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.value}
                </p>
                <p className="text-base font-medium text-foreground/80 mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground font-light">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we build ── */}
      <section
        className="py-32 container mx-auto px-6 md:px-12"
        ref={processRef as React.RefObject<HTMLDivElement>}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">How we build.</h2>
          <p className="text-muted-foreground text-lg max-w-sm font-light">
            A disciplined process — visible at every stage.
          </p>
        </div>

        {/* Steps — horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-border">
          {[
            {
              num: "01",
              title: "Discovery & Architecture",
              body: "We untangle your requirements, define the technical architecture, and map a precise roadmap. No assumptions.",
            },
            {
              num: "02",
              title: "Iterative Engineering",
              body: "Clean code, daily commits, weekly demos. You see the product taking shape in real-time.",
            },
            {
              num: "03",
              title: "Quality Assurance",
              body: "Automated and manual testing ensures the product performs beautifully under pressure before any code ships.",
            },
            {
              num: "04",
              title: "Launch & Scale",
              body: "Seamless deployment, monitoring setup, and ongoing support to evolve as your user base grows.",
            },
          ].map((step, i) => (
            <div
              key={step.num}
              className={`relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-border last:border-r-0 flex flex-col gap-6 group hover:bg-foreground transition-colors duration-500`}
              data-testid={`card-process-${i + 1}`}
            >
              {/* connector dot */}
              <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-border" />
              <div className="hidden md:block absolute -top-[4px] left-10 w-2 h-2 bg-foreground" />

              <span className="text-3xl font-bold tracking-tighter text-foreground/20 font-mono group-hover:text-background/40 transition-colors duration-500">
                {step.num}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-bold uppercase tracking-tighter mb-3 leading-tight text-foreground group-hover:text-background transition-colors duration-500">{step.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-background/80 leading-relaxed font-light transition-colors duration-500">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Proof ── */}
      <section
        className="py-0 overflow-hidden"
        ref={proofRef as React.RefObject<HTMLDivElement>}
      >
        <div className="border-y border-foreground bg-foreground text-background py-8">
          <div className="flex w-full overflow-hidden">
            <div className="flex animate-marquee-slow whitespace-nowrap gap-16 items-center">
              {/* Render 2 sets for perfect seamless infinite scroll */}
              {[1, 2].map((setIndex) => (
                <div key={setIndex} className="flex items-center gap-16">
                  {sampleLogos.map((logo, i) => (
                    <div
                      key={`${setIndex}-${i}`}
                      className="flex items-center gap-4 text-background/50 hover:text-background transition-all duration-300 cursor-default group"
                    >
                      <div className="text-background/30 group-hover:text-primary transition-colors duration-300 shrink-0">
                        {logo.icon}
                      </div>
                      <span className="text-xl md:text-2xl font-bold tracking-widest uppercase font-mono">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Editorial testimonial */}
        <div className="bg-background py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              {/* Quote mark */}
              <div className="md:col-span-1 hidden md:block">
                <span className="text-[6rem] leading-none text-foreground/10 font-serif select-none">"</span>
              </div>

              {/* Quote body */}
              <div className="md:col-span-8">
                <blockquote className="text-2xl md:text-4xl font-medium leading-[1.2] text-foreground mb-10 tracking-tight">
                  They delivered beyond our expectations — and I've worked with development teams across three continents. Tenomad operates at a different caliber entirely.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-foreground flex items-center justify-center text-background text-sm font-medium shrink-0">
                    JS
                  </div>
                  <cite className="not-italic">
                    <span className="font-medium block text-base text-foreground">James Sterling</span>
                    <span className="text-muted-foreground text-sm font-light">Vice Chairman, Nasdaq-listed company</span>
                  </cite>
                </div>
              </div>

              {/* Stars / rating visual */}
              <div className="md:col-span-3 md:text-right">
                <div className="inline-flex flex-col items-start md:items-end gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-foreground" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1l1.854 3.756 4.146.602-3 2.924.708 4.128L8 10.25l-3.708 1.96.708-4.128-3-2.924 4.146-.602z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-foreground font-medium uppercase tracking-widest mt-2">Client testimonial</p>
                  <p className="text-xs text-muted-foreground font-light">Verified engagement · 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden bg-[#0A0A0A] border-t border-zinc-900 py-32 md:py-40"
        ref={ctaRef as React.RefObject<HTMLDivElement>}
      >
        {/* Subtle Amber Brand Aura Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute -right-24 -bottom-24 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-8">
                Let's build together
              </p>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-zinc-50 leading-[1.1]">
                Ready to build<br />something real?
              </h2>
            </div>
            <div className="flex flex-col gap-6 md:items-end">
              <p className="text-lg text-zinc-400 font-light md:text-right max-w-sm">
                Whether you have a fully documented spec or just an idea on a napkin — let's start with a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-none px-10 text-xs font-semibold uppercase tracking-widest h-14 transition-colors"
                    data-testid="button-cta-contact"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-none px-10 text-xs font-semibold uppercase tracking-widest h-14 border-zinc-800 text-zinc-300 hover:bg-zinc-100 hover:text-black hover:border-zinc-100 bg-transparent transition-colors"
                    data-testid="button-cta-portfolio"
                  >
                    View Our Work
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
