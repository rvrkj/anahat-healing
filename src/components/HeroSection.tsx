import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  const tags = ["Homeopathy", "Quantum Healing", "Past Life Regression", "Heal Your Life®", "Holistic Wellness"];

  return (
    <section id="home" className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-8 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 py-12 lg:py-0"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Step into Deep Healing
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Compassionate Care,{" "}
              <span className="italic text-primary">Proven Healing</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              A refined space for deep healing and soulful transformation. With over 20 years of experience, 
              Dr. Lata Ningoo guides you toward clarity, balance, and self-empowerment.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:opacity-90"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                Learn More
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="tag-pill text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-end justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Dr. Lata Ningoo - Anāhat Healing"
                className="relative z-10 h-auto w-full max-w-md rounded-3xl object-cover shadow-elevated lg:max-w-lg"
              />
              {/* Decorative blob */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-primary/10 -z-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
