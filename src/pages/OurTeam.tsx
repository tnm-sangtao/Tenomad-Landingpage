import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  MapPin, 
  Code, 
  Sparkles, 
  Cpu, 
  Palette, 
  ShieldCheck, 
  Terminal, 
  Coffee, 
  Compass, 
  Server 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  icon: any;
  label?: string;
  github?: string;
  linkedin?: string;
  quote?: string;
  tech?: string[];
}

export default function OurTeam() {
  const heroRef = useScrollReveal();
  const bentoRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const members: Record<string, TeamMember> = {
    tuan: {
      name: "Tuan Nguyen",
      role: "Co-Founder & CEO",
      bio: "Ex-Silicon Valley nomad. Obsessed with scalable business architecture, engineering precision, and building high-trust partnerships.",
      image: "/team_tuan.png",
      icon: Compass,
      label: "EX-SILICON VALLEY",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      quote: "Software craftsmanship isn't just about writing code — it's about solving real human problems with elegance, focus, and absolute transparency.",
    },
    long: {
      name: "Long Tran",
      role: "Co-Founder & CTO",
      bio: "Fullstack system architect. Obsessed with high performance, type-safe structures, and robust database engines.",
      image: "/team_long.png",
      icon: Terminal,
      label: "SYSTEM ARCHITECT",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      tech: ["TypeScript", "Go", "Rust", "PostgreSQL", "Docker"],
    },
    huy: {
      name: "Huy Le",
      role: "Lead Product Designer",
      bio: "Balancing raw artistic emotion with rigid functional grid structures to design gorgeous, highly intuitive digital platforms.",
      image: "/team_huy.png",
      icon: Palette,
      label: "ART & MATH",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      quote: "A perfect interface looks inevitable, not designed. It breathes, reacts, and disappears, leaving only the experience.",
    },
    vy: {
      name: "Vy Nguyen",
      role: "QA Automation Lead",
      bio: "Building bulletproof testing pipelines and automated suites to guarantee flawless software deployments on every single commit.",
      image: "/team_vy.png",
      icon: ShieldCheck,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    minh: {
      name: "Minh Pham",
      role: "Senior Fullstack Developer",
      bio: "Specialist in enterprise cloud deployments, real-time sync systems, and serverless edge computing structures.",
      image: "/team_minh.png",
      icon: Code,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    chi: {
      name: "Chi Vo",
      role: "Frontend Engineer",
      bio: "Crafting beautiful, pixel-perfect user layouts with butter-smooth micro-interactions and performant client logic.",
      image: "/team_chi.png",
      icon: Sparkles,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    duc: {
      name: "Duc Nguyen",
      role: "DevOps Specialist",
      bio: "Automating isolated container ecosystems, zero-downtime deployment workflows, and securing cloud infrastructures.",
      image: "/team_duc.png",
      icon: Server,
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    bao: {
      name: "Bao Hoang",
      role: "AI & NLP Researcher",
      bio: "Bridging complex transformer architectures with practical, production-ready natural language pipelines. Living in tomorrow's tech today.",
      image: "/team_bao.png",
      icon: Cpu,
      label: "INTELLIGENT AGENTS",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      tech: ["PyTorch", "Transformers", "Python", "LangChain", "LLMs"],
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 md:pt-40 pb-0 bg-background">
      {/* ── Hero Section ── */}
      <section
        className="container mx-auto px-6 md:px-12 mb-16 md:mb-24"
        ref={heroRef as React.RefObject<HTMLDivElement>}
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">Our Team</p>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[1.05] text-foreground mb-8">
            The Digital <br />
            <span className="text-muted-foreground italic lowercase font-normal">Craftsmen</span>.
          </h1>
          <p className="text-[20px] text-muted-foreground leading-relaxed max-w-2xl font-light">
            Meet the engineers, designers, and systems architects behind Tenomad. A focused team practicing elite software craftsmanship from the historic city of Hue, Vietnam.
          </p>
        </div>
      </section>

      {/* ── Bento Grid Section ── */}
      <section
        className="border-t border-border bg-background py-20 md:py-28"
        ref={bentoRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Lưới Bento 12 cột */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(240px,_auto)]">
            
            {/* 1. TUAN NGUYEN - CEO (col-span-8, row-span-2) */}
            <div className="lg:col-span-8 lg:row-span-2 border border-border bg-card group flex flex-col md:flex-row overflow-hidden hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              {/* Image Container */}
              <div className="relative md:w-5/12 aspect-[1/1.1] md:aspect-auto overflow-hidden bg-muted border-b md:border-b-0 md:border-r border-border">
                <img 
                  src={members.tuan.image} 
                  alt={members.tuan.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1 border border-border/80">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5">
                    <members.tuan.icon size={10} className="text-amber-500" />
                    {members.tuan.label}
                  </p>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 md:w-7/12 flex flex-col justify-between gap-6 bg-card/50">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">{members.tuan.name}</h2>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">{members.tuan.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mt-2">{members.tuan.bio}</p>
                  
                  {/* Trích dẫn đặc biệt */}
                  <div className="border-l border-border pl-4 my-3">
                    <p className="text-xs text-muted-foreground/80 leading-relaxed italic font-light">
                      "{members.tuan.quote}"
                    </p>
                  </div>
                </div>
                
                {/* Socials */}
                <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                  <div className="flex gap-4">
                    <a href={members.tuan.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a href={members.tuan.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-light flex items-center gap-1">
                    <MapPin size={10} /> Hue, VN
                  </span>
                </div>
              </div>
            </div>

            {/* 2. LONG TRAN - CTO (col-span-4, row-span-2) */}
            <div className="lg:col-span-4 lg:row-span-2 border border-border bg-card group flex flex-col overflow-hidden hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              {/* Image Container */}
              <div className="relative aspect-[1.4/1] lg:aspect-[1.2/1] overflow-hidden bg-muted border-b border-border">
                <img 
                  src={members.long.image} 
                  alt={members.long.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1 border border-border/80">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5">
                    <members.long.icon size={10} className="text-amber-500" />
                    {members.long.label}
                  </p>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow gap-6 bg-card/50">
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">{members.long.name}</h2>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">{members.long.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mt-1">{members.long.bio}</p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {members.long.tech?.map(t => (
                      <span key={t} className="text-[9px] font-mono bg-muted px-2 py-0.5 border border-border/40 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                  <div className="flex gap-4">
                    <a href={members.long.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a href={members.long.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                  <span className="text-[9px] font-mono text-amber-500 font-semibold uppercase tracking-widest">
                    ROOT_ACCESS
                  </span>
                </div>
              </div>
            </div>

            {/* 3. HUY LE - Lead Designer (col-span-4, row-span-2) */}
            <div className="lg:col-span-4 lg:row-span-2 border border-border bg-card group flex flex-col overflow-hidden hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              {/* Image Container */}
              <div className="relative aspect-[1.4/1] lg:aspect-[1.2/1] overflow-hidden bg-muted border-b border-border">
                <img 
                  src={members.huy.image} 
                  alt={members.huy.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1 border border-border/80">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5">
                    <members.huy.icon size={10} className="text-amber-500" />
                    {members.huy.label}
                  </p>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow gap-6 bg-card/50">
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">{members.huy.name}</h2>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">{members.huy.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mt-1">{members.huy.bio}</p>
                  
                  <div className="border-l border-border pl-4 my-2">
                    <p className="text-[11px] text-muted-foreground/80 italic leading-relaxed">
                      "{members.huy.quote}"
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                  <div className="flex gap-4">
                    <a href={members.huy.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a href={members.huy.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    UX_ENGINE
                  </span>
                </div>
              </div>
            </div>

            {/* 4. VY NGUYEN - QA (col-span-4, row-span-1) */}
            <div className="lg:col-span-4 lg:row-span-1 border border-border bg-card group flex flex-row items-center p-6 gap-6 hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-card/50">
              <div className="relative w-24 h-24 rounded-none overflow-hidden bg-muted border border-border flex-shrink-0">
                <img 
                  src={members.vy.image} 
                  alt={members.vy.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col justify-between h-24 py-1 flex-grow">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-foreground">{members.vy.name}</h3>
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground mt-0.5">{members.vy.role}</p>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2 font-light">{members.vy.bio}</p>
                <div className="flex gap-3 items-center">
                  <a href={members.vy.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Github size={13} strokeWidth={1.5} />
                  </a>
                  <a href={members.vy.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Linkedin size={13} strokeWidth={1.5} />
                  </a>
                  <span className="text-[8px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20 ml-auto">
                    PASSING
                  </span>
                </div>
              </div>
            </div>

            {/* 5. MINH PHAM - Senior Fullstack (col-span-4, row-span-1) */}
            <div className="lg:col-span-4 lg:row-span-1 border border-border bg-card group flex flex-row items-center p-6 gap-6 hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-card/50">
              <div className="relative w-24 h-24 rounded-none overflow-hidden bg-muted border border-border flex-shrink-0">
                <img 
                  src={members.minh.image} 
                  alt={members.minh.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col justify-between h-24 py-1 flex-grow">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-foreground">{members.minh.name}</h3>
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground mt-0.5">{members.minh.role}</p>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2 font-light">{members.minh.bio}</p>
                <div className="flex gap-3 items-center">
                  <a href={members.minh.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Github size={13} strokeWidth={1.5} />
                  </a>
                  <a href={members.minh.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Linkedin size={13} strokeWidth={1.5} />
                  </a>
                  <span className="text-[8px] font-mono text-amber-500 bg-amber-500/10 px-1.5 py-0.5 border border-amber-500/20 ml-auto">
                    CLOUD_NATIVE
                  </span>
                </div>
              </div>
            </div>

            {/* 6. CHI VO - Frontend (col-span-4, row-span-1) */}
            <div className="lg:col-span-4 lg:row-span-1 border border-border bg-card group flex flex-row items-center p-6 gap-6 hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-card/50">
              <div className="relative w-24 h-24 rounded-none overflow-hidden bg-muted border border-border flex-shrink-0">
                <img 
                  src={members.chi.image} 
                  alt={members.chi.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col justify-between h-24 py-1 flex-grow">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-foreground">{members.chi.name}</h3>
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground mt-0.5">{members.chi.role}</p>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2 font-light">{members.chi.bio}</p>
                <div className="flex gap-3 items-center">
                  <a href={members.chi.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Github size={13} strokeWidth={1.5} />
                  </a>
                  <a href={members.chi.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Linkedin size={13} strokeWidth={1.5} />
                  </a>
                  <span className="text-[8px] font-mono text-violet-500 bg-violet-500/10 px-1.5 py-0.5 border border-violet-500/20 ml-auto">
                    60_FPS
                  </span>
                </div>
              </div>
            </div>

            {/* 7. DUC NGUYEN - DevOps (col-span-4, row-span-1) */}
            <div className="lg:col-span-4 lg:row-span-1 border border-border bg-card group flex flex-row items-center p-6 gap-6 hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-card/50">
              <div className="relative w-24 h-24 rounded-none overflow-hidden bg-muted border border-border flex-shrink-0">
                <img 
                  src={members.duc.image} 
                  alt={members.duc.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex flex-col justify-between h-24 py-1 flex-grow">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-foreground">{members.duc.name}</h3>
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground mt-0.5">{members.duc.role}</p>
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2 font-light">{members.duc.bio}</p>
                <div className="flex gap-3 items-center">
                  <a href={members.duc.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Github size={13} strokeWidth={1.5} />
                  </a>
                  <a href={members.duc.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <Linkedin size={13} strokeWidth={1.5} />
                  </a>
                  <span className="text-[8px] font-mono text-cyan-500 bg-cyan-500/10 px-1.5 py-0.5 border border-cyan-500/20 ml-auto">
                    K8S_ACTIVE
                  </span>
                </div>
              </div>
            </div>

            {/* 8. BAO HOANG - AI (col-span-4, row-span-2) */}
            <div className="lg:col-span-4 lg:row-span-2 border border-border bg-card group flex flex-col overflow-hidden hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              {/* Image Container */}
              <div className="relative aspect-[1.4/1] lg:aspect-[1.2/1] overflow-hidden bg-muted border-b border-border">
                <img 
                  src={members.bao.image} 
                  alt={members.bao.name} 
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1 border border-border/80">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5">
                    <members.bao.icon size={10} className="text-amber-500" />
                    {members.bao.label}
                  </p>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-grow gap-6 bg-card/50">
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground">{members.bao.name}</h2>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">{members.bao.role}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mt-1">{members.bao.bio}</p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {members.bao.tech?.map(t => (
                      <span key={t} className="text-[9px] font-mono bg-muted px-2 py-0.5 border border-border/40 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                  <div className="flex gap-4">
                    <a href={members.bao.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a href={members.bao.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground flex items-center gap-1">
                    <Coffee size={10} className="text-amber-500" /> COFFEE_DRIVEN
                  </span>
                </div>
              </div>
            </div>

            {/* 9. HUE STUDIO VIBE (col-span-8, row-span-1) */}
            <div className="lg:col-span-8 lg:row-span-1 border border-border p-8 flex flex-col justify-between bg-card/10 backdrop-blur-[2px] relative overflow-hidden group hover:border-foreground/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-700" />
              
              <div className="flex justify-between items-start z-10">
                <div className="w-8 h-8 border border-border flex items-center justify-center">
                  <Compass size={14} className="text-amber-500" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">HQ COORDINATES</p>
                  <p className="text-[11px] font-mono text-foreground font-semibold">16.4637° N, 107.5909° E</p>
                </div>
              </div>

              <div className="my-6 z-10 max-w-2xl">
                <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-foreground mb-3">Hue City Craft Vibe</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  Where ancient imperial aesthetics and peaceful slow living meet clean, modern technical engineering. We craft software architectures with the patient, meticulous focus of traditional heritage artisans.
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-border/60 pt-4 z-10">
                <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                  WARM TECH ARCHETYPE
                </span>
                <span className="text-[10px] text-muted-foreground font-light flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  TENOMAD STUDIO
                </span>
              </div>
            </div>

            {/* 10. CAREERS CTA (col-span-8, row-span-1) */}
            <div className="lg:col-span-8 lg:row-span-1 border border-border p-8 flex flex-col justify-between bg-card hover:border-foreground/30 transition-all duration-500 relative group overflow-hidden">
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-foreground/[0.02] rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">WORK WITH THE CRAFTSMEN</p>
                <Link href="/careers">
                  <button className="text-muted-foreground hover:text-foreground transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </button>
                </Link>
              </div>

              <div className="my-6 max-w-xl">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-3">
                  Want to join our bench of craftsmen?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  We are always on the lookout for exceptional senior developers, testing automation experts, and UI/UX designers who value raw autonomy, deep focus, and an active nomad lifestyle.
                </p>
              </div>

              <div className="flex pt-4 border-t border-border/60 justify-between items-center">
                <Link href="/careers">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5 cursor-pointer hover:text-amber-500 transition-colors">
                    Explore Open Positions <ArrowUpRight size={14} />
                  </span>
                </Link>
                <span className="text-[10px] font-mono text-muted-foreground">
                  CURRENTLY_HIRING
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Visual Vibe Banner ── */}
      <section
        className="relative bg-muted/20 border-t border-b border-border py-20 overflow-hidden"
        ref={ctaRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Our Development Creed</h2>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              We do not learn on your budget. We do not ship placeholders. Every product we touch is designed with absolute intentionality, built for extreme performance, and tested automatically to withstand the future.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-none px-8 text-xs uppercase tracking-widest mt-4">
                Build with us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
