'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
  subtitle?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  viewAllHref: string;
  viewAllLabel: string;
}

export default function NavDropdown({
  label,
  items,
  viewAllHref,
  viewAllLabel,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1.5 text-sm font-medium text-brand-text/90 hover:text-brand-navy transition-colors py-2 focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-brand-gold transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-fadeIn">
          <div className="bg-brand-navy text-white rounded-md shadow-2xl border border-brand-gold/30 p-3.5 space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group/item block p-2.5 rounded-sm hover:bg-white/10 transition-all border-l-2 border-transparent hover:border-brand-gold"
              >
                <div className="text-xs font-semibold text-white group-hover/item:text-brand-gold transition-colors">
                  {item.name}
                </div>
                {item.subtitle && (
                  <div className="text-[10px] text-slate-300 mt-0.5 line-clamp-1">
                    {item.subtitle}
                  </div>
                )}
              </Link>
            ))}

            <div className="pt-2 border-t border-white/10 mt-1">
              <Link
                href={viewAllHref}
                className="flex items-center justify-between p-2 rounded-sm text-xs font-bold text-brand-gold hover:text-white transition-colors group/link"
              >
                <span>{viewAllLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
