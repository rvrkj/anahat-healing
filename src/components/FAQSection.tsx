import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "Is homeopathy safe?", answer: "Yes. Homeopathy is a gentle and natural system of medicine, commonly used for children, adults, and elderly patients when prescribed correctly." },
  { question: "What conditions can homeopathy treat?", answer: "Homeopathy can support chronic and recurring concerns such as allergies, asthma, migraine, skin problems, stress, anxiety, hormonal issues like thyroid, PCOS, lifestyle diseases (BP, diabetes, obesity), gall stones, kidney stones and children's ailments of dentition, cold, cough, diarrhoea, fever." },
  { question: "How long does homeopathy take to show results?", answer: "It depends on the condition and its duration. Acute issues improve faster, while chronic conditions usually need consistent treatment for long-term healing." },
  { question: "Can homeopathy help with allergies and urticaria?", answer: "Yes. Homeopathy is often chosen for allergies like chronic cold, skin urticaria, and recurrent allergic tendencies by working on immunity and root sensitivity." },
  { question: "Can homeopathy help with stress and anxiety?", answer: "Yes. Homeopathy considers emotional and mental patterns and offers individualized remedies that support calmness, emotional balance, and overall well-being." },
  { question: "Do you treat women's hormonal problems?", answer: "Yes. Homeopathy can support female hormonal disorders by addressing internal imbalance, emotional stress patterns, and physical symptoms together, diseases like PCOS, menstrual irregularities, infertility." },
  { question: "Do you treat children with homeopathy?", answer: "Yes. Homeopathy is gentle for children and can support concerns such as dentition issues, delayed development, frequent infections, and recurring illnesses." },
  { question: "Is a detailed case-taking necessary?", answer: "Yes. Homeopathy is highly individualized. A detailed consultation helps identify the root cause and the most suitable remedy for your unique constitution." },
  { question: "Have you treated skin diseases like psoriasis, herpes?", answer: "Yes. Homeopathy has given excellent results in diseases like psoriasis, herpes, warts, corns, eczema, and vitiligo." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="tag-pill mb-4">Common Questions</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Appointments available with detailed case-taking, compassionate guidance, individualized remedies and integrative approach.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQSection;
