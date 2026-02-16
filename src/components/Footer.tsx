import { Heart } from "lucide-react";

const footerLinks = {
  services: [
    "Homeopathy Consultation",
    "Quantum Healing Therapy",
    "Past Life Regression",
    "Heal Your Life® Workshop",
    "Quantum Foundation Training",
  ],
  resources: [
    "Book Reading Group",
    "Online Consultations",
    "FAQs",
    "Testimonials",
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
              Anahat<span className="text-primary">Healing</span>
            </h3>
            <p className="mb-4 max-w-xs text-sm text-muted-foreground">
              A refined space for deep healing and soulful transformation. 
              Guiding individuals toward clarity, balance, and self-empowerment.
            </p>
            <p className="text-sm text-muted-foreground">
              Dr. Lata Ningoo — Surat, Gujarat
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anahat Healing. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="h-3 w-3 text-primary" /> for healing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
