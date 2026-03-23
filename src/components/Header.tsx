import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/medicpadi-logo.png";

const WAITLIST_URL = "https://medicpadi.com/waitlist";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <img src={logo} alt="MedicPadi logo" className="h-9 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <a href="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">Sign In</a>
            </Button>
            <Button variant="default" asChild>
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">Get Started</a>
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
            <Link to="/services" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <a href="/#how-it-works" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <Link to="/about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full" asChild>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">Sign In</a>
              </Button>
              <Button variant="default" className="w-full" asChild>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
