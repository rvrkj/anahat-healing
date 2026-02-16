import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Homeopathy",
    desc: "Gentle holistic treatment restoring body to natural state of health",
  },
  {
    title: "Heal Your Life® Workshop",
    desc: "A transformational world-renowned program for self-discovery",
  },
  {
    title: "Quantum Healing Therapy",
    desc: "A rapid and powerful healing modality for deep transformation",
  },
  {
    title: "Quantum Healing Trainer",
    desc: "Learn and practice profound energy healing therapy — heal self and others",
  },
  {
    title: "Past Life Regression Therapy",
    desc: "Healing by releasing past karmas and subconscious patterns",
  },
];

const clientResults = [
  "Healing from chronic and emotional illnesses",
  "Resolution of long-standing personal and material challenges",
  "Improved confidence, clarity, and emotional peace",
  "Support and alignment for academic success and life goals",
];

const WhySection = () => {
  return (
    <section className="section-padding gradient-warm">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Work With Me</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            A Holistic Approach to Healing
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Healing is not just about curing symptoms — it is about understanding the root cause at physical, 
            emotional, mental, and soul levels.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Reasons */}
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{r.title}</h4>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-3xl border border-border bg-card p-8 shadow-card lg:p-10"
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              My clients have experienced:
            </h3>
            <ul className="space-y-4">
              {clientResults.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-4 border-primary pl-4 italic text-foreground">
              "Each session is a sacred space where healing unfolds naturally, gently, and powerfully."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
