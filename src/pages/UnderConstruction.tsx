import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

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
              We're working hard to bring you this feature. Check back soon for updates!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/">
                  <Home className="h-5 w-5 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Button>
            </div>
            
            {/* Feature highlights */}
            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">Stay Updated</p>
                <p className="font-semibold">Follow our progress</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">Coming Soon</p>
                <p className="font-semibold">Exciting features ahead</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/30 border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">Need Help?</p>
                <p className="font-semibold">Contact support</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnderConstruction;
