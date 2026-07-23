'use client';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function LogoIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-brand-navy"
      >
        {/* Outer geometric shield / diamond with subtle gold stroke */}
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="6"
          fill="#1A3A52"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        {/* Inner Catalyst Geometric Prism Lines */}
        <path
          d="M20 10 L30 20 L20 30 L10 20 Z"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 14 L26 26"
          stroke="#F7F5F0"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <path
          d="M26 14 L14 26"
          stroke="#F7F5F0"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        {/* Central Glowing Spark Node */}
        <circle cx="20" cy="20" r="3.5" fill="#D4AF37" />
        <circle cx="20" cy="20" r="1.5" fill="#1A3A52" />
      </svg>
    </div>
  );
}

export default function Logo({
  iconOnly = false,
  size = 'md',
  variant = 'dark',
}: LogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-brand-navy';

  return (
    <div className="flex items-center gap-3 select-none">
      <LogoIcon className={iconSizes[size]} />
      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={`font-serif font-bold tracking-wider ${textColor} ${textSizes[size]} leading-none`}
          >
            CATALIX
          </span>
          <span
            className={`font-sans font-semibold tracking-[0.22em] text-brand-gold uppercase mt-0.5 ${subTextSizes[size]}`}
          >
            GLOBAL
          </span>
        </div>
      )}
    </div>
  );
}
