import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Laptop, Sun, Sparkles } from 'lucide-react';

export default function RoasteryLookbook({ onOpenBooking, onOpenLightbox }) {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);

  const spaces = [
    {
      num: '01',
      title: 'THE AMBER LIBRARY & BOARD-GAME SHELF',
      outlet: 'Vaishali Nagar Flagship',
      tag: 'Backlit Bookshelf Wall • 2700K Warm Glow',
      description:
        'Warm backlit LED illumination casts an inviting amber radiance across modular teakwood shelves. Stocked with contemporary literature, classic board games (Sequence, Catan, Chess), and take-home retail bags of specialty single-origin roasts.',
      specs: [
        'Curated 200+ book library',
        'Board games: Sequence, Catan & Scrabble',
        'Retail bags of Ratnagiri Arabica',
        'Plush velvet & teak chairs',
      ],
      image: '/assets/amber-book-wall.jpg',
      aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
      icon: BookOpen,
    },
    {
      num: '02',
      title: 'PÂTISSERIE COUNTER & WORK TABLES',
      outlet: 'Focused Productivity',
      tag: 'Fresh Daily Bakes & Solid Teak Tables',
      description:
        'Substantial solid teakwood dining and community work tables paired with ergonomic seating and accessible power sockets. The gleaming glass patisserie case showcases daily baked carrot walnut cakes, dark chocolate tarts, and flaky croissants.',
      specs: [
        'Solid teakwood work desks',
        'Daily fresh carrot walnut cakes',
        'Warm brass hanging pendant lighting',
        '180+ Mbps fiber Wi-Fi',
      ],
      image: '/assets/bakery-teak-tables.jpg',
      aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
      icon: Laptop,
    },
    {
      num: '03',
      title: 'BALCONY COLD BREW DECK',
      outlet: 'C-Scheme Terrace',
      tag: 'Open-Air Patio & Cascading Iced Coffee',
      description:
        'Breezy elevated terrace seating overlooking leafy trees and Subhash Marg. The quintessential Jaipur spot for golden hour iced lattes in vintage crystal glassware, sparkling tonics, and leisurely evening discussions.',
      specs: [
        'Open-sky tree-canopied deck',
        'Cascading iced lattes over crystal glass',
        'Pet-friendly outdoor tables',
        'Golden hour & evening breeze',
      ],
      image: '/assets/balcony-iced-latte.jpg',
      aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
      icon: Sun,
    }
  ];

  return (
    <section id="roastery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#D8CFC2]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="border-b border-[#D8CFC2] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C86D2D] font-bold block mb-1">
              LOOKBOOK INDEX • THREE DISTINCT REALMS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#17120E]">
              ARCHITECTURAL <span className="italic text-[#C86D2D]">SPACES.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#7E7065] max-w-md leading-relaxed uppercase">
            Designed with raw unbleached linen, solid teak, brass lighting, and glowing amber shelves for prolonged stays.
          </p>
        </div>

        {/* Numbered Editorial Index */}
        <div className="space-y-12">
          {spaces.map((space, idx) => (
            <div
              key={space.num}
              className="border border-[#D8CFC2] bg-white overflow-hidden transition-all duration-300 hover:border-[#17120E] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left: Large Sharp-Edged Photography with Exact Aspect Ratio & Object-Cover */}
                <div
                  className="lg:col-span-7 relative bg-[#17120E] overflow-hidden cursor-pointer h-72 sm:h-96 lg:h-[460px]"
                  onClick={() => onOpenLightbox(space.image, space.title, space.description)}
                >
                  <img
                    src={space.image}
                    alt={space.title}
                    className="editorial-img"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs font-bold px-3 py-1 bg-[#17120E] text-white">
                    INDEX {space.num}
                  </div>
                  <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#17120E] border border-white/40">
                    Expand Full Photo ↗
                  </div>
                </div>

                {/* Right: Editorial Information & Specs */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#D8CFC2] bg-white">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#D8CFC2]">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#C86D2D] font-bold">
                        {space.outlet}
                      </span>
                      <span className="font-mono text-xs text-[#7E7065]">
                        {space.num} / 03
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#17120E] leading-tight">
                      {space.title}
                    </h3>

                    <p className="font-mono text-xs text-[#C86D2D] font-medium">
                      {space.tag}
                    </p>

                    <p className="text-sm text-[#55473E] leading-relaxed">
                      {space.description}
                    </p>

                    {/* Technical Specs List */}
                    <div className="pt-3 border-t border-[#D8CFC2] space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#7E7065] block font-bold">
                        Architectural Inclusions:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#17120E] font-medium">
                        {space.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#C86D2D] shrink-0" />
                            <span className="font-mono text-[11px]">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-6 mt-6 border-t border-[#D8CFC2] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#7E7065]">
                      Available for guests today
                    </span>
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="btn-press flex items-center gap-1.5 px-4 py-2 bg-[#17120E] hover:bg-[#2B221B] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-colors cursor-pointer"
                    >
                      <span>Reserve Table</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
