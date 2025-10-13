import { Shield, Clock, CreditCard, Users, Stethoscope, MessageCircle, WifiOff, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your medical data is encrypted and protected with industry-leading security standards.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access healthcare professionals any time of day or night, including weekends and holidays.",
  },
  {
    icon: CreditCard,
    title: "Affordable Care",
    description: "Transparent pricing with no hidden fees. Quality healthcare that fits your budget.",
  },
  {
    icon: Users,
    title: "Licensed Doctors",
    description: "Connect with certified and experienced medical professionals across various specialties.",
  },
  {
    icon: Stethoscope,
    title: "Complete Care",
    description: "From diagnosis to prescription to follow-up care, we've got you covered.",
  },
  {
    icon: MessageCircle,
    title: "Instant Chat",
    description: "Quick responses through secure messaging for non-urgent medical questions.",
  },
  {
    icon: WifiOff,
    title: "Offline Access",
    description: "Access your medical records, prescriptions, and appointment history even without internet.",
  },
  {
    icon: RefreshCw,
    title: "Auto Sync",
    description: "Your data automatically syncs when you're back online, keeping everything up-to-date.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              MedicPadi?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience healthcare that's designed around your needs with cutting-edge technology and compassionate care.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-hover group bg-gradient-card"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-hero group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
