import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Sparkles } from "lucide-react";
import healingImage from "@/assets/healing-energy.jpg";

const credentials = [
  "BHMS (Bomb) Pg Hom (London)",
  "Heal Your Life® Workshop Leader — Internationally Certified",
  "Quantum Foundation Level Instructor — Certified by Quantum (R)evolution",
  "Quantum Advanced-Level Therapy — Certified by Quantum (R)evolution",
  "Past Life Regression Therapy — Amarantos Certified",
];

const features = [
  { icon: Heart, title: "Holistic Approach", desc: "Mind, body, and soul healing" },
  { icon: Award, title: "20+ Years Experience", desc: "Trusted & certified professional" },
  { icon: Sparkles, title: "Transformative Results", desc: "Profound life changes" },
  { icon: BookOpen, title: "Visiting Professor", desc: "CNK Homeopathic Medical College" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About Dr. Lata Ningoo</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Your Wellbeing, My Priority
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Caring for minds, changing lives through compassionate and holistic healing.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={healingImage}
              alt="Healing energy and holistic wellness"
              className="w-full rounded-2xl object-cover shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-primary/10 w-full h-full -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I am Dr. Lata Ningoo, based in Surat, with over 20 years of experience as a Consultant Homeopath. 
              My journey has expanded beyond physical healing into deeper realms of emotional, energetic, and 
              spiritual well-being, transforming lives of people.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Today, I work as a Quantum Healer, Quantum Healing Trainer, Past Life Regression Therapist, 
              and Heal Your Life® Workshop Leader — Internationally certified, guiding individuals toward 
              clarity, balance, and self-empowerment.
            </p>

            <blockquote className="mb-8 border-l-4 border-primary pl-4 italic text-foreground">
              "What truly inspires me is seeing my clients leave sessions feeling lighter, happier, 
              empowered, and fulfilled."
            </blockquote>

            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Credentials</p>
              <ul className="space-y-1.5">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-card"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
