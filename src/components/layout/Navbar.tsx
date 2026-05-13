import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled 
          ? "py-4 bg-background border-b border-border" 
          : "py-6 bg-background border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Tenomad Logo" 
            className="h-5 md:h-6 w-auto block dark:hidden object-contain transition-all duration-300" 
          />
          <img 
            src="/logo-dark.png" 
            alt="Tenomad Logo" 
            className="h-5 md:h-6 w-auto hidden dark:block object-contain transition-all duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-bold tracking-widest uppercase transition-colors duration-300 relative py-1",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Link href="/contact" className="ml-4">
            <Button className="font-semibold rounded-none px-6 h-10 uppercase text-xs tracking-widest transition-colors duration-300">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="text-foreground p-2 -mr-2 transition-opacity hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border py-6 px-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest py-3 border-b border-border transition-colors duration-300",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="mt-6">
            <Button className="w-full font-semibold rounded-none py-6 text-sm uppercase tracking-widest">
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
