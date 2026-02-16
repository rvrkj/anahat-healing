import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-cta p-10 text-center shadow-elevated lg:p-16"
        >
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
              Every healing journey starts with a single step. Whether you seek clarity, healing, or transformation, 
              you are warmly guided and supported here.
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:9825472284"
                className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                Call: 9825472284
              </a>
              <a
                href="#tally-open=Y5QjGd&tally-emoji-text=👋&tally-emoji-animation=wave"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Book a Session <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Surat, Gujarat</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>9825472284</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Online treatment available</span>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/5" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary-foreground/5" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
