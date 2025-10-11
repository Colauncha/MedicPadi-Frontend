import { UserPlus, Video, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Quick and easy sign-up process. Add your medical history and preferences in minutes.",
    step: "01",
  },
  {
    icon: Video,
    title: "Book a Consultation",
    description: "Choose from available doctors and schedule a video consultation at your convenience.",
    step: "02",
  },
  {
    icon: FileText,
    title: "Get Your Prescription",
    description: "Receive your diagnosis and prescription digitally. Order medication directly through our platform.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting quality healthcare has never been easier. Follow these simple steps to connect with a doctor.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-hover group bg-gradient-card"
              >
                <CardContent className="p-8">
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
