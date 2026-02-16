import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    category: "Homeopathy",
    client: "Parent of 4-year-old child",
    text: "We consulted Dr. Lata Ningoo for our 4-year-old child, who was having frequent cold, cough, and excessive crying. Dr. Ningoo was extremely gentle, patient, and caring in her approach. She took detailed history, understood our child's behavior and health pattern, and explained everything clearly to us as parents. Over time, we noticed improvement in his overall comfort and well-being.",
  },
  {
    category: "Heal Your Life® Workshop",
    client: "Female, 52 years",
    text: "Today's mirror work was so special because before I saw my face and I noticed what was not ok, my hair, my skin or eyes BUT today for the first time I just saw love and naughtiness in my eyes. I felt so happy to see myself without any judgement and criticism. I love and approve of myself exactly as I am.",
  },
  {
    category: "Quantum Therapy",
    client: "Male, 35 years",
    text: "I opted for quantum healing from Dr. Lata Ningoo while preparing for my exams and going through my visa and PR journey. The sessions were deeply calming and helped me release anxiety, fear, and self-doubt. Over time, I felt more confident, mentally strong, and aligned with my goals.",
  },
  {
    category: "Past Life Regression",
    client: "Female, 60 years",
    text: "My past life regression session with Dr. Lata Ningoo was incredible. From the very beginning, her calm energy, deep understanding, and genuine empathy made me feel completely safe and supported. I came away with a deeper understanding of myself and a sense of peace I hadn't felt in a long time.",
  },
  {
    category: "Quantum Healing Training",
    client: "Female Doctor",
    text: "Lots of Gratitude to you Dear Lata Mam for teaching us Quantum Healing. It was an amazing experience. Your teaching method is very nice. You taught us step by step everything with practical training. Everyone in the group was given a chance to practice every healing method.",
  },
  {
    category: "Homeopathy",
    client: "Male, 32 years — Anxiety Disorder",
    text: "I had a very positive experience with homeopathic treatment under Dr. Lata Ningoo. She is extremely patient, attentive, and takes the time to understand concerns in depth rather than rushing through the consultation. The treatment felt holistic and well-tailored, and I noticed gradual but meaningful improvement over time.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const perPage = 1;
  const total = testimonials.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <section id="testimonials" className="section-padding gradient-lavender">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Client Testimonials</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Stories of Transformation
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trusted by individuals on their journey to wellness — real experiences of healing and growth.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-card lg:p-12"
            >
              <Quote className="mb-6 h-10 w-10 text-primary/30" />
              <p className="mb-6 text-lg leading-relaxed text-foreground italic">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonials[current].client}</p>
                <span className="tag-pill mt-2 text-xs">{testimonials[current].category}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-muted-foreground">
              {current + 1} / {total}
            </span>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
