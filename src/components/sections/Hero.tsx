"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta com a nutricionista Kelly Camargo.";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 md:pt-0 md:pb-0"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-olive/[0.03] blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.06] blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive/10 text-olive text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              Nutricionista Funcional — CRN
            </motion.span>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold text-charcoal leading-[1.15] tracking-tight">
              Nutrição sem radicalismo:{" "}
              <span className="gradient-text">
                conquiste sua melhor versão
              </span>{" "}
              com equilíbrio, ciência e autonomia alimentar.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-gray-soft text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Emagrecimento saudável, saúde intestinal e hormonal, performance e
              qualidade de vida — um atendimento personalizado focado em
              resultados reais e duradouros.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-olive text-white font-semibold rounded-full btn-glow hover:bg-olive-dark transition-all duration-300 text-base"
              >
                <MessageCircle size={20} />
                Agendar Consulta
              </a>
              <a
                href="#metodologia"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-charcoal/15 text-charcoal font-semibold rounded-full hover:border-olive hover:text-olive transition-all duration-300 text-base group"
              >
                Conhecer Metodologia
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[500px] lg:w-[440px] lg:h-[580px]">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] border-2 border-gold/20 rotate-3" />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-olive/10 -rotate-2" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-olive/15">
                <Image
                  src="/kelly-hero.jpg"
                  alt="Kelly Camargo — Nutricionista Funcional"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 440px"
                />

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 bottom-16 glass rounded-2xl px-5 py-3 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center">
                    <span className="text-olive text-lg">🌿</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">+500 Pacientes</p>
                    <p className="text-xs text-gray-soft">Transformações reais</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
