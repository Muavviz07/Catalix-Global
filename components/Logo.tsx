'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function LogoIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <Image
        src="/logo-catalix.png"
        alt="Catalix Global Logo Icon"
        width={56}
        height={56}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

export default function Logo({
  iconOnly = false,
  size = 'md',
  variant = 'dark',
}: LogoProps) {
  const iconSizes = {
    sm: 'w-9 h-9 md:w-10 md:h-10',
    md: 'w-11 h-11 md:w-14 md:h-14',
    lg: 'w-14 h-14 md:w-16 md:h-16',
  };

  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const globalColor = variant === 'light' ? 'text-white' : 'text-brand-navy';

  return (
    <div className="flex items-center gap-3 select-none">
      <LogoIcon className={iconSizes[size]} />
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          {/* Top Word: CATALIX (Gold) */}
          <span
            className={`font-serif font-extrabold tracking-wider text-brand-gold ${textSizes[size]} leading-none`}
          >
            CATALIX
          </span>
          {/* Bottom Word: GLOBAL (White on dark, Navy on light) */}
          <span
            className={`font-serif font-extrabold tracking-wider ${globalColor} ${textSizes[size]} leading-none -mt-1.5`}
          >
            GLOBAL
          </span>
        </div>
      )}
    </div>
  );
}
