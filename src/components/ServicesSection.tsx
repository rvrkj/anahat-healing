import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import homeopathyImg from "@/assets/homeopathy.jpg";
import quantumImg from "@/assets/quantum-healing.jpg";
import plrImg from "@/assets/past-life-regression.jpg";
import quantumAdvImg from "@/assets/quantum-advanced.jpg";

const services = [
  {
    num: "01",
    title: "Homeopathy Consultation",
    subtitle: "Experienced • Gentle • Holistic Healing",
    desc: "Consult Dr. Lata Ningoo, an experienced and trusted Homeopathy doctor in Surat with 20+ years expertise. Natural, safe remedies for chronic illness, allergies, anxiety, hormonal disorders & children's health.",
    extraDesc: "Homeopathy is a safe, natural, and gentle system of medicine that supports the body's innate intelligence to heal. Instead of suppressing symptoms, it works by identifying the underlying imbalance—physical, emotional, and mental—and correcting it from within.",
    image: homeopathyImg,
    alt: "Homeopathy consultation room",
  },
  {
    num: "02",
    title: "Past Life Regression Therapy",
    subtitle: "Healing Beyond Time",
    desc: "Past Life Regression is one of the most powerful healing modalities. It allows individuals to access subconscious memories that may be influencing present-life challenges.",
    bullets: [
      "Release of karmic patterns and emotional burdens",
      "Deep realizations and soul-level understanding",
      "Emotional freedom and inner peace",
      "Closure from unresolved past experiences",
    ],
    extraDesc: "Witnessing people free themselves from long-held suffering is one of the most fulfilling aspects of my work.",
    image: plrImg,
    alt: "Past life regression therapy session",
  },
  {
    num: "03",
    title: "Quantum Healing Therapy",
    subtitle: "Transform Beyond Limitations",
    desc: "As a Quantum Healer and Trainer, I facilitate deep energetic shifts that help individuals release limiting beliefs, emotional blocks, and subconscious patterns.",
    bullets: [
      "Relief from physical and emotional discomfort",
      "Inner peace and mental clarity",
      "Positive changes in relationships, career, and finances",
      "Renewed purpose and confidence",
    ],
    extraDesc: "Quantum Healing works at the root level, enabling transformation that feels both profound and effortless.",
    image: quantumImg,
    alt: "Quantum healing meditation",
  },
  {
    num: "04",
    title: "Quantum Advanced-Level Therapy",
    subtitle: "Deep Healing at the Core Level",
    desc: "The Quantum Advanced-Level Therapy is for those ready to experience deep, transformative healing beyond surface-level concerns. This therapy works at the subconscious and energetic levels, helping release long-held emotional patterns, trauma, and limitations.",
    bullets: [
      "Deep emotional release",
      "Healing of subconscious patterns",
      "Enhanced clarity, confidence, and alignment",
      "Transformation in personal and professional life",
    ],
    extraDesc: "Clients often experience profound shifts that feel gentle yet deeply liberating. Each session is personalized and guided with care, safety, and compassion.",
    image: quantumAdvImg,
    alt: "Quantum advanced-level therapy session",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding gradient-warm">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Tailored Solutions for Your Unique Journey
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Each healing modality is designed to address different aspects of your well-being — physical, emotional, mental, and spiritual.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid items-center gap-8 rounded-3xl border border-border bg-card p-6 shadow-soft lg:grid-cols-2 lg:p-10 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-64 w-full rounded-2xl object-cover lg:h-80"
                />
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="mb-4 inline-block font-heading text-5xl font-bold text-primary/20">
                  {service.num}
                </span>
                {service.subtitle && (
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{service.subtitle}</p>
                )}
                <h3 className="mb-3 text-2xl font-bold text-foreground lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">{service.desc}</p>
                {service.bullets && (
                  <ul className="mb-4 space-y-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.extraDesc && (
                  <p className="mb-4 text-muted-foreground leading-relaxed italic">{service.extraDesc}</p>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-4 sm:grid-cols-1"
        >
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h4 className="mb-2 text-lg font-bold text-foreground">Free Book Reading Group</h4>
            <p className="text-sm text-muted-foreground">
              Join our weekly Book Reading Group every Tuesday at 9:15 PM. A supportive community space for growth, 
              reflection, and shared wisdom.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
