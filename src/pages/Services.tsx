import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, MessageCircle, FileText, Heart, Pill, Users, Shield, WifiOff } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Virtual Consultations",
    description: "Connect with licensed healthcare professionals through secure video calls from the comfort of your home. Available 24/7 for your convenience.",
    features: ["HD video quality", "Instant chat support", "Multiple specialties", "24/7 availability"],
  },
  {
    icon: FileText,
    title: "Electronic Health Records (EHR)",
    description: "Securely store and share your medical history with healthcare providers. Maintain complete control over who accesses your health data with our consent management system.",
    features: ["Secure data storage", "Easy sharing", "Consent management", "Complete medical history"],
  },
  {
    icon: Pill,
    title: "Prescription Management",
    description: "Receive digital prescriptions and compare prices across verified pharmacies. Get your medications delivered to your doorstep.",
    features: ["Electronic prescriptions", "Price comparison", "Home delivery", "Verified pharmacies"],
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join support groups for chronic conditions and connect with others sharing similar health journeys. Share experiences and coping strategies in a safe environment.",
    features: ["Support groups", "Peer connections", "Expert moderation", "Safe community"],
  },
  {
    icon: MessageCircle,
    title: "Instant Messaging",
    description: "Quick responses through secure messaging for non-urgent medical questions. Stay connected with your healthcare team.",
    features: ["Secure messaging", "Quick responses", "Medical guidance", "Follow-up care"],
  },
  {
    icon: WifiOff,
    title: "Offline Access",
    description: "Access your medical records, prescriptions, and appointment history even without internet. Data automatically syncs when you're back online.",
    features: ["Offline records", "Auto sync", "Emergency access", "No connectivity needed"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5 z-0" />
          <div className="container mx-auto px-4 z-10 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
                <Heart className="h-4 w-4" />
                <span>Comprehensive Healthcare Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Medicpadi offers a complete suite of telemedicine services designed to make healthcare accessible, integrated, and proactive for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-hover group bg-gradient-card"
                  >
                    <CardContent className="p-8">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Shield className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Experience Better Healthcare?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of patients who have already transformed their healthcare experience with Medicpadi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
