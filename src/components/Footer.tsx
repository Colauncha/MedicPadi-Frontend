import { Link } from "react-router-dom";
import logo from "@/assets/medicpadi-logo.png";

const WAITLIST_URL = "https://medicpadi.com/waitlist";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="MedicPadi logo" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Making quality healthcare accessible to everyone, everywhere.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Video Consultation</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">E-Prescriptions</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Medical Records</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Health Monitoring</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Join Waitlist</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">HIPAA Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 MedicPadi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
