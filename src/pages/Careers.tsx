import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { ArrowUpRight, Globe, Shield, Zap, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  {
    icon: Globe,
    title: "Borderless Work",
    body: "We are a fully remote-friendly company. Work from our beautiful Hue City HQ, your home, or a beach in Bali. We value output over seat time.",
  },
  {
    icon: Zap,
    title: "Elite Stack & Standards",
    body: "No legacy nightmares. We build with modern stacks (React, Next.js, Go, Node.js, AI APIs) and maintain rigid code quality and testing guidelines.",
  },
  {
    icon: Shield,
    title: "High-Trust Culture",
    body: "Micro-management is a failure mode. We trust you to manage your time, communicate transparently with clients, and take absolute ownership of your code.",
  },
  {
    icon: Sparkles,
    title: "Growth & Gear",
    body: "We provide top-of-the-line hardware, health insurance, a generous learning budget, and opportunities to lead architectures for global clients.",
  },
];

const positions = [
  {
    id: "sr-frontend",
    title: "Senior Frontend Engineer",
    type: "Full-time / Remote or Hybrid (Hue, VN)",
    exp: "4+ Years Experience",
    description: "Obsessed with pixel-perfect UI, buttery-smooth animations, and solid state management. You will build high-end client interfaces and contribute to our internal design systems.",
    stack: "React, TypeScript, TailwindCSS, Framer Motion, Next.js",
  },
  {
    id: "sr-backend",
    title: "Senior Backend Engineer",
    type: "Full-time / Remote or Hybrid (Hue, VN)",
    exp: "5+ Years Experience",
    description: "Architect scaleable backend APIs, database schemas, and microservice pipelines. You should be passionate about performance optimization and security standards.",
    stack: "Node.js, Go, PostgreSQL, Redis, Docker, AWS",
  },
  {
    id: "qa-lead",
    title: "QA Automation Lead",
    type: "Full-time / Remote or Hybrid (Hue, VN)",
    exp: "3+ Years Experience",
    description: "Ensure the impeccable quality of our platforms. You will establish and execute testing strategies, build end-to-end automation pipelines, and collaborate with developers.",
    stack: "Playwright, Cypress, CI/CD, Jest, Postman",
  },
];

export default function Careers() {
  const heroRef = useScrollReveal();
  const perksRef = useScrollReveal();
  const jobsRef = useScrollReveal();
  const applyRef = useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen pt-32 md:pt-40 pb-0">

      {/* ── Hero Section ── */}
      <section
        className="container mx-auto px-6 md:px-12 mb-20 md:mb-32"
        ref={heroRef as React.RefObject<HTMLDivElement>}
      >
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">Careers</p>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[1.05] text-foreground mb-8">
            Build without limits. <br />
            Join the <span className="text-accent italic lowercase font-normal">craftsmen</span><span className="text-accent">.</span>
          </h1>
          <p className="text-[20px] text-muted-foreground leading-relaxed max-w-2xl font-light">
            We are always looking for exceptional engineers, designers, and systems thinkers who are obsessed with quality and thrive in a high-trust, autonomous environment.
          </p>
        </div>
      </section>

      {/* ── Culture & Perks ── */}
      <section
        className="border-t border-border bg-background py-24 md:py-32"
        ref={perksRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-16">The Perks of being a Nomad</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {perks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col">
                <div className="w-10 h-10 border border-border flex items-center justify-center mb-6">
                  <Icon size={18} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground mb-4">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section
        className="border-t border-border bg-background py-24 md:py-32"
        ref={jobsRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-4">Open Roles</p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-foreground">Current Openings</h2>
            </div>
            <p className="text-muted-foreground font-light text-sm max-w-sm md:text-right">
              If you don't see your role but believe your skills are absolute, drop us a line anyway. We always make room for master craftsmen.
            </p>
          </div>

          <div className="flex flex-col border-t border-border">
            {positions.map((pos) => (
              <div
                key={pos.id}
                className="group flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 border-b border-border py-8 md:py-12 transition-all duration-300 hover:bg-muted/10 px-0 md:px-4"
              >
                {/* Title & Info */}
                <div className="md:col-span-4 flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-accent transition-colors duration-300">
                    {pos.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{pos.type}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground font-mono mt-2">{pos.exp}</p>
                </div>

                {/* Description */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {pos.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pos.stack.split(", ").map((tech) => (
                      <span key={tech} className="text-[10px] uppercase tracking-wider font-mono bg-muted border border-border px-2.5 py-1 text-muted-foreground rounded-none">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Trigger */}
                <div className="md:col-span-3 flex items-start md:justify-end">
                  <a
                    href="mailto:careers@tenomad.com?subject=Application for Senior Frontend Engineer"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-foreground hover:text-accent transition-colors duration-300 border-b border-foreground pb-1"
                  >
                    Apply Now <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply / Pitch Us ── */}
      <section
        className="border-t border-border bg-background py-24 md:py-32"
        ref={applyRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">Make Your Pitch</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-8">
            Let's build together.
          </h2>
          <p className="text-[20px] text-muted-foreground font-light leading-relaxed mb-12">
            Send your portfolio, CV, or GitHub link to our inbox. Tell us about the most complex system you've built, and why you want to join our crew.
          </p>

          <div className="flex justify-center">
            <a href="mailto:careers@tenomad.com">
              <Button size="lg" className="rounded-none px-10 font-semibold uppercase tracking-widest text-xs h-14 flex items-center gap-3">
                <Send size={14} /> Send Application (careers@tenomad.com)
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
