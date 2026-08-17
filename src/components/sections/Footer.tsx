import {
  Leaf,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta com a nutricionista Kelly Camargo.";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-green-dark text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      {/* CTA Strip */}
      <div className="bg-green py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-white mb-4">
            Pronta para transformar sua saúde?
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Dê o primeiro passo para uma vida mais saudável e equilibrada.
            Agende sua consulta agora e comece sua jornada de transformação.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-green font-bold rounded-full text-base hover:bg-cream hover:text-green-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle size={22} />
            Agendar Consulta pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Leaf size={24} className="text-mint" strokeWidth={1.5} />
                <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold">
                  Kelly Camargo
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Nutricionista funcional comprometida com sua saúde integral.
                Atendimento humanizado com foco em resultados reais e
                duradouros.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/kellycamargonutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-mint mb-4">
                Navegação
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-mint mb-4">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-mint mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60">(00) 00000-0000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-mint mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60">
                    contato@kellycamargo.com.br
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-mint mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60">
                    Atendimento online e presencial
                  </span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-mint mb-4">
                Horário de Atendimento
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-mint mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-white/80 font-medium">
                      Segunda a Sexta
                    </p>
                    <p className="text-sm text-white/50">08h às 18h</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-mint mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-white/80 font-medium">Sábado</p>
                    <p className="text-sm text-white/50">08h às 12h</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-white/40">
            © {currentYear} Kelly Camargo — Nutricionista Funcional. CRN XXXXX.
            Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Desenvolvido com 🌿 por{" "}
            <span className="text-white/50">Wizz Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
