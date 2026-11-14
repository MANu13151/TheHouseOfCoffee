import React from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle, MapPin, Sparkles, BookOpen, Clock, Coffee } from 'lucide-react';
import { OUTLETS, getWhatsAppOrderUrl } from '../data/outletsData';

export default function Hero({ activeOutlet, onOutletChange, onOpenBooking, onOpenLightbox }) {
  const currentOutlet = OUTLETS[activeOutlet] || OUTLETS.vaishali;

  return (
    <section className="pt-24 pb-14 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#D8CFC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Half: Swiss Hairline Grid Header */}
        <div className="border-b border-[#D8CFC2] pb-6 mb-6">
          
          {/* Monospace Ticker */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-[#7E7065] pb-4">
            <span className="flex items-center gap-2 text-[#C86D2D] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#C86D2D] animate-pulse" />
              SPECIALTY MICRO-ROASTERY • EST. JAIPUR
            </span>
            <span className="hidden sm:inline">
              SINGLE-ORIGIN POUR-OVERS • CEREMONIAL MATCHA • BOARD GAMES • TEAKWOOD WORK TABLES
            </span>
            <span>★ 4.6+ RATED</span>
          </div>

          {/* Massive Full-Width Editorial Headline */}
          <div className="py-2">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#17120E] leading-[0.95]">
              JAIPUR’S SPECIALTY <br className="hidden sm:inline" />
              <span className="italic text-[#C86D2D]">COFFEE &amp; BOOK</span> LOUNGE.
            </h1>
          </div>

          {/* Subtitle & Curated Description */}
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4 pt-3 border-t border-[#D8CFC2]/70">
            <p className="text-sm sm:text-base text-[#55473E] max-w-2xl leading-relaxed">
              Unhurried extractions, hand-poured single origins, ceremonial Uji matcha, and a curated library wall of over 200 titles and classic board games across two Jaipur spaces.
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-[#7E7065] shrink-0">
              VAISHALI NAGAR &amp; C-SCHEME
            </span>
          </div>
        </div>

        {/* Bottom Half: Wide Cinema-Aspect-Ratio (21:9 on desktop) Split-Frame Gallery Strip */}
        <div className="w-full border border-[#D8CFC2] bg-[#17120E] overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-10 h-72 sm:h-96 md:h-[460px] divide-y md:divide-y-0 md:divide-x divide-[#D8CFC2]">
            
            {/* Left Frame (65% width): Amber Book & Board-Game Library */}
            <div
              className="md:col-span-6 lg:col-span-7 relative group cursor-pointer overflow-hidden h-64 sm:h-80 md:h-full bg-[#17120E]"
              onClick={() =>
                onOpenLightbox(
                  '/assets/amber-book-wall.jpg',
                  'The Amber Book & Board-Game Library',
                  'Floor-to-ceiling wooden bookshelves backlit with warm 2700K LED glow, stocked with books, Sequence, Catan, and retail specialty coffee bean bags.'
                )
              }
            >
              <img
                src="/assets/amber-book-wall.jpg"
                alt="The Amber Book & Board-Game Library Wall at The House of Coffee"
                className="editorial-img"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17120E]/80 via-transparent to-transparent pointer-events-none" />

              {/* In-Frame Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#F0A569] block">
                    SPACE 01 • VAISHALI NAGAR FLAGSHIP
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    The Amber Book &amp; Board-Game Library
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-white border border-white/20 shrink-0">
                  Click to Expand
                </span>
              </div>
            </div>

            {/* Right Frame (35% width): Overhead Tulip Latte Art & Iced Matcha */}
            <div
              className="md:col-span-4 lg:col-span-3 relative group cursor-pointer overflow-hidden h-64 sm:h-80 md:h-full bg-[#17120E]"
              onClick={() =>
                onOpenLightbox(
                  '/assets/latte-matcha-flatlay.jpg',
                  'Tulip Latte Art & Ceremonial Iced Matcha',
                  'Flat-lay over teakwood tables featuring house latte art, whisked Uji matcha in ribbed tumbler, and the printed botanical parchment menu.'
                )
              }
            >
              <img
                src="/assets/latte-matcha-flatlay.jpg"
                alt="House Tulip Latte Art and Ceremonial Iced Matcha with Botanical Menu"
                className="editorial-img"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17120E]/80 via-transparent to-transparent pointer-events-none" />

              {/* In-Frame Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#6E9462] block">
                    DAILY RITUAL
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    Tulip Latte &amp; Iced Matcha
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-md text-white border border-white/20 shrink-0">
                  Flat-Lay
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Live Horizontal Outlet Status Bar */}
        <div className="p-4 sm:p-5 bg-white border border-[#D8CFC2] flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Active Outlet Information */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#17120E] text-[#C86D2D] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold uppercase tracking-tight text-[#17120E]">
                  {currentOutlet.name} Outlet
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  {currentOutlet.crowdLabel}
                </span>
              </div>
              <p className="font-mono text-xs text-[#7E7065] mt-0.5">
                {currentOutlet.address}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="btn-press flex items-center gap-2 px-4 py-2.5 bg-[#F4EFE6] hover:bg-[#ECE6DB] text-[#17120E] font-mono text-xs uppercase tracking-wider font-semibold rounded-lg border border-[#D8CFC2] transition-colors"
            >
              <span>Explore Brew Menu</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#C86D2D]" />
            </a>

            <a
              href={getWhatsAppOrderUrl(activeOutlet)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex items-center gap-2 px-5 py-2.5 bg-[#17120E] hover:bg-[#2B221B] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span>Pre-Order Pickup on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
