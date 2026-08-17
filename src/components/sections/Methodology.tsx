"use client";

import {
  ClipboardList,
  Utensils,
  MessageSquareHeart,
  BookOpen,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { FloatingLeaves } from "@/components/ui/LeafDecorations";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Consulta e Anamnese Aprofundada",
    description:
      "Uma conversa detalhada sobre seu histórico de saúde, hábitos alimentares, rotina, objetivos e exames. Entendo quem você é antes de prescrever qualquer orientação.",
  },
  {
    icon: Utensils,
    number: "02",
    title: "Plano Alimentar Individualizado",
    description:
      "Um plano flexível e prático, criado com base na sua rotina e preferências. Sem alimentos proibidos — com equilíbrio, sabor e ciência.",
  },
  {
    icon: MessageSquareHeart,
    number: "03",
    title: "Acompanhamento Contínuo",
    description:
      "Suporte direto por WhatsApp entre consultas, ajustes periódicos e acompanhamento próximo para que você nunca se sinta sozinho(a) nessa jornada.",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Educação Nutricional Duradoura",
    description:
      "Mais do que uma dieta: ensino você a fazer escolhas inteligentes para toda a vida. Autonomia alimentar é o verdadeiro resultado.",
  },
];

export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="py-20 md:py-28 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-green/[0.03] blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Floating leaves */}
      <FloatingLeaves />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Metodologia"
          title="Como Funciona o Atendimento"
          subtitle="Um processo cuidadoso e humanizado, pensado para gerar resultados reais e sustentáveis."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-4">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="group relative h-full p-8 rounded-2xl bg-white/70 hover:bg-white border border-transparent hover:border-green/15 hover:shadow-xl hover:shadow-green/8 transition-all duration-500">
                {/* Step number */}
                <span className="absolute top-6 right-8 font-[family-name:var(--font-playfair)] text-6xl font-bold text-green/[0.06] select-none group-hover:text-green/10 transition-colors duration-500">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green/10 text-green mb-5 group-hover:bg-green group-hover:text-white transition-all duration-300">
                    <step.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-charcoal mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-soft text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
