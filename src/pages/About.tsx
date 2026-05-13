import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { ArrowUpRight, MessageSquare, Hammer, Target, MapPin, CalendarDays, Globe, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: MessageSquare,
    title: "Radical Candor",
    num: "01",
    body: "We don't say yes just to secure a contract. If a feature is unnecessary or an architecture is flawed, we push back. We believe the highest form of respect is telling our clients the truth about their product.",
  },
  {
    icon: Hammer,
    title: "Craft Over Haste",
    num: "02",
    body: "Speed is a byproduct of competence, not cutting corners. We build systems designed to scale, documented to be understood, and tested to endure. Tech debt is borrowed time — and we prefer not to owe.",
  },
  {
    icon: Target,
    title: "Shared Ambition",
    num: "03",
    body: "We aren't just an outsourced vendor. When we take on a project, your product's success becomes our obsession. We celebrate your launches, sweat your bugs, and optimise your conversions.",
  },
];

export default function About() {
  const heroRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const teamRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen pt-32 md:pt-40 pb-0">

      {/* ── Hero ── */}
      <section
        className="container mx-auto px-6 md:px-12 mb-20 md:mb-32"
        ref={heroRef as React.RefObject<HTMLDivElement>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">About Tenomad</p>
            <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[1.05] mb-8 text-foreground">
              The <span className="text-accent italic lowercase font-normal">digital nomad</span> spirit,<br />
              grounded in craft<span className="text-accent">.</span>
            </h1>
            <p className="text-[20px] text-muted-foreground leading-relaxed max-w-lg font-light">
              We founded Tenomad in Hue City, Vietnam, with a simple premise: world-class engineering doesn't have to be restricted by geography.
            </p>
          </div>

          {/* Right — Quick facts list */}
          <div className="flex flex-col border-t border-border mt-0 md:mt-12">
            {[
              { icon: CalendarDays, label: "Founded", value: "2014" },
              { icon: MapPin, label: "Headquarters", value: "Hue City, Vietnam" },
              { icon: Globe, label: "Clients served in", value: "3 Continents" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-2 border-b border-border py-6">
                <p className="text-xs text-foreground font-bold uppercase tracking-[0.3em] mb-2">{label}</p>
                <p className="font-bold text-2xl text-foreground tracking-tighter">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section
        className="border-t border-border bg-background py-24 md:py-32 overflow-hidden"
        ref={storyRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-16">Our story</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-16">
              {/* Why Hue City */}
              <div>
                <h2 className="text-3xl font-bold uppercase text-foreground mb-8 tracking-tighter">Why Hue City?</h2>
                <div className="w-8 h-[1px] bg-foreground mb-8" />
                <p className="text-muted-foreground leading-relaxed mb-6 font-light text-lg">
                  While others crowd into oversaturated tech hubs, we chose Hue — the former imperial capital. It offers a calm, focused environment where deep work thrives, allowing our engineers to craft complex systems without the constant noise and burnout of a megacity.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  That focus translates directly into the quality of our code and the reliability of our partnerships.
                </p>
              </div>

              {/* Nomad Philosophy */}
              <div>
                <h2 className="text-3xl font-bold uppercase text-foreground mb-8 tracking-tighter">The Nomad Philosophy</h2>
                <div className="w-8 h-[1px] bg-foreground mb-8" />
                <p className="text-muted-foreground leading-relaxed mb-6 font-light text-lg">
                  "Tenomad" is a portmanteau of Technology and Nomad. We embody the adaptability, fearlessness, and global mindset of digital nomads — anchored by rigorous engineering discipline.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  We integrate seamlessly into teams from New York to Sydney, adopting their tools, matching their cadence, and sharing their ambition.
                </p>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden bg-muted border border-border/60 aspect-square">
                <img
                  src="/story_hue_city.png"
                  alt="Ancient Imperial Hue City"
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-4 italic font-light">
                Hue Imperial Citadel moat – Sanctuary of Deep Work
              </p>
            </div>
          </div>
        </div>

        {/* Divider stats row in container */}
        <div className="container mx-auto px-6 md:px-12 mt-24">
          <div className="border-t border-border grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-x border-border">
            {[
              { value: "10+", label: "Years in business" },
              { value: "90+", label: "Projects shipped" },
              { value: "50+", label: "Engineers & designers" },
              { value: "3", label: "Continents served" },
            ].map((s) => (
              <div key={s.label} className="px-10 py-12 md:py-16 text-center md:text-left bg-surface/30">
                <p className="text-5xl md:text-6xl font-medium text-foreground tabular-nums mb-3" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground font-bold mt-4">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="py-32 border-t border-border bg-background"
        ref={valuesRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">What drives us.</h2>
            <p className="text-muted-foreground text-lg max-w-sm font-light">
              Three principles that shape every decision we make — for clients, for code, for each other.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-x border-border">
            {values.map((v, i) => {
              return (
                <div
                  key={v.title}
                  className={`group relative bg-card p-10 md:p-12 flex flex-col gap-10 border-border ${i < 2 ? "md:border-r" : ""
                    } border-b md:border-b-0 hover:bg-foreground transition-colors duration-500`}
                >
                  {/* Number watermark */}
                  <span className="text-[7rem] font-bold tracking-tighter leading-none text-foreground/[0.03] group-hover:text-background/[0.05] absolute top-6 right-8 select-none transition-colors duration-500">
                    {v.num}
                  </span>

                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-background mb-4 leading-tight transition-colors duration-500">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-background/80 text-base leading-relaxed font-light transition-colors duration-500">{v.body}</p>
                  </div>

                  {/* Subtle accent bar — bottom, grows on hover */}
                  <div className="h-[1px] bg-border group-hover:bg-background transition-colors duration-500 w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section
        className="py-32 border-t border-border bg-background"
        ref={teamRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-4">Our Team</p>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">The Craftsmen.</h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm font-light md:text-right">
              A highly focused crew of senior developers, designers, and system architects. We don't learn on your budget.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dung Nguyen",
                role: "Co-Founder & CEO",
                bio: "Ex-Silicon Valley nomad. Obsessed with scalable business architecture, engineering precision, and client partnership.",
                image: "/team_minh.png",
              },
              {
                name: "Sang Tao",
                role: "Co-Founder & CTO",
                bio: "Fullstack system architect. Obsessed with high performance, type-safe structures, and clean databases.",
                image: "/team_bao.png",
              },
              {
                name: "Trang Le",
                role: "Lead Product Designer",
                bio: "Balancing emotion with rigid visual standards to design beautiful, highly performant products.",
                image: "/team_chi.png",
              },
              {
                name: "Son Tran",
                role: "QA Automation Lead",
                bio: "Building rigid testing infrastructure and CI/CD pipelines to guarantee flawless platform deployments.",
                image: "/team_duc.png",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="group flex flex-col bg-card border border-border overflow-hidden hover:border-foreground/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[1/1.15] w-full overflow-hidden bg-muted border-b border-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {/* Glassmorphic border overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Details Container */}
                <div className="p-8 flex flex-col flex-grow justify-between gap-6 bg-card/50">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">
                      {member.name}
                    </h3>
                    {/* Role and Bio hidden as requested */}
                    {/* 
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light mt-4">
                      {member.bio}
                    </p>
                    */}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-6 border-t border-border mt-auto">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden bg-background py-32 md:py-40"
        ref={ctaRef as React.RefObject<HTMLDivElement>}
      >
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">
                Work with us
              </p>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[1.1]">
                Let's build something<br />together.
              </h2>
            </div>
            <div className="flex flex-col gap-6 md:items-end">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-none px-10 text-xs uppercase tracking-widest h-14 font-semibold transition-colors inline-flex items-center gap-3"
                >
                  Start a conversation <ArrowUpRight size={18} strokeWidth={1.5} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
