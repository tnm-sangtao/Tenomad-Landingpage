import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceData: Record<string, {
  title: string;
  tagline: string;
  intro: string;
  what: string;
  types: string[];
  tech: { category: string; items: string[] }[];
  process: { step: string; desc: string }[];
  projects: { name: string; tag: string; year: string }[];
  nextSlug: string;
  nextLabel: string;
}> = {
  "web-development": {
    title: "Web Development",
    tagline: "Scalable web products built on solid foundations.",
    intro: "You can't afford to leave a crucial part of your business in the hands of amateurs. Tenomad has been designing and engineering web products since before smartphones existed — and we've never stopped learning since. Our team of strategists, designers, developers, and QA engineers collaborate tightly on every project, every time.",
    what: "What we build",
    types: [
      "Mobile responsive websites",
      "E-commerce platforms",
      "Web applications & SaaS",
      "Product strategy & management consulting",
      "UX/UI design & prototyping",
      "Integrated Cloud services",
      "Real estate portals",
      "Social & community platforms",
      "B2B & enterprise portals",
    ],
    tech: [
      { category: "Languages", items: ["JavaScript", "TypeScript", "PHP", "Python", "Java"] },
      { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "HTML5 / CSS3"] },
      { category: "Backend", items: ["Node.js", "Laravel", "Django", "WordPress", "Drupal"] },
      { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
      { category: "Cloud", items: ["AWS", "Google Cloud", "DigitalOcean"] },
    ],
    process: [
      { step: "Discovery", desc: "We start by understanding your business goals, users, and technical constraints — not by opening a text editor." },
      { step: "Architecture", desc: "System design, data modeling, and tech stack selection. We document decisions and rationale before a line of code is written." },
      { step: "Design & Build", desc: "Iterative development in 2-week sprints. You get working software, not slide decks." },
      { step: "Test & Refine", desc: "Automated testing, manual QA, and performance profiling before any code ships to production." },
      { step: "Launch & Support", desc: "Deployment, monitoring setup, and ongoing support. We don't disappear at go-live." },
    ],
    projects: [
      { name: "Tago DMS", tag: "Website + Mobile", year: "2023" },
      { name: "Valley Sierra", tag: "E-Commerce", year: "2022" },
      { name: "Vespa Safari", tag: "Website", year: "2021" },
      { name: "My CalSigns", tag: "Web App", year: "2023" },
    ],
    nextSlug: "mobile-development",
    nextLabel: "Mobile Development",
  },
  "mobile-development": {
    title: "Mobile Development",
    tagline: "Native and cross-platform apps that feel right.",
    intro: "A mobile app that lags, crashes, or feels foreign is worse than no app at all. We build iOS and Android experiences with the performance standards of native development and the delivery speed of modern cross-platform tooling — choosing the right approach for your product, not the easiest one for us.",
    what: "What we build",
    types: [
      "Native iOS apps (Swift, SwiftUI)",
      "Native Android apps (Kotlin, Jetpack Compose)",
      "Cross-platform apps (React Native, Flutter)",
      "HTML5 hybrid apps (Ionic, Capacitor)",
      "Mobile-first web apps (PWA)",
      "App store optimization & submission",
      "Existing app performance audits",
    ],
    tech: [
      { category: "Native iOS", items: ["Swift", "SwiftUI", "Objective-C", "Xcode"] },
      { category: "Native Android", items: ["Kotlin", "Jetpack Compose", "Java", "Android Studio"] },
      { category: "Cross-Platform", items: ["React Native", "Flutter", "Ionic", "Capacitor"] },
      { category: "Backend / API", items: ["Node.js", "Firebase", "REST", "GraphQL"] },
      { category: "Services", items: ["Push Notifications", "In-App Payments", "Analytics", "Crash Reporting"] },
    ],
    process: [
      { step: "Platform Strategy", desc: "Native vs. cross-platform — we help you choose based on your timeline, budget, and performance requirements." },
      { step: "UX Prototyping", desc: "Interactive prototypes tested with real users before development begins. Mobile UX is unforgiving; we front-load the thinking." },
      { step: "Development Sprints", desc: "Incremental builds with TestFlight / internal track betas. You see progress every two weeks." },
      { step: "QA on Devices", desc: "Testing across real device matrix: multiple screen sizes, OS versions, network conditions." },
      { step: "App Store Launch", desc: "Store listing optimization, review process navigation, and post-launch monitoring." },
    ],
    projects: [
      { name: "Sqoop", tag: "Mobile Data Platform", year: "2023" },
      { name: "Swolematch", tag: "Fitness App", year: "2022" },
      { name: "Leed Pop", tag: "Hybrid App", year: "2021" },
      { name: "XEKE", tag: "Mobility Platform", year: "2022" },
    ],
    nextSlug: "ui-ux-design",
    nextLabel: "UI/UX Design",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Interfaces that users actually want to use.",
    intro: "Good design isn't about making things look pretty. It's about making complex problems feel simple, and simple things feel delightful. Our design team bridges business strategy and user psychology — crafting interfaces that convert, retain, and earn trust.",
    what: "What we design",
    types: [
      "User research & persona development",
      "Information architecture & user flows",
      "Wireframes & interactive prototypes",
      "Visual design & design systems",
      "Usability testing & iteration",
      "Design handoff & developer support",
      "Brand identity & logo design",
      "Marketing & landing page design",
    ],
    tech: [
      { category: "Design Tools", items: ["Figma", "Adobe XD", "Sketch", "InVision"] },
      { category: "Prototyping", items: ["Figma Prototype", "Framer", "Principle", "Marvel"] },
      { category: "Research", items: ["Hotjar", "Maze", "UserTesting", "Google Analytics"] },
      { category: "Handoff", items: ["Zeplin", "Figma Dev Mode", "Storybook"] },
    ],
    process: [
      { step: "Research", desc: "Competitor analysis, user interviews, and heuristic evaluation. We don't design in a vacuum." },
      { step: "Information Architecture", desc: "Site maps, user flows, and content hierarchies established before visual work begins." },
      { step: "Wireframes", desc: "Low-fidelity layouts validated with stakeholders. Fast, cheap iterations at the highest-leverage stage." },
      { step: "Visual Design", desc: "High-fidelity screens aligned to your brand — or defining a new one if needed." },
      { step: "Handoff", desc: "Annotated Figma files, design tokens, and direct collaboration with developers during build." },
    ],
    projects: [
      { name: "Valley Sierra", tag: "E-Commerce Design", year: "2022" },
      { name: "Vespa Safari", tag: "Brand + Web Design", year: "2021" },
      { name: "Tago", tag: "App UI System", year: "2023" },
      { name: "Leed Pop", tag: "Mobile UX", year: "2021" },
    ],
    nextSlug: "ai-nlp-consulting",
    nextLabel: "AI & NLP Consulting",
  },
  "ai-nlp-consulting": {
    title: "AI & NLP Consulting",
    tagline: "Intelligent capabilities, integrated with precision.",
    intro: "AI is not a feature — it's a capability that requires strategic intent, careful integration, and honest expectations. We help you identify where AI actually creates leverage in your product, implement it with production-grade engineering, and measure whether it's working. No hype. No overpromising.",
    what: "What we implement",
    types: [
      "Large Language Model (LLM) integration",
      "Natural Language Processing pipelines",
      "AI-powered search & recommendation engines",
      "Chatbots & conversational interfaces",
      "Document processing & intelligent extraction",
      "Sentiment analysis & text classification",
      "Workflow automation with AI",
      "AI product strategy consulting",
    ],
    tech: [
      { category: "LLM Platforms", items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Llama 3"] },
      { category: "ML Frameworks", items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn"] },
      { category: "NLP Libraries", items: ["spaCy", "NLTK", "Transformers", "LangChain"] },
      { category: "Infrastructure", items: ["AWS Bedrock", "Google Vertex AI", "Vector DBs (Pinecone, Weaviate)"] },
    ],
    process: [
      { step: "Opportunity Audit", desc: "We assess where AI can meaningfully improve your product or operations — and where it would be a distraction." },
      { step: "Data Assessment", desc: "AI is only as good as your data. We evaluate what you have and what you need." },
      { step: "Prototype & Validate", desc: "A working proof-of-concept before any production commitment. Real results, not slide decks." },
      { step: "Production Integration", desc: "Engineering-grade implementation with latency, cost, and reliability considerations built in." },
      { step: "Monitor & Improve", desc: "Ongoing evaluation of model performance and business outcomes. AI products degrade without maintenance." },
    ],
    projects: [
      { name: "Sqoop", tag: "NLP Data Pipeline", year: "2023" },
      { name: "My CalSigns", tag: "AI Personalization", year: "2023" },
      { name: "XEKE", tag: "Intelligent Routing", year: "2022" },
    ],
    nextSlug: "quality-assurance",
    nextLabel: "Quality Assurance",
  },
  "quality-assurance": {
    title: "Quality Assurance",
    tagline: "Software that survives contact with reality.",
    intro: "Bugs in production are expensive. Bugs that reach your customers are reputation damage. Our QA team treats testing as a first-class engineering discipline — not an afterthought. We find the issues your users would have found, before they do.",
    what: "What we test",
    types: [
      "Functional testing (manual & automated)",
      "Regression testing suites",
      "Performance & load testing",
      "Security & penetration testing",
      "Cross-browser & cross-device testing",
      "API testing & contract validation",
      "Accessibility audits (WCAG 2.1)",
      "UAT facilitation & sign-off",
    ],
    tech: [
      { category: "Test Automation", items: ["Playwright", "Cypress", "Selenium", "Appium"] },
      { category: "API Testing", items: ["Postman", "Newman", "REST Assured"] },
      { category: "Performance", items: ["k6", "JMeter", "Lighthouse"] },
      { category: "CI/CD Integration", items: ["GitHub Actions", "GitLab CI", "Jenkins"] },
    ],
    process: [
      { step: "Test Planning", desc: "Test strategy, scope definition, and risk-based prioritization before a sprint begins." },
      { step: "Test Case Design", desc: "Comprehensive test scenarios covering happy paths, edge cases, and failure modes." },
      { step: "Execution", desc: "Manual exploratory testing combined with automated regression runs on every build." },
      { step: "Defect Management", desc: "Detailed bug reports with reproduction steps, severity assessment, and fix verification." },
      { step: "Release Certification", desc: "Go/no-go assessment with test coverage metrics and outstanding risk summary." },
    ],
    projects: [
      { name: "Valley Sierra", tag: "E-Commerce QA", year: "2022" },
      { name: "Tago DMS", tag: "Mobile + API Testing", year: "2023" },
      { name: "Leed Pop", tag: "Hybrid App QA", year: "2021" },
      { name: "XEKE", tag: "Performance Testing", year: "2022" },
    ],
    nextSlug: "dedicated-teams",
    nextLabel: "Dedicated Offshore Teams",
  },
  "dedicated-teams": {
    title: "Dedicated Offshore Teams",
    tagline: "Your engineering department, extended.",
    intro: "Hiring is slow, expensive, and risky. A dedicated team from Tenomad integrates directly into your workflow — your Jira, your Slack, your standup cadence — operating as a seamless extension of your engineering department. Based in Hue City, Vietnam, where lower overhead means you get senior talent at a fraction of the cost of equivalent hires in the US or Europe.",
    what: "Team compositions we provide",
    types: [
      "Full-stack web development teams",
      "Mobile development squads (iOS, Android, RN)",
      "Frontend-only teams (React, Vue, Angular)",
      "Backend & API teams",
      "QA & automation teams",
      "Design + development hybrid squads",
      "AI/ML engineering teams",
      "Technical leads & engineering managers",
    ],
    tech: [
      { category: "Collaboration", items: ["Slack", "Jira", "Linear", "Confluence", "Notion"] },
      { category: "Version Control", items: ["GitHub", "GitLab", "Bitbucket"] },
      { category: "Communication", items: ["Timezone overlap guaranteed", "Daily standups", "Sprint demos", "Weekly reports"] },
      { category: "Engagement Models", items: ["Time & Materials", "Fixed Price", "Dedicated Retainer"] },
    ],
    process: [
      { step: "Needs Assessment", desc: "We understand your stack, workflow, and culture before recommending team composition." },
      { step: "Team Assembly", desc: "We match engineers based on technical fit, communication skills, and timezone overlap — not just availability." },
      { step: "Onboarding", desc: "A structured 2-week integration period: codebase walkthrough, tool access, and relationship building." },
      { step: "Operational Rhythm", desc: "Your agile process, your tools, our engineers. We adapt to you — not the other way around." },
      { step: "Ongoing Oversight", desc: "Dedicated account manager, regular performance reviews, and transparent reporting." },
    ],
    projects: [
      { name: "Sqoop", tag: "Dedicated Dev Team", year: "2023" },
      { name: "Swolematch", tag: "Hybrid Squad", year: "2022" },
      { name: "My CalSigns", tag: "Full-Stack Team", year: "2023" },
      { name: "Valley Sierra", tag: "E-Commerce Team", year: "2022" },
    ],
    nextSlug: "startups",
    nextLabel: "Startups",
  },
  "startups": {
    title: "Startups",
    tagline: "MVP development with speed and precision.",
    intro: "Building a startup is a race against time and capital. We help you win that race by designing, architecting, and launching high-quality MVPs that prove your hypothesis, delight early users, and impress investors — all without the technical debt that cripples future growth.",
    what: "What we offer",
    types: [
      "MVP planning & feature scoping",
      "Rapid clickable prototyping",
      "Proof of Concept (PoC) development",
      "Scalable system architecture",
      "Database & API design",
      "Cloud infrastructure bootstrap",
      "Investor pitch-deck technical support",
    ],
    tech: [
      { category: "Fast-track stack", items: ["TypeScript", "Next.js", "Node.js", "Supabase", "PostgreSQL"] },
      { category: "Prototyping", items: ["Figma", "Framer", "v0 / Tailwind CSS"] },
      { category: "Infrastructure", items: ["Vercel", "Render", "AWS (Amplify / RDS)"] },
      { category: "Services", items: ["Stripe Integration", "SendGrid / Resend", "PostHog Analytics"] },
    ],
    process: [
      { step: "Scoping & Blueprint", desc: "We strip away non-essential features to define a hyper-focused MVP scope in just 3 days." },
      { step: "Rapid Prototyping", desc: "Interactive wireframes and design mockups designed to validate user experience and core value." },
      { step: "Sprint-Based Build", desc: "Parallel development of frontend and backend. You see working iterations weekly, not monthly." },
      { step: "Rigorous Polish", desc: "Sanity-check QA testing to ensure your launch is smooth and free from embarrassing critical bugs." },
      { step: "Launch & Iterate", desc: "Deployment to production, setup of user feedback and analytics pipelines, and planning for Phase 2." },
    ],
    projects: [
      { name: "Swolematch", tag: "Fitness Startup MVP", year: "2022" },
      { name: "XEKE", tag: "Mobility Platform MVP", year: "2022" },
      { name: "My CalSigns", tag: "AI Startup MVP", year: "2023" },
    ],
    nextSlug: "web-development",
    nextLabel: "Web Development",
  },
};

const slugToLabel: Record<string, string> = {
  "web-development": "Web Development",
  "mobile-development": "Mobile Development",
  "ui-ux-design": "UI/UX Design",
  "ai-nlp-consulting": "AI & NLP Consulting",
  "quality-assurance": "Quality Assurance",
  "dedicated-teams": "Dedicated Offshore Teams",
  "startups": "Startups",
};

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const service = serviceData[slug];
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const techRef = useScrollReveal();
  const processRef = useScrollReveal();
  const projectsRef = useScrollReveal();

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <h1 className="text-4xl font-bold">Service not found.</h1>
        <Link href="/services">
          <Button variant="outline" className="gap-2 rounded-none uppercase tracking-widest text-xs">
            <ArrowLeft size={16} /> Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Back link */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-back-services">
          <ArrowLeft size={14} /> All Services
        </Link>
      </div>

      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-24" ref={headerRef as React.RefObject<HTMLDivElement>}>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Service</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-8">
          {service.title}.
        </h1>
        <p className="text-[20px] text-muted-foreground max-w-3xl leading-relaxed">
          {service.tagline}
        </p>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 md:px-12 mb-24" ref={contentRef as React.RefObject<HTMLDivElement>}>
        <div className="max-w-3xl">
          <p className="text-xl leading-relaxed text-foreground/80">
            {service.intro}
          </p>
        </div>
      </section>

      {/* What we build / offer */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">{service.what}</h2>
          </div>
          <div className="md:col-span-2">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.types.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
                  <CheckCircle size={16} className="text-accent mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-surface border-y border-border py-24 mb-24" ref={techRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold mb-12">Technology stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {service.tech.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/80 font-mono">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 md:px-12 mb-24" ref={processRef as React.RefObject<HTMLDivElement>}>
        <h2 className="text-2xl font-bold mb-16">How we work</h2>
        <div className="grid grid-cols-1 gap-12 max-w-3xl">
          {service.process.map((step, i) => (
            <div key={step.step} className="flex gap-8 items-baseline">
              <span className="text-4xl font-bold text-border/60 font-mono shrink-0 w-10">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related projects */}
      <section className="container mx-auto px-6 md:px-12 mb-24" ref={projectsRef as React.RefObject<HTMLDivElement>}>
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-2xl font-bold">Related work</h2>
          <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1" data-testid="link-view-portfolio">
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-border">
          {service.projects.map((p) => (
            <div key={p.name} className="bg-card border-r border-b border-border p-8 hover:bg-surface transition-colors">
              <p className="text-[10px] text-muted-foreground font-mono mb-6 uppercase tracking-widest">{p.year}</p>
              <p className="font-medium text-lg text-foreground mb-2">{p.name}</p>
              <p className="text-sm text-muted-foreground font-light">{p.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nav: next service */}
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <div className="border-t border-border pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Next service</p>
            <Link href={`/services/${service.nextSlug}`} className="text-2xl font-semibold hover:text-accent transition-colors flex items-center gap-3" data-testid="link-next-service">
              {service.nextLabel} <ArrowRight size={20} />
            </Link>
          </div>
          <Link href="/contact">
            <Button size="lg" className="rounded-none px-10 text-xs h-14 transition-colors uppercase tracking-widest font-medium" data-testid="button-contact-cta">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
