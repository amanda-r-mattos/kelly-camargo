import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  delay?: number;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  delay = 0,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
      delay={delay}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-soft text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-[2px] w-16 bg-gradient-to-r from-gold to-gold-light ${
          centered ? "mx-auto" : ""
        }`}
      />
    </AnimatedSection>
  );
}
