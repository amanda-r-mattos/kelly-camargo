"use client";

import Image from "next/image";
import { Instagram, GraduationCap, Heart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sobre"
          title="Conheça a Kelly Camargo"
          subtitle="Uma nutricionista apaixonada por transformar vidas através da alimentação consciente e personalizada."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl shadow-olive/10">
                <Image
                  src="/kelly-hero.jpg"
                  alt="Kelly Camargo — Nutricionista"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-olive/10 -z-10" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-olive">
                <GraduationCap size={24} strokeWidth={1.5} />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Formação & Especialização
                </span>
              </div>

              <p className="text-charcoal-light text-base md:text-lg leading-relaxed">
                Sou a <strong className="text-charcoal">Kelly Camargo</strong>, nutricionista
                funcional registrada no <strong className="text-charcoal">CRN</strong>, com
                formação em Nutrição e especializações em{" "}
                <strong className="text-charcoal">Nutrição Funcional</strong>,{" "}
                <strong className="text-charcoal">Nutrição Esportiva</strong> e{" "}
                <strong className="text-charcoal">Saúde Intestinal</strong>.
              </p>

              <p className="text-charcoal-light text-base md:text-lg leading-relaxed">
                Minha abordagem é centrada no paciente: acredito que não existe fórmula
                mágica nem dieta universal. Cada pessoa tem uma história, uma rotina e
                necessidades únicas — e é isso que torna o meu trabalho tão
                gratificante.
              </p>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-olive/5 border border-olive/10">
                <Heart
                  size={20}
                  className="text-olive mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong className="text-charcoal">Minha missão</strong> é ajudar
                  você a construir uma relação saudável com a comida, sem
                  culpa e sem restrições extremas — promovendo autonomia
                  alimentar e resultados que duram para a vida toda.
                </p>
              </div>

              {/* Instagram Badge */}
              <a
                href="https://www.instagram.com/kellycamargonutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#E1306C]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Instagram size={20} />
                @kellycamargonutri
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
