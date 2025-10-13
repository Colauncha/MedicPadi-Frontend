import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@medicpadi.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+234 (0) 800 MEDICPADI",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Lagos, Nigeria",
    description: "Our headquarters",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "24/7 Support",
    description: "We're always here for you",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5 z-0" />
          <div className="container mx-auto px-4 z-10 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index}
                    className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-hover group bg-gradient-card text-center"
                  >
                    <CardContent className="p-6">
                      <div className="h-14 w-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-foreground font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 bg-gradient-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input 
                          id="firstName" 
                          placeholder="John"
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe"
                          className="border-2"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="john.doe@example.com"
                        className="border-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+234 800 000 0000"
                        className="border-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?"
                        className="border-2"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px] border-2"
                      />
                    </div>
                    
                    <Button size="lg" className="w-full" variant="hero">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Medical Emergency?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For immediate medical assistance, please contact emergency services or visit your nearest hospital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="destructive">
                  Emergency Hotline: 112
                </Button>
                <Button size="lg" variant="outline">
                  Find Nearest Hospital
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

export default Contact;
