
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Dream Town Developers offer?",
    answer:
      "We provide a full suite of construction services, including building construction, renovation, architecture and interior design, real estate services, and ongoing maintenance and support. Our team covers every phase from concept to completion.",
  },
  {
    question: "How long do your construction projects typically take?",
    answer:
      "Project duration depends on the size and complexity of your project. Small renovations may take a few weeks, while large building constructions can span several months. After an initial consultation, we provide a transparent timeline tailored to your project's needs.",
  },
  {
    question: "How is pricing determined for your services?",
    answer:
      "Pricing is based on project scope, materials chosen, design complexity, and client preferences. After a thorough site assessment and consultation, we provide a detailed, no-obligation quote outlining all expected costs to ensure transparency.",
  },
  {
    question: "What does your consultation process involve?",
    answer:
      "We begin with a friendly conversation to understand your goals. Our team will review your ideas, offer expert guidance, and assess your property if needed. This allows us to propose the best solutions and provide a clear action plan before any commitment is made.",
  },
  {
    question: "Do you offer support after the project is completed?",
    answer:
      "Absolutely! Dream Town Developers is committed to long-term client satisfaction. We offer post-construction support, including maintenance, repairs, and help with future upgrades. Our team is always just a call or message away.",
  },
  {
    question: "Can I make changes to the project once construction has started?",
    answer:
      "We understand the importance of flexibility. Minor changes can often be accommodated, depending on the project phase. Our team will discuss any impact on timeline or budget openly with you before proceeding.",
  },
  {
    question: "Are your consultations free?",
    answer:
      "Yes, our initial consultations are complimentary. We believe in building trust from the very first conversation.",
  },
  {
    question: "What distinguishes Dream Town Developers from other construction companies?",
    answer:
      "Our strong commitment to quality, transparent communication, and a client-centric approach set us apart. We combine local expertise with innovative technology, delivering projects on time and within budget every time.",
  },
];

const FAQs = () => (
  <section className="min-h-screen section-padding bg-gray-50">
    <div className="container max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Have questions about our services or process? We’re here to help. Browse our FAQs below to find the answers you need!
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem value={`faq-${idx}`} key={faq.question}>
            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center mt-10">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
          alt="FAQ illustration"
          className="rounded-lg max-w-xs shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default FAQs;
