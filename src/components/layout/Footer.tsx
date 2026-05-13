import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-24">
          <div className="max-w-md">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="Tenomad Logo" 
                className="h-6 md:h-7 w-auto block dark:hidden object-contain transition-all duration-300" 
              />
              <img 
                src="/logo-dark.png" 
                alt="Tenomad Logo" 
                className="h-6 md:h-7 w-auto hidden dark:block object-contain transition-all duration-300" 
              />
            </Link>
            <p className="text-muted-foreground text-sm tracking-wide leading-relaxed font-light mb-6">
              Built in Vietnam. Trusted globally.
            </p>
            {/* Contact Information */}
            <div className="space-y-2 text-xs text-muted-foreground font-light tracking-wide">
              <p className="flex items-start gap-2 leading-relaxed">
                <span className="font-bold text-[10px] uppercase tracking-wider text-foreground shrink-0 mt-0.5">HQ:</span> 
                <span>26, Ly Thuong Kiet St, Vinh Ninh Ward, Thuan Hoa District, Hue City</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[10px] uppercase tracking-wider text-foreground shrink-0">Tel:</span> 
                <span>(+84) 0234-6271-757</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-bold text-[10px] uppercase tracking-wider text-foreground shrink-0">Email:</span> 
                <a href="mailto:contact@tenomad.com" className="hover:text-foreground transition-colors font-medium">contact@tenomad.com</a>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <div className="flex gap-8 mb-12 flex-wrap justify-end">
              <Link href="/services" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium">Services</Link>
              <Link href="/about" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium">About</Link>
              <Link href="/careers" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium">Careers</Link>
              <Link href="/blog" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</Link>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github size={18} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X (Twitter)">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} TENOMAD. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            Hue City, Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
