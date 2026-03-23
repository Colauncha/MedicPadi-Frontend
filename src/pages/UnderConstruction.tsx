import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, Home, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const WAITLIST_URL = "https://medicpadi.com/waitlist";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-gradient-hero flex items-center justify-center animate-pulse">
                <Construction className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Page Under{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Construction
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're working hard to bring you this feature. Join our waitlist to be the first to know when we launch!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Join the Waitlist
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/">
                  <Home className="h-5 w-5 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button size="lg" variant="ghost" onClick={() => window.history.back()}>
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnderConstruction;
