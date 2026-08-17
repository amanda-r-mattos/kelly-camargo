"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta com a nutricionista Kelly Camargo.";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Leaf
              className="w-7 h-7 text-green transition-all duration-300 group-hover:rotate-12 group-hover:text-green-light"
              strokeWidth={1.5}
            />
            <div className="absolute inset-0 bg-green/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-semibold text-charcoal">
            Kelly Camargo
          </span>
          <span className="hidden sm:inline text-xs text-gray-soft tracking-wider uppercase ml-1">
            | Nutrição Funcional
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-light hover:text-green transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 bg-green text-white text-sm font-semibold rounded-full btn-glow hover:bg-green-dark transition-colors duration-300"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-charcoal hover:text-green transition-colors"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-0 bg-cream z-40 flex flex-col items-center justify-center gap-6"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-charcoal hover:text-green transition-colors"
              aria-label="Fechar menu"
            >
              <X size={28} />
            </button>

            {/* Decorative leaf in mobile menu */}
            <Leaf className="w-10 h-10 text-green/20 mb-2" strokeWidth={1} />

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-charcoal hover:text-green transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 px-8 py-3 bg-green text-white font-semibold rounded-full btn-glow text-lg"
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
