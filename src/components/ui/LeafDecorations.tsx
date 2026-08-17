"use client";

export function FloatingLeaves({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Leaf 1 - top right */}
      <svg
        className="absolute top-[10%] right-[8%] w-16 h-16 text-green/15 animate-float-leaf-1"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M32 4C32 4 56 16 56 36C56 49 45 58 32 60C19 58 8 49 8 36C8 16 32 4 32 4ZM32 12C28 20 16 28 16 36C16 44 23 52 32 54C41 52 48 44 48 36C48 28 36 20 32 12Z" opacity="0.6" />
        <path d="M31 14V56M31 14C27 22 18 30 18 38" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>

      {/* Leaf 2 - bottom left */}
      <svg
        className="absolute bottom-[15%] left-[5%] w-20 h-20 text-green/10 animate-float-leaf-2"
        viewBox="0 0 80 80"
        fill="currentColor"
      >
        <path d="M40 8C40 8 68 22 68 44C68 58 55 70 40 72C25 70 12 58 12 44C12 22 40 8 40 8Z" />
        <path d="M40 16V68M40 16C34 28 20 36 20 46" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Leaf 3 - mid right */}
      <svg
        className="absolute top-[45%] right-[3%] w-12 h-12 text-sage/20 animate-float-leaf-3"
        viewBox="0 0 48 48"
        fill="currentColor"
      >
        <path d="M24 2C24 2 44 14 44 30C44 40 35 46 24 48C13 46 4 40 4 30C4 14 24 2 24 2Z" />
        <path d="M24 8V44" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      </svg>

      {/* Leaf 4 - top left small */}
      <svg
        className="absolute top-[25%] left-[12%] w-10 h-10 text-mint/25 animate-float-leaf-1"
        style={{ animationDelay: "3s" }}
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <path d="M20 2C20 2 36 10 36 22C36 30 29 36 20 38C11 36 4 30 4 22C4 10 20 2 20 2Z" />
      </svg>

      {/* Leaf 5 - bottom right */}
      <svg
        className="absolute bottom-[25%] right-[15%] w-14 h-14 text-green-light/12 animate-float-leaf-2"
        style={{ animationDelay: "5s" }}
        viewBox="0 0 56 56"
        fill="currentColor"
      >
        <path d="M28 4C28 4 50 16 50 32C50 43 41 52 28 54C15 52 6 43 6 32C6 16 28 4 28 4Z" />
        <path d="M28 10V50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-2 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-green/20" />
      <svg className="w-6 h-6 text-green/30 animate-sway" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 20 8 20 14C20 18 16 22 12 22C8 22 4 18 4 14C4 8 12 2 12 2Z" />
        <path d="M12 6V20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-green/20" />
    </div>
  );
}

export function LeafBranch({ className = "", side = "right" }: { className?: string; side?: "left" | "right" }) {
  const flip = side === "left" ? "scale-x-[-1]" : "";
  return (
    <svg
      className={`text-green/[0.07] ${flip} ${className}`}
      viewBox="0 0 200 300"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Main stem */}
      <path d="M100 0V300" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Leaves along the stem */}
      <path d="M100 40C100 40 140 30 145 50C150 70 100 60 100 60Z" opacity="0.8" />
      <path d="M100 80C100 80 60 70 55 90C50 110 100 100 100 100Z" opacity="0.6" />
      <path d="M100 120C100 120 150 110 155 130C160 150 100 140 100 140Z" opacity="0.7" />
      <path d="M100 160C100 160 55 150 50 170C45 190 100 180 100 180Z" opacity="0.5" />
      <path d="M100 200C100 200 145 190 150 210C155 230 100 220 100 220Z" opacity="0.6" />
      <path d="M100 240C100 240 60 230 55 250C50 270 100 260 100 260Z" opacity="0.4" />
    </svg>
  );
}
