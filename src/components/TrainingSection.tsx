import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hylImg from "@/assets/heal-your-life.jpg";
import hylLogo from "@/assets/love-yourself-hyl.jpg";
import quantumFoundImg from "@/assets/quantum-foundation.jpg";

const trainings = [
  {
    num: "01",
    title: "Heal Your Life® Workshop",
    subtitle: "A Journey of Self-Discovery and Empowerment",
    desc: "The Heal Your Life Workshop is a transformative experience designed to help you reconnect with your inner strength, clarity, and joy. Inspired by deep healing principles, this workshop helps you:",
    bullets: [
      "Release emotional blocks",
      "Develop self-love and confidence",
      "Improve relationships and self-worth",
      "Align with your true purpose",
    ],
    extraDesc: "This workshop is ideal for anyone seeking personal growth, emotional balance, and a renewed sense of direction in life.",
    image: hylImg,
    alt: "Heal Your Life workshop group",
  },
  {
    num: "02",
    title: "Quantum Foundation Level Training",
    subtitle: "Begin Your Journey into Conscious Healing",
    desc: "The Quantum Foundation Level Training is designed for individuals who wish to understand the fundamentals of quantum healing and conscious awareness. This training helps you awaken your inner healer and understand how energy, thoughts, and intention shape your reality.",
    bullets: [
      "Basics of quantum energy and healing",
      "Understanding consciousness and intention",
      "Techniques for self-healing and awareness",
      "Clearing emotional and energetic blockages",
      "Family Constellations",
      "Healing Through Trees",
      "Ho'ponopono Technique",
      "Distance Healing",
      "Space Healing",
    ],
    extraDesc: "This foundation program empowers you to transform your inner world—and in turn, your outer life. Also equips you to heal others.",
    whoIsThisFor: [
      "Anyone beginning their spiritual or healing journey",
      "Therapists, healers, and wellness practitioners",
      "Individuals seeking clarity, peace, and self-growth",
    ],
    image: quantumFoundImg,
    alt: "Quantum foundation level training session",
  },
];

const TrainingSection = () => {
  return (
    <section id="training" className="section-padding gradient-warm">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Training & Workshops</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Empower Yourself Through Learning
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our training programs and workshops are designed to awaken your inner healer and guide you toward lasting personal transformation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {trainings.map((training, i) => (
            <motion.div
              key={training.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl border border-border bg-card p-6 shadow-soft lg:p-10 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {i === 0 && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={hylLogo}
                    alt="Love Yourself - Heal Your Life®"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              )}
              <div className={`grid items-center gap-8 lg:grid-cols-2`}>
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={training.image}
                  alt={training.alt}
                  className="h-64 w-full rounded-2xl object-cover lg:h-80"
                />
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="mb-4 inline-block font-heading text-5xl font-bold text-primary/20">
                  {training.num}
                </span>
                {training.subtitle && (
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{training.subtitle}</p>
                )}
                <h3 className="mb-3 text-2xl font-bold text-foreground lg:text-3xl">
                  {training.title}
                </h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">{training.desc}</p>
                {training.bullets && (
                  <ul className="mb-4 space-y-2">
                    {training.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {training.extraDesc && (
                  <p className="mb-4 text-muted-foreground leading-relaxed italic">{training.extraDesc}</p>
                )}
                {training.whoIsThisFor && (
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold text-foreground">Who Is This For?</p>
                    <ul className="space-y-1">
                      {training.whoIsThisFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                >
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
