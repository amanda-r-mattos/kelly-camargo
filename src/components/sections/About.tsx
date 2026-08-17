"use client";

import Image from "next/image";
import { GraduationCap, Heart } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative leaf branch - right side */}
      <svg
        className="absolute top-0 right-0 w-32 h-64 text-green/[0.04] pointer-events-none"
        viewBox="0 0 128 256"
        fill="currentColor"
      >
        <path d="M128 0V256" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M128 40C128 40 88 30 83 50C78 70 128 60 128 60Z" opacity="0.6" />
        <path d="M128 100C128 100 80 90 75 110C70 130 128 120 128 120Z" opacity="0.5" />
        <path d="M128 160C128 160 85 150 80 170C75 190 128 180 128 180Z" opacity="0.4" />
        <path d="M128 220C128 220 90 210 85 230C80 250 128 240 128 240Z" opacity="0.3" />
      </svg>

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
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl shadow-green/10">
                <Image
                  src="/placeholder.jpg"
                  alt="Kelly Camargo — Nutricionista"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-green/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-mint/20 -z-10" />

              {/* Small leaf SVG */}
              <svg
                className="absolute -bottom-6 -left-6 w-14 h-14 text-green/10 animate-sway"
                viewBox="0 0 56 56"
                fill="currentColor"
              >
                <path d="M28 4C28 4 50 16 50 32C50 43 41 52 28 54C15 52 6 43 6 32C6 16 28 4 28 4Z" />
              </svg>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-green">
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

              <div className="flex items-start gap-3 p-4 rounded-xl bg-green/5 border border-green/10">
                <Heart
                  size={20}
                  className="text-green mt-0.5 shrink-0"
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
                <InstagramIcon width={20} height={20} />
                @kellycamargonutri
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
