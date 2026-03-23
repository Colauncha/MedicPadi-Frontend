import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Clock, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const WAITLIST_URL = "https://medicpadi.com/waitlist";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5 z-0" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <Video className="h-4 w-4" />
              <span>Your Health, One Click Away</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connect with Doctors{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Anytime, Anywhere
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Experience quality healthcare from the comfort of your home. Easy consultations, 
              affordable prescriptions, and trusted medical professionals at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#how-it-works">How It Works</a>
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-muted-foreground">Available</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Affordable</p>
                  <p className="text-sm text-muted-foreground">Pricing</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="Professional doctor ready for telemedicine consultation" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-hover border border-border max-w-xs">
              <p className="text-sm text-muted-foreground mb-2">Trusted by patients</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gradient-hero border-2 border-card" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">10,000+</p>
                  <p className="text-muted-foreground">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
