import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="h-9 w-9 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Medicpadi</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href="/get-started">Sign In</a>
            </Button>
            <Button variant="default" asChild>
              <a href="/get-started">Get Started</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-3 animate-in slide-in-from-top duration-200">
            <a href="/services" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#how-it-works" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="/about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full" asChild>
                <a href="/get-started">Sign In</a>
              </Button>
              <Button variant="default" className="w-full" asChild>
                <a href="/get-started">Get Started</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
