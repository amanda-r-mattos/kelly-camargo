"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Users, HeartPulse, Monitor, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+500",
    label: "Pacientes Atendidos",
    description: "Vidas transformadas com nutrição consciente",
  },
  {
    icon: HeartPulse,
    value: "100%",
    label: "Atendimento Personalizado",
    description: "Cada plano é único como você",
  },
  {
    icon: Award,
    value: "Integral",
    label: "Foco em Saúde Integral",
    description: "Corpo, mente e bem-estar em equilíbrio",
  },
  {
    icon: Monitor,
    value: "Online & Presencial",
    label: "Flexibilidade Total",
    description: "Atendimento que se adapta à sua rotina",
  },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="group relative text-center p-6 md:p-8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-green/8 transition-all duration-500 border border-transparent hover:border-green/15">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green/10 text-green mb-4 group-hover:bg-green group-hover:text-white transition-all duration-300">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-charcoal">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-green mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-soft mt-2 leading-relaxed hidden md:block">
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
