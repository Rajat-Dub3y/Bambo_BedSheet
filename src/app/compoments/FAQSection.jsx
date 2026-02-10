import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What makes bamboo bedsheets better than cotton?",
    answer:
      "Bamboo bedsheets are naturally softer, more breathable, and moisture-wicking compared to traditional cotton. They regulate temperature better, are hypoallergenic, and become even softer with each wash. Environmentally, bamboo uses 1/3 of the water cotton requires and grows without pesticides.",
  },
  {
    question: "How should I wash and care for my bamboo sheets?",
    answer:
      "Machine wash on a gentle cold cycle with a mild, eco-friendly detergent. Tumble dry on low heat or line dry for best results. Avoid bleach and fabric softeners — bamboo is naturally soft and doesn't need them. Your sheets will get softer with every wash.",
  },
  {
    question: "What sizes are available?",
    answer:
      "We offer Single, Double, Queen, King, and Super King sizes. Each set includes a fitted sheet, flat sheet, and two pillowcases (one for Single). Our deep-pocket fitted sheets accommodate mattresses up to 40cm deep.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer:
      "Absolutely! We offer a 30-night sleep trial. If you're not completely in love with your bamboo bedsheets within 30 nights, we'll give you a full refund — no questions asked. We also provide a 2-year quality guarantee.",
  },
  {
    question: "How does your sustainability programme work?",
    answer:
      "Every purchase plants one tree through our partnership with One Tree Planted. Our bamboo is FSC-certified and harvested from managed forests. We use a closed-loop manufacturing process that recycles 99.5% of water, and all packaging is plastic-free and compostable.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-accent/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
            FAQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            Common Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
