"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Emagrecimento saudável",
    content:
      "A Kelly mudou completamente minha relação com a comida. Em 3 meses, perdi 8kg sem passar fome e sem cortar nenhum alimento. O acompanhamento dela é incrível — sempre disponível e super atenciosa!",
    rating: 5,
  },
  {
    name: "Rafael M.",
    role: "Nutrição esportiva",
    content:
      "Como praticante de crossfit, precisava de um plano que acompanhasse meu nível de treino. A Kelly entendeu exatamente o que eu precisava. Minha performance melhorou demais e ganhei muito mais disposição.",
    rating: 5,
  },
  {
    name: "Carolina T.",
    role: "Saúde intestinal",
    content:
      "Sofria com inchaço e desconforto intestinal há anos. A abordagem funcional da Kelly identificou as causas e hoje me sinto outra pessoa. A diferença é absurda — recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    role: "Reeducação alimentar",
    content:
      "Depois de anos fazendo dietas malucas sem resultado, encontrei na Kelly uma profissional que me ensinou a comer de verdade. Aprendi a montar minhas refeições com autonomia e sem neura.",
    rating: 5,
  },
  {
    name: "Lucas P.",
    role: "Saúde hormonal",
    content:
      "O trabalho da Kelly com suplementação e alimentação funcional ajudou a regular meus hormônios de forma natural. Mais energia, melhor sono e muito mais qualidade de vida. Gratidão!",
    rating: 5,
  },
  {
    name: "Amanda R.",
    role: "Emagrecimento pós-gestação",
    content:
      "Após a gestação, precisava de um acompanhamento que respeitasse meu corpo e a amamentação. A Kelly foi perfeita: cuidadosa, empática e com resultados reais. Perdi 12kg com saúde!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section
      id="depoimentos"
      className="py-20 md:py-28 bg-gradient-to-b from-cream-dark to-cream relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Resultados que Falam por Si"
          subtitle="Histórias reais de pacientes que transformaram seus hábitos e conquistaram saúde de verdade."
        />

        {/* Desktop Grid + Mobile Carousel */}
        <div className="relative mt-4">
          {/* Navigation buttons */}
          <div className="flex justify-center gap-3 mb-8 md:hidden">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-charcoal/10 text-charcoal hover:bg-olive hover:text-white hover:border-olive disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-charcoal disabled:hover:border-charcoal/10 transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full border border-charcoal/10 text-charcoal hover:bg-olive hover:text-white hover:border-olive disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-charcoal disabled:hover:border-charcoal/10 transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-olive w-6"
                      : "bg-charcoal/15 hover:bg-charcoal/30"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="h-full p-6 md:p-8 rounded-2xl bg-white/80 border border-transparent hover:border-gold/20 hover:shadow-lg hover:shadow-olive/5 transition-all duration-500 flex flex-col">
      {/* Quote icon */}
      <Quote
        size={32}
        className="text-gold/30 mb-4 rotate-180"
        strokeWidth={1}
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-gold fill-gold"
            strokeWidth={1}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-charcoal-light text-sm md:text-base leading-relaxed flex-1">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-6 pt-4 border-t border-charcoal/5">
        <p className="font-semibold text-charcoal text-sm">
          {testimonial.name}
        </p>
        <p className="text-xs text-olive font-medium">{testimonial.role}</p>
      </div>
    </div>
  );
}
