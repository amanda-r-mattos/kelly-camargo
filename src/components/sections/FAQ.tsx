"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "A consulta pode ser online?",
    answer:
      "Sim! Realizo atendimentos tanto presenciais quanto online, por videochamada. O atendimento online tem a mesma qualidade e profundidade da consulta presencial, com toda a comodidade de ser atendido(a) de onde estiver.",
  },
  {
    question: "Você aceita convênio ou plano de saúde?",
    answer:
      "Atualmente trabalho como particular, sem vínculo com convênios. Porém, ofereço diferentes opções de planos e pacotes para tornar o acompanhamento acessível. Entre em contato para saber mais sobre valores e condições.",
  },
  {
    question: "Como funciona o acompanhamento entre consultas?",
    answer:
      "Nos planos de acompanhamento, você tem suporte direto pelo WhatsApp para tirar dúvidas, enviar fotos de refeições e relatar como está se sentindo. Faço ajustes pontuais conforme necessário, sem precisar esperar o retorno.",
  },
  {
    question: "Preciso fazer exames antes da primeira consulta?",
    answer:
      "Não é obrigatório, mas se você tiver exames recentes (dos últimos 6 meses), traga-os! Eles ajudam muito na avaliação inicial. Se necessário, posso solicitar exames específicos durante a consulta.",
  },
  {
    question: "Vocês trabalham com aplicativo de controle alimentar?",
    answer:
      "Sim! Utilizo aplicativos parceiros para facilitar o acompanhamento do seu plano alimentar, registro de refeições e comunicação. Tudo de forma prática e integrada ao seu dia a dia.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Os primeiros resultados — como melhora na disposição, sono e digestão — costumam aparecer nas primeiras semanas. Resultados de composição corporal geralmente são visíveis entre 4 a 8 semanas, dependendo dos objetivos e da adesão ao plano.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      {/* Subtle leaf accent */}
      <svg
        className="absolute top-16 right-8 w-24 h-24 text-green/[0.03] pointer-events-none"
        viewBox="0 0 96 96"
        fill="currentColor"
      >
        <path d="M48 8C48 8 84 24 84 52C84 68 69 80 48 84C27 80 12 68 12 52C12 24 48 8 48 8Z" />
      </svg>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas Frequentes"
          subtitle="Tudo o que você precisa saber antes de agendar sua consulta."
        />

        <div className="space-y-3 mt-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "bg-white border-green/15 shadow-md shadow-green/5"
                    : "bg-white/50 border-transparent hover:bg-white/80"
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-[family-name:var(--font-playfair)] text-base md:text-lg font-medium text-charcoal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-green transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-soft text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
