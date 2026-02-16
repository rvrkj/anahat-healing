import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "A detailed case-taking session to understand your unique physical, emotional, and mental patterns. Every healing journey begins with deep listening.",
  },
  {
    num: "02",
    title: "Personalized Plan",
    desc: "Based on your consultation, a tailored healing plan is crafted combining the most appropriate modalities for your specific needs.",
  },
  {
    num: "03",
    title: "Begin Your Sessions",
    desc: "Experience transformative healing sessions in a sacred, safe space where healing unfolds naturally, gently, and powerfully.",
  },
  {
    num: "04",
    title: "Ongoing Support & Progress",
    desc: "Continued guidance and support to ensure lasting transformation. Each session builds upon the last, deepening your healing journey.",
  },
];

const JourneySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Your Healing Journey</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Simple Steps to Begin
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="mb-4 block font-heading text-4xl font-bold text-primary/20">{step.num}</span>
              <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground lg:flex">
                  <span className="text-xs">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
