import React, { useState, useEffect } from 'react';
import { Coffee, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { OUTLETS } from '../data/outletsData';

export default function Navbar({ activeOutlet, onOutletChange, onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Roastery', href: '#roastery' },
    { label: 'Brew Menu', href: '#menu' },
    { label: 'Outlets', href: '#outlets' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-[#F4EFE6]/95 backdrop-blur-md border-[#D8CFC2]'
            : 'bg-[#F4EFE6] border-[#D8CFC2]'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Minimalist Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus:outline-none group shrink-0"
          >
            <span className="w-2.5 h-2.5 bg-[#C86D2D] rounded-full shrink-0" />
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-bold tracking-tight text-[#17120E] uppercase">
                THE HOUSE OF COFFEE
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#7E7065] uppercase -mt-0.5">
                Specialty Roastery • Jaipur
              </span>
            </div>
          </a>

          {/* Center: 3 Clean Links (Strictly Single Row) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-[#17120E]/80 hover:text-[#C86D2D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Compact Segmented Outlet Pill + Single Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Segmented Outlet Pill */}
            <div className="inline-flex p-1 bg-white border border-[#D8CFC2] rounded-lg">
              <button
                type="button"
                onClick={() => onOutletChange('vaishali')}
                className={`btn-press px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeOutlet === 'vaishali'
                    ? 'bg-[#17120E] text-white font-semibold'
                    : 'text-[#7E7065] hover:text-[#17120E]'
                }`}
              >
                Vaishali Nagar
              </button>
              <button
                type="button"
                onClick={() => onOutletChange('cscheme')}
                className={`btn-press px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  activeOutlet === 'cscheme'
                    ? 'bg-[#17120E] text-white font-semibold'
                    : 'text-[#7E7065] hover:text-[#17120E]'
                }`}
              >
                C-Scheme
              </button>
            </div>

            {/* Single "Book / Pre-Order" Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn-press flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-[#17120E] hover:bg-[#2B221B] rounded-lg border border-[#17120E] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C86D2D]" />
              <span>Book / Pre-Order</span>
            </button>
          </div>

          {/* Mobile Actions: Compact Outlet Switcher + Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => onOutletChange(activeOutlet === 'vaishali' ? 'cscheme' : 'vaishali')}
              className="btn-press px-2 py-1 bg-white border border-[#D8CFC2] rounded-md font-mono text-[10px] uppercase font-semibold text-[#17120E]"
            >
              {activeOutlet === 'vaishali' ? 'Vaishali' : 'C-Scheme'} ⇄
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#17120E] hover:text-[#C86D2D] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden bg-[#F4EFE6] pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#D8CFC2] pb-4">
              <span className="font-display text-sm font-bold uppercase tracking-tight text-[#17120E]">
                THE HOUSE OF COFFEE
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#17120E]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Segmented Switcher */}
            <div className="space-y-2 p-3 bg-white border border-[#D8CFC2] rounded-xl">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#7E7065] block font-bold">
                Select Active Outlet:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onOutletChange('vaishali')}
                  className={`btn-press py-2 px-3 text-xs font-mono uppercase font-bold rounded-lg border ${
                    activeOutlet === 'vaishali'
                      ? 'bg-[#17120E] text-white border-[#17120E]'
                      : 'bg-[#F4EFE6] text-[#17120E] border-[#D8CFC2]'
                  }`}
                >
                  Vaishali Nagar
                </button>
                <button
                  type="button"
                  onClick={() => onOutletChange('cscheme')}
                  className={`btn-press py-2 px-3 text-xs font-mono uppercase font-bold rounded-lg border ${
                    activeOutlet === 'cscheme'
                      ? 'bg-[#17120E] text-white border-[#17120E]'
                      : 'bg-[#F4EFE6] text-[#17120E] border-[#D8CFC2]'
                  }`}
                >
                  C-Scheme
                </button>
              </div>
            </div>

            {/* Links */}
            <nav className="flex flex-col space-y-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-[#17120E] hover:text-[#C86D2D] transition-colors flex items-center justify-between py-1"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#7E7065]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#D8CFC2]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-press w-full py-3.5 text-xs font-mono uppercase tracking-wider font-bold text-white bg-[#17120E] rounded-xl"
            >
              Book Table / Pre-Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}
