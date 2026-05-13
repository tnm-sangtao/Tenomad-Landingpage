import { useParams, Link } from "wouter";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MOCK_POSTS } from "./Blog";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();
  
  const post = MOCK_POSTS.find(p => p.slug === slug);
  const isFirstPost = slug === "hue-city-competitive-advantage";

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen pt-40 pb-24 container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <Link href="/blog" className="text-accent hover:underline">Return to blog</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <article className="container mx-auto px-6 md:px-12 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to blog
        </Link>
        
        <header ref={headerRef as React.RefObject<HTMLElement>} className="mb-16">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <span className="text-accent font-medium">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>
        </header>

        <div ref={contentRef as React.RefObject<HTMLDivElement>} className="prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-accent prose-p:text-muted-foreground prose-p:leading-relaxed">
          {isFirstPost ? (
            <>
              <p className="lead text-[20px] text-foreground font-medium mb-10">
                {post.excerpt}
              </p>
              <p>
                When we founded Tenomad, the conventional wisdom dictated that a technology company in Vietnam must be headquartered in Ho Chi Minh City or Hanoi. Those are the bustling metropolises, the financial hubs, the places where the noise of progress is deafening.
              </p>
              <p>
                We chose Hue City.
              </p>
              <h2 className="text-2xl mt-12 mb-6 text-primary">The Architecture of Deep Work</h2>
              <p>
                Software engineering is an exercise in managing cognitive load. It requires sustained, uninterrupted concentration to hold complex architectures in mind. The modern open-plan office in a gridlocked city is actively hostile to this mode of work.
              </p>
              <p>
                Hue City, the former imperial capital, moves at a different rhythm. It is a city defined by its heritage, its quiet pace, and the Perfume River that bisects it. By locating our engineering teams here, we've inadvertently optimized for "deep work."
              </p>
              <h2 className="text-2xl mt-12 mb-6 text-primary">Retention over Recruitment</h2>
              <p>
                In Tier 1 cities, the talent war is fought with ping-pong tables and aggressive poaching. Developer tenure is measured in months, not years. This churn is fatal to long-term client projects. 
              </p>
              <p>
                By building an elite engineering culture in a Tier 2 city, we attract developers who value craftsmanship and stability over the frenetic startup carousel. Our retention rates are an order of magnitude higher than industry averages, meaning the senior engineer who starts your project is the one who finishes it.
              </p>
              <h2 className="text-2xl mt-12 mb-6 text-primary">The Global Village</h2>
              <p>
                With ubiquitous broadband and asynchronous communication tools, physical proximity to the client has become less important than cultural proximity and communication rigor.
              </p>
              <p>
                Our engineers write code in the shadow of imperial pagodas, yet they ship to servers in US-East-1 and collaborate seamlessly with founders in Brooklyn. This is the essence of the digital nomad spirit: grounded locally, executing globally.
              </p>
            </>
          ) : (
            <div className="py-20 text-center border-t border-b border-border/50">
              <h3 className="text-2xl font-semibold mb-4">Coming soon.</h3>
              <p className="text-muted-foreground">This article is currently being drafted by our engineering team.</p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
