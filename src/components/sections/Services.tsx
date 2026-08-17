"use client";

import { Check, Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os planos de atendimento.";

const plans = [
  {
    name: "Consulta Individual",
    badge: null,
    description:
      "Ideal para quem busca uma orientação pontual e personalizada para dar o primeiro passo rumo a uma alimentação mais saudável.",
    benefits: [
      "Anamnese completa e detalhada",
      "Plano alimentar individualizado",
      "Análise de exames laboratoriais",
      "Orientações de suplementação (se necessário)",
      "Receitas práticas e adaptadas",
    ],
    highlight: false,
  },
  {
    name: "Acompanhamento Trimestral",
    badge: "Mais Procurado",
    description:
      "O plano completo para quem quer resultados sólidos e duradouros com suporte contínuo e ajustes periódicos.",
    benefits: [
      "Tudo da Consulta Individual",
      "Retornos mensais de acompanhamento",
      "Suporte via WhatsApp entre consultas",
      "Ajustes no plano alimentar conforme evolução",
      "Educação nutricional progressiva",
      "Acompanhamento de metas e bioimpedância",
    ],
    highlight: true,
  },
  {
    name: "Nutrição Esportiva & Clínica",
    badge: "Especializado",
    description:
      "Para atletas, praticantes de atividade física intensa ou pacientes com condições clínicas específicas que exigem atenção especializada.",
    benefits: [
      "Periodização nutricional para treinos",
      "Estratégias para performance e recuperação",
      "Nutrição voltada para saúde intestinal",
      "Abordagem em saúde hormonal feminina/masculina",
      "Suplementação baseada em evidências",
      "Integração com equipe multidisciplinar",
    ],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Planos de Atendimento"
          subtitle="Escolha o acompanhamento ideal para os seus objetivos e momento de vida."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-4">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.12}>
              <div
                className={`relative h-full flex flex-col p-8 rounded-2xl transition-all duration-500 ${
                  plan.highlight
                    ? "bg-olive-dark text-white shadow-2xl shadow-olive/20 scale-[1.02] border-2 border-olive"
                    : "bg-white/70 border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-xl hover:shadow-olive/5"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-8 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                      plan.highlight
                        ? "bg-gold text-charcoal"
                        : "bg-olive/10 text-olive"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div className="flex-1">
                  <h3
                    className={`font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-3 ${
                      plan.highlight ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      plan.highlight ? "text-white/80" : "text-gray-soft"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div
                          className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.highlight
                              ? "bg-gold/20 text-gold"
                              : "bg-olive/10 text-olive"
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span
                          className={`text-sm leading-relaxed ${
                            plan.highlight ? "text-white/90" : "text-charcoal-light"
                          }`}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 group ${
                    plan.highlight
                      ? "bg-white text-olive hover:bg-cream hover:shadow-lg"
                      : "bg-olive text-white hover:bg-olive-dark btn-glow"
                  }`}
                >
                  Quero este plano
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
