'use client';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-brand-navy"
      >
        {/* Outer geometric shield with gold stroke */}
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          rx="6"
          fill="#1A3A52"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
        {/* Inner Catalyst Geometric Prism Lines */}
        <path
          d="M20 9 L31 20 L20 31 L9 20 Z"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13 13 L27 27"
          stroke="#F7F5F0"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <path
          d="M27 13 L13 27"
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
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-brand-navy';

  return (
    <div className="flex items-center gap-2.5 select-none">
      <LogoIcon className={iconSizes[size]} />
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          {/* Top Word: CATALIX */}
          <span
            className={`font-serif font-bold tracking-wider ${textColor} ${textSizes[size]} leading-none`}
          >
            CATALIX
          </span>
          {/* Bottom Word: GLOBAL (Extremely tight vertical gap) */}
          <span
            className={`font-serif font-bold tracking-wider text-brand-gold ${textSizes[size]} leading-none -mt-1.5`}
          >
            GLOBAL
          </span>
        </div>
      )}
    </div>
  );
}
